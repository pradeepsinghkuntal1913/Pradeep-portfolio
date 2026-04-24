import { Code, Database, Wrench, Globe, Brain, Users, Sparkles } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "primary",
      skills: ["Java", "C++", "JavaScript", "HTML5", "CSS3", "SQL", "Python"],
    },
    {
      icon: Globe,
      title: "Frameworks & Technologies",
      color: "secondary",
      skills: ["Node.js", "Express.js", "PHP", "Responsive Web Design", "DOM Manipulation", "API Development"],
    },
    {
      icon: Database,
      title: "Databases",
      color: "primary",
      skills: ["MongoDB", "MySQL"],
    },
    {
      icon: Wrench,
      title: "Tools",
      color: "secondary",
      skills: ["Linux", "Git", "VS Code"],
    },
    {
      icon: Brain,
      title: "Core Expertise",
      color: "primary",
      skills: ["Data Structures & Algorithms", "Competitive Programming", "Problem Solving"],
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "secondary",
      skills: ["Team Collaboration", "Creative Problem Solving", "Fast Learning", "Communication"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-neon animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-${category.color}/10 text-${category.color} group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{category.title}</h3>
                  <div className={`h-0.5 w-0 group-hover:w-full bg-${category.color} transition-all duration-300 mt-1`}></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 rounded-lg bg-muted/50 text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all cursor-default border border-transparent hover:border-primary/30 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured skills highlight */}
        <div className="mt-12 max-w-4xl mx-auto glass-card rounded-2xl p-8 border border-primary/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-6">
            <span className="gradient-text">Core Competencies</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-xl bg-muted/30">
              <div className="text-3xl mb-2">💻</div>
              <div className="text-sm font-semibold text-foreground">Full-Stack</div>
              <div className="text-xs text-muted-foreground mt-1">Development</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/30">
              <div className="text-3xl mb-2">🗄️</div>
              <div className="text-sm font-semibold text-foreground">Database</div>
              <div className="text-xs text-muted-foreground mt-1">Design</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/30">
              <div className="text-3xl mb-2">🧩</div>
              <div className="text-sm font-semibold text-foreground">DSA</div>
              <div className="text-xs text-muted-foreground mt-1">Algorithms</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/30">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-sm font-semibold text-foreground">Problem</div>
              <div className="text-xs text-muted-foreground mt-1">Solving</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
