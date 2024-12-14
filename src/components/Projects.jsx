import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import { 
  CheckCircle, 
  ExternalLink, 
  Github,
  Globe,
  Database,
  BarChart,
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Enterprise Healthcare Platform",
    category: "healthcare",
    description: "AI-powered healthcare platform revolutionizing patient care with real-time analytics and predictive diagnostics",
    tech: ["React", "Node.js", "TensorFlow", "AWS"],
    gradient: "from-blue-500 to-indigo-600",
    bgImage: "/api/placeholder/800/600",
    metrics: [
      { value: "500K+", label: "Monthly Users" },
      { value: "99.99%", label: "Platform Uptime" },
      { value: "45%", label: "Cost Reduction" }
    ],
    features: ["HIPAA Compliant", "Real-time Analytics", "AI Diagnostics"],
    icon: <Globe className="h-6 w-6" />,
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: 2,
    title: "Financial Analytics Engine",
    category: "fintech",
    description: "High-performance financial data processing platform handling billions in transactions with microsecond latency",
    tech: ["Python", "Apache Kafka", "PostgreSQL", "Docker"],
    gradient: "from-emerald-500 to-teal-600",
    bgImage: "/api/placeholder/800/600",
    metrics: [
      { value: "$2B+", label: "Daily Volume" },
      { value: "0.1ms", label: "Latency" },
      { value: "100+", label: "API Integrations" }
    ],
    features: ["Real-time Processing", "Bank-grade Security", "Multi-currency Support"],
    icon: <BarChart className="h-6 w-6" />,
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: 3,
    title: "AI-Driven E-commerce",
    category: "ai/ml",
    description: "Next-generation e-commerce platform with personalized shopping experiences powered by machine learning",
    tech: ["Next.js", "Python", "TensorFlow", "GCP"],
    gradient: "from-purple-500 to-pink-600",
    bgImage: "/api/placeholder/800/600",
    metrics: [
      { value: "2.5x", label: "Conversion Rate" },
      { value: "35%", label: "Revenue Boost" },
      { value: "1M+", label: "Daily Predictions" }
    ],
    features: ["Personalized Recommendations", "Dynamic Pricing", "Fraud Detection"],
    icon: <Database className="h-6 w-6" />,
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-xl shadow-xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Header */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity duration-300 
          ${isHovered ? 'opacity-90' : 'opacity-80'}`}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        
        {/* Project Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
              {project.icon}
            </div>
            <span className="px-3 py-1 text-sm bg-white/10 rounded-full backdrop-blur-sm">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-6">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-full text-sm font-medium
                ${isHovered ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}
                transition-colors duration-300`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-lg font-bold text-gray-900">{metric.value}</div>
              <div className="text-xs text-gray-500">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <a
            href={project.links.live}
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            View Live
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
          <a
            href={project.links.github}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800"
          >
            Source Code
            <Github className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    gradient: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    icon: PropTypes.node.isRequired,
    links: PropTypes.shape({
      live: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const Projects = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('all');
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'ai/ml', label: 'AI/ML' }
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore my latest works showcasing expertise in scalable applications,
            cloud architecture, and AI integration.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeTab === category.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(project => activeTab === 'all' || project.category === activeTab)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;