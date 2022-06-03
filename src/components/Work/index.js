import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import inventory from '../../assets/images/inventory.jpg' 
import './index.scss'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', '', 'Work']}
              idx={15}
            />
          </h1>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['1.Personal website']}
              idx={15}
            />
          </h2>
          <p>
          A personal portfolio website that is built using React
          My personal website where you can know more about me and my work 
          </p>
          <a href="https://github.com/NgYiKai/portfolio">Source Code</a>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['2.Inventory Management App']}
              idx={15}
            />
          </h2>
          <p>
          Simple and easy to use mobile app to keep track of the number of items in inventory
          Written in Java by using Android Studio					
          Backend with firebase for authentication and to store user information
          </p>
          <a href="https://github.com/NgYiKai/portfolio">Source Code</a>

          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['3.StudyBuddy']}
              idx={15}
            />
          </h2>
          <p>
          A place for people to elarn
          </p>
          <a href="https://github.com/NgYiKai/portfolio">Source Code</a>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['4.Queue Management system']}
              idx={15}
            />
          </h2>
          <p>
            Queue Management system
          </p>
          <a href="https://github.com/NgYiKai/portfolio">Source Code</a>
         
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work