import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: "York University",
      role: "B.Eng. Computer Engineering",
      location: "Toronto, ON",
      period: "2021 - 2026",
      mainDescription: "Pursuing a Bachelor of Engineering in Computer Engineering at York University’s Lassonde School of Engineering, developing strong foundations in software, hardware, and systems engineering while engaging in academic projects and extracurricular leadership.",
      bulletPoints: [
        "Completed coursework in operating systems, algorithms, communication networks, and software requirements engineering",
        "Built practical projects including a stock analyzer web app (Python + React) and a virtual memory simulator in C",
        "Collaborated on team-based engineering assignments applying UML modeling, system design, and verification methods",
        "Applied data visualization and automation tools (Power BI, Power Apps, Python) in both coursework and side projects",
        "Engaged in extracurricular leadership as a Frosh Week Leader, supporting new students in the Lassonde community"
      ],
      highlights: [
        "Operating Systems",
        "Data Structures & Algorithms",
        "Software Engineering",
        "Project Development & Leadership"
      ],
      logo: "/york.jpeg",
      logoPlaceholder: "🎓",
      current: true
    },
    {
      id: 1,
      company: "Hydro One",
      role: "Engineering Intern",
      location: "Toronto, ON",
      period: "May 2024 - Sept. 2025",
      mainDescription: "Supporting Ontario’s largest transmission and distribution utility by developing automation tools, dashboards, and outage coordination systems that improve efficiency, transparency, and safety in power system operations.",
      bulletPoints: [
        "Designed and deployed a fully integrated Power App for outage requests and changes, replacing email-based workflows and enabling real-time tracking across 5+ departments with 200+ users",
        "Built Power Automate flows to send automated notifications, dynamically manage forms by department, and reduce manual follow-ups",
        "Developed Power BI dashboards to visualize outage change metrics and lockout request statistics, providing planners with historical insights and improving decision-making",
        "Created Python tools for outage reporting, temperature-risk overlays, and automated PDF generation that reduced manual processing time by over 70%",
        "Implemented a 60-Day Lockout Tool, handling 7,100+ requests in 8 months, significantly reducing group email volume and automating status updates for planners and PSTs",
        "Collaborated with engineers, planners, and external stakeholders to streamline outage scheduling, risk evaluation, and approval processes"
      ],
      highlights: [
        "Power Systems",
        "Grid Modernization",
        "Energy Infrastructure",
        "Technical Analysis",
        "Renewable Energy"
      ],
      logo: "/hydro.png", // Placeholder path for Hydro One logo
      logoPlaceholder: "⚡",
      current: false
    },
    {
      id: 3,
      company: "Freelance",
      role: "Front End Developer",
      location: "Toronto, ON",
      period: "Sept. 2021 - Aug. 2023",
      mainDescription: "Designing and developing responsive websites as a freelance Front End Developer, delivering clean code and intuitive user experiences for clients.",
      bulletPoints: [
        "Designed and developed websites using HTML5, CSS3, and React.js with frameworks such as Bootstrap",
        "Implemented responsive design principles to ensure cross-device compatibility and accessibility",
        "Enhanced user experience through effective UI/UX design and interactive front-end features",
        "Collaborated with clients to gather requirements and translate business needs into technical solutions",
        "Optimized website performance through clean code practices and front-end debugging"
      ],
      highlights: [
        "HTML5",
        "CSS3",
        "React.js",
        "Bootstrap",
        "UI/UX Design"
      ],
      logoPlaceholder: "💻",
      current: false
    }    
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and impactful projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block group-hover:scale-125 transition-transform duration-300"></div>

                {/* Experience card */}
                <Card className={`ml-0 md:ml-20 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30 ${exp.current ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                  }`}>
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                          {exp.logo ? (
                            <ImageWithFallback
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-8 h-8 object-contain"
                            />
                          ) : (
                            <span className="text-lg">{exp.logoPlaceholder}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-1 text-muted-foreground mb-2">
                            <Building className="h-3 w-3" />
                            <span className="text-sm">{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end space-y-2">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span className="text-xs">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span className="text-xs">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {exp.mainDescription}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 mb-4">
                      {exp.bulletPoints.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <Badge
                          key={highlightIndex}
                          variant="secondary"
                          className="hover:scale-110 transition-all duration-200 cursor-default text-xs"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30">
            <h3 className="text-base font-semibold mb-2">Ready for New Opportunities</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Seeking full-time positions where I can contribute to innovative engineering solutions
            </p>
            <Badge variant="outline" className="border-primary/50 hover:border-primary text-xs">
              Available for Full-Time Roles
            </Badge>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;