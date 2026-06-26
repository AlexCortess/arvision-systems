import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="AR Visión Systems"
            className="h-14 w-auto"
          />

          <div>
            <h1 className="text-white font-bold text-xl">
              AR Visión Systems
            </h1>

            <p className="text-cyan-400 text-xs">
              Tecnología e Innovación
            </p>
          </div>

        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="hidden md:flex gap-8 text-white">

          <li>
            <Link
              to="inicio"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link
              to="servicios"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Servicios
            </Link>
          </li>

          <li>
            <Link
              to="nosotros"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Nosotros
            </Link>
          </li>

          <li>
            <Link
              to="portafolio"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Portafolio
            </Link>
          </li>

          <li>
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Contacto
            </Link>
          </li>

        </ul>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-cyan-500/20">

          <ul className="flex flex-col text-center text-white py-6 gap-6">

            <li>
              <a href="#inicio">Inicio</a>
            </li>

            <li>
              <a href="#servicios">Servicios</a>
            </li>

            <li>
              <a href="#nosotros">Nosotros</a>
            </li>

            <li>
              <a href="#portafolio">Portafolio</a>
            </li>

            <li>
              <a href="#contacto">Contacto</a>
            </li>

          </ul>

        </div>
      )}
    </nav>
  );
}

export default Navbar;