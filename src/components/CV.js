import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import resume from 'Lynczera.github.io/src/images/Leonardo_Chen_Resume.pdf'
export const CV = () => {
    return (
        <div className='resumeContainer'>   
        <a className='downloadResumeBtn'  href={resume} download="Resume" target='_blank'> Download resume</a>
        <Document file = {resume}>
        <Page pageNumber={1} renderTextLayer={false}/>
      </Document>

      
        </div>
    );
  };