import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loader } from 'react-loaders';
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () => setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    }, []);

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Hi, I'm Génesis, a software developer. Born and raised in Puerto Rico,
          I have always shown an inclination toward tech. I love all things
          science, especially if those things bend the fabric of space and time.
          My long-term goals include combining my passion for software
          development and astrophysics together so that my software may be a
          part of what our next space age looks like.
        </p>
        <p>
          My first software dev experience was during my sophomore year when I
          worked on a research project utilizing MATLAB to generate 3d cave maps
          from spatial data. I worked specifically with the merging of large
          data arrays representing cave segments and the GUI deployment. After
          this project, I went on to work on an Interactive Skymap tool with the
          Planetary Habitability Laboratory @ UPRA where we searched for
          exoplanet candidates for habitability using JavaScript. Both of these
          experiences cemented in me the drive to push my knowledge more to meet
          deadlines and project requirements.
        </p>
        <ul>
          <li>I love research environments. I thrive on solving the puzzle!</li>
          <li>Critical Role is art in motion.</li>
          <li>
            I teach coding to kids! From scratch to python, I tutor 2nd graders
            and higher on building cool games like pong, brick, snake, asteroid,
            and more.
          </li>
        </ul>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About
