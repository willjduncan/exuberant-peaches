import React, { useState } from "react";
import Project from "../Project";

const ProjectList = ({ name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: "Truck It Up",
      url: "https://peaceful-plains-64054.herokuapp.com/",
      repo: "https://github.com/willjduncan/trucked-up.git",
      tools: "Mongoose/Express/React/Node/MapBox/Geocoding API/GraphQL",
      img: "../../../assets/project-imgs/0.jpg",
      description:
        "A trucking app for creating and delegating jobs by Dispatchers to various truckers. Truckers can then accept the job and confirm when the delivery has been completed.",
    },
    {
      name: "Hidden Gems",
      url: "https://thawing-springs-82201.herokuapp.com/",
      repo: "https://github.com/willjduncan/Hidden-Gems.git",
      tools: "JavaScript/SQL/Sequelize/Handlebars.js/Express.js/CSS",
      img: "../../../assets/project-imgs/1.jpg",
      description:
        "A hub for posting and finding unknown wonders across the world. Users can sign in, comment, search, and vote.",
    },
    {
      name: "National Park Picker",
      url: "https://joshuad1590.github.io/national-park-picker/",
      repo: "https://github.com/joshuad1590/national-park-picker.git",
      tools: "Javascript/HTML/CSS",
      img: "../../../assets/project-imgs/2.jpg",
      description:
        "Provides maps, activities, photos, upcoming tours, alerts, and resources for every US National Park.",
    },
    {
      name: "On The Code Blog Site",
      url: "https://willjduncan-on-the-code.herokuapp.com/",
      repo: "https://github.com/willjduncan/On-the-Code-Blog-Site.git",
      tools: "JavaScript/SQL/Sequelize/Handlebars.js/Express.js",
      img: "../../../assets/project-imgs/3.jpg",
      description:
        "A site for logging in and posting blogs and responses about anything code-related.",
    },
    {
      name: "Budget Tracker",
      url: "https://secure-hollows-12001.herokuapp.com/",
      repo: "https://github.com/willjduncan/cuddly-pinnacle.git",
      tools: "PWA",
      img: "../../../assets/project-imgs/4.jpg",
      description:
        "A downloadable app that works offline. Users add and subtract funds and see the changing balance on a graph.",
    },
    {
      name: "Note Taker",
      url: "https://willjduncan-note-taker.herokuapp.com/",
      repo: "https://github.com/willjduncan/note-taker.git",
      tools: "Node.js/Express.js",
      img: "../../../assets/project-imgs/5.jpg",
      description: "A site that stores and saves notes.",
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
              className="card-img"
              onClick={() => toggleModal(project, i)}
              />
              <a href={project.url} target="_blank" rel="noreferrer">
              <p>{project.name}</p>
              </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
