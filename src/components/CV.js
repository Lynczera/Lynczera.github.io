import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
export const CV = () => {
    return (
        <div className='resumeContainer'>   
        <a className='downloadResumeBtn'  href={require('../images/Leonardo_Chen_Resume.pdf')} download="Resume" target='_blank'> Download resume</a>
        <Document file = {require('../images/Leonardo_Chen_Resume.pdf')}>
        <Page pageNumber={1} renderTextLayer={false}/>
      </Document>

      
        </div>
    );
  };