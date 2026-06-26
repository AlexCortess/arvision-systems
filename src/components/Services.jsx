import { FaCamera, FaGlobe, FaMobileAlt } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCamera size={50} />,
      title: "Seguridad Electrónica",
      description:
        "Instalación de cámaras de seguridad, videovigilancia IP, monitoreo remoto y soluciones de protección para hogares y negocios.",
    },
    {
      icon: <FaGlobe size={50} />,
      title: "Desarrollo Web",
      description:
        "Diseño y desarrollo de sitios web modernos, tiendas en línea, sistemas empresariales y plataformas digitales.",
    },
    {
      icon: <FaMobileAlt size={50} />,
      title: "Aplicaciones Móviles",
      description:
        "Desarrollo de aplicaciones Android e iOS personalizadas para automatizar procesos y mejorar la experiencia de tus clientes.",
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Nuestros Servicios
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Soluciones tecnológicas diseñadas para impulsar,
          proteger y modernizar tu negocio.
        </p>

           <div
            className="grid md:grid-cols-3 gap-8"
                data-aos="fade-up"
            >

          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-cyan-500/20
                rounded-3xl
                p-8
                backdrop-blur-md
                hover:scale-105
                hover:border-cyan-400
                transition-all
                duration-300
              "
            >
              <div className="text-cyan-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;