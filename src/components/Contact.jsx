import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_98m06hn",
        "template_f076zxm",
        form.current,
        "gvrVMWTOaZB945jjo"
      )
      .then(
        () => {
          alert("✅ Mensaje enviado correctamente");
          form.current.reset();
        },
        (error) => {
          alert("❌ Error al enviar el mensaje");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contacto"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Contáctanos
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Estamos listos para ayudarte con tu próximo proyecto.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          <div>

            <div className="flex items-center gap-4 mb-8">
              <FaWhatsapp className="text-green-500 text-3xl" />

              <div>
                <h3 className="text-white font-bold">
                  WhatsApp
                </h3>

                <p className="text-gray-300">
                  5616729421
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 mb-8">

              <FaEnvelope className="text-cyan-400 text-3xl" />

              <div>

                <h3 className="text-white font-bold">
                  Correo
                </h3>

                <p className="text-gray-300">
                  arvisionsystem@hotmail.com
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <FaMapMarkerAlt className="text-red-500 text-3xl" />

              <div>

                <h3 className="text-white font-bold">
                  Ubicación
                </h3>

                <p className="text-gray-300">
                  Av. José Ramón Albarrán Pliego 4, Santa María de Guadalupe, 55620 Mexico, Méx.
                </p>

              </div>

            </div>

          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Nombre"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-cyan-500/20 text-white"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Correo Electrónico"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-cyan-500/20 text-white"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Mensaje"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-cyan-500/20 text-white"
            />

            <button
              type="submit"
              className="
                bg-cyan-500
                hover:bg-cyan-600
                text-black
                font-bold
                px-8
                py-4
                rounded-xl
                transition
              "
            >
              Enviar Mensaje
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;