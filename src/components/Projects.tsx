import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "RockBlaster (Verilog FPGA Game)",
      mainDescription: "Developed a hardware-based RockBlaster game on FPGA using Verilog, implementing digital logic for gameplay, controls, and real-time VGA visuals.",
      bulletPoints: [
        "Designed FSMs to manage gameplay states including idle, play, collision detection, and scoring",
        "Implemented MUX for obstacle selection, adders for scoring, and clock dividers for gameplay timing",
        "Built a VGA interface to render real-time game visuals with dynamic updates",
        "Integrated debouncing circuits for stable and responsive user input",
        "Applied digital design principles such as counters, registers, and modular coding for efficient development",
        "Successfully demonstrated an interactive FPGA-driven game showcasing hardware logic design"
      ],
      techStack: ["Verilog", "FSM", "MUX", "Counters", "VGA Display", "FPGA"],
      image: "/images/fpga.webp",
      demoUrl: "#",
      githubUrl: "https://github.com/salan223/RockGame_Verilog",
      status: "Completed"
    }
    ,
    {
      id: 2,
      title: "SphereMovie: Your Hub for Movie Exploration 🎥",
      mainDescription: "SphereMovie is a full-stack web app that simplifies discovering new movies by providing trailers, detailed information, and user reviews, while fostering a collaborative platform for movie enthusiasts.",
      bulletPoints: [
        "Developed a dynamic and responsive frontend using React for seamless user interaction",
        "Built scalable RESTful services with Java Spring Boot to handle movie data and user-generated content",
        "Integrated MongoDB for flexible storage of user data, movie details, and community reviews",
        "Implemented features to browse movies, watch trailers, and read/write reviews in one hub",
        "Applied Agile methodologies and SDLC practices to manage the project lifecycle effectively",
        "Created a collaborative platform enabling users to share insights and engage with fellow movie lovers"
      ],
      techStack: ["React", "Java Spring Boot", "MongoDB", "REST APIs", "Agile", "SDLC"],
      image: "/images/movie.png",
      demoUrl: "#",
      githubUrl: "https://github.com/salan223/SphereMovie",
      status: "Completed"
    }
    ,
    {
      id: 3,
      title: "Self Plant Watering System 🌱",
      mainDescription: "Designed and implemented an automated system that waters plants based on soil moisture levels, ensuring optimal hydration with minimal human intervention.",
      bulletPoints: [
        "Built a soil moisture detection circuit using MOSFET sensors connected to an Arduino Grove board",
        "Programmed control logic in Java and C to monitor sensor data and trigger watering actions",
        "Implemented safety mechanisms to prevent over-watering and reduce risk of hardware failure",
        "Optimized microcontroller programming for reliable, real-time soil condition monitoring",
        "Demonstrated practical application of embedded systems for sustainable automation"
      ],
      techStack: ["MOSFET Sensor", "Arduino Grove", "Java", "C", "Embedded Systems"],
      image: "/images/plant.png",
      demoUrl: "https://www.youtube.com/watch?v=uKN1KUkdGWo&ab_channel=Salan",
      githubUrl: "https://docs.google.com/document/d/19hzM1lY3fqlw0qfmif5WewQoTJ4SyoqyF1J535WXHkE/edit?tab=t.0",
      status: "Completed"
    }

  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with modern technologies and engineering principles
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/30 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Project Image/Preview */}
                <div className="lg:col-span-1 bg-muted flex items-center justify-center p-8 group-hover:bg-muted/80 transition-colors duration-300">
                  {project.image ? (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-contain rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-48 bg-muted-foreground/10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center space-y-2">
                        <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto" />
                        <p className="text-sm text-muted-foreground">Project Screenshot</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Badge
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className="hover:scale-110 transition-transform duration-200 text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.mainDescription}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2">
                      {project.bulletPoints.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-xs text-muted-foreground">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="hover:scale-110 transition-all duration-200 cursor-default border-primary/30 hover:border-primary text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button
                      size="sm"
                      className="hover:scale-105 transition-all duration-200 text-xs"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:scale-105 transition-all duration-200 border-primary/30 hover:border-primary text-xs"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-3 w-3 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects Link */}
        <div className="mt-12 text-center">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30">
            <h3 className="text-base font-semibold mb-2">More Projects Coming Soon</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Currently working on exciting new projects. Check back for updates!
            </p>
            <Button asChild variant="outline" className="border-primary/50 hover:border-primary text-xs">
              <a href="https://github.com/salan223" target="_blank" rel="noopener noreferrer">
                <Github className="h-3 w-3 mr-2" />
                View All on GitHub
              </a>
            </Button>

          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;