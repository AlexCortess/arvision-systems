import {
FaFacebook,
FaInstagram,
FaWhatsapp,
} from "react-icons/fa";

import logo from "../assets/logo.png";

function Footer() {
return ( <footer className="bg-black py-12">

```
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex justify-center mb-8">

      <img
        src={logo}
        alt="AR Visión Systems"
        className="h-32"
      />

    </div>

    <div className="grid md:grid-cols-3 gap-10">

      <div>

        <h2 className="text-cyan-400 text-2xl font-bold mb-4">
          AR Visión Systems
        </h2>

        <p className="text-gray-400">
          Seguridad electrónica,
          desarrollo web y aplicaciones móviles.
        </p>

      </div>

      <div>

        <h3 className="text-white font-bold mb-4">
          Servicios
        </h3>

        <ul className="text-gray-400 space-y-2">

          <li>Cámaras de Seguridad</li>
          <li>Desarrollo Web</li>
          <li>Aplicaciones Móviles</li>

        </ul>

      </div>

      <div>

        <h3 className="text-white font-bold mb-4">
          Redes Sociales
        </h3>

        <div className="flex gap-6 text-3xl">

          <a
            href="https://www.facebook.com/profile.php?id=61590829326534"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="text-white hover:text-cyan-400 transition duration-300 cursor-pointer" />
          </a>

          <a
            href="https://www.instagram.com/arvisionsystems/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-white hover:text-cyan-400 transition duration-300 cursor-pointer" />
          </a>

          <a
            href="https://wa.me/5215616729421"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-white hover:text-cyan-400 transition duration-300 cursor-pointer" />
          </a>

        </div>

      </div>

    </div>

    <hr className="border-gray-800 my-8" />

    <p className="text-center text-gray-500">
      © 2026 AR Visión Systems. Todos los derechos reservados.
    </p>

  </div>

</footer>
);
}

export default Footer;
