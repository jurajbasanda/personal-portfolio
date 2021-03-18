import React, { Fragment } from 'react'

import TemplateProject from './TemplateProject'

//Images
import bajovitaN from './image/bajovitaN.jpeg'
import boardN from './image/skate.jpg'
import deleteSN from './image/deleteSN.png'
import handymaxN from './image/HandymaxN.jpeg'
import patriciaN from './image/patriciaBajakovaN.jpeg'
import realestateN from './image/realestateN.jpeg'
import elizBayaN from './image/elizBaya-N.png'

import patriciaproject from './image/patriciabajakovaproject.jpg'
import boardeshopproject from './image/boardeshopproject.jpg'
import handymaxproject from './image/handymaxhandymaproject.jpg'
import bajovitaproject from './image/bajovitabistroproject.jpg'
import realestateproject from './image/realestateproject.jpg'
import deleteproject from './image/deleteproject.jpg'

import patriciaiphone from './image/patriciaiphone.png'
import handymaxiphone from './image/handymaxiphone.png'
import bajovitaiphone from './image/bajovitaiphone.png'
import boardiphone from './image/boardiphone.png'
import realiphone from './image/realiphone.png'

const projects = [
	{
		id: 'delete',
		name: 'Delete Eshope',
		text: 'eshop',
		urlWeb: 'https://peaceful-badlands-06511.herokuapp.com/',
		urlGit: 'https://github.com/jurajbasanda/mern-eshop',
		front: 'React, Redux, Javascript, Sass',
		back: 'Node , Express, MongoDB',
		insight: deleteproject,
		iphone: '',
		imgAlt: 'Board Skate Eshop',
		imgId: 'imgBoard',
		imgSrc: deleteSN,
	},

	{
		id: 'board',
		name: 'Board Eshope',
		text: 'Skate/Snow/Surf Eshope',
		urlWeb: 'https://eshop.jurajbasanda.com/',
		urlGit: 'https://github.com/jurajbasanda/board-eshope-react-rest-api',
		front: 'React, Redux, Javascript, Sass',
		back: 'Rest API from WordPress',
		insight: boardeshopproject,
		iphone: boardiphone,
		imgAlt: 'Board Skate Eshop',
		imgId: 'imgBoard',
		imgSrc: boardN,
	},

	{
		id: 'realestate',
		name: 'Real Estate Agency',
		text: 'Real estate agency',
		urlWeb: 'http://realestate.jurajbasanda.com',
		urlGit: 'https://github.com/jurajbasanda/realestate',
		front: 'React, Javascript, Sass',
		back: 'WordPress',
		insight: realestateproject,
		iphone: realiphone,
		imgAlt: 'real estate agency london',
		imgId: 'imgR',
		imgSrc: realestateN,
	},
	{
		id: 'elizbaya',
		name: 'Eliz Baya',
		text: 'Eliz Baya music artist',
		urlWeb: 'http://elizbaya.com',
		urlGit: '',
		front: 'React, PHP, Javascript, Apache, SASS,MailChimp',
		insight: '',
		iphone: '',
		imgAlt: 'Eliz Baya music artist',
		imgID: 'imgE',
		imgSrc: elizBayaN,
	},

	{
		id: 'handymax',
		name: 'Handymax',
		text: 'Handyman Service in London',
		urlWeb: 'https://handymax.jurajbasanda.com/',
		urlGit: 'https://github.com/jurajbasanda/handymax',
		front: 'React, Javascript, PHP, Apache, Sass',
		iphone: handymaxiphone,
		insight: handymaxproject,
		imgAlt: 'handyman serice in London',
		imgId: 'imgH',
		imgSrc: handymaxN,
	},

	{
		id: 'patricia',
		name: 'Patricia Bajakova',
		text: 'Actor / Singer Portfolio & CV',
		urlWeb: 'http://patriciabajakova.com',
		urlGit: '',
		front: 'HTML, CSS, Javascript, PHP, Apache',
		insight: patriciaproject,
		iphone: patriciaiphone,
		imgAlt: 'Patricia Bajakova singer actor cv portfolio',
		imgID: 'imgP',
		imgSrc: patriciaN,
	},

	{
		id: 'bajovita',
		name: 'Bajovita',
		text: 'Coffe shop / Bistro / E-shop in Slovakia',
		urlWeb: 'http://bajovitabistro.sk/',
		urlGit: 'https://github.com/jurajbasanda/bajovita-bistro',
		front: 'React, Javascript, Sass',
		insight: bajovitaproject,
		iphone: bajovitaiphone,
		imgAlt: 'bajovita bistro coffe shop eshop in slovakia',
		imgId: 'imgB',
		imgSrc: bajovitaN,
	},
]

const Portfolio = () => {
	return (
		<Fragment>
			<TemplateProject projects={projects} />
		</Fragment>
	)
}
export default Portfolio
