import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Moon, Sun, Sparkles } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? `${darkMode ? 'bg-gray-900/98' : 'bg-white/98'} backdrop-blur-xl shadow-xl ${darkMode ? 'border-b border-purple-800' : 'border-b border-pink-100'}` 
        : `${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-xl`
    }`}>
      {/* Decorative top border */}
      <div className={`h-1 ${darkMode ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400' : 'bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400'}`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className={`${darkMode ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-pink-500 to-purple-600'} p-2 rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-300 overflow-hidden`}>
                <img 
                  src="/Basmala.png" 
                  alt="Basmala Logo" 
                  className="h-8 w-8 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const heartIcon = document.createElement('div');
                    heartIcon.innerHTML = '💖';
                    heartIcon.className = 'h-6 w-6 flex items-center justify-center text-white';
                    target.parentNode?.appendChild(heartIcon);
                  }}
                />
              </div>
              <div className={`absolute -top-1 -right-1 w-3 h-3 ${darkMode ? 'bg-amber-400' : 'bg-pink-300'} rounded-full animate-ping`}></div>
            </div>
            <div className="space-y-1">
              <span className={`text-xl font-bold ${darkMode ? 'bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent' : 'bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'}`}>
                Basmala Ayman
              </span>
              <div className="hidden sm:flex items-center space-x-1">
                <Sparkles className={`h-3 w-3 ${darkMode ? 'text-amber-400' : 'text-pink-400'}`} />
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>CS Student</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {[
              { name: 'Home', id: 'home', icon: '🏠' },
              { name: 'About', id: 'about', icon: '💖' },
              { name: 'Skills', id: 'skills', icon: '✨' },
              { name: 'Contact', id: 'contact', icon: '💌' }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group ${darkMode ? 'text-gray-300 hover:text-amber-400' : 'text-gray-700 hover:text-pink-600'} transition-all duration-300 px-3 xl:px-4 py-2 rounded-xl ${darkMode ? 'hover:bg-amber-900/20' : 'hover:bg-pink-50'}`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xs xl:text-sm">{item.icon}</span>
                  <span className="font-medium text-sm xl:text-base">{item.name}</span>
                </div>
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 ${darkMode ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-pink-500 to-purple-600'} transition-all duration-300 group-hover:w-full rounded-full`}></span>
                <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-r from-amber-900/10 to-orange-900/10' : 'bg-gradient-to-r from-pink-100 to-purple-100'} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-pink-500 to-purple-600'} text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <div className={`absolute -top-1 -right-1 w-3 h-3 ${darkMode ? 'bg-amber-300' : 'bg-blue-400'} rounded-full animate-pulse`}></div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl ${darkMode ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-pink-500 to-purple-600'} text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
            >
              {darkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2.5 sm:p-3 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-pink-500 to-purple-600'} text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              <div className={`absolute -top-1 -right-1 w-3 h-3 ${darkMode ? 'bg-amber-300' : 'bg-pink-300'} rounded-full animate-pulse`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className={`${darkMode ? 'bg-gray-900/98 border-gray-700' : 'bg-white/98 border-pink-100'} backdrop-blur-xl rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 mb-4 shadow-2xl border overflow-hidden`}>
              <nav className="py-4 sm:py-6">
                {[
                  { name: 'Home', id: 'home', icon: '🏠' },
                  { name: 'About', id: 'about', icon: '💖' },
                  { name: 'Skills', id: 'skills', icon: '✨' },
                  { name: 'Contact', id: 'contact', icon: '💌' }
                ].map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-3 sm:py-4 px-4 sm:px-6 ${darkMode ? 'text-gray-300 hover:text-amber-400 hover:bg-gradient-to-r hover:from-amber-900/10 hover:to-orange-900/10' : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50'} transition-all duration-300 flex items-center justify-start space-x-3 active:scale-95`}
                  >
                    <span className="text-lg sm:text-xl">{item.icon}</span>
                    <span className="font-medium text-base sm:text-lg">{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Floating decorative elements */}
      <div className={`hidden sm:block absolute top-4 left-10 w-2 h-2 ${darkMode ? 'bg-amber-400' : 'bg-pink-300'} rounded-full opacity-60 animate-bounce`}></div>
      <div className={`hidden sm:block absolute top-6 right-20 w-1.5 h-1.5 ${darkMode ? 'bg-orange-400' : 'bg-purple-300'} rounded-full opacity-50 animate-pulse`}></div>
    </header>
  );
};

export default Header;