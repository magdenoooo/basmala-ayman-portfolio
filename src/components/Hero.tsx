import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Heart, Star } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-pink-50 to-purple-100'
    }`}>
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* General background elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-pulse ${
              darkMode ? 'text-amber-400' : 'text-pink-300'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {darkMode ? <Star size={16} /> : <Heart size={16} />}
          </div>
        ))}
        
        {/* Special elements around profile image area */}
        {darkMode ? (
          // Stars around profile image in dark mode
          <>
            <div className="absolute transform -translate-x-32 top-40 left-1/2 animate-pulse">
              <Star className="w-6 h-6 text-amber-300" />
            </div>
            <div className="absolute delay-300 transform top-48 left-1/2 translate-x-28 animate-pulse">
              <Star className="w-4 h-4 text-orange-400" />
            </div>
            <div className="absolute delay-500 transform -translate-x-40 top-64 left-1/2 animate-pulse">
              <Star className="w-5 h-5 text-amber-400" />
            </div>
            <div className="absolute delay-700 transform top-56 left-1/2 translate-x-36 animate-pulse">
              <Star className="w-3 h-3 text-orange-300" />
            </div>
            <div className="absolute delay-1000 transform -translate-x-24 top-72 left-1/2 animate-pulse">
              <Star className="h-7 w-7 text-amber-300" />
            </div>
            <div className="absolute delay-200 transform translate-x-20 top-44 left-1/2 animate-pulse">
              <Star className="w-4 h-4 text-orange-400" />
            </div>
            <div className="absolute transform translate-x-32 top-68 left-1/2 animate-pulse delay-800">
              <Star className="w-5 h-5 text-amber-400" />
            </div>
            <div className="absolute transform top-52 left-1/2 -translate-x-36 animate-pulse delay-400">
              <Star className="w-3 h-3 text-orange-300" />
            </div>
          </>
        ) : (
          // Hearts around profile image in light mode
          <>
            <div className="absolute transform -translate-x-32 top-40 left-1/2 animate-bounce">
              <Heart className="w-6 h-6 text-pink-400 fill-current" />
            </div>
            <div className="absolute delay-300 transform top-48 left-1/2 translate-x-28 animate-pulse">
              <Heart className="w-4 h-4 text-purple-400 fill-current" />
            </div>
            <div className="absolute delay-500 transform -translate-x-40 top-64 left-1/2 animate-bounce">
              <Heart className="w-5 h-5 text-pink-500 fill-current" />
            </div>
            <div className="absolute delay-700 transform top-56 left-1/2 translate-x-36 animate-bounce">
              <Heart className="w-3 h-3 text-purple-300 fill-current" />
            </div>
            <div className="absolute delay-1000 transform -translate-x-24 top-72 left-1/2 animate-pulse">
              <Heart className="text-pink-400 fill-current h-7 w-7" />
            </div>
            <div className="absolute delay-200 transform translate-x-20 top-44 left-1/2 animate-bounce">
              <Heart className="w-4 h-4 text-purple-400 fill-current" />
            </div>
            <div className="absolute transform translate-x-32 top-68 left-1/2 animate-bounce delay-800">
              <Heart className="w-5 h-5 text-pink-500 fill-current" />
            </div>
            <div className="absolute transform top-52 left-1/2 -translate-x-36 animate-pulse delay-400">
              <Heart className="w-3 h-3 text-purple-300 fill-current" />
            </div>
          </>
        )}
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className={`relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 ${
              darkMode 
                ? 'border-amber-400 shadow-lg shadow-amber-400/20' 
                : 'border-pink-400 shadow-lg shadow-pink-400/20'
            }`}>
              <img
                src={darkMode ? "/hero-dark.JPEG" : "/hero-light.JPEG"}
                alt="Profile"
                className="object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Try with lowercase extension first
                  const currentSrc = target.src;
                  if (currentSrc.includes('.JPEG')) {
                    target.src = currentSrc.replace('.JPEG', '.jpeg');
                  } else if (currentSrc.includes('.jpeg')) {
                    target.src = currentSrc.replace('.jpeg', '.jpg');
                  } else if (currentSrc.includes('.jpg')) {
                    // If all else fails, use a placeholder or default
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0Q1RDhEQyIvPgo8cGF0aCBkPSJNNjAgMTQwQzYwIDEyMC44IDc1LjIgMTA1IDk0LjQgMTA1SDEwNS42QzEyNC44IDEwNSAxNDAgMTIwLjggMTQwIDE0MFYxNDBINjBaIiBmaWxsPSIjRDVEOERDIi8+Cjwvc3ZnPgo=';
                  }
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                darkMode 
                  ? 'from-amber-400/20 to-transparent' 
                  : 'from-pink-400/20 to-transparent'
              }`}></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${
            darkMode 
              ? 'bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'
          }`}>
            Hi,I'm Basmala Ayman

          </h1>

          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 ${
            darkMode ? 'text-amber-300' : 'text-pink-700'
          }`}>
            Computer Science Student & Python Developer

          </h2>

          <p className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
A computer science student at Ain Shams University,
            <br />
with a special passion for algorithms, data structures, and data science.

          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-3 px-4 mb-8 sm:flex-row sm:gap-4 sm:mb-12 sm:px-0">
            <a
              href="#contact"
              className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base ${
                darkMode
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-500/25'
                  : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-lg shadow-pink-500/25'
              }`}
            >
              Contact Me
            </a>
            <a
              href="#about"
              className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base ${
                darkMode
                  ? 'border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900'
                  : 'border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'
              }`}
            >
              Learn More
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center px-4 space-x-4 sm:space-x-6 sm:px-0">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className={`p-2.5 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                  darkMode
                    ? 'bg-gray-800 text-amber-400 hover:bg-amber-400 hover:text-gray-900 shadow-lg shadow-gray-800/50'
                    : 'bg-white text-pink-500 hover:bg-pink-500 hover:text-white shadow-lg shadow-pink-500/25'
                }`}
                aria-label={label}
              >
                <Icon size={20} className="sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;