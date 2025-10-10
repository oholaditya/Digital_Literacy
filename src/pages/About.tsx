import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Heart, Users, TrendingUp, BarChart, AlertCircle } from "lucide-react";

const About = () => {
  const objectives = [
    "Provide accessible digital literacy training to women in rural and urban areas",
    "Bridge the digital gender divide through practical, hands-on learning",
    "Enable economic empowerment through digital financial inclusion",
    "Foster confidence in using technology for education and communication",
    "Create a sustainable model for community-based digital education",
  ];

  const statistics = [
    {
      title: "Internet Users",
      value: "Only 33%",
      description: "of internet users in India are women (as of 2023)",
      icon: Users,
    },
    {
      title: "Smartphone Ownership",
      value: "31%",
      description: "gender gap in smartphone ownership among rural women",
      icon: AlertCircle,
    },
    {
      title: "Digital Literacy",
      value: "38%",
      description: "of urban women vs 25% of rural women are digitally literate",
      icon: BarChart,
    },
    {
      title: "Financial Inclusion",
      value: "20%",
      description: "gap in digital payment adoption between men and women",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About the <span className="gradient-text">Project</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the digital gender divide and our mission to bridge it
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Background & Motivation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                In today's digital age, technology has become essential for education, employment, 
                financial services, and civic participation. However, women in India—particularly 
                in rural areas—face significant barriers to digital access and literacy.
              </p>
              <p>
                This project was born from witnessing these disparities firsthand. We recognized 
                that empowering women with digital skills doesn't just change individual lives—it 
                transforms families, strengthens communities, and drives economic development.
              </p>
              <p>
                Cultural factors, limited access to devices, language barriers, and lack of 
                tailored training programs have created a persistent digital gender gap. Our 
                initiative aims to address these challenges through culturally sensitive, 
                practical, and accessible digital literacy programs.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-secondary-foreground" />
              </div>
              <CardTitle className="text-2xl">Purpose & Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                <strong>Purpose:</strong> To empower women with the digital skills and confidence 
                needed to fully participate in India's digital economy and society.
              </p>
              <p>
                <strong>Vision:</strong> A future where every woman in India has equal access to 
                digital opportunities, enabling her to make informed decisions, access essential 
                services, pursue education, and achieve economic independence.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Digital Gender Divide Statistics */}
      <section className="section-container bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Digital Gender Divide in India
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the scale of the challenge through data and statistics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="shadow-[var(--shadow-card)] card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-muted-foreground">{stat.title}</div>
                      <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-4xl mx-auto mt-8 shadow-[var(--shadow-card)] bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4">Key Findings</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Women are 15% less likely to own a mobile phone than men in India</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Rural women face compounded barriers: limited infrastructure, socio-cultural norms, and lower literacy rates</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Only 31% of women have ever used the internet, compared to 57% of men</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Women who gain digital skills show increased confidence, economic participation, and decision-making power</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Objectives Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl">Project Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">{objective}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-container bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-y border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Making a Real Difference
          </h2>
          <p className="text-lg text-muted-foreground">
            Through our field work and training programs, we've witnessed transformative changes. 
            Women who once felt intimidated by technology are now confidently making digital 
            payments, accessing online education, and connecting with opportunities that were 
            previously out of reach.
          </p>
          <p className="text-lg text-muted-foreground">
            Our approach is rooted in respect for local cultures, delivered in local languages, 
            and focused on practical skills that make an immediate impact on daily life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
