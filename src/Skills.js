import React from 'react'

import './styles/skills.scss'

import codeImg from './image/coding-picture2.jpg'
import designImg from './image/design-picture.jpg'

export default function Skills() {
	return (
		<section className='skills'>
			<h1 id='skills' data-aos='fade-up'>
				Skills
			</h1>
			<div className='skills-group'>
				<div className='skills-text code-text'>
					<h2 data-aos='fade-down'>Development Tools/Languages</h2>
					<p data-aos='fade-up'>
						HTML5, CSS3/SASS, JavaScript, React, Redux, Gatsby, Node, MongoDB, Github,
						WordPress
					</p>
				</div>
				<img className='code-img' data-aos='fade' src={codeImg} alt='' srcSet='' />
				<div className='skills-text design-text'>
					<h2 data-aos='fade-down'>Design Tools</h2>
					<p data-aos='fade-up'>
						{' '}
						Sketch, Figma, Adobe Suit <br /> XD, Photoshop
					</p>
				</div>
				<img className='design-img' data-aos='fade' src={designImg} alt='' srcSet='' />
			</div>
		</section>
	)
}
