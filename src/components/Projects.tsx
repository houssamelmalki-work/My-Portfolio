import { useState } from 'react';
import Title from "./Title";
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import img7 from '../assets/projects/7.png';
import imgd1 from '../assets/projects/design/1.png';
import imgd2 from '../assets/projects/design/2.png';
import imgd3 from '../assets/projects/design/3.png';
import imgd4 from '../assets/projects/design/4.png';
import imgd5 from '../assets/projects/design/5.png';
import imgd6 from '../assets/projects/design/6.png';
import imgd7 from '../assets/projects/design/7.png';
import imgd8 from '../assets/projects/design/8.png';
import imgd9 from '../assets/projects/design/9.png';
import imgd10 from '../assets/projects/design/10.png';
import { Github, Video, X } from "lucide-react";

const projects = [
    // WEB & JEUX
    {
        id: 1,
        title: 'Plateforme E-commerce',
        description:"Une plateforme e-commerce permettant de vendre des produits et du matériel, avec la possibilité de paiement en ligne ou en espèces. Elle comprend également un espace utilisateur permettant d'ajouter des produits à son panier.",
        technologies: ['MongoDB','Express.js','React', 'Node.js', 'Tailwind CSS',],
        demoLink: 'https://www.webmobilefirst.com/en/screencasts/rlmhq80eby4spc/',
        repoLink: 'https://github.com/houssamelmalki-work/houssamShop',
        image: img1,
        category: 'web'
    },
    {
        id: 2,
        title: 'Équipement Médical',
        description: 'Site e-commerce statique spécialisé dans la vente d\'équipements médicaux. Interface moderne développée avec React et Bootstrap, offrant un catalogue de produits détaillé et une navigation intuitive pour les professionnels de santé fiable.',
        technologies: ['React', 'Bootstrap',],
        demoLink: '#',
        repoLink: '#',
        image: img2,
        category: 'web'
    },
    {
        id: 3,
        title: 'Matériel Médical',
        description: 'Un site e-commerce dédié à la vente de matériel médical, permettant de gérer les produits, les commandes et les clients. Les utilisateurs peuvent consulter le catalogue, ajouter des articles à leur panier. Ils ont également la possibilité d\'effectuer un paiement en ligne ou en espèces.',
        technologies: ['REACT', 'LARAVEL', 'SQL'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
        category: 'web'
    },
    {
        id: 4,
        title: 'Portfolio',
        description: 'Portfolio professionnel mettant en valeur mes compétences, mes projets et mon expérience dans le développement digital, afin de présenter mon savoir-faire et ma créativité de manière claire et efficace.',
        technologies: ['React', 'Vite', 'Tailwind CSS'],
        demoLink: 'https://www.webmobilefirst.com/en/screencasts/rlmhq80eby4spc/',
        repoLink: 'https://github.com/houssamelmalki-work/My-Portfolio',
        image: img4,
        category: 'web'
    },
    {
        id: 5,
        title: 'CHESS',
        description: 'Jeu d\'échecs en ligne développé avec React et CSS, offrant une interface moderne inspirée de Chess.com. Conçu pour une expérience stratégique et responsive sur tous les appareils',
        technologies: ['React', 'css'],
        demoLink: 'https://www.webmobilefirst.com/en/screencasts/rlmhq80eby4spc/',
        repoLink: 'https://github.com/houssamelmalki-work/chess-game',
        image: img5,
        category: 'web'
    },
    {
        id: 6,
        title: 'TRAVEL',
        description: 'HSMTRAVEL - Plateforme de voyage développée avec React, offrant une interface moderne pour des expériences uniques. Conçu pour une planification de voyage intuitive et responsive',
        technologies: ['React', 'css'],
        demoLink: 'https://www.webmobilefirst.com/en/screencasts/rlmhq80eby4spc/',
        repoLink: 'https://github.com/houssamelmalki-work/travel',
        image: img6,
        category: 'web'
    },
    {
        id: 7,
        title: 'SNAKE GAME',
        description: 'Snake game marocain développé par HSMDEV, proposant une édition Ramadan aux inspirations culturelles locales. Conçu pour une expérience gaming traditionnelle et moderne',
        technologies: ['Python'],
        demoLink: 'https://www.webmobilefirst.com/en/screencasts/rlmhq80eby4spc/',
        repoLink: '#',
        image: img7,
        category: 'web'
    },

    // DESIGN
    {
        id: 1,
        title: 'Snake design',
        image: imgd1,
        category: 'design'
    },
    {
        id: 2,
        title: 'Game backgrund',
        image: imgd2,
        category: 'design'
    },
    {
        id: 3,
        title: 'Travel',
        image: imgd3,
        category: 'design'
    },
    {
        id: 4,
        title: ' Cap',
        image: imgd4,
        category: 'design'
    },
    {
        id: 5,
        title: 'Snake design',
        image: imgd5,
        category: 'design'
    },
    {
        id: 6,
        title: 'T-Shirt',
        image: imgd6,
        category: 'design'
    },
    {
        id: 7,
        title: 'Papillon',
        image: imgd7,
        category: 'design'
    },
     {
        id: 8,
        title: 'Real Madrid Post',
        image: imgd8,
        category: 'design'
    },
      {
        id: 9,
        title: 'Jus ',
        image: imgd9,
        category: 'design'
    },
      {
        id: 10,
        title: 'Visite',
        image: imgd10,
        category: 'design'
    },
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState('web');
    const [selectedDesignImage, setSelectedDesignImage] = useState<string | null>(null); // ✅ correction TS2345

    const filteredProjects = projects.filter(project => project.category === activeTab);

    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            
            {/* Onglets */}
            <div className="flex justify-center mb-10 gap-4 flex-wrap">
                <button
                    onClick={() => setActiveTab('web')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        activeTab === 'web'
                            ? 'bg-accent text-white shadow-lg'
                            : 'bg-base-300 text-base-content hover:bg-base-200'
                    }`}
                >
                    Web & Jeux
                </button>
                <button
                    onClick={() => setActiveTab('design')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        activeTab === 'design'
                            ? 'bg-accent text-white shadow-lg'
                            : 'bg-base-300 text-base-content hover:bg-base-200'
                    }`}
                >
                    Design
                </button>
            </div>

            {/* Grille de projets */}
            {activeTab === 'web' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <div 
                                key={project.id} 
                                className="bg-base-300 p-5 h-fit rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full rounded-xl h-56 object-cover"
                                />
                                <div>
                                    <h1 className="my-2 font-bold text-lg">
                                        {project.title}
                                    </h1>
                                    <p className="text-sm text-base-content/80">{project.description}</p>
                                </div>

                                {/* ✅ Correction TS18048 */}
                                <div className="flex flex-wrap gap-2 my-3">
                                    {project.technologies?.map((tech, idx) => (
                                        <span key={idx} className="badge badge-accent badge-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-2">
                                    <a 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`btn flex-1 text-sm ${
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
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`btn flex-1 text-sm ${
                                            project.repoLink === '#' 
                                                ? 'btn-disabled cursor-not-allowed opacity-50' 
                                                : 'btn-neutral hover:btn-neutral-focus'
                                        }`}
                                        href={project.repoLink === '#' ? undefined : project.repoLink}
                                        onClick={project.repoLink === '#' ? (e) => e.preventDefault() : undefined}
                                    >
                                        <Github className="w-4" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-base-content/60 text-lg">Aucun projet dans cette catégorie pour le moment</p>
                        </div>
                    )}
                </div>
            ) : (
                // Vue Design
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <div 
                                key={project.id}
                                onClick={() => setSelectedDesignImage(project.image)}
                                className="bg-base-300 rounded-xl shadow-lg overflow-hidden cursor-pointer group"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-4">
                                    <h2 className="font-bold text-lg group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h2>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-base-content/60 text-lg">Aucun projet dans cette catégorie pour le moment</p>
                        </div>
                    )}
                </div>
            )}

            {/* Modal Image Agrandie */}
            {selectedDesignImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedDesignImage(null)}
                >
                    <div 
                        className="bg-base-300 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedDesignImage(null)}
                            className="absolute top-4 right-4 bg-base-100 hover:bg-base-200 text-base-content p-2 rounded-full transition-all z-10 shadow-lg"
                            aria-label="Fermer"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex-1 overflow-auto flex items-center justify-center">
                            <img
                                src={selectedDesignImage}
                                alt="Design"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
