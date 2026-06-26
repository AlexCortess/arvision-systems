import CountUp from "react-countup";

function Stats() {
  const stats = [
    {
      number: "+50",
      text: "Proyectos Desarrollados",
    },
    {
      number: "+100",
      text: "Equipos Instalados",
    },
    {
      number: "100%",
      text: "Compromiso",
    },
    {
      number: "24/7",
      text: "Soporte Técnico",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          {stats.map((stat, index) => (
            <div key={index}>

            <h2 className="text-5xl font-bold text-white mb-3">
            {stat.number}
            </h2>

              <p className="text-white">
                {stat.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;