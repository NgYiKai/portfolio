import cobra from '../../assets/projects/cobra-screenshot.png';
import ranker from '../../assets/projects/ranker-screenshot.png'
import survey from '../../assets/projects/survey-screenshot.png'
import interpreter from '../../assets/projects/compiler.png'
import fileStorage from '../../assets/projects/file-storage.png'
import { ChevronDown } from 'lucide-react';

function Projects2() {

  const projects = [
    {
      src: cobra,
      h3: "Phone Cobra",
      p: "Built an e-commerce platform for custom phone cases using React, Next.js, Tailwinds, Prisma, and PostgreSQL, integrating secure payment processing with Stripe to ensure smooth and reliable transaction handling.",
      githubLink: "https://github.com/NgYiKai/e-commerce-cobra",
      demoLink: "https://phonecobra.vercel.app/"
    },
    {
      src: ranker,
      h3: "Rankr",
      p: "Developed a real-time ranked-choice voting app for group decisions (e.g., movies or dining) using React, NestJS, Socket.io, and Redis, enabling real-time updates and seamless group decision-making with a robust back-end.",
      githubLink: "https://github.com/NgYiKai/ranker",
      demoLink: "https://ranker-client.vercel.app/"
    },
    {
      src: survey,
      h3: "SurveyFlow",
      p: "Designed and implemented a survey creation and response collection app using React UI and Laravel backend, streamlining data collection and response management to enhance user experience and operational efficiency.",
      githubLink: "https://github.com/NgYiKai/survey-laravel",
      demoLink: "https://survey-laravel.pages.dev/"
    },
    {
      src: fileStorage,
      h3: "Decentralized Content-Addressable File Storage System",
      p: "Developed a fully decentralized, distributed file storage system using Go, optimized for handling and streaming large files efficiently by applying advanced distributed systems concepts like data replication and p2p networking.",
      githubLink: "https://github.com/NgYiKai/distributed-file-storage-s",
    },
    {
      src: interpreter,
      h3: "Kai",
      p: "Created an interpreter for Kai, a custom scripting language, written in Java that support rich syntax, dynamic typing, garbage collection, first-class functions, closures, classes, and inheritance, delivering a feature-rich and efficient language for various applications",
      githubLink: "https://github.com/NgYiKai/interpreter"
    }
  ]

  const githubIcon = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 text-lg mb-2">Browse My Recent</p>
        <h1 className="text-center text-4xl font-bold mb-12">Projects</h1>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard2 key={index} {...project} />
          ))}
        </div> */}

        <div className="space-y-12">
          {projects.map((project,i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/5 flex justify-center">
                <img
                  src={project.src}
                  alt={project.h3}
                  className="rounded-lg shadow-md  max-h-[30svh]"
                />
              </div>
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl font-bold mb-2">{project.h3}</h3>
                <p className="text-gray-600 mb-4">{project.p}</p>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target='_blank'
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-label="View project on GitHub"
                  >
                    <span className='w-5 mr-2' aria-hidden="true">{githubIcon}</span>
                    <span>GitHub</span>
                  </a>
                  {
                    project.demoLink && (
                      <a
                      href={project.demoLink}
                      target='_blank'
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      aria-label="View live demo of the project"
                    >Live Demo</a>
                    )
                  }
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className='mt-16 font-bold text-xl'>
          Note:
        </p>
        <p className='italic'>
        While this is not an exhaustive list of all my projects, I have also worked on other projects such as HTTP server written in C++, a Redis clone implemented in C++, a PHP-based queue management system, and a Java-based inventory management system.
        </p>
        <p className='mt-4 italic'>
        Feel free visit my GitHub repository to explore more of my projects and their details. Please note that some of these projects may be in a less well-documented ,less-developed or maintained state.
        </p>

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
