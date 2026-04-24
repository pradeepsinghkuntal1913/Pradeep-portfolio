import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Send, MessageCircle, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_fbka1oq",
        "template_0sbxr3e",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "htInNZYjFsxDPG7Wv"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "8279385243", href: "tel:8279385243", color: "primary" },
    { icon: Mail, label: "Email", value: "pradeepsinghkuntal1913@gmail.com", href: "mailto:pradeepsinghkuntal1913@gmail.com", color: "secondary" },
    { icon: MapPin, label: "Location", value: "Jalandhar, Punjab", color: "primary" },
    { icon: Github, label: "GitHub", value: "github.com/pradeepsinghkuntal1913", href: "https://github.com/pradeepsinghkuntal1913", color: "secondary" },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-4">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Let's Connect</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and build something amazing
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-left">
            <div className="glass-card rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" />
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-all">
                      <div className={`p-3 rounded-xl bg-${info.color}/10 text-${info.color} group-hover:scale-110 transition-transform`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1 group/link"
                          >
                            <span className="break-all">{info.value}</span>
                            {info.href.startsWith("http") && <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold">Availability</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Open to <span className="text-primary font-semibold">internship opportunities</span> and <span className="text-secondary font-semibold">collaborative projects</span>. Let's create something exceptional together!
              </p>
            </div>
          </div>

          {/* Contact Form - 3 columns */}
          <div className="lg:col-span-3 glass-card rounded-2xl p-8 lg:p-10 animate-fade-in border border-border/50">
            <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
            <p className="text-muted-foreground mb-8">Fill out the form and I'll get back to you within 24 hours</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Name</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-border focus:border-primary h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-border focus:border-primary h-12"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Message</label>
                <Textarea
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={7}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-neon font-semibold h-12 group" disabled={isSubmitting}>
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
