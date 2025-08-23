import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLaptopCode } from "react-icons/fa";
import { MdWork, MdBusinessCenter } from "react-icons/md";

function WorkExperience() {
  const workData = [
    {
      id: 1,
      position: "Front-End Developer",
      company: "Infollective Solutions Sdn. Bhd.",
      duration: "Jan 2025 - Present",
      type: "Full-time",
      description: "Developed and maintained scalable, modular front-end features using Next.js, React, and TypeScript for a complex ERP system. Implemented dynamic forms, role-based access control, and reusable UI components, enhancing maintainability and reducing development time for new features by 30%. Collaborated cross-functionally with backend, QA, and product teams to translate business requirements into responsive, accessible UIs with optimized performance and SEO using server-side rendering and API integration.",
      technologies: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
      icon: <FaLaptopCode />,
      color: "#007bff"
    },
    {
      id: 2,
      position: "Repayment Section Intern",
      company: "Yayasan Sarawak",
      duration: "Mar 2024 - Jun 2024",
      type: "Internship",
      description: "Assisted in repayment operations, including generating and managing repayment notices. Automated the processing of repayment letters by developing an app to scan and transfer data into Google Sheets. Provided support in streamlining workflows for the repayment section.",
      technologies: ["Android Studio", "Kotlin", "Google Sheets API"],
      icon: <MdBusinessCenter />,
      color: "#00d4aa"
    },
    {
      id: 3,
      position: "I.T Department Intern",
      company: "Pustaka Negeri Sarawak",
      duration: "Sep 2021 - Feb 2022",
      type: "Internship",
      description: "Assisted with IT operations, including software installation and troubleshooting technical issues for staff. Developed an online system for generating certificates for event participants, reducing manual workload. Supported the maintenance of IT infrastructure and provided solutions to daily technical challenges.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      icon: <MdWork />,
      color: "#6a5acd"
    }
  ];

  return (
    <Container id="work-experience">
      <Row style={{ justifyContent: "center", paddingTop: "100px" }}>
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
