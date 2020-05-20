import React, { Component } from 'react';
import Modal from 'react-modal'






Modal.setAppElement('#root')
class ModalProject extends Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false}
        };
  render() {

    const openModal = ()=> this.setState({modalIsOpen:true});
    const closeModal= () => this.setState({modalIsOpen:false});
    return (
      <>
      <div className="project" key={this.props.id} >
<div className="projectN" data-aos="fade-right" >
  <h1 onClick={openModal} className="glitch" data-text={this.props.name}>{this.props.name}</h1>
    <h2 className="glitch" data-text={this.props.text}>{this.props.text}</h2>
        <button className='openButton' onClick={openModal}><i className="fas fa-external-link-alt"></i></button>
      </div>
        <div onClick={openModal} data-aos="fade-left">
          <img id={this.props.imgId} className='small' src={this.props.imgSrc} alt={this.props.imgAlt} />
          </div>
      </div>        
      <Modal
       dialogClassName="dialog-class"
        isOpen={this.state.modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={this.props.label}
        aria-labelledby="example-custom-modal-styling-title"
        
        style={{
          overlay: {
            zIndex:'2',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(91, 91, 91, 0.75)'
          },
          content: {
            zIndex:'2',
            position: 'absolute',
                  left: '15%',
                  right: '15%',
                  top: '15%',
                  bottom: '15%',
            border: '1px solid rgb(145, 140, 140)',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            backgroundColor:'black'
          }
        }}
      >

      <section className='modalWin'>
      <button onClick={closeModal}><i className="fas fa-times"></i></button>
      <div className='modalText'>
    <h2>{this.props.name}</h2>
    <p>{this.props.text}</p>
        <br/>
      <p>{this.props.tools}</p>
      <br/>
      <p>{this.props.description}</p>
      </div>
      <div className='modalImg'>
      <img className='insight' src={this.props.insight} alt="" srcset=""/>
      <img className='iphone' src={this.props.iphone} alt="" srcset=""/>
      </div>
    </section>
      </Modal>
      </>
    )
  }
}


const TemplateProject = (props) =>{
//const [Hover,setHover] = useState('small');
//const handleMouseToggle = () =>{(Hover === 'small') ? setHover('bigger') :  setHover('small')}

const Content = props.projects.map((project) => 
    
        <ModalProject label={project.id} name={project.name} text={project.text} id={project.id}
                      tools={project.tools} description={project.description} 
                      insight={project.insight} iphone={project.iphone}
      //img
      imgSrc={project.imgSrc} imgAlt={project.imgAlt} imgId={project.imgId}/>
)

return(
<section className="portfolio" id="projects">
    <h1 id="nazov" data-aos="fade-left">PROJECTS</h1>
    {Content}      
 </section>
)
}

export default TemplateProject;
