import React,{useRef} from 'react'
import { useIntersection } from 'react-use';
import gsap from 'gsap'

import './contact.scss'

const Contact = () =>{
    
      const intersectionRef = useRef(null);
      const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1
      });
    //Animationfading IN
      const fadeIn = element =>{
        gsap.to(element,1,{
          opacity:1,
          y:-60,
          ease:'power4.out',
          stragger:{
            amount:0.5
          }
        })
      };
      //Animation fading OUT
      const fadeOut = element=>{
        gsap.to(element,1,{
          opacity:0,
          y:-20,
          ease:'power4.out'
        })
      };
      //Checking to seewhent the view point is visible to the user
      intersection && intersection.intersectionRatio < 1
        ? fadeOut('.fadeIn')
        : fadeIn('.fadeIn')
    
    

            // <div className=' arrow' ref={intersectionRef} onClick={scrollToTop}><i className="fas fa-arrow-circle-up"></i></div> 
     return(
        <footer className="contact" id="contact" data-aos="fade-up">

                                <h1 id="nazov">LET’S CREATE SOMETHING TOGETHER</h1>
                                <div className="email" >
                                    <h2 className="glitch" data-text="EMAIL">EMAIL</h2>
                                    <a href="mailto:basanda.juraj@gmail.com">BASANDA.JURAJ@GMAIL.COM</a>
                                </div>
                                <div className="socialNetworks">
                                    <h2 className="glitch" data-text="SOCIAL NETWORKS">SOCIAL NETWORKS</h2>
                                    <div className="link" >
                                    <a href="https://github.com/jurajbasanda"><i className="fab fa-github-square"></i></a>
                                    <a href="https://www.linkedin.com/in/juraj-basanda-1b277117a/"><i className="fab fa-linkedin"></i></a> 
                                    <a href="http://facebook.com/jurajbasanda"><i className="fab fa-facebook-square"/></a>  
                                    </div>
                                </div>

        </footer>
    )
}

export default Contact;