import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Causes() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Causas que inspiran</h2>
        <p className="text-gray-600 text-lg">
          Conoce las causas o campañas que están activas transformando vidas
          <br />
          ¡Y haz la diferencia con tu aporte!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/images/hero.png"
              alt="Campaign image"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                  Medio ambiente
                </span>
              </div>
              <h3 className="font-semibold mb-2">
                Protejamos juntos el Parque Nacional Amboró
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <span>Bolivia, Santa Cruz</span>
              </div>
              <div className="mb-4">
                <div className="h-2 bg-gray-100 rounded">
                  <div className="h-full w-4/5 bg-green-600 rounded" />
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">80%</div>
              </div>
              <Button className="w-full bg-[#2F855A] hover:bg-[#276749]">
                Donar ahora →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 