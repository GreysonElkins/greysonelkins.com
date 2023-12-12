import banner from 'assets/banner.png'
import motion from 'assets/motion.gif'
import lines from 'assets/lines.png'
import useView from "hooks/useView"

import './Home.scss'

const Home: React.FC = () => { 
  const { isOnPage } = useView('/')

  const open = isOnPage ? "open" : "closed"

  return (
    <section>
      <img className={`lines ${open}`} src={lines} alt="colorful lines" />
      <div className={`Home ${open}`}>
        <div className="banner">
          <img className="banner-drawing" src={banner} alt="audio and computer equipment" />
          <img className="banner-motion" src={motion} alt="audio and computer equipment" />
        </div>
        <h2>Software Developer <span>&&</span> Audio Engineer</h2>
      </div>
    </section>
  )
}

export default Home
