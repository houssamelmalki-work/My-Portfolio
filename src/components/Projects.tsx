import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Gestionnaire de tâches',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['React', 'Node.js', 'Tailwind CSS'],
        demoLink: 'https://www.webmobilefirst.com/en/screencasts/rlmhq80eby4spc/',
        repoLink: 'https://github.com/houssamelmalki-work/houssamShop',
        image: img1,
    },
    {
        id: 2,
        title: 'Plateforme E-commerce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Next.js', 'TypeScript', 'Prisma'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Portfolio interactif',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Application de Chat en temps réel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['React', 'Socket.io', 'Express.js'],
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
        className={`btn w-2/3 ${
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
        className={`btn w-1/3 ml-2 ${
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