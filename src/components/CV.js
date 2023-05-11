import React, { Component } from 'react';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import resume from '../images/Leonardo_Chen_Resume.pdf'
export const CV = () => {
    return (

        <div className='resumeContainer'> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          
        <a className='downloadResumeBtn'  href={resume} download="Leonardo_Chen_Resume" target='_blank'> Download resume</a>
        
        <img className='resumeImg' src={require("../images/Leonardo_Chen_Resume.png")}/> 
        
      
        </div>
    );
  };