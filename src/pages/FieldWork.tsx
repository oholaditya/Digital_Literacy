import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Image as ImageIcon, TrendingUp, Heart, Award } from "lucide-react";

const FieldWork = () => {
  const statistics = [
    { icon: Users, value: "500+", label: "Women Trained", color: "from-primary to-accent" },
    { icon: MapPin, value: "15+", label: "Villages Visited", color: "from-secondary to-accent" },
    { icon: Award, value: "25+", label: "Workshops Conducted", color: "from-accent to-primary" },
    { icon: TrendingUp, value: "80%", label: "Confidence Increase", color: "from-primary via-accent to-secondary" },
  ];

  const successStories = [
    {
      name: "Ananya Ghokhle",
      age: 45,
      location: "Dighi, Maharashtra",
      before: "Had never used a smartphone. Relied on others for all digital tasks and banking.",
      after: "Now confidently makes UPI payments, uses WhatsApp to connect with her daughter studying in the city, and accesses government schemes online.",
      impact: "Gained independence in financial transactions and stays connected with family",
      badge: "Digital Pioneer",
    },
    {
      name: "Lakshmi Chougule",
      age: 32,
      location: "Pimpri goan, Maharashtra",
      before: "Felt intimidated by technology. Had smartphone but only for receiving calls.",
      after: "Completed online skill courses on YouTube, now teaches other women in her community basic smartphone use.",
      impact: "Became a community digital literacy champion and mentor",
      badge: "Community Leader",
    },
    {
      name: "Trisha Sanjeevni",
      age: 38,
      location: "Shahunagar, Maharashtra",
      before: "Needed help from family for every online task. Felt dependent and left behind.",
      after: "Independently accesses Ayushman Bharat portal for health services, uses e-learning platforms, and helps neighbors with digital tasks.",
      impact: "Empowered to access healthcare and education opportunities",
      badge: "Health Champion",
    },
  ];

  const recentVisits = [
    {
      date: "September 29, 2025",
      location: "Balke Nagar, Dighi, Maharashtra",
      participants: "8 women",
      activities: [
        "introduction to smartphones and basic functions",
        "Hands-on practice with Google Pay and PhonePe",
        "Q&A session on online safety and privacy",
      ],
      outcomes: "8 women successfully set up UPI and made their first digital payment",
    },
    
  ];

  const placeholderSlots = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Field Work</span> & Impact
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Documenting our journey: workshops, success stories, and the real impact 
            of digital literacy on women's lives
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-[var(--shadow-card)] card-hover">
                <CardContent className="p-6 text-center space-y-3">
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto shadow-md`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-container bg-muted/30">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-md">
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Success Stories</h2>
        </div>

        <p className="text-muted-foreground mb-8 max-w-3xl">
          Real stories of transformation—how digital literacy changed lives and empowered women 
          to take control of their digital futures.
        </p>

        <div className="space-y-6">
          {successStories.map((story, index) => (
            <Card key={index} className="shadow-[var(--shadow-card)] card-hover">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{story.name}, {story.age}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {story.location}
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    {story.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <div className="w-2 h-2 bg-destructive rounded-full" />
                      BEFORE
                    </div>
                    <p className="text-sm text-muted-foreground pl-4">{story.before}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      AFTER
                    </div>
                    <p className="text-sm text-muted-foreground pl-4">{story.after}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-lg p-4 border border-border">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold mb-1">Impact</p>
                      <p className="text-sm text-muted-foreground">{story.impact}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-container">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center shadow-md">
            <ImageIcon className="w-6 h-6 text-secondary-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Field Visit Gallery</h2>
        </div>

        <p className="text-muted-foreground mb-8">
          Photos from our workshops, training sessions, and celebratory moments as women 
          gain confidence and skills in digital literacy.
        </p>

{/* Photo Gallery Grid */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {[
  
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
   
  ].map((src, index) => (
    <Card key={index} className="overflow-hidden card-hover shadow-[var(--shadow-card)]">
      <div className="aspect-square relative">
        <img
          src={src}
          alt={`Field visit photo ${index + 1}`}
          className="object-cover w-full h-full absolute inset-0"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
    </Card>
  ))}
</div>



        
      </section>

      {/* Recent Visits Documentation */}
      <section className="section-container bg-muted/30">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-md">
            <Calendar className="w-6 h-6 text-accent-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Recent Field Visits</h2>
        </div>

        <div className="space-y-6">
          {recentVisits.map((visit, index) => (
            <Card key={index} className="shadow-[var(--shadow-card)] card-hover">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{visit.location}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {visit.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {visit.participants}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground">Activities Conducted</h4>
                    <ul className="space-y-2">
                      {visit.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground">Key Outcomes</h4>
                    <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg p-4 border border-border">
                      <p className="text-sm text-muted-foreground">{visit.outcomes}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Summary */}
      <section className="section-container">
        <Card className="shadow-[var(--shadow-card)] bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2">
          <CardContent className="p-12 text-center space-y-4">
            <h2 className="text-3xl font-bold">Measuring Real Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Beyond numbers, we measure success through increased confidence, independence, 
              and the ripple effects as trained women share knowledge with their families and communities.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">85%</div>
                <p className="text-sm text-muted-foreground">Report feeling more confident with technology</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">70%</div>
                <p className="text-sm text-muted-foreground">Now teach others in their community</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">90%</div>
                <p className="text-sm text-muted-foreground">Continue using digital skills daily</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default FieldWork;
