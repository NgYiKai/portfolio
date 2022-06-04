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
          A portfolio website which is this one that you are currently looking at. It is built using React.
          </p>
          <div className=''>
          <a href="https://github.com/NgYiKai/portfolio">Source Code</a>
          </div>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['2.Inventory Management App']}
              idx={15}
            />
          </h2>
          <p>
          Simple and easy to use mobile app to keep track of the number of items in inventory as well as the transaction history
          <br/>
          Written in Java by using Android Studio					
          <br/>
          Backend with firebase for authentication and to store user information
          </p>
          <a href="https://github.com/NgYiKai/InventoryManagement">Source Code</a>

          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['3.StudyBuddy']}
              idx={15}
            />
          </h2>
          <p>
          A chatroom-like website that is built using Django where people can join various channel with different topics that they are interested with and post for questions and interact with other peoples. 
          </p>
          <a href="https://https://github.com/NgYiKai/StudyBud">Source Code</a>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['4.Queue Management system']}
              idx={15}
            />
          </h2>
          <div className=''>
          <p>
          A web application written in PHP and MySQL database					   
          <br/>
          The system included a chatbot that was implemented by using AJAX , able to answer some frequently asked question in an intuitive chat interface
          <br/>
          User can view real-time queue data and queue up to meet with the counsellor if the chatbot wasn’t able to answer their question

          </p>
          <a href="https://github.com/NgYiKai/edufair">Source Code</a>
          </div>
         
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work