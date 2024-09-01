import React from 'react';
import styles from './ProjectCard2.module.css'

interface ProjectCardProps {
    src: string,
    githubLink?: string,
    demoLink?:string,
    h3: string,
    p: string
}
function ProjectCard2({ src, h3, p, githubLink, demoLink }: ProjectCardProps) {
    return (
        <div className="border border-gray-400 bg-gray-50 p-6 flex-1 rounded-2xl text-center" >
            <div className="flex text-left flex-wrap flex-row gap-10 justify-around">
                <img
                    src={src}
                    alt="Project 1"
                    className="rounded-2xl w-[90%] h-[90%]"
                />
            </div>
            <h2 className="m-4 text-black font-semibold text-2xl">{h3}</h2>
            <p className='text-gray-700 text-base leading-relaxed mt-2'>
                {p}
            </p>
            <div className="flex justify-center gap-4">
                <button
                    className="text-black border border-gray-400 bg-transparent font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full hover:cursor-pointer hover:bg-gray-800 hover:text-white hover:border hover:border-white"
                >
                    Github
                </button>
                <button
                    className="text-black border border-gray-400 bg-transparent font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full hover:cursor-pointer hover:bg-gray-800 hover:text-white hover:border hover:border-white"
                >
                    Live Demo
                </button>
            </div>
        </div>
    );
}

export default ProjectCard2;