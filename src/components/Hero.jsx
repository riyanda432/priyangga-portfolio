import { ArrowRight, ChevronDown, Code, Globe, Shield, Star } from 'lucide-react';
import PropTypes from 'prop-types';

const Hero = ({ scrollToSection, projectsRef }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff12_12%,transparent_12.5%,transparent_87%,#ffffff12_87.5%,#ffffff12)] bg-[length:40px_40px]"></div>
        </div>
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-[80px] animate-pulse delay-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center">
          {/* Enhanced Title with Animation */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              <span className="block text-white font-extrabold mb-2">
                Transforming Ideas
              </span>
              <div className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300">
                  Into Digital Reality
                </span>
                {/* Animated Underline */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-500 transform skew-x-12 -skew-y-1 opacity-50"></div>
              </div>
            </h1>
          </div>

          {/* Animated Subtitle */}
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-blue-50/90 mb-12 animate-fade-in-up [animation-delay:200ms] leading-relaxed">
            Full-stack developer specializing in crafting exceptional digital experiences 
            with cutting-edge technologies
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 animate-fade-in-up [animation-delay:400ms]">
            <button 
              onClick={() => scrollToSection(projectsRef)}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium 
                         hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 
                         shadow-lg hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center"
            >
              View My Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="mailto:contact@example.com"
              className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium backdrop-blur-sm 
                       hover:bg-white/20 transform hover:-translate-y-0.5 transition-all duration-200 
                       border border-white/10 hover:border-white/30 shadow-lg"
            >
              Get In Touch
            </a>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up [animation-delay:600ms]">
            {[
              { icon: <Code className="h-6 w-6" />, value: '8+', label: 'Years of Experience', gradient: 'from-blue-500 to-blue-600' },
              { icon: <Star className="h-6 w-6" />, value: '50+', label: 'Projects Completed', gradient: 'from-indigo-500 to-indigo-600' },
              { icon: <Globe className="h-6 w-6" />, value: '20+', label: 'Global Clients', gradient: 'from-purple-500 to-purple-600' },
              { icon: <Shield className="h-6 w-6" />, value: '100%', label: 'Success Rate', gradient: 'from-blue-500 to-indigo-600' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
                          hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute inset-x-0 h-1 top-0 rounded-t-xl bg-gradient-to-r ${stat.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                <div className="flex flex-col items-center">
                  <div className="text-blue-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-200/80 text-center">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/60" />
          </div>
        </div>
      </div>

      {/* Tech Stack Badges */}
      <div className="absolute bottom-20 left-0 right-0 overflow-hidden">
        <div className="flex justify-center gap-4 text-sm text-white/60">
          {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'TypeScript'].map((tech, index) => (
            <span 
              key={index}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  projectsRef: PropTypes.object.isRequired
};

export default Hero;