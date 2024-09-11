import './AboutMe.css';
import arrowIcon from '../../assets/arrow.png'
import experienceIcon from '../../assets/experience.png'
import educationIcon from '../../assets/education.png'
import aboutPic from '../../assets/about-pic.webp'
import { ChevronDown } from 'lucide-react';

const AboutMe = () => {
    return (
        <section id="about" className="py-16 px-4 md:px-8 relative">
        <div className="container mx-auto">
          <p className="text-center text-gray-600 mb-2">Get To Know More</p>
          <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
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
                    4+ years <br />Full Stack Development
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
                    B.Sc. Bachelors Degree<br />M.Sc. Masters Degree
                  </p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                  reprehenderit et laborum, rem, dolore eum quod voluptate
                  exercitationem nobis, nihil esse debitis maxime facere minus sint
                  delectus velit in eos quo officiis explicabo deleniti dignissimos.
                  Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                  reiciendis ea magnam? Nulla, impedit fuga!
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#skills"
          className="absolute right-4 bottom-8 lg:right-8 lg:bottom-8 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
          aria-label="Scroll to skills section"
        >
          <ChevronDown size={24} className="text-gray-600" />
        </a>
      </section>

    )
}

export default AboutMe