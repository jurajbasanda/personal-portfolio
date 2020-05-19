import React from 'react';
import { BrowserRouter as BRouter,Switch,Route } from "react-router-dom";



import './App.scss';
import './text.scss'

import Nav from './Nav';
import Portfolio from './Portfolio';
import Contact from './Contact';
import NoMatch from './NoMatch';


function App() {
  //Scoll up after clicked on service
  //useEffect(() => {
    //scroll.scrollToTop();
  //})

  return (

    <>
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
    </>


  )
  
}

const Home = () => {

  return (
      <>
    <header id="about">
        <section className="head " >
            <div className="name ">
                <h1 className="color">HEY, I'M JURAJ BASANDA</h1>
                <h2 className="content">FRONT-END WEB DEVELOPER</h2>
            </div>
            <p className="content" mt="45">As passionate and creative developer I’m building sleek websites with the modern technologies. 
                I'm currently seeking out the right team where I can contribute in making amazing digital products.
            </p>
        </section>
        
    </header>
     <Portfolio/>
     <Contact/>

     </>
    

  )
}



export default App;
