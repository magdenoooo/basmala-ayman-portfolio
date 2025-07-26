import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Heart, Sparkles, Github, Linkedin, Instagram, MessageCircle, Star } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      value: '‏basmala.ayman2233@gmail.com‏',
      color: darkMode ? 'text-amber-400' : 'text-pink-500',
      bg: darkMode ? 'bg-amber-900/20' : 'bg-pink-50'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      value: '+20 11 41393540',
      color: darkMode ? 'text-orange-400' : 'text-purple-500',
      bg: darkMode ? 'bg-orange-900/20' : 'bg-purple-50'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Cairo, Egypt',
      color: darkMode ? 'text-amber-400' : 'text-pink-500',
      bg: darkMode ? 'bg-amber-900/20' : 'bg-pink-50'
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: '#', 
      color: darkMode ? 'hover:text-gray-300' : 'hover:text-gray-800', 
      bg: darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50',
      name: 'GitHub'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/basmala-ayman-4161b2326/', 
      color: darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600', 
      bg: darkMode ? 'hover:bg-blue-900/30' : 'hover:bg-blue-50',
      name: 'LinkedIn'
    },
    { 
      icon: Instagram, 
      href: '#', 
      color: darkMode ? 'hover:text-pink-400' : 'hover:text-pink-600', 
      bg: darkMode ? 'hover:bg-pink-900/30' : 'hover:bg-pink-50',
      name: 'Instagram'
    },
    { 
      icon: MessageCircle, 
      href: 'https://wtsi.me/201141393540', 
      color: darkMode ? 'hover:text-green-400' : 'hover:text-green-600', 
      bg: darkMode ? 'hover:bg-green-900/30' : 'hover:bg-green-50',
      name: 'WhatsApp'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={`py-16 md:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50'} relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Background Decorations */}
      {darkMode ? (
        <>
          <div className="absolute w-20 h-20 rounded-full top-20 left-20 bg-amber-400/10 opacity-30 animate-pulse"></div>
          <div className="absolute w-16 h-16 rounded-full bottom-20 right-20 bg-orange-400/10 opacity-40 animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 animate-float">
            <Star className="w-8 h-8 text-amber-400 opacity-30" />
          </div>
          <div className="absolute bottom-1/3 left-1/4 animate-float-delayed">
            <Star className="w-6 h-6 text-orange-400 opacity-40" />
          </div>
          {/* Additional stars for consistency */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse text-amber-400 opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <Star size={10} />
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="absolute w-20 h-20 rounded-full top-20 left-20 bg-gradient-to-br from-pink-200 to-purple-200 opacity-10 animate-pulse"></div>
          <div className="absolute w-16 h-16 rounded-full bottom-20 right-20 bg-gradient-to-br from-purple-200 to-pink-200 opacity-15 animate-bounce"></div>
        </>
      )}
      
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4 space-x-3">
            <h2 className={`text-3xl md:text-5xl font-bold ${darkMode ? 'bg-gradient-to-r from-amber-400 via-orange-300 to-amber-400 bg-clip-text text-transparent' : 'bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'}`}>
              Contact Me
            </h2>
          </div>
          <div className={`w-20 h-1 ${darkMode ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-pink-500 to-purple-500'} mx-auto rounded-full mb-4`}></div>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-base md:text-lg max-w-2xl mx-auto leading-relaxed`}>
            Do you have a project in mind? Or want to collaborate with me? Don't hesitate to reach out!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 md:gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className={`${darkMode ? 'bg-gray-800/50 border-gray-600' : 'bg-white border-pink-100'} rounded-2xl p-6 md:p-8 shadow-lg border`}>
              <div className="mb-6 text-center">
                <div className={`w-16 h-16 ${darkMode ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-pink-500 to-purple-600'} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  {darkMode ? <Star className="w-8 h-8 text-white" /> : <Sparkles className="w-8 h-8 text-white" />}
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-2`}>لنتحدث!</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>I love hearing your creative ideas</p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-4 ${info.bg} rounded-xl ${darkMode ? 'border border-gray-600' : 'border border-pink-200'} hover:shadow-md transition-all duration-300`}>
                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-700/50 shadow-sm' : 'bg-white shadow-sm'} ${info.color}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'} text-sm`}>{info.title}</h4>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm truncate`}>{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className={`mt-6 pt-6 ${darkMode ? 'border-t border-gray-700/50' : 'border-t border-pink-200'}`}>
                <h4 className={`text-base font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-4 text-center`}>
                  Follow Me On
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map(({ icon: Icon, href, color, bg, name }, index) => (
                    <a
                      key={index}
                      href={href}
                      className={`flex items-center space-x-2 p-3 rounded-xl ${darkMode ? 'bg-gray-700/50 text-gray-300 border border-gray-600/50' : 'bg-white text-gray-600 border border-pink-100'} ${color} ${bg} shadow-sm transform hover:scale-105 transition-all duration-300`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className={`${darkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-pink-100'} rounded-2xl p-6 md:p-8 shadow-lg border`}>
              <div className="mb-6 text-center">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-2`}>
                  Send Me a Message
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>I'll be happy to reply to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className={`block text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Full Name <span className={`${darkMode ? 'text-amber-400' : 'text-pink-500'}`}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl ${darkMode ? 'border-gray-600 focus:border-amber-400 bg-gray-700 text-gray-200' : 'border-pink-200 focus:border-pink-500 bg-gradient-to-r from-pink-50/30 to-purple-50/30'} border focus:ring-2 ${darkMode ? 'focus:ring-amber-400/20' : 'focus:ring-pink-100'} transition-all duration-300 placeholder-gray-400`}
                      placeholder="Enter your name here"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className={`block text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address <span className={`${darkMode ? 'text-amber-400' : 'text-pink-500'}`}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl ${darkMode ? 'border-gray-600 focus:border-amber-400 bg-gray-700 text-gray-200' : 'border-pink-200 focus:border-pink-500 bg-gradient-to-r from-pink-50/30 to-purple-50/30'} border focus:ring-2 ${darkMode ? 'focus:ring-amber-400/20' : 'focus:ring-pink-100'} transition-all duration-300 placeholder-gray-400`}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className={`block text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message Subject <span className={`${darkMode ? 'text-amber-400' : 'text-pink-500'}`}>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl ${darkMode ? 'border-gray-600 focus:border-amber-400 bg-gray-700 text-gray-200' : 'border-pink-200 focus:border-pink-500 bg-gradient-to-r from-pink-50/30 to-purple-50/30'} border focus:ring-2 ${darkMode ? 'focus:ring-amber-400/20' : 'focus:ring-pink-100'} transition-all duration-300 placeholder-gray-400`}
                    placeholder="What is your message about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className={`block text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message <span className={`${darkMode ? 'text-amber-400' : 'text-pink-500'}`}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl ${darkMode ? 'border-gray-600 focus:border-amber-400 bg-gray-700 text-gray-200' : 'border-pink-200 focus:border-pink-500 bg-gradient-to-r from-pink-50/30 to-purple-50/30'} border focus:ring-2 ${darkMode ? 'focus:ring-amber-400/20' : 'focus:ring-pink-100'} transition-all duration-300 resize-none placeholder-gray-400`}
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full ${darkMode ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-pink-500 to-purple-600'} text-white py-3.5 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse group`}
                  className={`w-full ${darkMode ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-pink-500 to-purple-600'} text-white py-3.5 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 group`}
                >
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 md:mt-20 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`${darkMode ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-pink-500 to-purple-600'} p-1 rounded-2xl shadow-xl max-w-4xl mx-auto`}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 md:p-10 rounded-2xl`}>
              <div className="space-y-6">
                {darkMode ? <Star className="w-12 h-12 mx-auto text-amber-400" /> : <Heart className="w-12 h-12 mx-auto text-pink-500" />}
                <h3 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Ready to Start Your Next Project?
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-base md:text-lg max-w-2xl mx-auto leading-relaxed`}>
                  Let's work together to turn your creative ideas into amazing and beautiful digital reality!
                </p>
                <div className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <a
                    href="mailto:basmala.ayman@email.com"
                    className={`${darkMode ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-pink-500 to-purple-600'} text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2`}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Me Now</span>
                  </a>
                  <a
                    href="tel:+201234567890"
                    className={`border ${darkMode ? 'border-amber-400 text-amber-400 hover:bg-amber-400' : 'border-pink-500 text-pink-600 hover:bg-pink-500'} hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2`}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;