import React from "react";
import coverImage from "../../../assets/cover/cover-image.png";
import resume from "../../../assets/documents/resume.pdf";

function Resume() {
  return (
    <section className="my-5">
      <section id="resume" class="flex-row">
        <h2 className="resume-title portfolio-header">Skills</h2>
            <h3 className="resume-link">
              Download my resume{" "}
              <a href={resume} target="_blank" >
                here.
              </a>
            </h3>
        <div>
          <ul className="skill-lists">
            {" "}
            <p className="skill-title">Front-End Proficiencies</p>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
            <li>Handlebars</li>
            <li>JQuery</li>
            <li>Jest</li>
          </ul>
          <ul className="skill-lists">
            <p className="skill-title">Back-End Proficiencies</p>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL</li>
            <li>Sequelize</li>
            <li>NoSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>IndexedDB</li>
            <li>Insomnia</li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Resume;
