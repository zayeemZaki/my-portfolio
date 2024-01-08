import React, { useEffect } from 'react';
import { Navbar, AboutMe, Skills, Experience, Projects,Certificates, ContactMe, TextAnimation } from './container/index.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div>
      <Navbar />
    { /*  <TextAnimation /> */}
      <AboutMe />
      <Skills />
      <Experience />
      {/*<Projects />*/}
      <Certificates />
      <ContactMe /> 
    </div>
  );
}

export default App;
