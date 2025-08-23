import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My full name is
            <span className="purple"> Mohamad Johari bin Mohd Sabri, </span>
            and I am from 
            <span className="purple"> Kuching, Sarawak. </span>
            Before I discovered computer science, I was a
            <span className="purple"> curious learner with a strong interest in science and problem-solving</span>
            . My love for puzzles and video games helped develop
            <span className="purple"> my critical thinking skills</span>
            . When I was introduced to the field of computer science while researching my study options, I immediately knew it was the 
            <span className="purple"> perfect path that matched both my curiosity and the way I think.</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;