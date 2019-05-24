import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About Me</a></Link>
  </div>
);

export default Header;