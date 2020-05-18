import React from 'react'

import './contact.scss'

const Contact = () =>{
    

    return(
        <footer className="contact" id="contact" data-aos="fade-right">

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