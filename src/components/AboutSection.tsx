import { GraduationCap, Briefcase, Trophy, Award, Code, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-primary/10 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-secondary/10 rounded-full"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full glass-card border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            <span className="gradient-text">My Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From competitive programmer to full-stack developer
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Bio with stats */}
          <div className="glass-card rounded-2xl p-8 lg:p-12 animate-fade-in border border-primary/10 hover:border-primary/30 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Code className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Who I Am</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Passionate Computer Science and Engineering student with expertise in full-stack development and data structures. 
              Proven ability to design and implement web applications using modern technologies including JavaScript, Node.js, and MySQL. 
              Strong problem-solving skills demonstrated through competitive programming achievements and hands-on project experience. 
              Combines technical excellence with teamwork skills developed as a national basketball gold medallist. 
              Eager to contribute innovative solutions and continuous learning mindset to dynamic development teams.
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-xl bg-muted/30">
                <div className="text-2xl font-bold text-primary mb-1">⭐⭐</div>
                <div className="text-xs text-muted-foreground">MySQL Expert</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/30">
                <div className="text-2xl font-bold text-secondary mb-1">⭐</div>
                <div className="text-xs text-muted-foreground">Python Pro</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/30">
                <div className="text-2xl font-bold gradient-text mb-1">🏀</div>
                <div className="text-xs text-muted-foreground">Gold Medallist</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/30">
                <div className="text-2xl font-bold text-primary mb-1">💻</div>
                <div className="text-xs text-muted-foreground">Full-Stack</div>
              </div>
            </div>
          </div>

          {/* Education & Experience Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="glass-card rounded-2xl p-8 animate-fade-in border border-border/50 hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Education</h3>
                  <div className="h-0.5 w-12 bg-primary mt-1"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                  <div className="pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">Current</span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-1">B.Tech in Computer Science</h4>
                    <p className="text-primary font-semibold mb-1">Lovely Professional University</p>
                    <p className="text-sm text-muted-foreground">
                      DSA • Web Dev • DBMS • Software Engineering
                    </p>
                  </div>
                </div>
                <div className="relative pl-6 border-l-2 border-border/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-border border-4 border-background"></div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Intermediate</h4>
                  <p className="text-sm text-muted-foreground">Saint Paul's Senior Secondary School</p>
                  <p className="text-xs text-muted-foreground mt-1">Mathura, Uttar Pradesh</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="glass-card rounded-2xl p-8 animate-fade-in border border-border/50 hover:border-secondary/30 transition-all">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Experience</h3>
                  <div className="h-0.5 w-12 bg-secondary mt-1"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative pl-6 border-l-2 border-secondary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background"></div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Web Development Intern</h4>
                  <p className="text-secondary font-semibold mb-3">Vanilla Kart</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <p className="text-sm text-muted-foreground">Developed SpiceHub website & mobile application</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <p className="text-sm text-muted-foreground">Designed key features & improved user interface</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <p className="text-sm text-muted-foreground">Full-stack development & real-world project deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="glass-card rounded-2xl p-8 lg:p-12 animate-fade-in border border-border/50 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Achievements & Recognition</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-1"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-primary" />
                  <h4 className="text-xl font-bold text-foreground">Competitive Programming</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">LeetCode & HackerRank</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐⭐</span>
                    <span className="text-sm text-muted-foreground">MySQL Certification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm text-muted-foreground">Python Certification</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Strong DSA foundation</p>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-secondary/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                  <h4 className="text-xl font-bold text-foreground">Sports Excellence</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏀</span>
                    <span className="text-lg font-semibold gradient-text">National Gold Medal</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Basketball championship demonstrating leadership, teamwork, and competitive spirit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
