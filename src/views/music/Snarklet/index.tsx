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
      </h2>
      <div className="body">
        <img src={snarklet} alt="Snarklet the singer / Greyson on guitar" />
        <div className="description">
          Snarklet is an extra-terrestrial singer and an extra-terrestrial band that's been making
          indie-pop-jazz music on planet Earth since 2022. We're currently recording our first set
          of tunes in my home studio. I play a Mexican Fender Jaguar.
        </div>
      </div>
    </section>
  )
}

export default Snarklet
