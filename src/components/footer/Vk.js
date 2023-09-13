import { NavLink } from 'react-router-dom'
import vk from './../../img/icons/vk.svg'

function Vk() {
  return (
    <NavLink to="https://vk.com/" target="_blank">
      {' '}
      <img src={vk} alt="Link" />
    </NavLink>
  )
}

export default Vk
