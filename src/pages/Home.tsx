import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import FeaturedExperience from '../components/sections/FeaturedExperience';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="bg-slate-950">
      <Hero />
      <Skills />
      <FeaturedExperience />
      <FeaturedProjects />
      <Contact />
    </div>
  );
};

export default Home;
