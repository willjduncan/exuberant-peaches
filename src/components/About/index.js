import React from 'react';
import coverImage from '../../assets/cover/cover-image.png';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Coder. Adventurer. Writer.</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        My career path in coding has been a circuitous one. Graduating with a major in economics from the honors college at UNC Chapel in 2018, I worked various jobs abroad, working in Uganda, Cambodia, and the United Kingdom. 
        Returning to the USA, I wrote my first novel, <em>Specks of Dust</em> and worked for the Parks and Recreation department in Charlotte, NC. 
        Now, studying and working as a web developer, I offer my wide range of experience and expertise to help companies stay on the cutting edge of web design. 
        Among other fun facts, I am an Eagle Scout, I've survived a grizzly encounter on a 2-month solo road trip visiting National Parks, and I've backpacked the Kumano Kodo UNCESCO World Heritage Pilgrimage Route in Japan.
        </p>
      </div>
    </section>
  );
}

export default About;
