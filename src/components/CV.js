import React, { Component } from 'react';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import resume from '../images/Leonardo_Chen_Resume.pdf'
export const CV = () => {
    return (
        <div className='resumeContainer'>   
        <a className='downloadResumeBtn'  href={resume} download="Resume" target='_blank'> Download resume</a>
        <img className='resumeImg' src={require("../images/Leonardo_Chen_Resume.png")}/> 
        
        {/* <Document file = {resume}>
        <Page pageNumber={1} renderTextLayer={false}/>
      </Document> */}

      
        </div>
    );
  };