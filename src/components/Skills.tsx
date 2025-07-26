import React, { useEffect, useState, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Heart, Sparkles, Star, Zap, Brain, Layers } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
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

  const skills = [
    { 
      name: 'Python', 
      level: 85, 
      icon: Code, 
      color: darkMode ? 'from-amber-400 to-orange-400' : 'from-blue-500 to-green-500',
      bgColor: darkMode ? 'bg-amber-900/20' : 'bg-blue-50'
    },
    { 
      name: 'JavaScript', 
      level: 80, 
      icon: Globe, 
      color: darkMode ? 'from-orange-300 to-amber-400' : 'from-yellow-500 to-orange-500',
      bgColor: darkMode ? 'bg-orange-900/20' : 'bg-yellow-50'
    },
    { 
      name: 'TypeScript', 
      level: 75, 
      icon: Code, 
      color: darkMode ? 'from-amber-300 to-orange-300' : 'from-blue-600 to-indigo-600',
      bgColor: darkMode ? 'bg-amber-900/20' : 'bg-blue-50'
    },
    { 
      name: 'C++', 
      level: 70, 
      icon: Zap, 
      color: darkMode ? 'from-orange-400 to-amber-400' : 'from-purple-600 to-pink-600',
      bgColor: darkMode ? 'bg-orange-900/20' : 'bg-purple-50'
    },
    { 
      name: 'Database', 
      level: 78, 
      icon: Database, 
      color: darkMode ? 'from-amber-400 to-orange-400' : 'from-green-500 to-teal-500',
      bgColor: darkMode ? 'bg-amber-900/20' : 'bg-green-50'
    },
    { 
      name: 'Data Structure', 
      level: 82, 
      icon: Layers, 
      color: darkMode ? 'from-orange-400 to-amber-400' : 'from-pink-500 to-rose-500',
      bgColor: darkMode ? 'bg-orange-900/20' : 'bg-pink-50'
    },
    { 
      name: 'Algorithms', 
      level: 80, 
      icon: Brain, 
      color: darkMode ? 'from-amber-400 to-orange-400' : 'from-indigo-500 to-purple-500',
      bgColor: darkMode ? 'bg-amber-900/20' : 'bg-indigo-50'
    },
    { 
      name: 'Problem Solving', 
      level: 85, 
      icon: Sparkles, 
      color: darkMode ? 'from-orange-400 to-amber-400' : 'from-orange-500 to-red-500',
      bgColor: darkMode ? 'bg-orange-900/20' : 'bg-orange-50'
    },
    { 
      name: 'OOP', 
      level: 77, 
      icon: Code, 
      color: darkMode ? 'from-amber-400 to-orange-400' : 'from-teal-500 to-cyan-500',
      bgColor: darkMode ? 'bg-amber-900/20' : 'bg-teal-50'
    },
    { 
      name: 'HTML', 
      level: 90, 
      icon: Globe, 
      color: darkMode ? 'from-orange-400 to-amber-400' : 'from-red-500 to-orange-500',
      bgColor: darkMode ? 'bg-orange-900/20' : 'bg-red-50'
    },
      { 
      name: 'Node JS', 
      level: 90, 
      icon: Globe, 
      color: darkMode ? 'from-orange-400 to-amber-400' : 'from-red-500 to-orange-500',
      bgColor: darkMode ? 'bg-orange-900/20' : 'bg-red-50'
    },
    { 
      name: 'CSS', 
      level: 88, 
      icon: Smartphone, 
      color: darkMode ? 'from-amber-400 to-orange-400' : 'from-blue-500 to-cyan-500',
      bgColor: darkMode ? 'bg-amber-900/20' : 'bg-blue-50'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50'} relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Background Decorations */}
      {darkMode ? (
        <>
          <div className="absolute w-24 h-24 rounded-full top-20 left-10 bg-amber-400/10 opacity-30 animate-pulse"></div>
          <div className="absolute w-20 h-20 rounded-full bottom-20 right-10 bg-orange-400/10 opacity-40 animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 animate-float">
            <Star className="w-8 h-8 text-amber-400 opacity-30" />
          </div>
          <div className="absolute bottom-1/3 left-1/4 animate-float-delayed">
            <Star className="w-6 h-6 text-orange-400 opacity-40" />
          </div>
          {/* Additional stars for consistency */}
          {[...Array(15)].map((_, i) => (
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
              <Star size={12} />
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="absolute w-24 h-24 bg-pink-200 rounded-full top-20 left-10 opacity-30 animate-pulse"></div>
          <div className="absolute w-20 h-20 bg-purple-200 rounded-full bottom-20 right-10 opacity-40 animate-bounce"></div>
        </>
      )}
      
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4 space-x-2">
            {darkMode ? <Star className="w-6 h-6 text-amber-400" /> : <Sparkles className="w-6 h-6 text-pink-500" />}
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${darkMode ? 'bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent' : 'bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'}`}>
              Technical Skills
            </h2>
            {darkMode ? <Star className="w-6 h-6 text-amber-400" /> : <Sparkles className="w-6 h-6 text-pink-500" />}
          </div>
          <div className={`w-24 h-1 ${darkMode ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-pink-500 to-purple-600'} mx-auto rounded-full`}></div>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 sm:px-0`}>
            Skills I've mastered in my educational journey as a Computer Science student
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-100'} rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 group active:scale-95`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${skill.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className={`h-5 w-5 sm:h-6 sm:w-6 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className={`text-sm sm:text-base lg:text-lg font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {skill.name}
                  </h3>
                </div>
                <span className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5 sm:h-3 mb-2`}>
                <div
                  className={`h-2.5 sm:h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:scale-105 relative overflow-hidden`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Skill Level Text */}
              <div className="flex items-center justify-between text-xs sm:text-xs">
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Beginner</span>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Expert</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`${darkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-100'} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border max-w-2xl mx-auto`}>
            {darkMode ? <Star className="w-8 h-8 mx-auto mb-4 text-amber-400" /> : <Heart className="w-8 h-8 mx-auto mb-4 text-pink-500" />}
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-3 sm:mb-4`}>
              On a Continuous Learning Journey
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-sm sm:text-base`}>
              I believe that every step I take brings me closer to the developer I aspire to be. 
              Always open to new opportunities, projects, and challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;