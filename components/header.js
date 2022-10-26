import Link from "next/link";
import Image from "next/image";
import RCAbneyLogo from "../public/images/rcabney-logo-hz.png";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/" className="logo" passHref>
          <Image src={RCAbneyLogo} alt="RCAbney Logo" width={200} height={37} />
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/about/">About</Link>
          </li>
          <li>
            <Link href="/portfolio/">Portfolio</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
