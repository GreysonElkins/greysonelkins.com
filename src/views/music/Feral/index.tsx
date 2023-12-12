import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons'

import feral from '../../../assets/feral.png'
import useView from 'hooks/useView'

import './Feral.scss'

const Feral = () => {
  const { isOnPage } = useView('/music')
  const open = isOnPage ? 'open' : 'closed'

  return (
    <div className={`Feral band ${open}`}>
      <h2>
        singer for <span>Feral Suits</span>
        <div className="socials">
          <a
            href="https://open.spotify.com/artist/3NS8aEjC3lH0xDynDB7zZK?si=a5h05WpgTWKmSaOGD4D4_Q"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faSpotify} size={'lg'} />
          </a>
          <a href="https://www.instagram.com/feralsuits" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size={'lg'} />
          </a>
        </div>
      </h2>
      <div className="body">
        <img src={feral} alt="Five musicians, a rock band" />
        <div className="description">
          Feral Suits is a Denver Colorado Super Group founded by{' '}
          <a
            href="https://open.spotify.com/artist/0vWfV0vB0moYPgiMxFpJoM?si=9hJVaMBNTgSYo2IPva693Q"
            target="_blank"
            rel="noreferrer"
          >
            Hot Cold Ghost
          </a>{' '}
          in 2018. We released our first record, Drown the Garden, in 2022, which had singles
          featured in editorial playlists by Spotify and Amuse. I play a little guitar, but mostly
          I'm waxing poetic and doing subtle impressions of all my favorite singers.
        </div>
      </div>
    </div>
  )
}

export default Feral
