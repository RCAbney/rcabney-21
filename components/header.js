import Link from 'next/link'
import Image from 'next/image'
import RCAbneyLogo from '../public/images/rcabney-logo-hz.png'

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/">
                    <a className="logo">
                        <Image src={RCAbneyLogo} alt="RCAbney Logo" width={200} height={37} />
                    </a>
                </Link>

                <ul className="nav-links">
                    <li>
                        <Link href="/about/">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio/">
                            <a>Portfolio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume">
                            <a>Resume</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}