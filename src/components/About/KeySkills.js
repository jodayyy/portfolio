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
  FaJava,
  FaMobile
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiMongodb, 
  SiTypescript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiFlutter,
  SiFirebase,
  SiKotlin,
  SiAndroidstudio,
  SiPhp,
  SiFlask,
  SiTailwindcss,
  SiTensorflow,
  SiGooglesheets
} from "react-icons/si";

function KeySkills() {
  const skillCategories = {
    programmingLanguages: {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "JavaScript", level: "Advanced", icon: <SiJavascript />, color: "#f7df1e" },
        { name: "TypeScript", level: "Advanced", icon: <SiTypescript />, color: "#3178c6" },
        { name: "Python", level: "Advanced", icon: <SiPython />, color: "#3776ab" },
        { name: "Kotlin", level: "Intermediate", icon: <SiKotlin />, color: "#7f52ff" },
        { name: "PHP", level: "Intermediate", icon: <SiPhp />, color: "#777bb4" },
        { name: "Java", level: "Intermediate", icon: <FaJava />, color: "#007396" }
      ]
    },
    frontend: {
      title: "Frontend Development",
      icon: <FaPalette />,
      skills: [
        { name: "React.js", level: "Advanced", icon: <FaReact />, color: "#61dafb" },
        { name: "Next.js", level: "Advanced", icon: <SiNextdotjs />, color: "#000000" },
        { name: "HTML5", level: "Advanced", icon: <FaHtml5 />, color: "#e34f26" },
        { name: "CSS3", level: "Advanced", icon: <FaCss3Alt />, color: "#1572b6" },
        { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss />, color: "#06b6d4" },
        { name: "Bootstrap", level: "Intermediate", icon: <FaBootstrap />, color: "#7952b3" }
      ]
    },
    backend: {
      title: "Backend & Frameworks",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", level: "Advanced", icon: <FaNodeJs />, color: "#339933" },
        { name: "Flask", level: "Intermediate", icon: <SiFlask />, color: "#000000" },
        { name: "Express.js", level: "Beginner", icon: <SiExpress />, color: "#000000" }
      ]
    },
    mobileCloud: {
      title: "Mobile & Cloud",
      icon: <FaMobile />,
      skills: [
        { name: "Flutter", level: "Intermediate", icon: <SiFlutter />, color: "#02569b" },
        { name: "Android Studio", level: "Intermediate", icon: <SiAndroidstudio />, color: "#3ddc84" },
        { name: "Firebase", level: "Intermediate", icon: <SiFirebase />, color: "#ffca28" },
        { name: "Google Sheets API", level: "Intermediate", icon: <SiGooglesheets />, color: "#34a853" }
      ]
    },
    database: {
      title: "Database & Storage",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL", level: "Advanced", icon: <SiMysql />, color: "#4479a1" },
        { name: "Room Database", level: "Intermediate", icon: <FaDatabase />, color: "#ff5722" },
        { name: "PostgreSQL", level: "Beginner", icon: <SiPostgresql />, color: "#336791" },
        { name: "MongoDB", level: "Beginner", icon: <SiMongodb />, color: "#47a248" },
      ]
    },
    aiData: {
      title: "AI & Data Science",
      icon: <SiTensorflow />,
      skills: [
        { name: "Machine Learning", level: "Intermediate", icon: <SiTensorflow />, color: "#ff6f00" },
        { name: "Deep Learning", level: "Intermediate", icon: <SiTensorflow />, color: "#ff6f00" },
        { name: "Speech Recognition", level: "Intermediate", icon: <SiPython />, color: "#3776ab" },
        { name: "Data Analysis", level: "Beginner", icon: <SiPython />, color: "#3776ab" }
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
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={12}>
          <h1 className="project-heading" style={{ marginBottom: "30px" }}>
            Technical <strong className="purple">Skills</strong>
          </h1>
          
          {/* All 6 Categories in Responsive Grid */}
          <Row className="skills-category-row">
            <Col xl={4} lg={6} md={6} className="skills-category-col">
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
            
            <Col xl={4} lg={6} md={6} className="skills-category-col">
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

            <Col xl={4} lg={6} md={6} className="skills-category-col">
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
            
            <Col xl={4} lg={6} md={6} className="skills-category-col">
              <div className="skills-category">
                <h2 className="skills-category-title">
                  {skillCategories.mobileCloud.icon}
                  {skillCategories.mobileCloud.title}
                </h2>
                <div className="skills-grid">
                  {skillCategories.mobileCloud.skills.map((skill, index) => (
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

            <Col xl={4} lg={6} md={6} className="skills-category-col">
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

            <Col xl={4} lg={6} md={6} className="skills-category-col">
              <div className="skills-category">
                <h2 className="skills-category-title">
                  {skillCategories.aiData.icon}
                  {skillCategories.aiData.title}
                </h2>
                <div className="skills-grid">
                  {skillCategories.aiData.skills.map((skill, index) => (
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
