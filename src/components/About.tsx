import React, { useEffect, useState, useRef } from 'react';
import { Heart, Sparkles, Code, Music, Palette, Star, BookOpen } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const interests = [
    { icon: Code, label: 'Programming', color: darkMode ? 'text-purple-400' : 'text-pink-500' },
    { icon: BookOpen, label: 'Learning', color: darkMode ? 'text-pink-400' : 'text-amber-500' },
    { icon: Music, label: 'Music', color: darkMode ? 'text-yellow-400' : 'text-purple-500' },
    { icon: Palette, label: 'Design', color: darkMode ? 'text-green-400' : 'text-blue-500' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Background Decorations */}
      {darkMode ? (
        <>
          <div className="absolute w-20 h-20 rounded-full opacity-50 top-10 right-10 bg-amber-800/20 animate-pulse"></div>
          <div className="absolute w-16 h-16 rounded-full bottom-20 left-10 bg-orange-800/20 opacity-40 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 animate-pulse">
            <Star className="w-6 h-6 text-amber-300 opacity-40" />
          </div>
          <div className="absolute delay-500 bottom-1/3 right-1/4 animate-pulse">
            <Sparkles className="w-5 h-5 text-orange-300 opacity-50" />
          </div>
        </>
      ) : (
        <>
          <div className="absolute w-20 h-20 bg-pink-100 rounded-full opacity-50 top-10 right-10"></div>
          <div className="absolute w-16 h-16 bg-purple-100 rounded-full bottom-20 left-10 opacity-40"></div>
        </>
      )}
      
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4 space-x-2">
            <Heart className={`h-6 w-6 ${darkMode ? 'text-amber-400' : 'text-pink-500'}`} />
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${darkMode ? 'bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent' : 'bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'}`}>
              About Me
            </h2>
            <Heart className={`h-6 w-6 ${darkMode ? 'text-amber-400' : 'text-pink-500'}`} />
          </div>
          <div className={`w-24 h-1 ${darkMode ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-pink-500 to-purple-600'} mx-auto rounded-full`}></div>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text Content */}
          <div className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className={`${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-pink-50 to-purple-50'} p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-lg ${darkMode ? 'border border-gray-600' : 'border border-pink-100'}`}>
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-3 sm:mb-4 flex items-center space-x-2`}>
                {darkMode ? <Star className="w-6 h-6 text-amber-400" /> : <Sparkles className="w-6 h-6 text-pink-500" />}
                <span>My Educational Journey</span>
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base`}>
I'm Basmla Ayman, a computer science student at Ain Shams University. I have a strong love for technology, and I've worked with languages like JavaScript, Python, TypeScript, and C++. I've become especially interested in topics like algorithms, data structures, OOP, and databases.



              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm sm:text-base`}>
I love working on ideas from scratch and solving problems in a practical way. I believe every experience I go through brings me one step closer to my goal of becoming a strong programmer.

              </p>
            </div>

            {/* Interests */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {interests.map(({ icon: Icon, label, color }, index) => (
                <div
                  key={index}
                  className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg ${darkMode ? 'border border-gray-600' : 'border border-gray-100'} hover:shadow-xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 group active:scale-95`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className={`h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 ${color} mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300`} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium text-xs sm:text-sm lg:text-base`}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative transition-all duration-1000 delay-600 mt-8 lg:mt-0 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className={`${darkMode ? 'bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700' : 'bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500'} p-1 rounded-2xl sm:rounded-3xl shadow-2xl relative`}>
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl`}>
                <div className="space-y-6 text-center">
                  <div className="relative inline-block">
                    <div className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mb-3 sm:mb-4 overflow-hidden shadow-lg ${darkMode ? 'border-4 border-amber-400/50' : 'border-4 border-pink-100'}`}>
                      <img
                        src={darkMode ? "/about-dark.JPEG" : "/about-light.JPEG"}
                        alt="Basmala Ayman"
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
                            // If all else fails, use a placeholder
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0Q1RDhEQyIvPgo8cGF0aCBkPSJNNjAgMTQwQzYwIDEyMC44IDc1LjIgMTA1IDk0LjQgMTA1SDEwNS42QzEyNC44IDEwNSAxNDAgMTIwLjggMTQwIDE0MFYxNDBINjBaIiBmaWxsPSIjRDVEOERDIi8+Cjwvc3ZnPgo=';
                          }
                        }}
                      />
                    </div>
                    <div className={`absolute -top-2 -left-2 ${darkMode ? 'bg-gradient-to-r from-amber-500 to-orange-600' : 'bg-gradient-to-r from-pink-500 to-purple-600'} rounded-full p-2 shadow-lg`}>
                      {darkMode ? <Star className="w-4 h-4 text-white" /> : <Sparkles className="w-4 h-4 text-white" />}
                    </div>
                    <div className={`absolute -bottom-2 -right-2 ${darkMode ? 'bg-gradient-to-r from-orange-500 to-amber-600' : 'bg-gradient-to-r from-purple-500 to-pink-600'} rounded-full p-2 shadow-lg`}>
                      <Code className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className={`${darkMode ? 'bg-amber-900/20' : 'bg-pink-50'} p-3 sm:p-4 rounded-xl`}>
                      <h4 className={`font-bold ${darkMode ? 'text-amber-400' : 'text-pink-600'} mb-1 sm:mb-2 text-sm sm:text-base`}>Education</h4>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xs sm:text-sm`}>Computer Science Student</p>
                    </div>
                    
                    <div className={`${darkMode ? 'bg-orange-900/20' : 'bg-purple-50'} p-3 sm:p-4 rounded-xl`}>
                      <h4 className={`font-bold ${darkMode ? 'text-orange-400' : 'text-purple-600'} mb-1 sm:mb-2 text-sm sm:text-base`}>Specialization</h4>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xs sm:text-sm`}>Algorithms & Data Structures</p>
                    </div>
                    
                    <div className={`${darkMode ? 'bg-amber-900/20' : 'bg-pink-50'} p-3 sm:p-4 rounded-xl`}>
                      <h4 className={`font-bold ${darkMode ? 'text-amber-400' : 'text-pink-600'} mb-1 sm:mb-2 text-sm sm:text-base`}>Goal</h4>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xs sm:text-sm`}>Python Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              {darkMode ? (
                <>
                  <div className="absolute hidden w-6 h-6 rounded-full sm:block -top-4 -right-4 sm:w-8 sm:h-8 bg-amber-300 opacity-60 animate-bounce"></div>
                  <div className="absolute hidden w-4 h-4 bg-orange-400 rounded-full opacity-50 sm:block -bottom-4 -left-4 sm:w-6 sm:h-6 animate-pulse"></div>
                </>
              ) : (
                <>
                  <div className="absolute hidden w-6 h-6 bg-pink-300 rounded-full sm:block -top-4 -right-4 sm:w-8 sm:h-8 opacity-60 animate-bounce"></div>
                  <div className="absolute hidden w-4 h-4 bg-purple-300 rounded-full opacity-50 sm:block -bottom-4 -left-4 sm:w-6 sm:h-6 animate-pulse"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;