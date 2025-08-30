import React, { useState } from 'react';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';

import Header from './components/Header';
import Hero from './components/Hero';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Photography from './components/Photography';
import BackgroundDots from './components/BackgroundDots';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'salanbhattarai25@gmail.com',
      description: 'Send me an email anytime',
      action: () => window.open('mailto:salanbhattarai25@gmail.com'),
      color: 'text-red-600 dark:text-red-400'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      description: 'Professional networking',
      action: () => window.open('https://www.linkedin.com/in/salan-bhattarai-13800221b/', '_blank'),
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'View my repositories',
      description: 'Check out my code',
      action: () => window.open('https://github.com/salan223', '_blank'),
      color: 'text-gray-800 dark:text-gray-200'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm passionate about creating innovative solutions and always excited to discuss new opportunities, 
            collaborate on projects. Best way to reach out to me is through email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Send me a message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center space-x-2">
                      <span>👤</span>
                      <span>Name</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="hover:border-primary/50 focus:border-primary transition-all duration-200 bg-background/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <span>📧</span>
                      <span>Email</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="hover:border-primary/50 focus:border-primary transition-all duration-200 bg-background/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center space-x-2">
                    <span>💬</span>
                    <span>Message</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or just say hello! I'd love to hear from you..."
                    rows={6}
                    required
                    className="hover:border-primary/50 focus:border-primary transition-all duration-200 resize-none bg-background/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full hover:scale-105 transition-all duration-200 bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                  size="lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Quick Contact Methods - Takes 1 column */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Get in touch quickly</h3>
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
                  onClick={method.action}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300`}>
                      <method.icon className={`w-6 h-6 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{method.title}</h4>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                      <p className="text-sm text-primary font-medium">{method.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Ready to Collaborate - Full Width */}
        <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Actively seeking full-time opportunities starting Summer 2026. Let's build something amazing together!
            </p>
            <div className="flex justify-center">
              <span className="inline-flex items-center px-6 py-3 rounded-full text-base font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border border-green-200 dark:border-green-700">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Available for Hire
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Animated Background */}
      <BackgroundDots />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Tools />
        <Experience />
        <Projects />
        <Photography />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Salan Bhattarai. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}