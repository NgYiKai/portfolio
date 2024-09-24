import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Navbar from './sections/Navbar/Navbar';
import AboutMe from './sections/AboutMe/AboutMe';
import Projects2 from './sections/Projects2/Projects2';
import Skills2 from './sections/Skills2/Skills2';


function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <AboutMe/>
      <Projects2 />
      <Skills2/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
