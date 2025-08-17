import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBriefcase, FaCode, FaLaptopCode, FaUsers } from "react-icons/fa";
import { MdWork, MdBusinessCenter } from "react-icons/md";

function WorkExperience() {
  const workData = [
    {
      id: 1,
      position: "Full Stack Developer",
      company: "TechSolutions Malaysia",
      duration: "Jan 2024 - Present",
      type: "Full-time",
      description: "Developing and maintaining web applications using React.js, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions for clients in various industries.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "AWS"],
      icon: <FaLaptopCode />,
      color: "#00d4aa"
    },
    {
      id: 2,
      position: "Software Engineering Intern",
      company: "Digital Innovations Sdn Bhd",
      duration: "Jun 2023 - Dec 2023",
      type: "Internship",
      description: "Assisted in developing mobile applications using React Native. Participated in code reviews, testing, and debugging processes. Gained experience in agile development methodologies.",
      technologies: ["React Native", "JavaScript", "Firebase", "Git"],
      icon: <FaCode />,
      color: "#ff6b6b"
    },
    {
      id: 3,
      position: "Web Development Freelancer",
      company: "Self-Employed",
      duration: "Mar 2022 - May 2023",
      type: "Freelance",
      description: "Created custom websites for local businesses and startups. Specialized in responsive design and e-commerce solutions. Managed client relationships and project timelines independently.",
      technologies: ["HTML/CSS", "JavaScript", "WordPress", "PHP"],
      icon: <FaBriefcase />,
      color: "#4ecdc4"
    },
    {
      id: 4,
      position: "IT Support Assistant",
      company: "UNIMAS Computer Center",
      duration: "Sep 2021 - Feb 2022",
      type: "Part-time",
      description: "Provided technical support to students and faculty. Maintained computer labs and assisted with network troubleshooting. Developed communication skills through customer service interactions.",
      technologies: ["Windows Server", "Network Administration", "Hardware Maintenance"],
      icon: <MdWork />,
      color: "#a55eea"
    }
  ];

  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "50px" }}>
        <Col md={12}>
          <h1 className="project-heading" style={{ marginBottom: "50px" }}>
            Professional <strong className="purple">Experience</strong>
          </h1>
          
          <div className="work-timeline">
            {workData.map((work, index) => (
              <div key={work.id} className="work-timeline-item">
                <div className="work-timeline-marker" style={{ backgroundColor: work.color }}>
                  <div className="work-timeline-icon">
                    {work.icon}
                  </div>
                </div>
                
                <div className="work-timeline-content">
                  <div className="work-card" style={{ borderLeftColor: work.color }}>
                    <div className="work-header">
                      <div className="work-title-section">
                        <h3 className="work-position">{work.position}</h3>
                        <h4 className="work-company">{work.company}</h4>
                      </div>
                      <div className="work-meta">
                        <span className="work-duration">{work.duration}</span>
                      </div>
                    	<div className="work-meta">
                        <span className="work-type" style={{ backgroundColor: work.color }}>
                          {work.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="work-description">{work.description}</p>
                    
                    <div className="work-technologies">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {work.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag" style={{ borderColor: work.color }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkExperience;
