import useView from 'hooks/useView'
import snarklet from '../../../assets/snark.png'

import './Snarklet.scss'

const Snarklet: React.FC = () => {
    const { isOnPage } = useView('/music')

    const open = isOnPage ? "open" : "closed"

    return <section className={`Snarklet ${open}`}>
        <h2>guitar for <span>Snarklet</span></h2>
        <div className="body">
          <img src={snarklet} />
          <div>Snarklet is a band, etc.</div>
        </div>
  </section>
}

export default Snarklet
