import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { 
  faHtml5, 
  faCss3Alt, 
  faJsSquare, 
  faReact, 
  faNodeJs, 
  faBootstrap, 
  faEnvira // MongoDB icon is under the "envira" icon name in Font Awesome
} from '@fortawesome/free-brands-svg-icons';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skillset</h2>
      <div className="skills-container">
        {/* Front-End Development */}
        <div className="skills-section">
          <h3>Front-End Development</h3>
          <div className="skills-list">
            <div className="skill">
              <FontAwesomeIcon icon={faHtml5} className="skill-icon" style={{ color: '#E34F26' }} />
              <h4>HTML</h4>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" style={{ color: '#1572B6' }} />
              <h4>CSS</h4>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faJsSquare} className="skill-icon" style={{ color: '#F7DF1E' }} />
              <h4>JavaScript</h4>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faBootstrap} className="skill-icon" style={{ color: '#7952B3' }} />
              <h4>Bootstrap</h4>
            </div>
            <div className="skill">
              <RiTailwindCssFill style={{color: '#38B2AC' , fontSize: '50px'}}/>
              <h4>Tailwind</h4>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faReact} className="skill-icon" style={{ color: '#61DAFB' }} />
              <h4>React.js</h4>
            </div>
          </div>
        </div>

        {/* Back-End Development */}
        <div className="skills-section">
          <h3>Back-End Development</h3>
          <div className="skills-list">
            <div className="skill">
              <FontAwesomeIcon icon={faNodeJs} className="skill-icon" style={{ color: '#339933' }} />
              <h4>Node.js</h4>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faEnvira} className="skill-icon" style={{ color: '#47A248' }} />
              <h4>MongoDB</h4>
            </div>
            <div className="skill">
              <SiExpress style={{ fontSize: '50px', color: '#000000' }} />
              <h4>Express.js</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
