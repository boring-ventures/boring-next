import Link from "next/link";
import { Card } from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn() {
  return (
    <AuthLayout>
      <Card className='p-6'>
        <div className='flex flex-col space-y-2 text-left'>
          <h1 className='text-2xl font-semibold tracking-tight'>Ingresar</h1>
          <p className='text-sm text-muted-foreground'>
            Ingresa tu correo y contraseña para acceder a tu cuenta. <br />
            ¿No tienes una cuenta?{" "}
            <Link
              href="/sign-up"
              className="underline underline-offset-4 hover:text-primary"
            >
              Regístrate
            </Link>
          </p>
        </div>
        <UserAuthForm />
        <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
          Al hacer clic en ingresar, aceptas nuestros{' '}
          <Link
            href='/terms'
            className='underline underline-offset-4 hover:text-primary'
          >
            Términos de Servicio
          </Link>{' '}
          y{' '}
          <Link
            href='/privacy'
            className='underline underline-offset-4 hover:text-primary'
          >
            Política de Privacidad
          </Link>
          .
        </p>
      </Card>
    </AuthLayout>
  )
}
