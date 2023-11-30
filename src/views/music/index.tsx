import Snarklet from "./Snarklet"
import Feral from './Feral'

import './Music.scss'
import useView from "hooks/useView"

const Music: React.FC = () => {
  return (
    <section className="Music">
        <Snarklet />
        <Feral />
    </section>
  )
}

export default Music
