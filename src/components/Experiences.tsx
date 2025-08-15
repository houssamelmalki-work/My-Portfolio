import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgPhp from "../assets/techno/php.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgLaravel from "../assets/techno/laravel.png";
import imgMysql from "../assets/techno/mysql.png"

import tele24 from "../assets/companies/tele24.png";
import socc from "../assets/companies/socc.png";
import riansa from "../assets/companies/riansa.png";




const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "php", image: imgPhp },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Laravel", image: imgLaravel },
    { id: 10, name: "MySql", image: imgMysql }
];


const experiences = [
    {
        id: 1,
        role: "Technicien de baf central",
        company: "Tele 24",
        period: "juillet 2024- Présent",
        description: [
            "Résoudre des problèmes techniques dans l'administration.",
            "Facturation des dossiers d’hospitalisation ou de consultation des patients.",
        ],
        image: tele24,
    },
    {
        id: 2,
        role: "Fullstack Developer",
        company: "Soccodam",
        period: "Jan 2024 - fev 2024",
        description: [
            "Création de nouveaux comptes pour les nouveaux employés.",
            "Résoudre les problèmes techniques et tout ce qui est lié au réseau."
        ],
        image: socc,
    },
    {
        id: 3,
        role: "Frontend Developer",
        company: "Reiansa",
        period: "Avril 2023 - May 2023",
        description: [
            "Création d’un site web de vente de matériel médical.",

            "Un stage et en même temps une expérience professionnelle."
        ],
        image: riansa,
    },
];



const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={expericence.image}
                                    alt={expericence.company}
                                    className="object-cover h-16 w-16 rounded-lg"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {expericence.role} , {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences