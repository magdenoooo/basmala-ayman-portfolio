import React from 'react';
import { Heart, Code, Coffee, Sparkles, Star, Github, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: '#', name: 'GitHub', color: darkMode ? 'hover:text-gray-300' : 'hover:text-gray-300' },
    { icon: Linkedin, href: '#', name: 'LinkedIn', color: darkMode ? 'hover:text-blue-300' : 'hover:text-blue-300' },
    { icon: Instagram, href: '#', name: 'Instagram', color: darkMode ? 'hover:text-pink-300' : 'hover:text-pink-300' },
    { icon: Mail, href: '#', name: 'Email', color: darkMode ? 'hover:text-red-300' : 'hover:text-red-300' }
  ];

  return (
    <footer className={`${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 border-t border-gray-600/30' : 'bg-gradient-to-br from-pink-600 via-purple-600 to-pink-700'} text-white relative overflow-hidden`}>
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0">
        {darkMode ? (
          <>
            <div className="absolute w-20 h-20 rounded-full top-10 left-10 bg-amber-400/15 animate-pulse"></div>
            <div className="absolute w-16 h-16 rounded-full bottom-10 right-10 bg-orange-400/15 animate-bounce"></div>
            <div className="absolute w-6 h-6 rounded-full top-1/2 left-1/4 bg-amber-400/25 animate-ping"></div>
            <div className="absolute w-8 h-8 delay-300 rounded-full bottom-1/3 right-1/3 bg-orange-400/20 animate-pulse"></div>
            <div className="absolute w-4 h-4 delay-500 rounded-full top-20 right-1/4 bg-amber-400/25 animate-bounce"></div>
            
            {/* Floating stars */}
            <div className="absolute top-16 left-1/3 animate-float">
              <Star className="w-8 h-8 text-amber-400/40" />
            </div>
            <div className="absolute bottom-20 right-1/4 animate-float-delayed">
              <Star className="w-6 h-6 text-orange-400/40" />
            </div>
            <div className="absolute top-1/3 right-10 animate-float">
              <Star className="h-7 w-7 text-amber-400/35" />
            </div>
            {/* Additional stars for consistency */}
            {[...Array(20)].map((_, i) => (
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
                <Star size={8} />
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="absolute w-20 h-20 rounded-full top-10 left-10 bg-white/10 animate-pulse"></div>
            <div className="absolute w-16 h-16 rounded-full bottom-10 right-10 bg-white/10 animate-bounce"></div>
            <div className="absolute w-6 h-6 rounded-full top-1/2 left-1/4 bg-white/20 animate-ping"></div>
            <div className="absolute w-8 h-8 delay-300 rounded-full bottom-1/3 right-1/3 bg-white/15 animate-pulse"></div>
            <div className="absolute w-4 h-4 delay-500 rounded-full top-20 right-1/4 bg-white/25 animate-bounce"></div>
            
            {/* Floating hearts and stars */}
            <div className="absolute top-16 left-1/3 animate-float">
              <Heart className="w-8 h-8 text-white/20" />
            </div>
            <div className="absolute bottom-20 right-1/4 animate-float-delayed">
              <Sparkles className="w-6 h-6 text-white/25" />
            </div>
            <div className="absolute top-1/3 right-10 animate-float">
              <Sparkles className="h-7 w-7 text-white/20" />
            </div>
          </>
        )}
      </div>

      <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center space-x-4">
              <div className={`${darkMode ? 'bg-amber-500/25 border border-amber-400/20' : 'bg-white/20'} p-4 rounded-2xl backdrop-blur-sm shadow-lg`}>
                {darkMode ? <Star className="w-10 h-10 text-white" /> : <Heart className="w-10 h-10 text-white" />}
              </div>
              <div>
                <h3 className="mb-2 text-3xl font-bold">Basmala Ayman</h3>
                <div className={`flex items-center space-x-2 ${darkMode ? 'text-amber-200' : 'text-pink-200'}`}>
                  <Code className="w-4 h-4" />
                  <span className="text-sm font-medium">CS Student & Python Developer</span>
                </div>
              </div>
            </div>
            
            <p className={`${darkMode ? 'text-gray-200' : 'text-pink-100'} text-lg leading-relaxed max-w-md`}>
              Passionate Computer Science student on an exciting learning journey in the world of technology. 
              I explore programming and aspire to become a professional developer ✨
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className={`flex items-center space-x-3 ${darkMode ? 'text-gray-200' : 'text-pink-100'}`}>
                <Mail className="w-4 h-4" />
                <span className="text-sm">‏basmala.ayman2233@gmail.com‏</span>
              </div>
              <div className={`flex items-center space-x-3 ${darkMode ? 'text-gray-200' : 'text-pink-100'}`}>
                <Phone className="w-4 h-4" />
                <span className="text-sm">+20 11 41393540</span>
              </div>
              <div className={`flex items-center space-x-3 ${darkMode ? 'text-gray-200' : 'text-pink-100'}`}>
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="flex items-center space-x-2 text-xl font-bold">
              {darkMode ? <Star className="w-5 h-5 text-amber-400" /> : <Sparkles className="w-5 h-5 text-pink-300" />}
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-pink-100 hover:text-white'} transition-colors duration-300 group flex items-center space-x-2`}
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="flex items-center space-x-2 text-xl font-bold">
              {darkMode ? <Star className="w-5 h-5 text-amber-400" /> : <Heart className="w-5 h-5 text-pink-300" />}
              <span>Follow Me</span>
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, name, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`p-3 rounded-2xl ${darkMode ? 'bg-gray-600/30 border border-gray-500/30' : 'bg-white/20'} text-white ${color} backdrop-blur-sm transform hover:scale-110 transition-all duration-300 hover:shadow-lg ${darkMode ? 'hover:bg-gray-600/50' : 'border border-white/20'} group`}
                  title={name}
                >
                  <Icon className="w-5 h-5 group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`${darkMode ? 'border-t border-gray-500/30' : 'border-t border-white/20'} pt-8`}>
          {/* Made with Love Section */}
          <div className="space-y-6 text-center">
            <div className={`flex items-center justify-center space-x-3 ${darkMode ? 'text-gray-200' : 'text-pink-100'}`}>
              <span>Made with</span>
              {darkMode ? <Star className="w-5 h-5 text-amber-400 animate-pulse" /> : <Heart className="w-5 h-5 text-pink-300 animate-pulse" />}
              <span>and</span>
              <Code className={`h-5 w-5 ${darkMode ? 'text-orange-400' : 'text-purple-300'}`} />
              <span>and</span>
              <Coffee className={`h-5 w-5 ${darkMode ? 'text-amber-400' : 'text-amber-300'}`} />
              <span>and lots of passion by</span>
              <span className="font-bold text-white">Basmala Ayman</span>
              {darkMode ? <Star className="w-4 h-4 text-amber-400 animate-pulse" /> : <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />}
            </div>

            {/* Copyright */}
            <div className={`pt-6 ${darkMode ? 'border-t border-gray-500/30' : 'border-t border-white/20'}`}>
              <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
                <p className={`${darkMode ? 'text-gray-200' : 'text-pink-100'} text-sm flex items-center space-x-2`}>
                  <span>© 2025 Basmala Ayman. All rights reserved.</span>
                  {darkMode ? <Star className="w-4 h-4 text-amber-400" /> : <Heart className="w-4 h-4 text-pink-300" />}
                </p>
                <div className={`flex items-center space-x-4 ${darkMode ? 'text-gray-300' : 'text-pink-200'} text-sm`}>
                  <a href="#" className="transition-colors duration-300 hover:text-white">Privacy Policy</a>
                  <span>•</span>
                  <a href="#" className="transition-colors duration-300 hover:text-white">Terms of Use</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${darkMode ? 'bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300' : 'bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400'}`}></div>
    </footer>
  );
};

export default Footer;