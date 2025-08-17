import { useState } from "react";
import { Mail, X } from "lucide-react";
import img from "../assets/img.jpg";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
      {/* Texte */}
      <div className="flex flex-col ">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour , <br />
          je suis <span className="text-accent">HSMDEV</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          Je suis un développeur full stack <br />
          avec 3 ans d'expérience en React <br /> et Node.js. Contactez-moi si
          vous avez besoin de mes services.
        </p>
        <button
          onClick={() => setOpenModal(true)}
          className="btn btn-accent md:w-fit flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          Contactez-moi
        </button>
      </div>

      {/* Image */}
      <div className="md:ml-60">
        <img
          src={img}
          alt="img"
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
          style={{
            borderRadius: "68% 32% 34% 66% / 45% 54% 46% 55%",
          }}
        />
      </div>

      {/* Modal Form */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative">
            {/* Bouton X */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Formulaire de contact
            </h2>

           <form
  action="https://your-sendinblue-url.com" // 👉 Remplace par l’URL fournie par Sendinblue
  method="POST"
  className="flex flex-col gap-4"
>
  <input
    type="text"
    name="FIRSTNAME"
    placeholder="Nom & Prénom"
    className="p-2 border rounded-lg"
    required
  />
  <input
    type="email"
    name="EMAIL"
    placeholder="Email"
    className="p-2 border rounded-lg"
    required
  />
  <select
    name="SERVICE"
    className="p-2 border rounded-lg"
    required
  >
    <option value="">-- Choisissez un service --</option>
    <option value="travail">Demande de travail</option>
    <option value="developpement">Développement web</option>
    <option value="maintenance">Maintenance & support</option>
  </select>

  <button
    type="submit"
    className="btn btn-accent w-full mt-2"
  >
    Envoyer
  </button>
</form>

          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
