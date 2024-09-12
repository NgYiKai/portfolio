import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profilePic.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import CV from '../../assets/NgYiKai_Resume.pdf'

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className="relative">
        <img
          src={heroImg}
          className="max-w-[200px] 
             md:max-w-[350px] md:w-[350px] 
             xl:max-w-[400px] xl:w-[400px]
             mx-auto"
          alt="Profile picture of Ng Yi Kai"
        />
        <img
          className="hidden w-6 absolute right-0 cursor-pointer"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ng Yi Kai
        </h1>
        <h2>Software Enginner</h2>
        <span>
          <a href="https://github.com/NgYiKai" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/enzo-ng/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern software and apps.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
