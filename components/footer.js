import Image from 'next/image'
import Link from 'next/link'
import Twitter from '../images/twitter.svg'
import LinkedIn from '../images/linkedin.svg'
import Github from '../images/github.svg'

export default function Footer() {
    return (
        <footer>
        <div className="footer-content">
          <Link href="/" className="footer-link">
              <a>
            © {new Date().getFullYear()}
            {` `}RCAbney
              </a>
          </Link>
          <ul class="social-links">
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