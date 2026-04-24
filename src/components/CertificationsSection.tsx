import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "NPTEL – Cloud Computing",
    description:
      "Completed certification in Cloud Computing, gaining knowledge of cloud architecture, virtualization, and distributed computing concepts.",
  },
  {
    title: "Master AI Generative & Generative AI Tools",
    description:
      "Learned practical use of generative AI technologies and modern AI tools for automation, content creation, and productivity.",
  },
  {
    title: "Computational Theory: Language Principles & Finite Automata Theory",
    description:
      "Studied the fundamentals of formal languages, automata theory, and the theoretical concepts behind computation.",
  },
  {
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    description:
      "Developed skills in prompt engineering and effective interaction with large language models for problem-solving and AI-assisted development.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-40 h-40 border border-primary/5 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 border border-secondary/5 rounded-full"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full glass-card border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Certifications</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            <span className="gradient-text">Certificates & Courses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 border border-border/50 hover:border-primary/40 transition-all group animate-fade-in"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
