import { useState } from "react";
import { Mail, X, Send, AlertCircle, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import img from "../assets/img.jpg";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(''); // 'success', 'error', ''

  // 👉 Remplacez ces valeurs par vos vraies clés EmailJS
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_3h4dw7l',
    TEMPLATE_ID: 'template_txtl115',
    PUBLIC_KEY: 'VHVjTqH_ir5axMc23'
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // Envoyer l'email via EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          to_email: 'votre-email@example.com' // Votre email
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email envoyé avec succès:', result);
      setStatus('success');
      
      // Reset du formulaire
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });

      // Fermer le modal après 2 secondes
      setTimeout(() => {
        setOpenModal(false);
        setStatus('');
      }, 2000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

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

            {/* Messages de statut */}
            {status === 'success' && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Message envoyé avec succès !</span>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-2">
                <AlertCircle size={20} />
                <span>Erreur lors de l'envoi. Réessayez.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nom & Prénom"
                className="p-2 border rounded-lg"
                required
                disabled={isLoading}
              />
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="p-2 border rounded-lg"
                required
                disabled={isLoading}
              />
              
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="p-2 border rounded-lg"
                required
                disabled={isLoading}
              >
                <option value="">-- Choisissez un service --</option>
                <option value="travail">Demande de travail</option>
                <option value="developpement">Développement web</option>
                <option value="maintenance">Maintenance & support</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Votre message..."
                rows="4"
                className="p-2 border rounded-lg resize-none"
                required
                disabled={isLoading}
              />

              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-accent w-full mt-2 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Envoyer
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;