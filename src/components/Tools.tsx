import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Tools: React.FC = () => {
  const toolCategories = [
    {
      title: "Programming Languages",
      tools: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Swift"],
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      icon: "💻"
    },
    {
      title: "Frontend Technologies",
      tools: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Figma"],
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      icon: "🎨"
    },
    {
      title: "Backend & Database",
      tools: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "AWS"],
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      icon: "🗄️"
    },
    {
      title: "Tools & Platforms",
      tools: ["Git", "GitHub", "VS Code", "Docker", "Vercel", "Postman"],
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      icon: "🛠️"
    }
  ];

  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical Skills & Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning multiple technologies and platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30 group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, toolIndex) => (
                    <Badge
                      key={toolIndex}
                      className={`${category.color} hover:scale-110 transition-all duration-200 cursor-default`}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional skills section */}
        <div className="mt-12 text-center">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30">
            <h3 className="text-lg font-semibold mb-4">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["Machine Learning", "Cloud Computing", "Microservices", "DevOps"].map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="hover:scale-110 transition-all duration-200 cursor-default border-primary/50 hover:border-primary"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tools;