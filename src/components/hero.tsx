import '@/style/hero.css';
import Link from "next/link"

export default function Hero() {
  return (
<div className="hero-container">
  <div className="hero-content">
    <h1 className="hero-title">
      Hi, I&#39;m <span className="highlight">Muhammad Adnan</span>
    </h1>
    <p className="hero-subtitle">A passionate Frontend Developer.</p>
    <p className="hero-description">
      As a Front-end Developer who bridges the gap between creativity and code. With every project, I aim to create immersive digital experiences that are not just functional but delightful. From sleek, responsive layouts to optimized performance, I believe in crafting web solutions that leave a lasting impression. Dive into my work, explore my journey, and let&#39;s turn innovative ideas into reality!
    </p>
    <Link href="/projects">
      <button className="hero-button">View My Work</button>
    </Link>
  </div>
</div>

  );
}
