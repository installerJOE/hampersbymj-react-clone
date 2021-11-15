import React from 'react'
import OpeningPageDiv from '../components/OpeningPageDiv'
import ProjectBlock from '../components/ProjectBlock'
import "../css/projects.css"
import Teeside from "../images/teeside.jpg"
import JAA from "../images/Jaa.jpg"
import Project3 from "../images/project-3.jpg"

const Projects = () => {
  const projectArr = [
    {
      id: 1,
      imageSrc: Teeside,
      title: "To Do App Project",
      caption: "A sample project created with just React",
      url: "/to-do-app"
    },
    {
      id: 2,
      imageSrc: JAA,
      title: "Jolie Aura and Adornment",
      caption: "Logo/Graphic Design",
      url: "/#!"
    },
    {
      id: 3,
      imageSrc: Project3,
      title: "Optimal Vision Website",
      caption: "Student Recruitment and Travel Agency",
      url: "/#!"
    },
  ]

  const projectBlock = projectArr.map(project=> <ProjectBlock key={project.id} project={project}/>)
  return (
    <div className="main">
      <div className="col-md-10 col-sm-12" style={{margin:"auto", float: "none"}}>
        <OpeningPageDiv
          title="Explore Various Projects"
          caption={"Check out the various projects I have built to enhance my capabilities"}
        />
      </div>

      <div className="sub-divs">
        {/* About the Developer */}
        <div className="project-block">
          {projectBlock}
        </div>
      </div>
    </div>
  )
}

export default Projects
