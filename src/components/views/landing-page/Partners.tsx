import Image from "next/image"

const partners = [
  {
    id: "forbes",
    name: "Forbes",
    logo: "/images/partners/forbes.png",
  },
  {
    id: "globalgiving",
    name: "GlobalGiving",
    logo: "/images/partners/globalgiving.png",
  },
  {
    id: "unil",
    name: "UNIL",
    logo: "/images/partners/unil.png",
  },
  {
    id: "paypal",
    name: "PayPal",
    logo: "/images/partners/paypal.png",
  },
]

export default function Partners() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Nuestros aliados
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
        {partners.map((partner) => (
          <Image
            key={partner.id}
            src={partner.logo}
            alt={partner.name}
            width={150}
            height={50}
            className="w-full max-w-[150px] mx-auto filter grayscale hover:grayscale-0 transition-all"
          />
        ))}
      </div>
    </section>
  )
} 