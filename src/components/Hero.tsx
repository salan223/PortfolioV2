import React, { useState, useEffect } from 'react';
import { MapPin, GraduationCap, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const phrases = [
    "I am a Computer Engineering Student",
    "Versatile Programming Skills and Hands-on Hardware Experience",
    "Currently working at Hydro One to energize Ontario"
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const currentPhraseText = phrases[currentPhrase];
      if (displayText.length < currentPhraseText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhraseText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentPhrase, isTyping, phrases]);

  const handleResumeView = () => {
    // This would typically open a PDF file
    alert('Resume PDF would open here. Please upload your resume PDF.');
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Salan <span className="text-primary">Bhattarai</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Computer Engineering Student
              </p>
            </div>

            {/* Typing animation */}
            <div className="min-h-[80px] flex items-center justify-center lg:justify-start">
              <p className="text-lg sm:text-xl text-foreground/90 font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Education and Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/30">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <p className="text-sm text-muted-foreground">York University</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/30">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm text-muted-foreground">Toronto, ON</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Status badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:scale-105 transition-transform duration-200">
                🎯 Open to new grad positions
              </Badge>
            </div>

            {/* Resume button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                onClick={handleResumeView}
                className="px-6 py-3 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                size="lg"
              >
                <FileText className="h-5 w-5 mr-2" />
                View Resume
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-72 h-72 rounded-full overflow-hidden bg-muted flex items-center justify-center relative shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <ImageWithFallback
                  src="/salan.jpg"
                  alt="Salan Bhattarai"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover overlay for visual effect */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 rounded-full"></div>
                
                {/* Optional decorative ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;