import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaCode,
  FaServer,
  FaPalette,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJava
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiMongodb, 
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiNextdotjs
} from "react-icons/si";

function KeySkills() {
  const skillCategories = {
    programmingLanguages: {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "JavaScript", level: "Advanced", icon: <SiJavascript />, color: "#f7df1e" },
        { name: "TypeScript", level: "Intermediate", icon: <SiTypescript />, color: "#3178c6" },
        { name: "Python", level: "Intermediate", icon: <SiPython />, color: "#3776ab" },
        { name: "Java", level: "Intermediate", icon: <FaJava />, color: "#ed8b00" },
        { name: "C++", level: "Beginner", icon: <SiCplusplus />, color: "#00599c" }
      ]
    },
    database: {
      title: "Database & Storage",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", level: "Advanced", icon: <SiMongodb />, color: "#47a248" },
        { name: "MySQL", level: "Intermediate", icon: <SiMysql />, color: "#4479a1" },
        { name: "PostgreSQL", level: "Intermediate", icon: <SiPostgresql />, color: "#336791" }
      ]
    },
    frontend: {
      title: "Frontend Development",
      icon: <FaPalette />,
      skills: [
        { name: "React.js", level: "Advanced", icon: <FaReact />, color: "#61dafb" },
        { name: "HTML5", level: "Advanced", icon: <FaHtml5 />, color: "#e34f26" },
        { name: "CSS3", level: "Advanced", icon: <FaCss3Alt />, color: "#1572b6" },
        { name: "Bootstrap", level: "Intermediate", icon: <FaBootstrap />, color: "#7952b3" },
        { name: "Next.js", level: "Intermediate", icon: <SiNextdotjs />, color: "#000000" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", level: "Advanced", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", level: "Advanced", icon: <SiExpress />, color: "#000000" }
      ]
    }
  };

  const getLevelColor = (level) => {
    switch(level) {
      case "Advanced": return "#00d4aa";
      case "Intermediate": return "#feca57";
      case "Beginner": return "#ff6b6b";
      default: return "#ccc";
    }
  };

  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "30px", paddingTop: "30px" }}>
        <Col md={12}>
          <h1 className="project-heading" style={{ marginBottom: "30px" }}>
            Technical <strong className="purple">Skills</strong>
          </h1>
          
          {/* All 4 Categories in One Row */}
          <Row className="skills-category-row">
            <Col xl={3} lg={6} md={6} className="skills-category-col">
              <div className="skills-category">
                <h2 className="skills-category-title">
                  {skillCategories.programmingLanguages.icon}
                  {skillCategories.programmingLanguages.title}
                </h2>
                <div className="skills-grid">
                  {skillCategories.programmingLanguages.skills.map((skill, index) => (
                    <div key={index} className="skill-item-new">
                      <div className="skill-icon-new" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-content">
                        <h4 className="skill-name-new">{skill.name}</h4>
                        <span 
                          className="skill-level" 
                          style={{ color: getLevelColor(skill.level) }}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            
            <Col xl={3} lg={6} md={6} className="skills-category-col">
              <div className="skills-category">
                <h2 className="skills-category-title">
                  {skillCategories.frontend.icon}
                  {skillCategories.frontend.title}
                </h2>
                <div className="skills-grid">
                  {skillCategories.frontend.skills.map((skill, index) => (
                    <div key={index} className="skill-item-new">
                      <div className="skill-icon-new" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-content">
                        <h4 className="skill-name-new">{skill.name}</h4>
                        <span 
                          className="skill-level" 
                          style={{ color: getLevelColor(skill.level) }}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            <Col xl={3} lg={6} md={6} className="skills-category-col">
              <div className="skills-category">
                <h2 className="skills-category-title">
                  {skillCategories.backend.icon}
                  {skillCategories.backend.title}
                </h2>
                <div className="skills-grid">
                  {skillCategories.backend.skills.map((skill, index) => (
                    <div key={index} className="skill-item-new">
                      <div className="skill-icon-new" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-content">
                        <h4 className="skill-name-new">{skill.name}</h4>
                        <span 
                          className="skill-level" 
                          style={{ color: getLevelColor(skill.level) }}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            
            <Col xl={3} lg={6} md={6} className="skills-category-col">
              <div className="skills-category">
                <h2 className="skills-category-title">
                  {skillCategories.database.icon}
                  {skillCategories.database.title}
                </h2>
                <div className="skills-grid">
                  {skillCategories.database.skills.map((skill, index) => (
                    <div key={index} className="skill-item-new">
                      <div className="skill-icon-new" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-content">
                        <h4 className="skill-name-new">{skill.name}</h4>
                        <span 
                          className="skill-level" 
                          style={{ color: getLevelColor(skill.level) }}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default KeySkills;
