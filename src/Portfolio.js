import React from 'react'
import { animateScroll as scroll } from "react-scroll";

import TemplateProject from './TemplateProject'

//Images
import bajovitaN from './image/bajovitaN.jpeg'
import boardN from './image/skate.jpg'
import handymaxN from './image/HandymaxN.jpeg'
import patriciaN from './image/patriciaBajakovaN.jpeg'
import realestateN from './image/realestateN.jpeg'

import patriciaproject from './image/patriciabajakovaproject.jpg'
import boardeshopproject from './image/boardeshopproject.jpg'
import handymaxproject from './image/handymaxhandymaproject.jpg'
import bajovitaproject from './image/bajovitabistroproject.jpg'
import realestateproject from './image/realestateproject.jpg'

import patriciaiphone from './image/patriciaiphone.png'
import handymaxiphone from './image/handymaxiphone.png'
import bajovitaiphone from './image/bajovitaiphone.png'
import boardiphone from './image/boardiphone.png'
import realiphone from './image/realiphone.png'


const projects = [
    {id:'handymax',
    name:'Handymax',
    text:'Handyman Service in London',
    url:'https://handymax.jurajbasanda.com/',
    tools:'Reactjs',
    iphone:handymaxiphone,
    insight:handymaxproject,
    imgAlt:'handyman serice in London',
    imgId:'imgH',
    imgSrc:handymaxN},

    {id:'bajovita',
    name:'Bajovita',
    text:'Coffe shop / Bistro / E-shop in Slovakia',
    url:'http://bajovitabistro.sk/',
    tools:'Reacjst',
    insight:bajovitaproject,
    iphone:bajovitaiphone,
    imgAlt:'bajovita bistro coffe shop eshop in slovakia',
    imgId:'imgB',
    imgSrc:bajovitaN},

    {id:'patricia',
    name:'Patricia Bajakova',
    text:'Actor / Singer Portfolio & CV',
    url:'http://patriciabajakova.com',
    tools:'HTML, CSS, Javascript',
    insight:patriciaproject,
    iphone:patriciaiphone,
    imgAlt:'Patricia Bajakova singer actor cv portfolio',
    imgID:'imgP',
    imgSrc:patriciaN},

    {id:'eshop',
    name:'Board',
    text:'Skateboard / Snowboard / Surfboard E-shop',
    url:'https://board-eshop.netlify.app',
    tools:' Gatsbyjs',
    insight:boardeshopproject,
    iphone:boardiphone,
    imgAlt:'Board skate skateboard snowboard surf eshop',
    imgId:'imgE',
    imgSrc:boardN},

    {id:'realestate',
    name:'Real Estate Agency',
    text:'Real estate agency',
    url:'http://realestateagent-com.stackstaging.com',
    tools:' HTML, CSS, Javascript',
    insight:realestateproject,
    iphone:realiphone,
    imgAlt:'real estate agency london',
    imgId:'imgR',
    imgSrc:realestateN}
]

const Portfolio = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
      };
return(
    <>
<div className='arrow' onClick={scrollToTop}><i class="fas fa-arrow-circle-up"></i></div>
 <TemplateProject projects={projects}/>
 </>
)
}
export default Portfolio;