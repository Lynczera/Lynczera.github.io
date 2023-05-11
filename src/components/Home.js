import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Home = () => {
    return (

        <div className='homeContainer'> 
        
         <script src="https://kit.fontawesome.com/3796a43149.js" crossorigin="anonymous"></script>
         <div className='personalInfo'>
         <img className='photo' src={require("../images/leonardochenpic.png")} alt="Logo" />
         <div className='nameAndLinks'>
         <h1 className='name'> Leonardo Chen</h1>

         <div className="icons">  
         <a href="https://github.com/Lynczera" className="gitLink"> <FaGithub size={56} /></a> 
          <a href="https://www.linkedin.com/in/leonardo-chen-492582230/" className="linkedinLink"> <FaLinkedin size={56} /></a>
         </div>
          

         </div>
         
         </div>
         <p1 className='aboutMe'> 

          Computer Science student at {<a href="https://www.utah.edu/" > The University Of Utah. </a>}

         </p1>

         </div>
    );
  };