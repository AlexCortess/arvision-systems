function Portfolio() {
const projects = [
  {
    title: "Videovigilancia Inteligente",
    description:
      "Instalación de cámaras IP, monitoreo remoto desde celular y almacenamiento seguro en la nube.",
    icon: "📹",
  },
  {
    title: "Desarrollo Web Profesional",
    description:
      "Sitios web corporativos, landing pages, sistemas administrativos y tiendas en línea.",
    icon: "🌐",
  },
  {
    title: "Aplicaciones Móviles",
    description:
      "Aplicaciones Android e iOS para automatizar procesos y mejorar la experiencia de tus clientes.",
    icon: "📱",
  },
];

  return (
    <section
      id="portafolio"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-4">
          Portafolio
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
        Soluciones tecnológicas diseñadas para empresas, negocios y emprendedores
        que buscan seguridad, presencia digital e innovación.
        </p>

        <div className="grid md:grid-cols-3 gap-8"
             data-aos="fade-up"           
        >

          {projects.map((project, index) => (
            <div
            key={index}
            className="
                bg-white/5
                backdrop-blur-lg
                border border-cyan-500/20
                rounded-3xl
                p-8
                hover:-translate-y-3
                hover:border-cyan-400
                transition-all
                duration-300
                shadow-lg
            "
            >

            <div className="text-6xl mb-6">
                {project.icon}
            </div>

            <h3 className="text-white text-2xl font-bold mb-4">
                {project.title}
            </h3>

            <p className="text-gray-300 leading-relaxed">
                {project.description}
            </p>

            <div className="mt-6">
                <button
                className="
                    border border-cyan-400
                    text-cyan-400
                    px-5 py-2
                    rounded-xl
                    hover:bg-cyan-400
                    hover:text-black
                    transition
                "
                >
                Ver Más
                </button>
            </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Portfolio;