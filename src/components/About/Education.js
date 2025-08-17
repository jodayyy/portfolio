import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Universiti Malaysia Sarawak (UNIMAS)",
      duration: "2020 - 2024",
      description: "Specialized in Software Engineering and Data Structures. Graduated with First Class Honours. Final year project focused on web application development using modern frameworks.",
      icon: <FaGraduationCap />,
      gpa: "CGPA: 3.75/4.00"
    },
    {
      id: 2,
      degree: "Foundation in Science",
      institution: "Universiti Malaysia Sarawak (UNIMAS)",
      duration: "2019 - 2020",
      description: "Foundation program covering Mathematics, Physics, Chemistry, and Computer Science fundamentals. Achieved Dean's List recognition for academic excellence.",
      icon: <FaUniversity />,
      gpa: "CGPA: 3.85/4.00"
    },
    {
      id: 3,
      degree: "Sijil Pelajaran Malaysia (SPM)",
      institution: "SMK Kuching High School",
      duration: "2014 - 2018",
      description: "Completed secondary education with focus on Science stream. Active participant in Mathematics and Computer Science competitions at state level.",
      icon: <FaSchool />,
      gpa: "Grade: 8A+ 2A"
    }
  ];

  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={12}>
          <h1 className="project-heading" style={{ marginBottom: "50px" }}>
            My <strong className="purple">Educational Journey</strong>
          </h1>
          
          <div className="education-timeline">
            {educationData.map((edu, index) => (
              <div key={edu.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-icon">
                    {edu.icon}
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <h3 className="timeline-degree">{edu.degree}</h3>
                      <span className="timeline-duration">{edu.duration}</span>
                    </div>
                    <h4 className="timeline-institution">{edu.institution}</h4>
                    <p className="timeline-description">{edu.description}</p>
                    <div className="timeline-gpa">
                      <strong>{edu.gpa}</strong>
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

export default Education;
