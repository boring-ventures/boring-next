"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/providers/auth-provider";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const handleDashboardClick = () => {
    router.push('/dashboard');
  };

  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Minka Logo"
          width={100}
          height={40}
          className="h-10 w-auto"
        />
      </Link>

      <nav className="hidden md:flex items-center gap-6">
        <Link href="/donar" className="text-gray-600 hover:text-gray-900">
          Donar
        </Link>
        <Link href="/crear-campana" className="text-gray-600 hover:text-gray-900">
          Crear campaña
        </Link>
        <Link href="/nosotros" className="text-gray-600 hover:text-gray-900">
          Nosotros
        </Link>
        <Link href="/ayuda" className="text-gray-600 hover:text-gray-900">
          Ayuda
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        {isLoading ? (
          <div className="h-9 w-[100px] animate-pulse rounded-md bg-muted" />
        ) : user ? (
          <Button 
            variant="outline" 
            className="bg-white"
            onClick={handleDashboardClick}
          >
            Dashboard
          </Button>
        ) : (
          <>
            <Link href="/sign-in">
              <Button variant="outline" className="bg-white">
                Ingresar
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-[#2F855A] hover:bg-[#276749] text-white">
                Registrarse
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
