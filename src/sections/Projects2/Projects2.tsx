import ProjectCard2 from '../../common/ProjectCard2/ProjectCard2';
import styles from './Projects2.module.css';
import cobra from '../../assets/projects/cobra.png';

function Projects2() {
  return (
    <section id="projects" className="mx-12">
      <p className="text-center text-gray-500">Browse My Recent</p>
      <h1 className="text-center">Projects</h1>
      <div className="flex gap-4 flex-wrap">
        <ProjectCard2
          src={cobra}
          h3="Phone Cobra"
          p="E-commerce platform for custom phone cases built using React, Next.js, TailwindCSS, Prisma and Postgresql"
        />
        <ProjectCard2
          src={cobra}
          h3="Phone Cobra"
          p="E-commerce platform for custom phone cases built using React, Next.js, TailwindCSS, Prisma and Postgresql"
        />
        <ProjectCard2
          src={cobra}
          h3="Phone Cobra"
          p="E-commerce platform for custom phone cases built using React, Next.js, TailwindCSS, Prisma and Postgresql"
        />
      </div>
    </section>
  );
}

export default Projects2;
