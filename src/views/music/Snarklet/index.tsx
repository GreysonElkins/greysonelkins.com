import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons'

import useView from 'hooks/useView'
import snarklet from '../../../assets/snark.png'

import './Snarklet.scss'

const Snarklet: React.FC = () => {
  const { isOnPage } = useView('/music')

  const open = isOnPage ? 'open' : 'closed'

  return (
    <section className={`Snarklet band ${open}`}>
      <h2>
        guitar for <span>Snarklet</span>
      </h2>
      <div className="socials">
        <a href="https://www.instagram.com/snarklet" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size={'lg'} />
        </a>
        <a
          href="https://open.spotify.com/artist/1l9LXROEFaVOafZg3GkA4Y?si=i4OTrU9nQ5CsUq00ntab0A"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSpotify} size={'lg'} />
        </a>
      </div>
      <div className="body">
        <img src={snarklet} alt="Snarklet the singer / Greyson on guitar" />
        <div>Snarklet is a band, etc.</div>
      </div>
    </section>
  )
}

export default Snarklet
