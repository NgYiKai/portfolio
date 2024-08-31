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
        <div className={`${styles['details-container']} ${styles['color-container']}`} >
            <div className="article-container">
                <img
                    src={src}
                    alt="Project 1"
                    className="project-img"
                />
            </div>
            <h2 className="experience-sub-title project-title">{h3}</h2>
            <p>
                {p}
            </p>
            <div className="btn-container">
                <button
                    className="btn btn-color-2 project-btn"
                >
                    Github
                </button>
                <button
                    className="btn btn-color-2 project-btn"
                >
                    Live Demo
                </button>
            </div>
        </div>
    );
}

export default ProjectCard2;