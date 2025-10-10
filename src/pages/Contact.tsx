import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Users, Heart, Handshake, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. Our team will contact you soon.",
    });

    setFormData({ name: "", email: "", organization: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const teamMembers = [
    {
      role: "SCOA05",
      name: "Vedika Therokar",
      contact: "vedikat1011@gmail.com",
    },
    {
      role: "SCOA06",
      name: "Omkar Shinde",
      contact: "omkarshinde1790@gmail.com",
    },
    {
      role: "SCOA23",
      name: "Aditya Ohol",
      contact: "adityaohol1010@gmail.com",
    },
  ];

  const helplines = [
    {
      title: "Women's Helpline",
      number: "1091",
      description: "24/7 support for women in distress",
    },
    {
      title: "Cyber Crime Helpline",
      number: "1930",
      description: "Report online fraud and cyber crimes",
    },
    {
      title: "Digital India Helpdesk",
      number: "1800-3000-4444",
      description: "Support for government digital services",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Contact & Support</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team, access support resources, or explore collaboration opportunities
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Have questions or want to collaborate? We'd love to hear from you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization (Optional)</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="NGO, School, or Institution name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry, ideas, or how you'd like to collaborate..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">LinkedIn</h4>
                    <p className="text-sm text-muted-foreground">
                      <a href="https://www.linkedin.com/in/vedika-therokar-999485295/" className="hover:underline">Vedika Therokar</a>,
                      <a href="https://www.linkedin.com/in/omkar-shinde-b2550432a/" className="hover:underline"> Omkar Shinde</a>,
                      <a href="https://www.linkedin.com/in/aditya-ohol-86aa78328/" className="hover:underline"> Aditya Ohol</a>

                    </p>
                    
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">+91 9876543210</p>
                    
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  
                  
                </div>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </section>
      
      

      {/* Team Details */}
      <section className="section-container bg-muted/30">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-md">
            <Users className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Our Team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-[var(--shadow-card)] card-hover text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-secondary rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <div className="text-xs text-muted-foreground">
                  <Mail className="w-3 h-3 inline mr-1" />
                  {member.contact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Important Helplines */}
      <section className="section-container">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center shadow-md">
            <HelpCircle className="w-6 h-6 text-secondary-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Important Helplines</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {helplines.map((helpline, index) => (
            <Card key={index} className="shadow-[var(--shadow-card)] card-hover">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-bold text-lg">{helpline.title}</h3>
                <div className="text-3xl font-bold gradient-text">{helpline.number}</div>
                <p className="text-sm text-muted-foreground">{helpline.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Contact;
