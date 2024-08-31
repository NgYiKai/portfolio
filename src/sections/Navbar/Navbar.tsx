import styles from './Narbar.module.css';

const Navbar = () => {
    return (
        <nav id="desktop-nav">
            <div className={styles.logo}>John Doe</div>
            <div>
            <ul className={styles['nav-links']}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
      </nav>
    )
}

export default Navbar