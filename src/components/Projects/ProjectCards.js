import React, { useState } from "react";
import { BsGithub, BsEyeFill } from "react-icons/bs";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card className="project-card-view">
        <div className="project-img-container">
          <Card.Img 
            variant="top" 
            src={props.imgPath} 
            alt="card-img" 
            className="project-img clickable-img" 
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      <Card.Body className="project-card-body">
        <Card.Title className="project-title">{props.title}</Card.Title>
        <Card.Text className="project-description">
          {props.description}
        </Card.Text>
        <div className="project-buttons">
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              <BsGithub /> &nbsp;
              GitHub
            </Button>
          )}
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              <BsEyeFill /> &nbsp;
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>

    {/* Image Modal Popup */}
    <Modal 
      show={showModal} 
      onHide={handleCloseModal} 
      centered 
      size="lg"
      className="image-modal"
    >
      <Modal.Header closeButton className="image-modal-header">
        <Modal.Title className="image-modal-title">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="image-modal-body">
        <img 
          src={props.imgPath} 
          alt={props.title}
          className="modal-project-img"
        />
      </Modal.Body>
    </Modal>
  </>
  );
}

export default ProjectCards;