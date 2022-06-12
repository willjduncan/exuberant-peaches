import React from 'react';

const Project = ({ onClose, currentProject }) => {
  const { name, url, description, tools, index } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <a href={url} target="_blank" rel="noreferrer" >
          <h3 className="modalTitle">{name}</h3>
          </a>
        <img
          src={require(`../../../assets/project-imgs/${index}.jpg`)}
          alt={name}
          className="project-img"
        />
        <p>{description}</p>
        <p>Made with {tools}</p>
        <button type="button" className="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Project;