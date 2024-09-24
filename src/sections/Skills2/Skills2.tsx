import { CheckCircle, ChevronDown } from "lucide-react"

interface Skill {
  name: string
  level: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "HTML", level: "Experienced" },
      { name: "CSS", level: "Experienced" },
      { name: "JavaScript", level: "Basic" },
      { name: "TypeScript", level: "Basic" },
      { name: "Java", level: "Intermediate" },
      { name: "Go", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Angular", level: "Basic" },
      { name: "React", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Nest.js", level: "Intermediate" },
      { name: "Express JS", level: "Intermediate" },
      { name: "Laravel", level: "Intermediate" },
    ],
  },
  {
    title: "Technologies",
    skills: [
      { name: "Node JS", level: "Intermediate" },
      { name: "PostgreSQL", level: "Basic" },
      { name: "Git", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS", level: "Intermediate" },
      { name: "Google Cloud", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "DevOps", level: "Basic" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "Agile", level: "Intermediate" },
      { name: "Algorithm", level: "Intermediate" },
      { name: "Data structure", level: "Intermediate" },
      { name: "Test-driven development", level: "Intermediate" }
    ],
  },
]

function SkillCategory({ title, skills }: SkillCategory) {
  return (
    <div className="border-black border-solid border-[1px] p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </div>
  )
}

function SkillItem({ name }: Skill) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
      <span className="font-normal text-gray-900 leading-6">{name}</span>
    </div>
  )
}


const Skills2 = () => {
    return (
      <section id="skills" className="py-16 min-h-screen">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-lg mb-2">Explore My</p>
          <h1 className="text-center text-4xl font-bold mb-12">Experience</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} {...category} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <a
              href="#contact"
              className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors duration-300"
              aria-label="Scroll to projects section"
            >
              <ChevronDown color="black" size={24} />
            </a>
          </div>
        </div>
      </section>
    )
}

export default Skills2