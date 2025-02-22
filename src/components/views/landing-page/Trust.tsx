import Image from "next/image"

const trustFeatures = [
  {
    id: "verified",
    title: "Campañas verificadas",
    description:
      "Procuramos que la mayoría de las campañas estén verificadas para asegurar su autenticidad.",
    icon: "M5 13l4 4L19 7",
  },
  {
    id: "secure",
    title: "Transacción segura",
    description:
      "Trabajamos con plataformas de pago seguras para garantizar la protección de tus donaciones.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    id: "impact",
    title: "Impacto social",
    description:
      "Tus aportes contribuyen a generar un impacto positivo en comunidades y proyectos.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
]

export default function Trust() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            ¿Por qué confiar en Minka?
          </h2>
          <p className="text-gray-600">
            Transparencia y seguridad para donar y transformar vidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {trustFeatures.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                    role="img"
                  >
                    <title>{item.title}</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-green-700 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MdqLLBDXkOOW3yb2aBeoxFolvvxVN3.png"
              alt="People collaborating illustration"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 