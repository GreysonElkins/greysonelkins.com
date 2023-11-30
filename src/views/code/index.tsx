import './Code.scss'
import useView from 'hooks/useView'

import technologyBadges from './technologyBadges'

const Code: React.FC = () => {
  const { isOnPage } = useView('/code')

  const renderTechBadges = () => technologyBadges.map((b, i) => (
      <img src={b.badge} alt={b.technology} key={`tech-badge-${i}`} />
  ))
  
  const onPage = isOnPage ? 'open' : 'closed'

  return (
    <>
      <section className={`resume Card ${onPage}`}>
        <h2>I'm <span>a Software Developer</span></h2>
        <h3>Lumen Technologies Inc.</h3>
        <h3>Bonfire Consulting Group</h3>
        <h3>Theorem LTS</h3>
      </section>
      <section className={`techBadges ${onPage}`}>
        {renderTechBadges()}
      </section>
    </>
  ) 
}

export default Code
