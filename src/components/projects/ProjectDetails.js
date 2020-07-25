import React from 'react'

const ProjectDetails = (props) => {
    const {id} = props.match.params;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam eum perspiciatis, magni illum, enim inventore mollitia excepturi cum, itaque illo tenetur odio asperiores? Necessitatibus fugiat cupiditate obcaecati eos delectus?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Eduardo</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
