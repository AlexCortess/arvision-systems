import { FaBullseye, FaEye, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section
      id="nosotros"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto"
           data-aos="fade-right" 
      >

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white mb-4">
            Sobre Nosotros
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            En AR Visión Systems combinamos tecnología,
            innovación y seguridad para ofrecer soluciones
            digitales que ayudan a empresas y personas a
            crecer y proteger lo que más importa.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">

            <FaBullseye className="text-cyan-400 text-5xl mb-5" />

            <h3 className="text-white text-2xl font-bold mb-4">
              Misión
            </h3>

            <p className="text-gray-300">
              Brindar soluciones tecnológicas innovadoras
              en seguridad electrónica, desarrollo web y
              aplicaciones móviles que impulsen el crecimiento
              de nuestros clientes.
            </p>

          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">

            <FaEye className="text-cyan-400 text-5xl mb-5" />

            <h3 className="text-white text-2xl font-bold mb-4">
              Visión
            </h3>

            <p className="text-gray-300">
              Convertirnos en una empresa referente en
              soluciones tecnológicas y seguridad digital
              a nivel regional y nacional.
            </p>

          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">

            <FaLightbulb className="text-cyan-400 text-5xl mb-5" />

            <h3 className="text-white text-2xl font-bold mb-4">
              Valores
            </h3>

            <p className="text-gray-300">
              Innovación, compromiso, transparencia,
              responsabilidad y orientación total al cliente.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;