import { FaShieldAlt, FaLaptopCode, FaHeadset, FaRocket } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt size={40} />,
      title: "Seguridad Garantizada",
      description:
        "Implementamos soluciones confiables para proteger hogares y negocios.",
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "Desarrollo Profesional",
      description:
        "Creamos sitios web y aplicaciones modernas adaptadas a tus necesidades.",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "Soporte Técnico",
      description:
        "Acompañamiento y atención personalizada antes y después del servicio.",
    },
    {
      icon: <FaRocket size={40} />,
      title: "Innovación Constante",
      description:
        "Utilizamos tecnologías actuales para ofrecer soluciones de alto nivel.",
    },
  ];

  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          ¿Por Qué Elegirnos?
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Combinamos experiencia, innovación y compromiso para brindar
          soluciones tecnológicas que realmente generan resultados.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
             data-aos="zoom-in"
        >

          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-cyan-500/20
                rounded-3xl
                p-8
                text-center
                hover:scale-105
                hover:border-cyan-400
                transition-all
                duration-300
              "
            >
              <div className="text-cyan-400 mb-5 flex justify-center">
                {feature.icon}
              </div>

              <h3 className="text-white text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;