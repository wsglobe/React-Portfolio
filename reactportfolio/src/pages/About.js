import React from "react";
import Header from "../components/Header/Header";
import "./About.css";
import profileImage from "../assets/WW.JPG";
function About() {
  console.log('about component loading');
  return (
    <div>
      <Header
        h1="About Me"
        p="It always seems impossible until it's done.” ― Nelson Mandela"
      />

      <div className="container">
        <div className="row">
          <div className="col-sm-4 offset-sm-1 justify-content-center">
            <img
              id="bio-image"
              alt="myimage"
              src={profileImage}
              align="left"
              className="img-fluid"
            />
          </div>
          <div className="col-sm-6 justify-content-center">
            <div className="container">
              <div className="row overflow-auto" id="introtext">
                <p>
                  I'm a software developer with a background in insurance sales
                  and I specialize in building full-stack web applications
                  primarily with JavaScript, HTML/CSS, and MongoDB or MySQL. I
                  studied at the University of Texas at Austin, where I earned
                  my fullk-stack Web Development certification with high marks,
                  and had the opportunity to create multiple projects and
                  collaborate with team mates.
                </p>
                <p>
                  Since graduation, I've worked on personal projects to further
                  strengthen my skills as a developer. When I'm not coding, you
                  can find me keyaking on the Colorado River, gaming on my
                  playStation, or cooking at home.
                </p>
                <p>
                  In the short term, I'd love to be able to combine my work
                  experience and the knowledge I'm gaining in full stack
                  development today in a role that allows me to utilise my
                  organizational experience, technical skills and creativity. In
                  the long run, I want to be part of a business that serves a
                  need in the society, working with great people and enjoying
                  every moment of my work.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default About;
