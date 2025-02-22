import Image from "next/image";
import Link from "next/link";

interface Props {
    children: React.ReactNode
  }
  
  export default function AuthLayout({ children }: Props) {
    return (
      <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
          <div className='mb-4 flex items-center justify-center'>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Minka Logo"
                width={100}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          {children}
        </div>
      </div>
    )
  }
  