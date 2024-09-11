import ProjectCard2 from '../../common/ProjectCard2/ProjectCard2';
import styles from './Projects2.module.css';
import cobra from '../../assets/projects/cobra.png';
import { ChevronDown } from 'lucide-react';

function Projects2() {

  const projects = [
    {
      src: cobra,
      h3: "Phone Cobra",
      p: "E-commerce platform for custom phone cases built using React, Next.js, TailwindCSS, Prisma and Postgresql",
      githubLink: "#",
      demoLink: "#"
    },
    {
      src: cobra,
      h3: "Project Two",
      p: "Another amazing project description goes here. Built with cutting-edge technologies.",
      githubLink: "#",
      demoLink: "#"
    },
    {
      src: cobra,
      h3: "Project Three",
      p: "A third impressive project showcasing your skills and expertise in web development.",
      githubLink: "#",
      demoLink: "#"
    },
    {
      src: cobra,
      h3: "Project Three",
      p: "A third impressive project showcasing your skills and expertise in web development.",
      githubLink: "#",
      demoLink: "#"
    },
    {
      src: cobra,
      h3: "Project Three",
      p: "A third impressive project showcasing your skills and expertise in web development.",
      githubLink: "#",
      demoLink: "#"
    }
  ]

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 text-lg mb-2">Browse My Recent</p>
        <h1 className="text-center text-4xl font-bold mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard2 key={index} {...project} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
            <a
              href="#skills"
              className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors duration-300"
              aria-label="Scroll to projects section"
            >
              <ChevronDown color="black" size={24} />
            </a>
          </div>
      </div>
    </section>
  );
}

export default Projects2;
