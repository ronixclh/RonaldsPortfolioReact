import './style.css'

import Vk from './Vk'
import Instagram from './Instagram'
import Twitter from './Twitter'
import GitHub from './GitHub'
import LinkedIn from './LinkedIn'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <Vk />
            </li>
            <li className="social__item">
              <Instagram />
            </li>
            <li className="social__item">
              <Twitter />
            </li>
            <li className="social__item">
              <GitHub />
            </li>
            <li className="social__item">
              <LinkedIn />
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 randomlink.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
