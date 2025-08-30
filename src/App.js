import React from 'react';
import { AboutMe, Skills, Experience, Projects, Certificates, ContactMe, HeroSection, GitHubStats, LeetCode } from './container/index.js';

function App() {

  return (
    <div className="app-container">
      <HeroSection />
      <AboutMe />
      <Skills />
      <GitHubStats />
      <Experience />
      <Projects />
      <LeetCode />
      <Certificates />
      <ContactMe /> 
    </div>
  );
}

export default App;
