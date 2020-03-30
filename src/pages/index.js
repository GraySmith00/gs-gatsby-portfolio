import React from "react"
import { FaLinkedin, FaGithub, FaAngleDown } from "react-icons/fa"

import SEO from "../components/seo"
import ProfileImage from "../images/profileCrop.jpg"

import "./index.css"
import ProjectsCarousel from "../components/ProjectsCarousel/ProjectsCarousel"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <section className="hero">
      <div className="hero-inner">
        <img src={ProfileImage} alt="profile" className="profile-image" />
        <div className="hero-info">
          <h1>GRAY SMITH</h1>
          <h3>Full Stack Web Developer</h3>
          <section className="social-links">
            <a
              href="https://www.linkedin.com/in/graysmith00/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/GraySmith00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://graysmith00.github.io/resume/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              Resume
            </a>
          </section>
        </div>
      </div>
      <section className="divider">
        <div className="divider-line"></div>
        <FaAngleDown />
        <div className="divider-line"></div>
      </section>
    </section>
    <section className="skills">
      <h2 className="section-title">COMPETENCIES</h2>
      <div className="skills-inner">
        <div className="core">
          <h3 className="skill-category">CORE</h3>
          <p>
            Javascript: VanillaJS, React, React-Router, Redux, Redux-thunk,
            NodeJS, Express, KnexJS, Mongoose
          </p>
          <p>CSS: Sass/SCSS and Bootstrap</p>
          <p>Testing: Enzyme, Jest, Mocha, and Chai, TDD</p>
          <p>Databases: Postgres, MongoDB</p>
          <p>Ruby / Ruby on Rails</p>
          <p>MVC</p>
          <p>UI/UX Design / Prototyping</p>
          <p>Figma / Sketch / Photoshop</p>
        </div>
        <div className="pursueing">
          <h3 className="skill-category">PURSUING</h3>
          <p>JAM Stack / GraphQL</p>
          <p>Docker</p>
          <p>AWS</p>
          <p>VueJS</p>
          <p>React Native</p>
        </div>
      </div>
    </section>
    <ProjectsCarousel />
    <section className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-inner">
        <h3>Turing School of Software & Design</h3>
        <p>Front-End Engineering Program</p>
        <h3 className="cu">University of Colorado at Boulder</h3>
        <p>Bachelor of Science in Business Administration</p>
        <p>Emphasis in Finance & Management</p>
      </div>
    </section>
    <section className="background">
      <h2 className="section-title">MY STORY</h2>
      <div className="background-inner">
        <p>
          For the last several years, I have been a music producer, performer,
          and creative director who co-founded and built the music group Savoy
          into an internationally recognized touring act. In that time, we've
          done multiple House of Blues tours promoted by Live Nation,
          accumulated over 25M streams on Spotify and Soundcloud, and generated
          over $6M in revenue. We've had the privilege of performing on the
          worlds largest stages including Lollapalooza, Ultra Miami, Electric
          Forest, EDC, Made In America, and 5 of our own headlining concerts at
          Red Rocks Amphitheater. We've also secured licensing deals with major
          TV networks such as CBS and MTV, provided the music for a GoPro Super
          bowl commercial, and executed several successful brand partnership
          marketing campaigns with companies like CURB, Jagermeister, Budweiser,
          and Jose Cuervo.
        </p>
      </div>
    </section>
  </div>
)

export default IndexPage
