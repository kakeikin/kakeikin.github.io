import heroImg from './assets/hero.png'
import './App.css'

const projects = [
  {
    title: 'Personal Finance App',
    type: 'Cloud application',
    description:
      'A serverless finance workspace for importing transactions, reviewing spending, and turning monthly activity into useful summaries.',
    stack: ['React', 'AWS CDK', 'Lambda', 'DynamoDB'],
    link: 'https://github.com/kakeikin',
  },
  {
    title: 'Portfolio Website',
    type: 'Personal site',
    description:
      'This site: a focused place for notes, project work, and the story behind what I am building next.',
    stack: ['Vite', 'React', 'GitHub Pages'],
    link: 'https://github.com/kakeikin/kakeikin.github.io',
  },
  {
    title: 'Learning Notes',
    type: 'Writing and experiments',
    description:
      'Short technical notes from backend systems, data tooling, and product-minded engineering practice.',
    stack: ['Systems', 'Data', 'Product'],
    link: 'https://github.com/kakeikin',
  },
]

const highlights = [
  'Backend and cloud systems',
  'Finance and data tools',
  'Calm, usable interfaces',
]

function App() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Kakeikin home">
          Kakeikin
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software engineering portfolio</p>
          <h1>Jiaxin builds practical tools for money, data, and daily decisions.</h1>
          <p className="hero-text">
            I like turning messy real-world workflows into clear systems: cloud
            backends, thoughtful product details, and interfaces that help people
            make sense of information.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="primary-link" href="#projects">
              View projects
            </a>
            <a
              className="secondary-link"
              href="https://github.com/kakeikin"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Profile snapshot">
          <img src={heroImg} alt="" />
          <div className="snapshot">
            <span>Currently</span>
            <strong>Building a personal finance app</strong>
          </div>
        </aside>
      </section>

      <section className="highlights" aria-label="Focus areas">
        {highlights.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-footer">
                <ul aria-label={`${project.title} technology stack`}>
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Open
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's build something clear and useful.</h2>
        </div>
        <div className="contact-links" aria-label="Contact links">
          <a href="mailto:jiaxinjia928@gmail.com">Email</a>
          <a href="https://github.com/kakeikin" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jiajiaxin0928" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
