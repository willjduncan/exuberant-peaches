import React from "react";
import coverImage from "../../../assets/cover/tall-pic.webp";

function About() {
  return (
    <section>
      <div className="container">
        <img src={coverImage} className="about-img" alt="the most impressive web designer you've ever witnessed" />
        <div className="about-text">
          <h1 id="about-title">Full Stack Web Developer</h1>
          <p>
            My background is varied. Graduating with a major in economics from
            UNC Chapel Hill's Honors College in 2018, I worked various jobs
            abroad, operating in Uganda, Cambodia, and the United Kingdom.
            I currently work as a Software Developer 
            for Armstrong Transport Group in Charlotte, NC. While there, I have worked 
            on frontend and backend capabilities, dealt with legacy code and production 
            issues, implemented third party integrations, and designed and executed a table reconfiguration. Among other fun facts, I am
            an Eagle Scout, I've survived a grizzly encounter on a 2-month solo
            road trip visiting National Parks, and I've written and published my own novel, {" "}
            <em>Specks of Dust</em> .
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
