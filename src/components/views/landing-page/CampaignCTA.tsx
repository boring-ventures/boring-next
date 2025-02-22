import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CampaignCTA() {
  return (
    <section className="relative bg-gradient-to-b from-[#f4f7f1] to-[#2F855A] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h3 className="text-green-700 font-medium mb-4">
            ¿Tienes una causa que necesita apoyo?
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¡Inicia tu campaña!
          </h2>
          <p className="text-gray-600 mb-8">
            Sigue estos sencillos pasos y empieza a recibir la ayuda que tu proyecto merece.
          </p>
          <Button className="bg-[#2F855A] hover:bg-[#276749]">
            Crear campaña →
          </Button>
        </div>

        <div className="absolute bottom-0 right-0 w-64 md:w-96">
          <Image
            src="/images/hero.png"
            alt="Friendly llama illustration"
            width={400}
            height={400}
            className="w-full"
          />
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <title>Scroll down</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
} 