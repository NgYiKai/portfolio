import React from 'react';
import styles from './ProjectCard2.module.css'
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
    src: string,
    githubLink?: string,
    demoLink?:string,
    h3: string,
    p: string
}
function ProjectCard2({ src, h3, p, githubLink, demoLink }: ProjectCardProps) {
    return (
<div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <img
        src={src}
        alt={h3}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">{h3}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{p}</p>
        <div className="flex justify-between items-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            <span>Github</span>
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
    );
}

export default ProjectCard2;