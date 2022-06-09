import React from 'react';

const Project = ({ onClose, currentProject }) => {
  const { name, description, url, img, index } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
        //   src={require(`../../assets/project-imgs/${name}.jpg`).default}
        src = {img}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Project;