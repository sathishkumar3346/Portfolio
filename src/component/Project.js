import React from 'react';
import './Project.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Tic Tac Toe</h3>
          <p>A classic Tic Tac Toe game where two players can play, determining the winner. The game involves nine moves and showcases the winner using JavaScript.</p>
        </div>
        <div className="project">
          <h3>BILLING</h3>
          <p>Generates a supermarket bill including product name, price, tax, total, and additional details. This project is implemented using JavaScript.</p>
        </div>
        <div className="project">
          <h3>FIGMASTORE</h3>
          <p>An e-commerce site containing product details and images, built using HTML, CSS, and Bootstrap with responsiveness.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
