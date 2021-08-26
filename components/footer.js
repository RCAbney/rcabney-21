import Image from 'next/image'
import Link from 'next/link'
import Twitter from '../public/images/twitter.svg'
import LinkedIn from '../public/images/linkedin.svg'
import Github from '../public/images/github.svg'

export default function Footer() {
    return (
        <footer>
        <div className="footer-content">
          <Link href="/">
              <a className="footer-link">
            © {new Date().getFullYear()}
            {` `}RCAbney
              </a>
          </Link>
          <ul className="social-links">
            <li>
              <a href="https://twitter.com/rcabney">
                <Image src={Twitter} alt="twitter logo" />
              </a>
            </li>
            <li>
              <a href="https://github.com/rcabney">
                <Image src={Github} alt="github logo" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ryanabney/">
                <Image src={LinkedIn} alt="linkedin logo" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
}