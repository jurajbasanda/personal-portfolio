import React from 'react';

const TemplateProject = (props) =>{

const Content = props.projects.map((project) => 

    <div className="project" key={project.id} >
<div className="projectN" id={project.id} data-aos="fade-right" ><a href={project.url}><h1 className="glitch" data-text={project.name}>{project.name}</h1>
    <h2 className="glitch" data-text={project.text}>{project.text}</h2></a><ul><li>HTML</li>
        <li>CSS</li>
        <li>JS</li></ul></div>
        <a href={project.url} data-aos="fade-left"><img id={project.imgId} className="small" src={project.imgSrc} alt={project.imgAlt} /></a>
    </div>
)

return(
<section className="portfolio" id="projects">
    <h1 id="nazov" data-aos="fade-left">PROJECTS</h1>
    {Content}      
 </section>
)
}

export default TemplateProject;
