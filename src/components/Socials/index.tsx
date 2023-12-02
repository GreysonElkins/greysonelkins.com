import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faSpotify, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChess } from '@fortawesome/free-solid-svg-icons'

import './Socials.scss'

const Socials: React.FC<{size: SizeProp}> = ({ size }) => {
    return (
      <div className="Socials">
        <a href="https://www.instagram.com/greysonelkins" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size={size} />
        </a>
        <a href="http://www.chess.com/member/grady_johns" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faChess} size={size} />
        </a>
        <a
          href="https://open.spotify.com/user/1219249138?si=6f6f1aa1e6864972"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSpotify} size={size} />
        </a>
        <a href="http://www.github.com/greysonelkins" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size={size} />
        </a>
        <a href="http://www.linkedin.com/in/greyson-elkins" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size={size} />
        </a>
      </div>
    )
}

export default Socials
