import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import server from '../../assets/projects/server.png';
import cache from '../../assets/projects/cache.png';
import compiler from '../../assets/projects/compiler.png';
import inventory from '../../assets/projects/inventory.png';
import queue from '../../assets/projects/queue.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={server}
          link="https://github.com/NgYiKai"
          h3="HTTP server"
          p="Simple HTTP server built using C++ capable of handling simple GET/POST requests, serving files and handling multiple concurrent connections"
        />
        <ProjectCard
          src={cache}
          link="https://github.com/NgYiKai"
          h3="Redis clone"
          p="Redis clone written in C++ capable of serving basic commands, reading RDB files and more."
        />
        <ProjectCard
          src={compiler}
          link="https://github.com/NgYiKai"
          h3="Interpreter"
          p="Interpreter written in Java"
        />
        <ProjectCard
          src={queue}
          link="https://github.com/NgYiKai"
          h3="Queue Management System"
          p="A web application written in PHP and MySQL database"
        />
        <ProjectCard
          src={inventory}
          link="https://github.com/NgYiKai"
          h3="Inventory Management App  "
          p="Written in Java by using Android Studio and Firebase for authentication and to store user information"
        />
      </div>
    </section>
  );
}

export default Projects;
