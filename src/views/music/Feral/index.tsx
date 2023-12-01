import feral from '../../../assets/feral.png'
import useView from 'hooks/useView'

import './Feral.scss'

const Feral = () => {
  const { isOnPage } = useView('/music')
  const open = isOnPage ? "open" : "closed"

  return <section className={`Feral band ${open}`}>
    <h2>singer for <span>Feral Suits</span></h2>
    <div className="body">
        <img src={feral} alt="Five musicians, a rock band" />
        <div>Feral Suits is another band, etc.</div>
    </div>
  </section>
}

export default Feral
