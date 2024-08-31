import ProjectCard2 from '../../common/ProjectCard2/ProjectCard2';
import styles from './Projects2.module.css';
import cobra from '../../assets/projects/cobra.png';

function Projects2() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
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
