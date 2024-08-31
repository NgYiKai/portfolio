import SkillList2 from "../../common/SkillsList2/SkillList2"

const Skills2 = () => {
    return (
        <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">

            <SkillList2 />
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
        />
      </section>
    )
}

export default Skills2