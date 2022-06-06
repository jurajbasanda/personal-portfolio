import React from 'react'
import './styles/modal.scss'

export default function Modal() {
	return (
		<>
			<div class='bg-modal'>
				<div class='modal-contents'>
					<div class='close'>+</div>
					<section className='modalWin' key={this.props.id}>
						<button>
							<i className='fas fa-times'></i>
						</button>
						<div className='modalImg'>
							<img className='insight' src={this.props.insight} alt='' srcSet='' />
							<img className='iphone' src={this.props.iphone} alt='' srcSet='' />
						</div>
						<div className='modalText'>
							<h1>{this.props.name}</h1>
							<h2>{this.props.text}</h2>
							<br />
							<p>{this.props.tools}</p>
							<br />
							<p>{this.props.description}</p>
							<div className='modalLinks'>
								<a href={this.props.urlWeb} target='blank' className='link'>
									<i className='fas fa-link' />
									<p>Website</p>
								</a>
								<a href={this.props.urlGit} target='blank' className='link'>
									<i className='fab fa-github-square' />
									<p>GitHub</p>
								</a>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}
