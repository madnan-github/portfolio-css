import Image from "next/image";
import Link from "next/link";
import '@/style/project.css';

const projects = [
  { name: "My Portfolio Website", description: "My personal website showcasing skills, projects, and contact details.", image: "/img/portfolio.png", url: "https://github.com/madnan-github/portfolio-next-js" },
  { name: "ATM Program", description: "A Node.js simulation of basic ATM operations like balance inquiry, withdrawal, and deposit.", image: "/img/atm.png", url: "https://github.com/madnan-github/NP_ATM" },
  { name: "Currency Converter", description: "A tool that converts currencies based on real-time exchange rates.", image: "/img/currency.png", url: "https://github.com/madnan-github/NP_currencyconverter" },
  { name: "Number Guessing Game", description: "A fun game where users guess a randomly generated number within a given range.", image: "/img/num-game.png", url: "https://github.com/madnan-github/NP_NumberGuessingGame" },
  { name: "Simple Calculator", description: "Performing basic arithmetic operations like addition, subtraction, multiplication, and division.", image: "/img/calc.png", url: "https://github.com/madnan-github/NP_SimpleCalculator" },
  { name: "To Do App", description: "A task management app allowing users to add, track, and delete to-do items.", image: "/img/todoapp.png", url: "https://github.com/madnan-github/NP_todo" },
];

const Project = () => {
  return (
<div className="projects-container">
  <h1 className="projects-title">My Projects</h1>
  <div className="projects-grid">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <div className="project-image-container">
          <Image src={project.image} alt="project image" width={100} height={100} />
        </div>
        <h2 className="project-name">{project.name}</h2>
        <p className="project-description">{project.description}</p>
        <Link href={project.url} target="blank" className="project-link">
          Click Here!
        </Link>
      </div>
    ))}
  </div>
</div>
  );
}


export default Project