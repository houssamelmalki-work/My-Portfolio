import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Plateforme E-commerce',
        description:"Une plateforme e-commerce permettant de vendre des produits et du matériel, avec la possibilité de paiement en ligne ou en espèces. Elle comprend également un espace utilisateur permettant d’ajouter des produits à son panier.",
        technologies: ['MongoDB','Express.js','React', 'Node.js', 'Tailwind CSS',],
        demoLink: 'https://www.webmobilefirst.com/en/screencasts/rlmhq80eby4spc/',
        repoLink: 'https://github.com/houssamelmalki-work/houssamShop',
        image: img1,
    },
    {
        id: 2,
        title: 'Équipement Médical',
        description: 'Site e-commerce statique spécialisé dans la vente d’équipements médicaux. Interface moderne développée avec React et Bootstrap, offrant un catalogue de produits détaillé et une navigation intuitive pour les professionnels de santé fiable. .',
        technologies: ['React', 'Bootstrap',],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Matériel Médical',
        description: ' Un site e-commerce dédié à la vente de matériel médical, permettant de gérer les produits, les commandes et les clients. Les utilisateurs peuvent consulter le catalogue, ajouter des articles à leur panier. Ils ont également la possibilité d’effectuer un paiement en ligne ou en espèces.',
        technologies: ['REACT', 'LARAVEL', 'SQL'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Portfolio',
        description: 'Portfolio professionnel mettant en valeur mes compétences, mes projets et mon expérience dans le développement digital, afin de présenter mon savoir-faire et ma créativité de manière claire et efficace.',
        technologies: ['React', 'Vite', 'Tailwind CSS'],
        demoLink: 'https://www.webmobilefirst.com/en/screencasts/rlmhq80eby4spc/',
        repoLink: 'https://github.com/houssamelmalki-work/My-Portfolio',
        image: img4,
    },

 
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                       <div className="flex">
    <a 
       target="_blank" className={`btn w-2/3 ${
            project.demoLink === '#' 
                ? 'btn-disabled cursor-not-allowed opacity-50' 
                : 'btn-accent hover:btn-accent-focus'
        }`} 
        href={project.demoLink === '#' ? undefined : project.demoLink}
        onClick={project.demoLink === '#' ? (e) => e.preventDefault() : undefined}
    >
        Demo
        <Video className="w-4" />
    </a>

    <a 
       target="_blank" className={`btn w-1/3 ml-2 ${
            project.repoLink === '#' 
                ? 'btn-disabled cursor-not-allowed opacity-50' 
                : 'btn-neutral hover:btn-neutral-focus'
        }`}
        href={project.repoLink === '#' ? undefined : project.repoLink}
        onClick={project.repoLink === '#' ? (e) => e.preventDefault() : undefined}
    >
        <Github className="w-4" />
       
    </a>
</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects