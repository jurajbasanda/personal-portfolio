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

import boardeshopproject from './image/boardeshopproject.jpeg'
import handymaxproject from './image/handymaxhandymaproject.jpeg'
import tastebookproject from './image/tastebookproject.jpeg'
import realestateproject from './image/realestateproject.jpeg'
import deleteproject from './image/deleteproject.jpeg'
import bajovitaproject from './image/bajovitabistroproject.jpeg'

import handymaxiphone from './image/handymaxiphone.png'
import tastebookiphone from './image/tastebookiphone.png'
import boardiphone from './image/boardiphone.png'
import realiphone from './image/realiphone.png'
import elizIphone from './image/eliz-Iphone.png'
import bajovitaiphone from './image/bajovitaiphone.png'

const projects = [
	{
		id: 'delete',
		name: 'Delete Eshope',
		text: 'eshop',
		urlWeb: 'https://peaceful-badlands-06511.herokuapp.com/',
		urlGit: 'https://github.com/jurajbasanda/mern-eshop',
		front: 'React, Redux, Javascript, Bootstrap, CSS',
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
		id: 'elizbaya',
		name: 'Eliz Baya',
		text: 'Eliz Baya music artist',
		urlWeb: 'http://elizbaya.com',
		insight: elizBayaN,
		iphone: elizIphone,
		urlGit: '',
		front: 'React, PHP, Javascript, Apache, SASS,MailChimp',
		imgAlt: 'Eliz Baya music artist',
		imgID: 'imgE',
		imgSrc: elizBayaN,
	},

	{
		id: 'tastebook',
		name: 'Tastebook',
		text: 'Recipe platform',
		urlWeb: 'http://tastebook.jurajbasanda.com/',
		urlGit: 'https://github.com/jurajbasanda/bajovita-bistro',
		front: 'React, Redux, Javascript, CSS/SASS',
		back: 'Node, Express, MongoDB',
		insight: tastebookproject,
		iphone: tastebookiphone,
		imgAlt: 'bajovita bistro coffe shop eshop in slovakia',
		imgId: 'imgB',
		imgSrc: tastebookN,
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
