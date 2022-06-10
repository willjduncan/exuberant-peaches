import React from "react";
import coverImage from "../../../assets/cover/tall-pic.webp";

function About() {
  return (
    <section>
      <div className="container">
        <img src={coverImage} className="about-img" alt="cover" />
        <div className="about-text">
          <h1 id="about-title">Full Stack Web Developer</h1>
          <p>
            My background is varied. Graduating with a major in economics from
            UNC Chapel Hill's Honors College in 2018, I worked various jobs
            abroad, operating in Uganda, Cambodia, and the United Kingdom.
            Returning to the USA, I wrote my first novel,{" "}
            <em>Specks of Dust</em> and worked for the Parks and Recreation
            department in Charlotte, NC. Now, as a full stack web developer, I
            offer my wide range of experience and expertise to help companies
            stay on the cutting edge of web design. Among other fun facts, I am
            an Eagle Scout, I've survived a grizzly encounter on a 2-month solo
            road trip visiting National Parks, and I've backpacked the Kumano
            Kodo UNCESCO World Heritage Pilgrimage Route in Japan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
