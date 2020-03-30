import React, { useState } from "react"
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaDotCircle,
  FaGithub,
  FaCircleNotch,
} from "react-icons/fa"
import projects from "../../data/projects.js"

const ProjectsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleLeftArrowClick = () => {
    setCurrentSlide(state => {
      if (state === 0) return projects.length - 1
      return state - 1
    })
  }

  const handleRightArrowClick = () => {
    setCurrentSlide(state => {
      if (state === projects.length - 1) return 0
      return state + 1
    })
  }

  console.log("currentSlide", currentSlide)

  return (
    <section className="carousel">
      <button className="arrow left" onClick={handleLeftArrowClick}>
        <FaChevronLeft />
      </button>
      <button className="arrow right" onClick={handleRightArrowClick}>
        <FaChevronRight />
      </button>
      <div className="carousel-inner">
        <h2 className="section-title">PROJECTS</h2>
        <article className="project">
          <ProjectSlide {...projects[currentSlide]} />
        </article>
        <div className="dots">
          {projects.map(({ name }, i) => (
            <span key={name}>
              {i === currentSlide ? <FaCircle /> : <FaCircle fill="#333" />}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsCarousel

const ProjectSlide = ({ title, description, tech, image, github, live }) => {
  const technologies = tech.join(" / ")
  return (
    <>
      <h3>{title}</h3>
      <p className="tech">{technologies}</p>
      <div className="project-links">
        <a href="${github}" target="_blank">
          <FaGithub />
        </a>
        <a href="${live}" target="_blank" className="live-link">
          Live
        </a>
      </div>
      <p>{description}</p>
      <img src={image} alt={title} />
    </>
  )
}
