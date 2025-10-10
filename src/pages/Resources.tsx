import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, CreditCard, Shield, BookOpen, FileText, Download, Play, Info } from "lucide-react";

const Resources = () => {
  const guides = [
    {
      icon: Smartphone,
      title: "Smartphone Basics",
      description: "Step-by-step guide to using smartphones, making calls, sending messages, and using WhatsApp.",
      topics: ["Turning on/off the phone", "Making calls and contacts", "SMS and WhatsApp", "Camera and gallery", "Settings and safety"],
      color: "from-primary to-accent",
    },
    {
      icon: CreditCard,
      title: "UPI & Digital Payments",
      description: "Learn how to make safe online payments using UPI apps like Google Pay, PhonePe, and Paytm.",
      topics: ["Setting up UPI", "Making payments safely", "QR code scanning", "Checking transactions", "Common mistakes to avoid"],
      color: "from-secondary to-accent",
    },
    {
      icon: Shield,
      title: "Safe Browsing",
      description: "Essential online safety tips, privacy protection, and how to identify and avoid scams.",
      topics: ["Creating strong passwords", "Identifying fake messages", "Privacy settings", "Avoiding online scams", "Reporting issues"],
      color: "from-accent to-primary",
    },
    {
      icon: BookOpen,
      title: "E-Learning Platforms",
      description: "Access free online courses, video tutorials, and skill development platforms.",
      topics: ["YouTube for learning", "SWAYAM courses", "Khan Academy", "Coursera basics", "Certificate programs"],
      color: "from-primary via-accent to-secondary",
    },
  ];

  const governmentSchemes = [
    {
      name: "Digital India Portal",
      description: "Access government services, certificates, and schemes online",
    },
    {
      name: "Umang App",
      description: "Unified access to various government services in one app",
    },
    {
      name: "PM Kisan Portal",
      description: "Direct benefit transfer for farmers and rural women",
    },
    {
      name: "Ayushman Bharat",
      description: "Digital health cards and free health insurance schemes",
    },
    {
      name: "Jan Dhan Yojana",
      description: "Opening bank accounts and accessing financial services",
    },
  ];

  const downloadables = [
    {
      title: "Complete Beginner's Guide (Hindi)",
      description: "Smartphone basics, UPI, and safety tips in Hindi",
      size: "3.2 MB",
      format: "PDF",
    },
    {
      title: "UPI Safety Checklist",
      description: "Quick reference card for safe digital payments",
      size: "1.5 MB",
      format: "PDF",
    },
    {
      title: "Government Schemes Directory",
      description: "List of digital schemes with access instructions",
      size: "2.8 MB",
      format: "PDF",
    },
    {
      title: "Online Safety Infographic",
      description: "Visual guide to staying safe online",
      size: "1.2 MB",
      format: "PDF",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Learning <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Step-by-step guides, tutorials, and materials designed specifically for women 
            beginning their digital literacy journey
          </p>
        </div>
      </section>

      {/* Step-by-Step Guides */}
      <section className="section-container">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-md">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Step-by-Step Learning Guides</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <Card key={index} className="card-hover shadow-[var(--shadow-card)]">
                <CardHeader>
                  <div className={`w-14 h-14 bg-gradient-to-br ${guide.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">What you'll learn:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {guide.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                 <Button asChild variant="default" className="w-full gap-2">
  <a href="https://www.youtube.com/watch?v=r22jFymPxRY" target="_blank" rel="noreferrer">
    <Play className="w-4 h-4" />
    Start Learning
  </a>
</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Government Schemes */}
      <section className="section-container bg-muted/30">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center shadow-md">
            <Info className="w-6 h-6 text-secondary-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Government Schemes & Services</h2>
        </div>

        <p className="text-muted-foreground mb-8 max-w-3xl">
          Learn how to access various government schemes and services online. These programs 
          can help with healthcare, financial support, education, and more.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {governmentSchemes.map((scheme, index) => (
            <Card key={index} className="shadow-[var(--shadow-card)] card-hover">
              <CardContent className="p-6 space-y-2">
                <h3 className="font-semibold text-lg">{scheme.name}</h3>
                <p className="text-sm text-muted-foreground">{scheme.description}</p>
                
                <Button asChild variant="default" className="w-full gap-2">
  <a href="https://www.digitalindiaportal.co.in/" target="_blank" rel="noreferrer">
    <Play className="w-4 h-4" />
    Learn how to access
  </a>
</Button>
  
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Downloadable Materials */}
      <section className="section-container">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-md">
            <FileText className="w-6 h-6 text-accent-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Downloadable Materials</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {downloadables.map((item, index) => (
            <Card key={index} className="card-hover shadow-[var(--shadow-card)]">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                  <div className="text-xs text-muted-foreground text-right flex-shrink-0 ml-4">
                    <div className="font-semibold">{item.format}</div>
                    <div>{item.size}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  Download {item.format}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Infographics Section */}
      <section className="section-container bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-y border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visual Learning Materials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Easy-to-understand infographics and visual guides available in multiple languages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "How to Use UPI", lang: "Hindi, English, Tamil" },
            { title: "Online Safety Tips", lang: "Hindi, English, Bengali" },
            { title: "Smartphone Guide", lang: "Hindi, English, Marathi" },
          ].map((item, index) => (
            <Card key={index} className="shadow-[var(--shadow-card)] card-hover">
              <CardContent className="p-6 space-y-4">
                <div className="aspect-square bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">Available in: {item.lang}</p>
                </div>
                <Button variant="default" size="sm" className="w-full gap-2">
                  <Download className="w-3 h-3" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <Card className="shadow-[var(--shadow-card)] bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2">
          <CardContent className="p-12 text-center space-y-4">
            <h2 className="text-3xl font-bold">Need Help Getting Started?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team is here to guide you. Reach out for personalized support, 
              workshop schedules, or suggestions for new resources.
            </p>
            <Button size="lg" className="gap-2">
              Contact Support Team
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Resources;
