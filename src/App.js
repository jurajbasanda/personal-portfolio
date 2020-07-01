import React,{Fragment} from 'react';
import { BrowserRouter as BRouter,Switch,Route,} from "react-router-dom";
import AOS from 'aos';

import './App.scss';
import './text.scss'

import Nav from './Nav';
import Portfolio from './Portfolio';
import Contact from './Contact';
import NoMatch from './NoMatch';
import Skills from './Skills';


function App() {
  //Scoll up after clicked on service
  //useEffect(() => {
    //scroll.scrollToTop();
  //})
  AOS.init({
    offset: 130, // offset (in px) from the original trigger point
    delay: 90, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    debounceDelay: 50,
    once: false,
  });

  return (

    <Fragment>
    <BRouter>
      <Nav/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </BRouter>
    </Fragment>


  )
  
}

const Home = () => {

  return (
      <Fragment>
    <header id="about">
        <section className="head " >
            <div className="name" data-aos="slide-right">
                <h1 className="color">HEY, I'M JURAJ BASANDA</h1>
                <h2 className="content">FRONT-END WEB DEVELOPER</h2>
            </div>
            
            <p className="content" data-aos="fade-left">As passionate and creative developer I’m building sleek websites with the modern technologies. 
                I'm currently seeking out the right team where I can contribute in making amazing digital products.
            </p>
            
        </section>
        
    </header>
    <Skills></Skills>
     <Portfolio/>
     <Contact/>

     </Fragment>
    

  )
}



export default App;
