import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowDown, Code2, Database, Cpu, FileDown } from "lucide-react";
import profileImage from "@/assets/profile-picture.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      {/* Geometric decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border-2 border-primary/20 rotate-45 animate-float" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-32 left-10 w-16 h-16 border-2 border-secondary/20 animate-float" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-secondary rounded-full animate-glow-pulse" style={{ animationDelay: "0.7s" }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 space-y-8 animate-fade-in-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-primary/20 hover:border-primary/40 transition-all">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Available for opportunities</span>
            </div>
            
            {/* Main heading with enhanced typography */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="block mt-2 gradient-text animate-fade-in">
                  Pradeep Kumar Kuntal
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 text-xl lg:text-2xl font-semibold">
                <span className="text-muted-foreground">Computer Science Student</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="text-primary">Full-Stack Developer</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="text-secondary">Competitive Programmer</span>
              </div>
            </div>
            
            {/* Description with icon badges */}
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate about building innovative web applications and solving complex problems through elegant code solutions.
            </p>

            {/* Tech stack indicators */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-border/50">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Full-Stack</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-border/50">
                <Database className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Database Design</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-border/50">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">DSA Expert</span>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-neon font-semibold px-8 h-12 text-base group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 h-12 text-base group hover:border-primary"
                onClick={() => window.open("https://github.com/pradeepsinghkuntal1913", "_blank")}
              >
                <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 h-12 text-base group hover:border-secondary"
                asChild
              >
                <a href="/resume/Pradeep_Kumar_Kuntal_Resume.pdf" download>
                  <FileDown className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </div>

          </div>
          
          {/* Right profile image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
              
              {/* Orbiting elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 rounded-xl glass-card border border-primary/30 flex items-center justify-center animate-float">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-xl glass-card border border-secondary/30 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <Database className="w-8 h-8 text-secondary" />
              </div>
              
              {/* Main profile image */}
              <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px]">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-float"></div>
                <div className="absolute inset-4 rounded-full border-2 border-secondary/20 animate-float" style={{ animationDelay: "0.5s" }}></div>
                
                {/* Image container */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-primary/30 glow-neon">
                  <img
                    src={profileImage}
                    alt="Pradeep Kumar Kuntal - Full-Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 group cursor-pointer"
            aria-label="Scroll to about section"
          >
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
