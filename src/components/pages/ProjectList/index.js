import React, { useState } from "react";
import Project from "../Project";

const ProjectList = ({ name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: "Hidden Gems",
      url: "https://thawing-springs-82201.herokuapp.com/",
      tools: "JavaScript/SQL/Sequelize/Handlebars.js/Express.js/CSS",
      img: "../../../assets/project-imgs/0.jpg",
      description:
        "A hub for posting and finding unknown wonders across the world. Users can sign in, comment, search, and vote.",
    },
    {
      name: "National Park Picker",
      url: "https://joshuad1590.github.io/national-park-picker/",
      tools: "Javascript/HTML/CSS",
      img: "../../../assets/project-imgs/1.jpg",
      description:
        "Provides maps, activities, photos, upcoming tours, alerts, and resources for every US National Park.",
    },
    {
      name: "On The Code Blog Site",
      url: "https://willjduncan-on-the-code.herokuapp.com/",
      tools: "JavaScript/SQL/Sequelize/Handlebars.js/Express.js",
      img: "../../../assets/project-imgs/2.jpg",
      description:
        "A site for logging in and posting blogs and responses about anything code-related.",
    },
    {
      name: "Budget Tracker",
      url: "https://secure-hollows-12001.herokuapp.com/",
      tools: "PWA",
      img: "../../../assets/project-imgs/3.jpg",
      description:
        "A downloadable app that works offline. Users add and subtract funds and see the changing balance on a graph.",
    },
    {
      name: "Note Taker",
      url: "https://willjduncan-note-taker.herokuapp.com/",
      tools: "Node.js/Express.js",
      img: "../../../assets/project-imgs/4.jpg",
      description: "A site that stores and saves notes.",
    },
    {
      name: "Pizza Hunt",
      url: "https://stark-meadow-40862.herokuapp.com/",
      tools: "Mongoose/NoSQL/Express.js/IndexedDB",
      img: "../../../assets/project-imgs/5.jpg",
      description:
        "An app where users can create their favorite pizzas with whatever toppings they wish and can comment on the creations of others.",
    },
  ]);

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Project onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="project-basin">
        <h2 className="portfolio-header">Notable Projects</h2>
        {projects.map((project, i) => (
          <div className="card" key={project.name}>
            <img
              src={require(`../../../assets/project-imgs/${i}.jpg`)}
              alt={project.name}
              className="img-fluid"
              onClick={() => toggleModal(project, i)}
              />
              <a href={project.url} target="_blank">
              <p>{project.name}</p>
              </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
