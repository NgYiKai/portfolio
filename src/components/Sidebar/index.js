import { Link ,NavLink} from 'react-router-dom'
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope,faHome,faUser,faListCheck} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'
import LogoK from '../../assets/images/logo-K.png' 
import LogoName from '../../assets/images/logo_name.png' 

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoK} alt="logo" />
            <img className="sub-logo" src={LogoName} alt="yikai" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
            activeclassname="active"
            className="work-link"
            to="/work"
            >
            <FontAwesomeIcon icon={faListCheck} color="#4d4d4e" />
            </NavLink>
            <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
            >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
            <a
            href="https://www.linkedin.com/in/yi-kai-ng-b55b03203/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
            </li>
            <li>
          <a
            href="https://github.com/NgYiKai"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        </ul>
    </div>
)

export default Sidebar