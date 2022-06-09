import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({currentProject}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: 'Hidden Gems',
      url: 'https://thawing-springs-82201.herokuapp.com/',
      tools: 'JavaScript/SQL/Sequelize/Handlebars.js/Express.js/CSS',
      img: '../../assets/project-imgs/hidden-gems.jpg',
      description:
        'A hub for posting and finding unknown wonders across the world. Users can sign in, comment, search, and vote.'
    },
    {
      name: 'National Park Picker',
      url: 'https://joshuad1590.github.io/national-park-picker/',
      tools: 'Javascript/HTML/CSS',
      img: '../../assets/project-imgs/nat-park-picker.jpeg',
      description:
        'Provides maps, activities, photos, upcoming tours, alerts, and resources for every US National Park.'
    },
    {
      name: 'On The Code Blog Site',
      url: 'https://willjduncan-on-the-code.herokuapp.com/',
      tools: 'JavaScript/SQL/Sequelize/Handlebars.js/Express.js',
      img: '../../assets/project-imgs/on-the-code.jpg',
      description:
        'A site for logging in and posting blogs and responses about anything code-related.'
    },
    {
      name: 'Budget Tracker',
      url: 'https://secure-hollows-12001.herokuapp.com/',
      tools: 'PWA',
      img: '../../assets/project-imgs/budget.jpg',
      description:
        'A downloadable app that works offline. Users add and subtract funds and see the changing balance on a graph.'
    },
    {
      name: 'Note Taker',
      url: 'https://willjduncan-note-taker.herokuapp.com/',
      tools: 'Node.js/Express.js',
      img: '../../assets/project-imgs/notetaker.jpg',
      description:
        'A site that stores and saves notes.'
    },
    {
      name: 'Pizza Hunt',
      url: 'https://stark-meadow-40862.herokuapp.com/',
      tools: 'Mongoose/NoSQL/Express.js/IndexedDB',
      img: '../../assets/project-imgs/pizza.jpg',
      description:
        'An app where users can create their favorite pizzas with whatever toppings they wish and can comment on the creations of others.'
    }
  ]);

  const currentProject = project.filter(project => project.name === name);

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;