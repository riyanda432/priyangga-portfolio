import { forwardRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-gray-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-300">
              Let&apos;s discuss how I can help bring your project to life.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 flex justify-center space-x-6">
            {[
              { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
              { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
              { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;