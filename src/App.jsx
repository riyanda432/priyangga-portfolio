import { useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    const offset = -80;
    const elementPosition = elementRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        scrollToSection={scrollToSection}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Hero 
        scrollToSection={scrollToSection}
        projectsRef={projectsRef}
      />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;