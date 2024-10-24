import Link from "next/link";
import '@/style/navbar.css';

const Navbar = () => {
  return (
    
    <nav className="navbar">
  <h1 className="navbar-title">Web-Dev</h1>
  <ul className="navbar-links">
    <li><Link href="/" className="navbar-link">Home</Link></li>
    <li><Link href="/about" className="navbar-link">About</Link></li>
    <li><Link href="/projects" className="navbar-link">Projects</Link></li>
    <li><Link href="/contact" className="navbar-link">Contact</Link></li>
  </ul>

  <button className="navbar-toggle">&#9776;</button>
</nav>


  )
}

export default Navbar

