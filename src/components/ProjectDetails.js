import React from 'react'
import myProjects from '../data/projectList.json'

function ProjectDetails(props) {

    const projectToDisplay = myProjects.find( (project) => {
        return project.id === props.match.params.projectId
    })

    return (
        <div>
            <h2>Project name: {projectToDisplay.name}</h2>
            <h2>Year: {projectToDisplay.year}</h2>
            <p>{projectToDisplay.description}</p>

        </div>
    )
}

export default ProjectDetails;