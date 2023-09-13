import { NavLink } from 'react-router-dom'
import linkedIn from './../../img/icons/linkedIn.svg'

function LinkedIn() {
  return (
    <NavLink
      to="https://www.linkedin.com/in/ronalds-borisovs-656745255/"
      target="_blank"
    >
      <img src={linkedIn} alt="Link" />
    </NavLink>
  )
}

export default LinkedIn
