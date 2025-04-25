import { useState } from 'react';
import './tabs.css';
import { bioData, skillsData, projectsData, experienceData, educationData, contactData } from '../data/data.js';

function Tabs() {
    const [activeTab, setActiveTab] = useState(null);  // Changed from 'about' to null

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                <button 
                    className={`tab-button ${activeTab === 'About Me' ? 'active' : ''}`}
                    onClick={() => setActiveTab('About Me')}
                >
                    About Me
                </button>
                <button 
                    className={`tab-button ${activeTab === 'Skills' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Skills')}
                >
                    Skills
                </button>
                <button 
                    className={`tab-button ${activeTab === 'Projects' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Projects')}
                >
                    Projects
                </button>
                <button 
                    className={`tab-button ${activeTab === 'Experience' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Experience')}
                >
                    Experience
                </button>
                <button 
                    className={`tab-button ${activeTab === 'Education' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Education')}
                >
                    Education
                </button>
                
                <button 
                    className={`tab-button ${activeTab === 'Contact' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Contact')}
                >
                    Contact
                </button>
            </div>
            <div className="tab-content">
                {!activeTab ? (
                    <div className="tab-pane welcome-message">
                        <h3>Welcome to My Portfolio!</h3>
                        <p>Please select a tab above to learn more about me and my work.</p>
                        <div className="welcome-icons">
                            <span>👋</span>
                            <span>💻</span>
                            <span>🚀</span>
                        </div>
                    </div>
                ) : (
                    <>
                        {activeTab === 'About Me' && (
                            <div className="tab-pane">
                                <h3>{bioData.title}</h3>
                                <div className="about-me-content">
                                    <p>{bioData.content}</p>
                                </div>
                            </div>
                        )}
                        {activeTab === 'Skills' && (
                            <div className="tab-pane">
                                <h3>{skillsData.title}</h3>
                                <div className="skills-content">
                                    {skillsData.categories.map((category, index) => (
                                        <div key={index} className="skill-category">
                                            <h4>{category.name}</h4>
                                            <div className="skills-list">
                                                {category.skills.map((skill, skillIndex) => (
                                                    <span key={skillIndex} className="skill-item">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'Projects' && (
                            <div className="tab-pane">
                                <h3>{projectsData.title}</h3>
                                <div className="projects-content">
                                    {projectsData.projects.map((project, index) => (
                                        <div key={index} className="project-card">
                                            <h4>{project.title}</h4>
                                            <p className="project-overview">{project.overview}</p>
                                            {project.technologies.length > 0 && (
                                                <div className="project-tech">
                                                    <h5>Technologies Used:</h5>
                                                    <div className="tech-list">
                                                        {project.technologies.map((tech, techIndex) => (
                                                            <span key={techIndex} className="tech-item">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            <div className="project-contributions">
                                                <h5>Key Contributions:</h5>
                                                <p>{project.contributions}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'Experience' && (
                            <div className="tab-pane">
                                <h3>{experienceData.title}</h3>
                                <div className="experience-content">
                                    {experienceData.experiences.map((exp, index) => (
                                        <div key={index} className="experience-card">
                                            <h4>{exp.title}</h4>
                                            <p className="position">{exp.position}</p>
                                            <p className="company">
                                                {exp.company === "European School Radio" ? (
                                                    <a href="https://europeanschoolradio.eu/el" target="_blank" rel="noopener noreferrer">
                                                        {exp.company}
                                                    </a>
                                                ) : (
                                                    exp.company
                                                )}
                                            </p>
                                            <p className="location">{exp.location}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'Education' && (
                            <div className="tab-pane">
                                <h3>{educationData.title}</h3>
                                <div className="education-content">
                                    {educationData.credentials.map((edu, index) => (
                                        <div key={index} className="education-card">
                                            <h4>{edu.credential}</h4>
                                            <p className="institution">
                                                <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer">
                                                    {edu.institution}
                                                </a>
                                            </p>
                                            <p className="department">
                                                <a href={edu.departmentUrl} target="_blank" rel="noopener noreferrer">
                                                    {edu.department}
                                                </a>
                                            </p>
                                            <p className="location">{edu.location}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'Contact' && (
                            <div className="tab-pane">
                                <h3>{contactData.title}</h3>
                                <div className="contact-content">
                                    <div className="contact-card">
                                        <div className="contact-item">
                                            <span className="contact-label">Email:</span>
                                            <a href={`mailto:${contactData.details.email}`}>{contactData.details.email}</a>
                                        </div>
                                        <div className="contact-item">
                                            <span className="contact-label">Phone:</span>
                                            <a href={`tel:${contactData.details.phone}`}>{contactData.details.phone}</a>
                                        </div>
                                        <div className="contact-item">
                                            <span className="contact-label">LinkedIn:</span>
                                            <a href={`https://${contactData.details.linkedin}`} target="_blank" rel="noopener noreferrer">
                                                {contactData.details.linkedin}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Tabs;
