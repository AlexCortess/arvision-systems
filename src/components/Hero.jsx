function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 flex items-center justify-center text-center overflow-hidden"
    >
      {/* Brillo decorativo */}
      <div className="absolute w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6">
          AR
          <span className="text-cyan-400">
            Visión
          </span>
          Systems
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Seguridad Inteligente.
          <br />
          Soluciones Ilimitadas.
        </h2>

        <div className="flex justify-center gap-4 flex-wrap mb-10">

          <span className="bg-cyan-500/20 border border-cyan-500 px-4 py-2 rounded-full text-cyan-300">
            📹 Cámaras de Seguridad
          </span>

          <span className="bg-cyan-500/20 border border-cyan-500 px-4 py-2 rounded-full text-cyan-300">
            🌐 Desarrollo Web
          </span>

          <span className="bg-cyan-500/20 border border-cyan-500 px-4 py-2 rounded-full text-cyan-300">
            📱 Aplicaciones Móviles
          </span>

        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center">

          <a
            href="https://wa.me/5215616729421?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización."
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-4 rounded-xl transition"
          >
            Solicitar Cotización
          </a>

          <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-8 py-4 rounded-xl transition">
            Ver Servicios
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;