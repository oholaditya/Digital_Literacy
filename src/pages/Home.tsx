import { BookOpen, Users, Smartphone, TrendingUp, Shield, Globe, Heart, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-women-digital.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Smartphone,
      title: "Digital Access",
      description: "Empowering women with skills to use smartphones, apps, and digital services confidently.",
    },
    {
      icon: Shield,
      title: "Online Safety",
      description: "Teaching safe browsing, privacy protection, and cybersecurity awareness.",
    },
    {
      icon: Globe,
      title: "Financial Inclusion",
      description: "Enabling UPI payments, e-banking, and accessing government schemes online.",
    },
    {
      icon: BookOpen,
      title: "Learning Opportunities",
      description: "Opening doors to e-learning platforms, skill development, and career growth.",
    },
  ];

  const impacts = [
    { icon: Users, value: "500+", label: "Women Trained" },
    { icon: Award, value: "15+", label: "Villages Reached" },
    { icon: Zap, value: "80%", label: "Confidence Increase" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div className="section-container relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                Empowering Women Through Technology
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Digital Literacy for{" "}
                <span className="gradient-text">Every Woman</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Bridging the digital gender divide by empowering women with essential technological 
                skills, fostering independence, and creating opportunities in the digital age.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/resources">
                  <Button size="lg" className="gap-2 shadow-lg">
                    <BookOpen className="w-5 h-5" />
                    Explore Resources
                  </Button>
                </Link>
                <Link to="/fieldwork">
                  <Button size="lg" variant="outline" className="gap-2">
                    <Heart className="w-5 h-5" />
                    Success Stories
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-20" />
              <img
                src={heroImage}
                alt="Women learning digital skills"
                className="relative rounded-2xl shadow-[var(--shadow-card)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          <p className="text-lg text-primary-foreground/95">
            To eliminate the digital gender gap by providing accessible, practical, and culturally 
            sensitive digital literacy training to women across India. We believe every woman deserves 
            the opportunity to participate fully in the digital economy and society.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card key={index} className="shadow-[var(--shadow-card)] card-hover">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto shadow-md">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold gradient-text">{impact.value}</div>
                  <div className="text-muted-foreground font-medium">{impact.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="section-container bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Women's Digital Literacy Matters
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            In India, women face significant barriers to digital access and literacy. 
            Empowering women with digital skills creates ripple effects across families, 
            communities, and the nation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={index}
                className="card-hover shadow-[var(--shadow-card)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl flex items-center justify-center shadow-md">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Key Highlights */}
      <section className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Project Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-[var(--shadow-card)] card-hover">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Practical Training</h3>
              <p className="text-muted-foreground">
                Hands-on workshops covering smartphone basics, UPI payments, safe browsing, 
                and accessing government schemes—all taught in local languages with cultural sensitivity.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] card-hover">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Community Impact</h3>
              <p className="text-muted-foreground">
                Documented success stories showing real transformation—from first-time smartphone 
                users to confident digital citizens making online payments and accessing e-learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 py-16 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Join the Movement
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're looking to learn, support, or collaborate—there's a place for you 
            in our mission to empower women through digital literacy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/resources">
              <Button size="lg" className="gap-2">
                Start Learning
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="gap-2">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
