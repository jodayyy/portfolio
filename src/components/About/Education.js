import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Science (Hons.)",
      institution: "Universiti Teknologi MARA (UiTM)",
      duration: "2020 - 2024",
      description: "Bachelor's program focused on software engineering, artificial intelligence, and data science. Covered programming, databases, operating systems, algorithms, computer security, and included practical experience through a 14-week industrial attachment and a final-year project.",
      icon: <FaGraduationCap />,
      gpa: "CGPA: 3.30"
    },
    {
      id: 2,
      degree: "Diploma in Computer Science",
      institution: "Universiti Teknologi MARA (UiTM)",
      duration: "2019 - 2020",
      description: "Diploma program covering programming, data structures, databases, operating systems, web and mobile development, and networking. Included mathematics, entrepreneurship, Islamic studies, and hands-on experience through an industrial attachment.",
      icon: <FaUniversity />,
      gpa: "CGPA: 3.35"
    },
    {
      id: 3,
      degree: "Sijil Pelajaran Malaysia (SPM)",
      institution: "SMK Tun Abang Haji Openg",
      duration: "2014 - 2018",
      description: "Completed secondary education in the literature stream, focusing on core subjects such as Bahasa Melayu, English, Mathematics, and History, alongside elective subjects. Developed foundational skills in critical thinking, communication, and problem-solving, achieving a balanced academic performance.",
      icon: <FaSchool />,
      gpa: "Grade: 4A 4B 1C"
    }
  ];

  return (
    <Container id="education">
      <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "100px" }}>
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
