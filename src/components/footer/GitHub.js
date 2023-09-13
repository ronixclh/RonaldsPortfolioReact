import gitHub from './../../img/icons/gitHub.svg'
import { NavLink } from 'react-router-dom'

function GitHub() {
  return (
    <NavLink to="https://github.com/ronixclh" target="_blank">
      {' '}
      <img src={gitHub} alt="Link" />
    </NavLink>
  )
}

export default GitHub
