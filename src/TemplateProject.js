import React, { Component, Fragment } from 'react';
import './templateModal.scss'

class ModalProject extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: 'bg-modal'};
        };
  render() {
    const openModal = ()=> this.setState({showModal: 'bg-modal-open'});
    const closeModal= () => this.setState({showModal:'bg-modal'});
    return (
      <Fragment>
      <div className="project" key={this.props.id} >
      <div className="project-text" data-aos="fade">
              <button className='openButton' onClick={openModal}><h3 onClick={openModal} className="glitch" >{this.props.name} <i className="fas fa-external-link-alt"></i></h3></button>
            </div>
      <div onClick={openModal} data-aos="fade-up">
      <img className='project-img' src={this.props.imgSrc} alt={this.props.imgAlt} />
      </div>
      </div> 

      <div className={this.state.showModal}>
      <section className="modal-contents" >
        <div className="close" onClick={closeModal} 
        tabIndex="0" ><i class="fas fa-times"></i></div>
    {/*<button ><i className="fas fa-times"></i></button>*/}
          <br/>
          <h2>{this.props.name}</h2>
          <h3>{this.props.text}</h3>
          <br/>
          <p>{this.props.front}</p>
          <p>{this.props.back}</p>
          <br/>
          <p>{this.props.description}</p>
          <div className='modalLinks'>
          <a href={this.props.urlWeb} target='blank'  className='link' ><i className="fas fa-link"/>Website</a>
          <a href={this.props.urlGit} target='blank'  className='link' ><i className="fab fa-github-square"/>GitHub</a>
          </div>
          <div className='modalImg'>
          <div className='desktopImg'>
          <img className='insight' src={this.props.insight} alt="" srcSet=""/>
          </div>
          <img className='iphone' src={this.props.iphone} alt="" srcSet=""/>
          </div>
      </section>
    </div>
    </Fragment>
      
    )
  }
}


const TemplateProject = (props) =>{
  

const Content = props.projects.map((project) => 
    
        <ModalProject key={project.id} name={project.name} text={project.text} id={project.id}
                      front={project.front} back={project.back} description={project.description} 
                      urlWeb={project.urlWeb} urlGit={project.urlGit}
                      insight={project.insight} iphone={project.iphone}
      //img
      imgSrc={project.imgSrc} imgAlt={project.imgAlt} imgId={project.imgId}/>
)

return(
<section  className="portfolioP" id="projects">
    <h1 data-aos="slide-up">Projects</h1>
    <div className='portfolio'>
    {Content}    
    </div>  
 </section>
)
}

export default TemplateProject;
