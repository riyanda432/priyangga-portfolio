import { useState, useEffect } from 'react';
import { Code } from 'lucide-react';
import PropTypes from 'prop-types';

const Navigation = ({ scrollToSection, projectsRef, contactRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  Navigation.propTypes = {
    scrollToSection: PropTypes.func.isRequired,
    projectsRef: PropTypes.object.isRequired,
    contactRef: PropTypes.object.isRequired
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code className={`h-6 w-6 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="text-blue-500">Priyangga</span>Portfolio
            </span>
          </div>
          
          <div className="flex items-center space-x-8">
            {[
              { name: 'Projects', ref: projectsRef },
              { name: 'Contact', ref: contactRef }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              isScrolled
                ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                : 'border-white/50 text-white hover:border-white'
            }`}>
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;