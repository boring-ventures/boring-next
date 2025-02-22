"use client"

import Image from "next/image"
import { useAuth } from "@/providers/auth-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const { user } = useAuth()

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Impulsa sueños, transforma vidas
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Conectamos a quienes anhelan recibir ayuda, con aquellos que quieren hacer sueños realidad, 
          a través de una plataforma segura que facilita las donaciones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {user ? (
            <Link href="/dashboard">
              <Button className="bg-[#2F855A] hover:bg-[#276749]">
                Ir al Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/sign-up">
                <Button className="bg-[#2F855A] hover:bg-[#276749]">
                  Crear una campaña
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="outline" className="bg-white">
                  Donar →
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src="/images/hero.png"
          alt="Diverse group of people illustration"
          width={600}
          height={400}
          className="w-full max-w-2xl"
        />
      </div>
    </section>
  )
}

