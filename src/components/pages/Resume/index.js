import React from "react";
import resume from "../../../assets/documents/resume.pdf";

function Resume() {
  return (
    <section className="my-5">
      <section id="resume">
        <h2 className="resume-title portfolio-header">Skills</h2>
            <h3 className="resume-link">
              Download my resume{" "}
              <a href={resume} target="_blank" rel="noreferrer">
                here.
              </a>
            </h3>
        <div>
          <ul className="skill-lists">
            {" "}
            <p className="skill-title">Front-End Proficiencies</p>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Solid.js</li>
            <li>Vue</li>
            <li>JQuery</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Jest</li>
            <li>Bootstrap & Materialize</li>
          </ul>
          <ul className="skill-lists">
            <p className="skill-title">Back-End Proficiencies</p>
            <li>C# and the .NET Framework</li>
            <li>Java and the Spring Framework</li>
            <li>Node.js</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>IndexedDB</li>
          </ul>
          <ul className="skill-lists">
            <p className="skill-title">Other Proficiencies</p>
            <li>AWS</li>
            <li>Jenkins and Deployment Processes</li>
            <li>DataDog</li>
            <li>Jira & Confluence</li>
            <li>Insomnia & Postman</li>
            <li>Ticket Writing and Business Communication</li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Resume;
