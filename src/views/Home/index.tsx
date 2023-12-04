import banner from 'assets/banner.png'
import motion from 'assets/motion.gif'
import lines from 'assets/lines.png'
import useView from "hooks/useView"

import './Home.scss'

const Home: React.FC = () => { 
  const { isOnPage } = useView('/')

  const open = isOnPage ? "open" : "closed"

  return (
    <>
      <img className={`lines ${open}`} src={lines} alt="colorful lines" />
      <div className={`Home ${open}`}>
        <img className="banner" src={banner} alt="audio and computer equipment" />
        <img className="motion" src={motion} alt="audio and computer equipment" />
        <div className="content">
          <h2>Software Developer && Audio Engineer</h2>
          <h3>Open to Work</h3>
        </div>
      </div>
    </>
  )
}

export default Home
