import { useRouter } from "next/navigation";
import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { AuthService } from "@/services/auth.service";
import { User } from "@/types/api";
import { getToken, clearTokens } from "@/lib/api";
import { mapBackendRoleToFrontend } from "@/lib/utils";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: { username: string; password: string }) => Promise<any>;
  register: (userData: { username: string; password: string; role: string }) => Promise<any>;
  signOut: () => Promise<void>;
  getCurrentUser: () => Promise<User | null>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated on mount
    const initAuth = async () => {
      const token = getToken();
      console.log('🔐 initAuth - Token exists:', !!token);
      
      if (token) {
        try {
          console.log('🔐 initAuth - Attempting to get current user...');
          const currentUser = await AuthService.getCurrentUser();
          console.log('🔐 initAuth - Current user retrieved successfully:', currentUser);
          setUser(currentUser.user);
        } catch (error) {
          console.error('🔐 initAuth - Failed to get current user:', error);
          
          // Check if it's a 401 error (unauthorized)
          if (error instanceof Error && error.message.includes('401')) {
            console.log('🔐 Token expired or invalid, clearing tokens and redirecting to login');
            clearTokens();
            setUser(null);
            // Redirect to login page
            router.push('/login');
          } else {
            // For other errors (network, server down, etc.), just clear tokens
            console.log('🔐 Other error, clearing tokens');
            clearTokens();
            setUser(null);
          }
        }
      } else {
        console.log('🔐 initAuth - No token found, user not authenticated');
      }
      setLoading(false);
    };

    initAuth();
  }, [router]);

  /**
   * Login with backend authentication
   */
  const login = async (credentials: { username: string; password: string }) => {
    try {
      console.log('🔐 useAuth.login - Starting backend login...');
      const response = await AuthService.login(credentials);
      console.log('🔐 useAuth.login - Login successful:', response);
      
      // Store the user information from the backend response
      if (response.user) {
        // Handle regular users (including youth)
        const userData = response.user;
        console.log('🔐 User data from response:', userData);
        
        // Ensure the user object has the correct structure
        const normalizedUser = {
          id: userData.id,
          username: userData.username,
          role: mapBackendRoleToFrontend(userData.role || response.role), // Map backend role to frontend role
          firstName: userData.firstName || userData.first_name || '',
          lastName: userData.lastName || userData.last_name || '',
          email: userData.email,
          phone: userData.phone,
          profilePicture: userData.profilePicture || userData.profile_picture || null,
          isActive: userData.isActive !== undefined ? userData.isActive : true,
          createdAt: userData.createdAt || userData.created_at,
          updatedAt: userData.updatedAt || userData.updated_at
        };
        
        setUser(normalizedUser);
        console.log('🔐 User set from login response (user):', normalizedUser);
        console.log('🔐 User role:', normalizedUser.role);
      } else if (response.municipality) {
        // Convert municipality to user format
        const municipalityUser = {
          id: response.municipality.id,
          username: response.municipality.username,
          role: 'GOBIERNOS_MUNICIPALES',
          firstName: response.municipality.name,
          lastName: '',
          email: response.municipality.email,
          phone: response.municipality.phone,
          profilePicture: null,
          isActive: response.municipality.isActive,
          createdAt: response.municipality.createdAt,
          updatedAt: response.municipality.updatedAt,
          primaryColor: response.municipality.primaryColor,
          secondaryColor: response.municipality.secondaryColor
        };
        
        console.log('🔐 Municipality login - Colors from response:', {
          primaryColor: response.municipality.primaryColor,
          secondaryColor: response.municipality.secondaryColor
        });
        
        console.log('🔐 Municipality login - User object with colors:', municipalityUser);
        
        setUser(municipalityUser);
      } else if (response.company) {
        // Convert company to user format
        const companyUser = {
          id: response.company.id,
          username: response.company.username || response.company.name,
          role: 'EMPRESAS',
          firstName: response.company.name,
          lastName: '',
          email: response.company.email,
          phone: response.company.phone,
          profilePicture: null,
          isActive: response.company.isActive,
          createdAt: response.company.createdAt,
          updatedAt: response.company.updatedAt,
          companyId: response.company.id
        };
        setUser(companyUser);
      }
      
      console.log('🔐 useAuth.login - User set successfully');
      return response;
    } catch (error) {
      console.error('🔐 useAuth.login - Login failed:', error);
      throw error;
    }
  };

  /**
   * Register new user
   */
  const register = async (userData: { username: string; password: string; role: string }) => {
    try {
      const response = await AuthService.register(userData);
      return response;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await AuthService.logout();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setUser(null);
      router.push("/");
    }
  };



  /**
   * Get current user from backend (for API calls)
   */
  const getCurrentUser = async () => {
    try {
      const result = await AuthService.getCurrentUser();
      return result.user;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  };

  return {
    user,
    loading,
    login,
    register,
    signOut,
    getCurrentUser,
    isAuthenticated: !!user,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const authValue = useAuth();
  
  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
