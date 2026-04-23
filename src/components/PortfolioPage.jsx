import profileImage from '../assets/profile-pic.png';
import {
  capabilityLanes,
  experienceHighlights,
  featuredProjects,
  profile,
  spotlight,
  trustSignals,
  workflow,
} from '../data/portfolioData';
import {
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';

function PortfolioPage() {
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-brand" href="#top">
            <span className="site-brand__mark">FM</span>
            <span className="site-brand__text">Farman Malik</span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#stack">Stack</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__backdrop" />
          <div className="container hero__layout">
            <div className="hero__content">
              <p className="eyebrow">Full stack developer with product and platform depth</p>
              <h1>{profile.name}</h1>
              <p className="hero__lede">{profile.title}</p>
              <p className="hero__summary">{profile.summary}</p>

              <div className="hero__actions">
                <a className="button button--primary" href="#contact">
                  Start a conversation
                  <FiArrowRight />
                </a>
                <a
                  className="button button--ghost"
                  href={profile.links.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  View resume
                  <FiExternalLink />
                </a>
              </div>

              <div className="hero__meta">
                <span>
                  <FiMapPin />
                  {profile.location}
                </span>
                <span>
                  <FiMail />
                  {profile.email}
                </span>
                <span>
                  <FiPhone />
                  {profile.phone}
                </span>
              </div>
            </div>

            <aside className="hero-card">
              <div className="hero-card__portrait">
                <img src={profileImage} alt={profile.name} />
              </div>

              <div className="hero-card__body">
                <p className="hero-card__label">What I bring</p>
                <div className="hero-card__stats">
                  {profile.stats.map((stat) => (
                    <div className="stat-tile" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <p className="hero-card__availability">{profile.availability}</p>

                <div className="hero-card__links">
                  <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section--compact">
          <div className="container spotlight-grid">
            {spotlight.map((item) => {
              const Icon = item.icon;
              return (
                <article className="spotlight-card" key={item.title}>
                  <span className="spotlight-card__icon">
                    <Icon />
                  </span>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Selected work</p>
              <h2>Projects that show how I solve complex product problems.</h2>
              <p>
                This portfolio focuses on delivery, systems thinking, and practical outcomes, not just a list of
                positions or tools.
              </p>
            </div>

            <div className="project-grid">
              {featuredProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className="project-card" key={project.title}>
                    <div className="project-card__top">
                      <span className="project-card__icon">
                        <Icon />
                      </span>
                      <p className="project-card__eyebrow">{project.eyebrow}</p>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-card__summary">{project.summary}</p>
                    <ul className="detail-list">
                      {project.impact.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="capabilities">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Capability lanes</p>
              <h2>Built to showcase range without feeling like a resume.</h2>
              <p>
                Instead of stacking dates and job bullets, this section frames the work around how I contribute across
                product teams.
              </p>
            </div>

            <div className="lane-grid">
              {capabilityLanes.map((lane) => {
                const Icon = lane.icon;
                return (
                  <article className="lane-card" key={lane.title}>
                    <div className="lane-card__header">
                      <span className="lane-card__icon">
                        <Icon />
                      </span>
                      <div>
                        <h3>{lane.title}</h3>
                        <p>{lane.description}</p>
                      </div>
                    </div>

                    <ul className="detail-list">
                      {lane.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="tech-cloud">
                      {lane.technologies.map((tech) => {
                        const TechIcon = tech.icon;
                        return (
                          <span className="tech-pill" key={tech.name}>
                            <TechIcon />
                            {tech.name}
                          </span>
                        );
                      })}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="stack">
          <div className="container stack-panel">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Technology stack</p>
                <h2>Each technology has a place in the systems I build.</h2>
              </div>
              <p>
                Frontend frameworks for experience design, backend tools for business logic, and platform services for
                integration and delivery.
              </p>
            </div>

            <div className="stack-panel__chips">
              {capabilityLanes.flatMap((lane) => lane.technologies).map((tech) => {
                const TechIcon = tech.icon;
                return (
                  <span className="stack-chip" key={tech.name}>
                    <TechIcon />
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="approach">
          <div className="container approach-layout">
            <div className="section-heading">
              <p className="eyebrow">How I work</p>
              <h2>I like products that are useful, coherent, and ready for real teams.</h2>
            </div>

            <div className="workflow-grid">
              {workflow.map((step, index) => (
                <article className="workflow-card" key={step.title}>
                  <span className="workflow-card__index">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>

            <div className="experience-panel">
              <div className="experience-panel__copy">
                <p className="eyebrow">Current role</p>
                {experienceHighlights.map((item) => (
                  <div key={item.company}>
                    <h3>
                      {item.role} at {item.company}
                    </h3>
                    <p className="experience-panel__period">{item.period}</p>
                    <ul className="detail-list">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="signal-grid">
                {trustSignals.map((signal) => {
                  const Icon = signal.icon;
                  return (
                    <span className="signal-pill" key={signal.label}>
                      <Icon />
                      {signal.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-banner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Looking for someone who can build, connect, and polish the whole product flow?</h2>
              <p>I'm best in projects where strong engineering needs to meet clear UX and dependable delivery.</p>
            </div>

            <div className="contact-banner__actions">
              <a className="button button--primary" href={`mailto:${profile.email}`}>
                <FiMail />
                Email me
              </a>
              <a className="button button--ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PortfolioPage;
