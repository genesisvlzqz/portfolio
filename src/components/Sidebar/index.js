import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import LogoS from '../../assets/logo.png'
import LogoSubtitle from '../../assets/logoSub.png'
import { ReactComponent as Linkedin} from '../../assets/linkedin.svg'
import { ReactComponent as Github} from '../../assets/github.svg'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="subLogo" src={LogoSubtitle} alt="genesis" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
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
            target="_blank" 
            rel="noreferrer" 
            href=""
        >
           <Linkedin fill='#4d4d4e' transform='scale(.5)'/>
            
        </a>
      </li>
      <li>
        <a 
            target="_blank" 
            rel="noreferrer" 
            href="https://www.linkedin.com/in/gvelazquezreyes/"
        >
            <Github fill='#4d4d4e' transform='scale(.5)' />


          {/* <FontAwesomeIcon icon="fa-brands fa-github" color="#4d4d4e" /> */}
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
