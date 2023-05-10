import { FaGithub } from "react-icons/fa";

export const Home = () => {
    return (

        <div className='homeContainer'> 
        
         <script src="https://kit.fontawesome.com/3796a43149.js" crossorigin="anonymous"></script>
         <div className='personalInfo'>
         <img className='photo' src={require("../images/cbumOuO.png")} alt="Logo" />
         <div className='nameAndLinks'>
         <h1 className='name'> Leonardo Chen</h1>
          <a href="https://github.com/Lynczera" className="gitLink"> <FaGithub size={56} /> </a>

         </div>
         
        
         </div>
         <p1 className='aboutMe'> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Etiam at tempor magna. Donec ut vulputate tortor. Ut efficitur, 
         dui a sollicitudin elementum, mi ex hendrerit augue, ac dictum 
         lectus dui a est. Duis quis feugiat velit. Curabitur eget neque ipsum. 
         Vivamus sed semper arcu, in tempus arcu. Aliquam sed tempor mauris. 
         Curabitur egestas tortor ac felis finibus gravida. Curabitur ligula lacus, 
         ornare id metus nec, consequat malesuada ipsum. Ut eleifend turpis lectus, 
         quis auctor sapien iaculis at. Curabitur sit amet ultrices sem. Ut ac ex velit. 
         Integer quis vestibulum purus. Nullam volutpat non eros sed maximus. Quisque 
         feugiat tristique odio, vitae ornare tellus pretium id. Donec neque elit, mollis et dui eu, 

         </p1>

         </div>
    );
  };