import React from 'react'
import { animateScroll as scroll } from "react-scroll";

import TemplateProject from './TemplateProject'

//Images
import bajovitaN from './image/bajovitaN.jpeg'
import boardN from './image/skate.jpg'
import handymaxN from './image/HandymaxN.jpeg'
import patriciaN from './image/patriciaBajakovaN.jpeg'

const projects = [
    {id:'patricia',
    name:'Patricia Bajakova',
    text:'Actor / Singer Portfolio & CV',
    url:'http://patriciabajakova.com',
    imgAlt:'Patricia Bajakova singer actor cv portfolio',
    imgID:'imgP',
    imgSrc:patriciaN},

    {id:'handymax',
    name:'Handymax',
    text:'Handyman Service in London',
    url:'https://handymax.jurajbasanda.com/',
    imgAlt:'handyman serice in London',
    imgId:'imgH',
    imgSrc:handymaxN},

    {id:'eshop',
    name:'Board',
    text:'Skateboard / Snowboard / Surfboard E-shop',
    url:'https://board-eshop.netlify.app',
    imgAlt:'Board skate skateboard snowboard surf eshop',
    imgId:'imgE',
    imgSrc:boardN},
    
    {id:'bajovita',
    name:'Bajovita',
    text:'Coffe shop / Bistro / E-shop in Slovakia',
    url:'http://bajovitabistro.sk/',
    imgAlt:'bajovita bistro coffe shop eshop in slovakia',
    imgId:'imgB',
    imgSrc:bajovitaN}
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