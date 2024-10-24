import '@/style/about.css';
import Image from 'next/image';

const About = () => {
  return (
<main className="about-container">
  <div>
    <h1 className="about-title">About Me</h1>

    <div className="picture">
          <Image  src='/picture.jpg' alt='picture' width={200} height={200} className=""></Image>
    </div>
    <p className="about-intro">
      {`Hello, I’m Muhammad Adnan, a passionate Front-end Developer committed to building intuitive, engaging, and high-performance web experiences. Here’s a deeper look into who I am and what drives my work:`}
    </p>

    <div className="about-details">
      <p className="about-paragraph">
        <b>Professional Expertise</b> <br />
        I specialize in web development using <b>HTML, CSS, JavaScript & TypeScript</b> and modern frameworks like <b>Next.js</b>. My focus is on creating sleek, responsive interfaces that deliver a smooth user experience across all devices.
      </p>

      <p className="about-paragraph">
        <b>Design Meets Development</b> <br />
        I have a deep appreciation for both <b>design</b> and <b>functionality.</b> I enjoy the process of turning creative ideas into fully-functional products, ensuring they are not only visually appealing but also easy to navigate for users.
      </p>

      <p className="about-paragraph">
        <b>Performance Optimization</b> <br />
        I believe that speed is critical to good user experience. That’s why I focus on <b>optimizing load times and interactions,</b> ensuring that my projects run efficiently and smoothly, no matter the complexity.
      </p>

      <p className="about-paragraph">
        <b>Lifelong Learner</b> <br />
        Technology evolves rapidly, and I enjoy keeping up with the latest <b>tools, frameworks, and industry trends.</b> Continuous learning is a core part of my approach, helping me improve my skills and bring innovative solutions to the table.
      </p>

      <p className="about-paragraph">
        <b>Team Player and Collaborator</b> <br />
        My experience working closely with <b>designers, developers, and project stakeholders</b> has taught me the value of communication and teamwork. I thrive in collaborative environments and enjoy contributing to group success.
      </p>
    </div>
  </div>
</main>

  )
}

export default About