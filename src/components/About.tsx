import Title from "./Title"
import imgg from '../assets/imgPRFL.jpg'
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Passionné par l'UI/UX",
        description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
];

const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <Title title="À propos" />
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-16">
                {/* Image */}
                <div className="flex-shrink-0">
                    <img 
                        src={imgg} 
                        alt="Developer profile" 
                        className="w-80 md:w-96 h-[500px] object-cover rounded-xl shadow-2xl"
                    />
                </div>

                {/* Cartes de compétences */}
                <div className="flex flex-col gap-6 w-full md:w-auto">
                    {aboutSections.map((section) => (
                        <div 
                            key={section.id}
                            className="flex items-center bg-base-100 p-6 rounded-xl md:w-96 shadow-xl hover:shadow-2xl transition-shadow"
                        >
                            <div className="flex-shrink-0">
                                {section.icon}
                            </div>
                            <div className="ml-4 text-left">
                                <h2 className="text-xl font-bold mb-2">
                                    {section.title}
                                </h2>
                                <p className="text-sm text-base-content/70">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About