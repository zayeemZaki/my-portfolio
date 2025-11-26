import Hero from '../components/sections/Hero';
import TechStack from '../components/sections/TechStack';
import FeaturedExperience from '../components/sections/FeaturedExperience';
import Projects from '../components/sections/FeaturedProjects';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main className="bg-white dark:bg-zinc-950 min-h-screen">
      <Hero />
      <TechStack />
      <FeaturedExperience />
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
