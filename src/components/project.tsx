import Image from "next/image";
import Link from "next/link";
import '@/style/project.css';

const projects = [
  { name: "My Portfolio Website", description: "Number Guessing Game", image: "/img/todoapp.png", url: "https://github.com/madnan-git/myportfolio" },
  { name: "ATM Program", description: "Simple Command Line ATM Program", image: "/img/todoapp.png", url: "https://github.com/madnan-git/NodeProjects/tree/main/NP_ATM" },
  { name: "Currency Converter Program", description: "Currency Convertor Program", image: "/img/todoapp.png", url: "https://github.com/madnan-git/NodeProjects/tree/main/NP_CurrencyConverter"  },
  { name: "Number Guessing Game", description: "Number Guessing Game", image: "/img/todoapp.png", url: "https://github.com/madnan-git/NodeProjects/tree/main/NP_numberGuessingGame" },
  { name: "Simple Calculator", description: "Simple Calculator", image: "/img/todoapp.png", url: "https://github.com/madnan-git/NodeProjects/tree/main/NP_simpleCalc" },
  { name: "To Do App", description: "To Do App", image: "/img/todoapp.png", url: "https://github.com/madnan-git/NodeProjects/tree/main/NP_todo" },
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