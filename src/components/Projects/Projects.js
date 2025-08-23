import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SC2T from "../../Assets/Projects/SC2T-User-Train.png";
import SimpanNow from "../../Assets/Projects/SimpanNow.png";
import SER from "../../Assets/Projects/SER.png";
import FAT from "../../Assets/Projects/FAT.png";
import BDVA from "../../Assets/Projects/BDVA.png";
import Questio from "../../Assets/Projects/Questio.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent<strong className="purple"> Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SC2T}
              title="StarCraft 2 Training System"
              description="A web-based application for StarCraft 2 players to train and improve their gameplay by competing against an AI developed for this system. Features include performance tracking, gameplay analysis, and strategy enhancement through repeated practice."
              ghLink="https://github.com/jodayyy/StarCraft-2-Training-System-SC2T"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SER}
              title="Speech Emotion Recognition"
              description="My final year project during my bachelor's degree. A deep learning-based project for recognizing emotions from speech. A Flask web application for real-time and file-based emotion recognition using pre-trained models. Supports Neutral, Happy, Sad, and Angry emotions."
              ghLink="https://github.com/jodayyy/Speech-Emotion-Recognition-SER"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FAT}
              title="Frequency Analysis Tool"
              description="A Python-based tool for frequency analysis and decryption of simple substitution ciphers. Features include single character, digram, and trigram analysis, as well as Caesar cipher decryption. Developed as part of an assignment, this tool was the only functional program in the class."
              ghLink="https://github.com/jodayyy/Frequency-Analysis-Tool"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BDVA}
              title="Blood Donor View App"
              description="A foundational Android application developed as a freelance project for managing and viewing blood donor and donation event data. Features include donor profile management, donation event tracking, and an interactive calendar. Built with Room database for offline storage, with potential for online database integration and role-based access."
              ghLink="https://github.com/jodayyy/Blood-Donor-View-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SimpanNow}
              title="SimpanNow"
              description="A simple and intuitive personal finance management app built with Flutter and Firebase. Features include transaction management, account handling, financial summaries, historical trends, and responsive design for web and mobile platforms."
              ghLink="https://github.com/jodayyy/simpannow"
              demoLink="https://simpannow.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Questio}
              title="Questio (Ongoing)"
              description="My next project would be a web application designed to help users create and manage tasks while incorporating a self-reward system. Users can assign rewards to tasks for motivation and productivity."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;