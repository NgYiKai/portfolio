import experienceIcon from '../../assets/experience.png'
import educationIcon from '../../assets/education.png'
import aboutPic from '../../assets/aboutMe.png'
import { ChevronDown } from 'lucide-react';

const AboutMe = () => {
    return (
        <section id="about" className="py-16 px-4 md:px-8 relative min-h-screen flex flex-col justify-center">
          <p className="text-center text-gray-600 mb-2">Get To Know More</p>
          <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
          <div className="flex-grow flex items-center justify-center">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden">
                  <img
                    src={aboutPic}
                    alt="Profile picture"
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <div className="lg:w-2/3 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex-1 p-6 bg-white rounded-2xl border border-gray-300 text-center">
                    <img
                      src={experienceIcon}
                      alt="Experience icon"
                      width={40}
                      height={40}
                      className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>
                    <p className="text-gray-600">
                      4+ years <br />Software Engineer
                    </p>
                  </div>
                  <div className="flex-1 p-6 bg-white rounded-2xl border border-gray-300 text-center">
                    <img
                      src={educationIcon}
                      alt="Education icon"
                      width={40}
                      height={40}
                      className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-gray-600">
                      BSc (Hons) Computer Science<br />University of Nottingham
                    </p>
                  </div>
                </div>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    I'm a software engineer with over four years of experience in backend and full stack development.
                  </p>
                  <p className='mt-4'>
                  Throughout my career, I've worked with a diverse set of programming languages, libraries, frameworks, and technologies, including Java, Python, TypeScript, React, PHP, Laravel, Angular and etc.
                  </p>
                  <p className='mt-4'>
                  My professional interests span distributed systems, AI, and fintech, and I'm always eager to explore new technological frontiers.
                  </p>
                  <p className='mt-4'>
                  On a personal level, I'm passionate about self-improvement and personal growth.. I believe in the power of continuous learning and strive to grow both professionally and personally every day. 
                  </p>
                  <p className='mt-4'>
                  Thank you for taking the time to learn a bit about me. I hope you have a wonderful day!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
              <a
                href="#projects"
                className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors duration-300"
                aria-label="Scroll to projects section"
              >
                <ChevronDown color="black" size={24} />
              </a>
            </div>
      </section>

    )
}

export default AboutMe