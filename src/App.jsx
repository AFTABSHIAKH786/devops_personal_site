
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <h1>Shaikh Aftab</h1>
        <p>DevOps Engineer</p>
        <p>Specializing in automation, cloud infrastructure, and CI/CD pipelines</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Passionate DevOps professional with expertise in building scalable, reliable, and secure infrastructure.
          Experienced in containerization, orchestration, and implementing best practices for software delivery.
        </p>
      </section>

      <section className="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Containerization & Orchestration</h3>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Helm</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>CI/CD</h3>
            <ul>
              <li>Jenkins</li>
              <li>GitLab CI</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Cloud Platforms</h3>
            <ul>
              <li>AWS</li>
              <li>Azure</li>
              <li>GCP</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Infrastructure as Code</h3>
            <ul>
              <li>Terraform</li>
              <li>Ansible</li>
              <li>CloudFormation</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Monitoring & Logging</h3>
            <ul>
              <li>Prometheus</li>
              <li>Grafana</li>
              <li>ELK Stack</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Version Control</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Bitbucket</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project">
            <h3>Automated CI/CD Pipeline</h3>
            <p>Built a complete CI/CD pipeline using Jenkins, Docker, and Kubernetes for microservices deployment.</p>
            <a href="#" target="_blank">View on GitHub</a>
          </div>
          <div className="project">
            <h3>Cloud Infrastructure Setup</h3>
            <p>Designed and implemented scalable infrastructure on AWS using Terraform and Ansible.</p>
            <a href="#" target="_blank">View on GitHub</a>
          </div>
          <div className="project">
            <h3>Monitoring Dashboard</h3>
            <p>Created a comprehensive monitoring solution with Prometheus, Grafana, and custom exporters.</p>
            <a href="#" target="_blank">View on GitHub</a>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Let's connect!</p>
        <div className="contact-links">
          <a href="mailto:aftabshaikh907860@gmail.com">Email</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        </div>
      </section>
    </div>
  )
}

export default App
