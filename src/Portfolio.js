import React, { Fragment } from 'react'

import TemplateProject from './TemplateProject'

//Images
import tastebookN from './image/tastebookN.jpeg'
import boardN from './image/skate.jpg'
import deleteSN from './image/deleteSN.png'
import handymaxN from './image/HandymaxN.jpeg'
import realestateN from './image/realestateN.jpeg'
import elizBayaN from './image/elizBaya-N.png'
import bajovitaN from './image/bajovitaN.jpeg'

import boardeshopproject from './image/skate.jpg'
import handymaxproject from './image/handymaxhandymaproject.jpeg'
import tastebookproject from './image/tastebookproject.jpeg'
import realestateproject from './image/realestateproject.jpeg'
import deleteproject from './image/deleteSN.png'
import bajovitaproject from './image/bajovitabistroproject.jpeg'

const projects = [
	{
		id: 'elizbaya',
		name: 'Eliz Baya',
		text: 'Music artist portfolio',
		urlWeb: 'http://elizbaya.com',
		insight: elizBayaN,
		urlGit: '',
		front: ' Javascript, React, SASS, MailChimp',
		back: 'Apache, PHP',
		imgAlt: 'Music artist portfolio',
		imgID: 'imgE',
		imgSrc: elizBayaN,
	},
	{
		id: 'board',
		name: 'Board Eshope',
		text: 'Skate/Snow/Surf Eshope',
		urlWeb: 'https://eshop.jurajbasanda.com/',
		urlGit: 'https://github.com/jurajbasanda/board-eshope-react-rest-api',
		front: 'React, Redux, Javascript, SASS',
		back: 'REST API, Headless WP',
		insight: boardeshopproject,
		imgAlt: 'Board Skate Eshop',
		imgId: 'imgBoard',
		imgSrc: boardN,
	},
	{
		id: 'delete',
		name: 'Delete Eshope',
		text: 'Bespoke ecommerce',
		urlWeb: 'https://peaceful-badlands-06511.herokuapp.com/',
		urlGit: 'https://github.com/jurajbasanda/mern-eshop',
		front: 'React, Redux, Javascript, Bootstrap, CSS',
		back: 'Node , Express, MongoDB',
		insight: deleteproject,
		imgAlt: 'Board Skate Eshop',
		imgId: 'imgBoard',
		imgSrc: deleteSN,
	},

	// {
	// 	id: 'tastebook',
	// 	name: 'Tastebook',
	// 	text: 'Recipe platform',
	// 	urlWeb: 'http://tastebook.jurajbasanda.com/',
	// 	urlGit: 'https://github.com/jurajbasanda/bajovita-bistro',
	// 	front: 'React, Redux, Javascript, CSS/SASS',
	// 	back: 'Node, Express, MongoDB',
	// 	insight: tastebookproject,
	// 	imgAlt: 'bajovita bistro coffe shop eshop in slovakia',
	// 	imgId: 'imgB',
	// 	imgSrc: tastebookN,
	// },
	// {
	// 	id: 'realestate',
	// 	name: 'Real Estate Agency',
	// 	text: 'Real estate agency',
	// 	urlWeb: 'http://realestate.jurajbasanda.com',
	// 	urlGit: 'https://github.com/jurajbasanda/realestate',
	// 	front: 'React, Javascript, Sass',
	// 	back: 'WordPress',
	// 	insight: realestateproject,
	// 	imgAlt: 'real estate agency london',
	// 	imgId: 'imgR',
	// 	imgSrc: realestateN,
	// },
	// {
	// 	id: 'handymax',
	// 	name: 'Handymax',
	// 	text: 'Handyman Service in London',
	// 	urlWeb: 'https://handymax.jurajbasanda.com/',
	// 	urlGit: 'https://github.com/jurajbasanda/handymax',
	// 	front: 'React, Javascript, PHP, Apache, Sass',
	// 	insight: handymaxproject,
	// 	imgAlt: 'handyman serice in London',
	// 	imgId: 'imgH',
	// 	imgSrc: handymaxN,
	// },
	// {
	// 	id: 'bajovita',
	// 	name: 'Bajovita',
	// 	text: 'Coffe shop / Bistro / E-shop in Slovakia',
	// 	urlWeb: 'http://bajovitabistro.sk/',
	// 	urlGit: 'https://github.com/jurajbasanda/bajovita-bistro',
	// 	front: 'React, Javascript, Sass',
	// 	insight: bajovitaproject,
	// 	imgAlt: 'bajovita bistro coffe shop eshop in slovakia',
	// 	imgId: 'imgB',
	// 	imgSrc: bajovitaN,
	// },
]

const Portfolio = () => {
	return (
		<Fragment>
			<TemplateProject projects={projects} />
		</Fragment>
	)
}
export default Portfolio
