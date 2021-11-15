import React from 'react'
import { Link } from 'react-router-dom'

const ProjectBlock = ({ project }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="col-md-12 col-sm-12 project-image" style={{backgroundImage: `url(${project.imageSrc})`, backgroundSize: "cover"}}>
      </div>
      {/* <img src={imageSrc} width="100%" height="auto"/> */}
      <Link to={project.url}>
        <div className="col-md-12 project-link">
            <h3>{project.title}</h3>  
            <p>{project.caption}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProjectBlock
