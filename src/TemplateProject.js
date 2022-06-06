import React, { Component, Fragment } from 'react'
import './styles/templateModal.scss'

class ModalProject extends Component {
	constructor(props) {
		super(props)
		this.state = { showModal: 'bg-modal' }
	}
	render() {
		const openModal = () => this.setState({ showModal: 'bg-modal-open' })
		const closeModal = () => this.setState({ showModal: 'bg-modal' })
		const {
			id,
			name,
			imgSrc,
			imgId,
			imgAlt,
			text,
			front,
			back,
			urlWeb,
			urlGit,
			insight,
			iphone,
			description,
		} = this.props
		return (
			<Fragment>
				<div className='project' key={id} data-aos='fade-down'>
					<div className='project-text'>
						<button className='openButton' onClick={openModal}>
							<h3 onClick={openModal} className='glitch'>
								{name} <i className='fas fa-external-link-alt'></i>
							</h3>
						</button>
					</div>
					<div onClick={openModal}>
						<img className='project-img' src={imgSrc} alt={imgAlt} />
					</div>
				</div>
				{/* Popup project */}
				<div className={this.state.showModal}>
					<section className='modal-contents'>
						<div className='modalImg'>
							{insight === '' ? null : (
								<div className='desktopImg'>
									<img className='image-project' src={insight} alt={imgAlt} srcSet='' />
								</div>
							)}
						</div>
						<div className='project-description-group'>
							<h2>{name}</h2>
							<h3>{text}</h3>
							<hr />
							<p>Frontend: {front}</p>
							<p>Backend: {back}</p>

							<p>{description}</p>
						</div>
						<div className='modalLinks'>
							<a href={urlWeb} target='blank' className='link'>
								<i className='fas fa-link' />
								Visit website
							</a>
							{urlGit === '' ? null : (
								<a href={urlGit} target='blank' className='link'>
									<i className='fab fa-github-square' />
									GitHub
								</a>
							)}
						</div>
						<div className='close' onClick={closeModal} tabIndex='0'>
							Close <i className='fas fa-times'></i>
						</div>
					</section>
				</div>
			</Fragment>
		)
	}
}

const TemplateProject = (props) => {
	const Content = props.projects.map((project) => (
		<ModalProject
			key={project.id}
			name={project.name}
			text={project.text}
			id={project.id}
			front={project.front}
			back={project.back}
			description={project.description}
			urlWeb={project.urlWeb}
			urlGit={project.urlGit}
			insight={project.insight}
			iphone={project.iphone}
			//img
			imgSrc={project.imgSrc}
			imgAlt={project.imgAlt}
			imgId={project.imgId}
		/>
	))

	return (
		<section className='portfolioP' id='projects'>
			<h1 data-aos='slide-up'>Projects</h1>
			<div className='portfolio'>{Content}</div>
		</section>
	)
}

export default TemplateProject
