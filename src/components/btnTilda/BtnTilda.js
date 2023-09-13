import tildaIcon from './tilda.svg'
import './style.css'

function BtnTilda({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={tildaIcon} alt="" />
      Tilda Website
    </a>
  )
}

export default BtnTilda
