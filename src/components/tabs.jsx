import { useState } from 'react';
import './tabs.css';

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
                                <h3>About Me</h3>
                                <p>Software Engineer with passion for creating elegant solutions...</p>
                            </div>
                        )}
                        {activeTab === 'Skills' && (
                            <div className="tab-pane">
                                <h3>Skills</h3>
                                <p>Skills</p>
                            </div>
                        )}
                        {activeTab === 'Projects' && (
                            <div className="tab-pane">
                                <h3>Projects Me</h3>
                                <p>Projects</p>
                            </div>
                        )}
                        {activeTab === 'Experience' && (
                            <div className="tab-pane">
                                <h3>Experience</h3>
                                <p>Experience</p>
                            </div>
                        )}
                        {activeTab === 'Education' && (
                            <div className="tab-pane">
                                <h3>Education</h3>
                                <p>Education</p>
                            </div>
                        )}
                        {activeTab === 'Contact' && (
                            <div className="tab-pane">
                                <h3>Contact</h3>
                                <p>Contact</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Tabs;
