import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Set initial theme to dark
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.href.substring(1)); // Remove # from href
      const scrollPosition = window.scrollY + 150; // Offset for header height and better detection

      // Special handling for top of page (about section)
      if (window.scrollY < 100) {
        setActiveSection('about');
        return;
      }

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Set initial active section after a brief delay to ensure DOM is ready
    const initialTimer = setTimeout(() => {
      handleScroll();
    }, 100);
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navigationItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Tools', href: '#tools', id: 'tools' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Photography', href: '#photography', id: 'photography' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Hamburger menu for mobile, Logo for desktop */}
          <div className="flex items-center">
            {/* Mobile hamburger menu */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-accent transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
            
            {/* Logo/Name */}
            <div className="ml-2 md:ml-0">
              <h1 className="text-lg font-semibold">Salan Bhattarai</h1>
            </div>
          </div>

          {/* Center - Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative pb-3 transition-all duration-200 hover:scale-105 transform ${
                    isActive 
                      ? 'text-foreground font-bold text-base' 
                      : 'text-foreground/80 hover:text-foreground text-sm font-normal'
                  }`}
                >
                  {item.name}
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right side - Theme toggle */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 hover:bg-accent transition-all duration-200 hover:scale-105"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative block w-full text-left px-4 py-3 hover:bg-accent transition-all duration-200 rounded-md ${
                    isActive 
                      ? 'text-foreground font-bold text-base bg-accent/50' 
                      : 'text-foreground/80 hover:text-foreground text-sm font-normal'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {/* Active indicator dot for mobile */}
                    {isActive && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    )}
                    <span>{item.name}</span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;