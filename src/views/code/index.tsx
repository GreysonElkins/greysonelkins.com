import './Code.scss'
import useView from 'hooks/useView'

import technologyBadges from './technologyBadges'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import resume from '../../assets/elkins_resume.pdf'

const Code: React.FC = () => {
  const { isOnPage } = useView('/code')

  const renderTechBadges = () => technologyBadges.map((b, i) => (
      <img src={b.badge} alt={b.technology} key={`tech-badge-${i}`} />
  ))
  
  const onPage = isOnPage ? 'open' : 'closed'

  return (
    <section>
      <div className={`resume Card ${onPage}`}>
        <h2>
          I'm <span>a Software Developer</span>
        </h2>
        <h3>Lumen Technologies Inc.</h3>
        <h4>Senior Software Developer - Dec 2022 : Oct 2023</h4>
        <div>
          Led a small full stack team in creating the LEEP Automation Suite, an internal tool for
          correcting data in a large-scale data migration.
        </div>
        <h3>Bonfire Infrastructure Group</h3>
        <h4>Software Integration Developer - Mar 2022 : Nov 2022</h4>
        <div>
          Created the company's first internal API, used in analyzing new market demographic data
          and integrated with geo-spacial tools like ArcGIS.
        </div>
        <h3>Theorem LTS</h3>
        <h4>Full Stack Engineer - Mar 2021 : Feb 2022</h4>
        <div>
          Developed buyer & seller features for a Legal Software Marketplace, including integration
          with Stripe.
        </div>
        <a
          className="resume-download"
          href={resume}
          download="elkins_resume"
          target="_blank"
          rel="noreferrer"
        >
          <button className="resume-download">
            <FontAwesomeIcon icon={faDownload} />
            download full resume
          </button>
        </a>
      </div>
      <div className={`techBadges ${onPage}`}>{renderTechBadges()}</div>
    </section>
  ) 
}

export default Code
