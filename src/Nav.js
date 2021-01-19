import React, { useState } from 'react'
import { Link } from 'react-scroll'

import './nav.scss'

const Nav = () => {
	const [Nav, setNav] = useState('')
	const openNav = () => {
		Nav === '' ? setNav(' open') : setNav('')
	}

	return (
		<>
			<nav data-aos='slide-down'>
				<div className='logo'>
					<a href='https://jurajbasanda.com'>JB</a>
				</div>
				<div tabIndex='0' role='button' className='burger' onClick={openNav}>
					<i className='fas fa-bars'></i>
				</div>
				<ul className='nav-links'>
					<li>
						<Link
							activeClass='active'
							to='about'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							about
						</Link>
					</li>
					<li>
						<Link
							activeClass='active'
							to='skills'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							skills
						</Link>
					</li>
					<li>
						<Link
							activeClass='active'
							to='projects'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							projects
						</Link>
					</li>
					<li>
						<Link
							activeClass='active'
							to='contact'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							contact
						</Link>
					</li>
				</ul>
				<ul className={'nav-links900' + Nav}>
					<li>
						<a href='#about' onClick={openNav}>
							about
						</a>
					</li>
					<li>
						<a href='#skills' onClick={openNav}>
							skills
						</a>
					</li>
					<li>
						<a href='#projects' onClick={openNav}>
							projects
						</a>
					</li>
					<li>
						<a href='#contact' onClick={openNav}>
							contact
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Nav
