import React from 'react';
import {Link,useLocation} from 'react-router-dom';


export default function NoMatch() {
    let location = useLocation();
  return (
          <div style={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h1>404
              Not Found for <code>{location.pathname}</code>
            </h1>
            <Link style={{color:'white'}}><h2>Go Back</h2></Link>
          </div>
        );
      }
