import twitter from './../../img/icons/twitter.svg'
import { NavLink } from 'react-router-dom'

function Twitter() {
  return (
    <NavLink to="https://twitter.com/" target="_blank">
      {' '}
      <img src={twitter} alt="Link" />
    </NavLink>
  )
}

export default Twitter
