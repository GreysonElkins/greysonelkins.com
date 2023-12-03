import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons'

import feral from '../../../assets/feral.png'
import useView from 'hooks/useView'

import './Feral.scss'

const Feral = () => {
  const { isOnPage } = useView('/music')
  const open = isOnPage ? 'open' : 'closed'

  return (
    <section className={`Feral band ${open}`}>
      <h2>
        singer for <span>Feral Suits</span>
      </h2>
      <div className="socials">
        <a href="https://www.instagram.com/feralsuits" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size={'lg'} />
        </a>
        <a
          href="https://open.spotify.com/artist/3NS8aEjC3lH0xDynDB7zZK?si=a5h05WpgTWKmSaOGD4D4_Q"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSpotify} size={'lg'} />
        </a>
      </div>
      <div className="body">
        <img src={feral} alt="Five musicians, a rock band" />
        <div>Feral Suits is another band, etc.</div>
      </div>
    </section>
  )
}

export default Feral
