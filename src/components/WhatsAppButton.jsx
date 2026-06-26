import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5215616729421?text=Hola,%20me%20interesa%20una%20cotización%20de%20los%20servicios%20de%20AR%20Visión%20Systems."
      target="_blank"
      rel="noreferrer"
      className="
        fixed
        bottom-6
        right-6
        bg-green-500
        hover:bg-green-600
        text-white
        p-5
        rounded-full
        shadow-lg
        z-50
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default WhatsAppButton;