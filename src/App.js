import React from 'react';
import { Navbar, AboutMe, Skills, Experience, Projects,Certificates, ContactMe, TextAnimation } from './container/index.js';

function App() {
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
