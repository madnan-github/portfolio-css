import '@/style/footer.css';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="footer-links">
        <li><Link href="/" className="footer-icon"><FaLinkedin /></Link></li>
        <li><Link href="/" className="footer-icon"><FaFacebook /></Link></li>
        <li><Link href="/" className="footer-icon"><FaYoutube /></Link></li>
        <li><Link href="/" className="footer-icon"><FaTwitter /></Link></li>
        <li><Link href="/" className="footer-icon"><FaInstagram /></Link></li>
      </ul>
    </footer>
  )
}

export default Footer