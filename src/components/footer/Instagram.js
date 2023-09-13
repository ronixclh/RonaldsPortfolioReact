import instagram from './../../img/icons/instagram.svg'
import { NavLink } from 'react-router-dom'

function Instagram() {
  return (
    <NavLink to="https://instagram.com/" target="_blank">
      <img src={instagram} alt="Link" />
    </NavLink>
  )
}

export default Instagram
