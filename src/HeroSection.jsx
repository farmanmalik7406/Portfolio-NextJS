import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";
import profilePic from "./assets/profile-pic.png";

const HeroSection = () => {
    return (
        <div className="portfolio-root">
            {/* Artistic Header */}
            <header className="header">
                <div className="header-wrapper">
                    <div className="logo artistic-logo">Farman</div>
                    <nav className="nav">
                        <ul className="nav-list">
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero / About Section */}
            <section className="hero section" id="about">
                <div className="hero-art-bg"></div>
                <div className="hero-content">
                    <div className="profile-wrapper artistic-profile">
                        {/* <img src={profilePic} alt="Farman Malik" className="profile-img" /> */}
                    </div>
                    <div className="hero-text">
                        <h1 className="hero-title artistic-gradient-text">Hi, I’m Farman Malik</h1>
                        <h2 className="hero-subtitle">Full Stack Developer & Digital Craftsman</h2>
                        <p className="hero-summary">
                            I blend code and creativity to build robust, beautiful digital experiences.<br/>
                            4+ years of architecting scalable apps, leading integrations, and delivering business impact.<br/>
                            Let’s create something remarkable together.
                        </p>
                        <div className="hero-actions">
                            <a href="#contact" className="btn primary artistic-btn">
                                <FiMessageSquare /> Let’s Collaborate
                            </a>
                            <a href="/Farman-FullStack-Resume.pdf" className="btn secondary artistic-btn" target="_blank" rel="noopener noreferrer">
                                <HiOutlineDocumentText /> View Resume
                            </a>
                            <a href="https://www.linkedin.com/in/farmanmalik" className="social-icon artistic-social" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                            <a href="https://github.com/farmanmalik" className="social-icon artistic-social" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section section" id="skills">
                <div className="container">
                    <div className="section-header">
                        <h2 className="artistic-gradient-text">My Superpowers</h2>
                        <p>From backend logic to pixel-perfect UIs, I bring ideas to life with modern tech and a craftsman’s eye.</p>
                    </div>
                    <div className="skills-grid artistic-skills">
                        <div className="skill-card">
                            <h3>Backend</h3>
                            <ul>
                                <li>.NET Core & C#</li>
                                <li>NodeJS, RESTful APIs</li>
                                <li>Microservices, SQL, MongoDB</li>
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h3>Frontend</h3>
                            <ul>
                                <li>React, Next.js, Angular, Vue</li>
                                <li>TypeScript, JavaScript, HTML/CSS</li>
                                <li>Konva.js, Fabric.js</li>
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h3>Cloud & DevOps</h3>
                            <ul>
                                <li>Azure, Salesforce (Commerce/Service Cloud)</li>
                                <li>Dell Boomi, AS400, Cloudinary, OCI APIs</li>
                                <li>CI/CD, Git, Jira, Postman</li>
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h3>Philosophy</h3>
                            <ul>
                                <li>System Architecture</li>
                                <li>Performance & Security</li>
                                <li>Design Thinking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section section" id="projects">
                <div className="container">
                    <div className="section-header">
                        <h2 className="artistic-gradient-text">Signature Projects</h2>
                        <p>Each project is a canvas—crafted for impact, performance, and delight.</p>
                    </div>
                    <div className="projects-grid artistic-projects">
                        <div className="project-card">
                            <h3>OMS Contract Module</h3>
                            <span className="project-badge">Angular • .NET Core</span>
                            <p>Designed and built a contract module with e-sign, secure order linking, and seamless enterprise integration.</p>
                        </div>
                        <div className="project-card">
                            <h3>Enterprise Maintenance & Integrations</h3>
                            <span className="project-badge">Salesforce • Dell Boomi</span>
                            <p>Optimized architecture, built bi-directional AS400–Salesforce integrations, and maintained Service Cloud at scale.</p>
                        </div>
                        <div className="project-card">
                            <h3>Custom Framing Application</h3>
                            <span className="project-badge">Angular • Next.js • .NET Core</span>
                            <p>Led a cross-functional team to deliver a dual-frontend, image-processing web app for creative professionals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="experience-section section" id="experience">
                <div className="container">
                    <div className="section-header">
                        <h2 className="artistic-gradient-text">Experience</h2>
                        <p>Building, leading, and delivering at the intersection of business and technology.</p>
                    </div>
                    <div className="timeline artistic-timeline">
                        <div className="timeline-item">
                            <div className="timeline-left">
                                <h3>Sourcemash <span className="timeline-badge">Full-Time</span></h3>
                                <div className="badge">Full Stack .NET Developer</div>
                                <span className="date">2022 – Present</span>
                            </div>
                            <div className="timeline-center">
                                <div className="circle"></div>
                            </div>
                            <div className="timeline-right">
                                <ul>
                                    <li>Architected and delivered scalable, secure enterprise solutions</li>
                                    <li>Optimized Salesforce Service Cloud and built AS400–Salesforce integrations</li>
                                    <li>Led project teams, mentored juniors, and drove technical excellence</li>
                                    <li>Implemented contract modules, e-sign, and advanced data flows</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="education-section section" id="education">
                <div className="container">
                    <div className="section-header">
                        <h2 className="artistic-gradient-text">Education</h2>
                        <p>Foundations in computer science, honed by real-world problem solving.</p>
                    </div>
                    <div className="edu-timeline artistic-edu">
                        <div className="edu-item">
                            <div className="edu-content">
                                <h3>BCA – Computer Science</h3>
                                <p className="institution">Hemwati Nandan Bahuguna Garhwal University, Shrinagar, UK</p>
                                <div className="edu-metrics">
                                    <div className="metric"><span>CGPA</span><strong>7.4 / 10</strong></div>
                                    <div className="metric"><span>Year</span><strong>2021</strong></div>
                                </div>
                            </div>
                            <div className="edu-dot"></div>
                        </div>
                        <div className="edu-item">
                            <div className="edu-content">
                                <h3>Intermediate</h3>
                                <p className="institution">Uttrakhand Board</p>
                                <div className="edu-metrics">
                                    <div className="metric"><span>Year</span><strong>2016</strong></div>
                                </div>
                            </div>
                            <div className="edu-dot"></div>
                        </div>
                        <div className="edu-item">
                            <div className="edu-content">
                                <h3>High School</h3>
                                <p className="institution">Uttrakhand Board</p>
                                <div className="edu-metrics">
                                    <div className="metric"><span>Year</span><strong>2014</strong></div>
                                </div>
                            </div>
                            <div className="edu-dot"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section section" id="contact">
                <div className="container">
                    <div className="section-header">
                        <h2 className="artistic-gradient-text">Let’s Connect</h2>
                        <p>Ready to collaborate or want to know more? Drop a message and let’s build something extraordinary.</p>
                    </div>
                    <div className="contact-wrapper artistic-contact">
                        <div className="contact-info">
                            <div className="info-item"><span>Email</span><p>farmanmalik7406@gmail.com</p></div>
                            <div className="info-item"><span>Phone</span><p>9760677406</p></div>
                            <div className="info-item"><span>Location</span><p>Mohali, Punjab, India</p></div>
                        </div>
                        <form className="contact-form">
                            <div className="form-group"><input type="text" placeholder="Your Name" required /></div>
                            <div className="form-group"><input type="email" placeholder="Your Email" required /></div>
                            <div className="form-group"><textarea rows="5" placeholder="Your Message" required /></div>
                            <button type="submit" className="btn primary artistic-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;