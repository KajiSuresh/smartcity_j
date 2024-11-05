import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, GraduationCap, Briefcase, Building2, TrendingUp, Users, Calendar, Award } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";

export default function Index() {
  const features = [
    {
      title: "Tourism",
      description: "Discover attractions, hotels, restaurants, and more",
      icon: MapPin,
      href: "/tourism",
      color: "text-blue-500",
      stats: "200+ Locations",
      highlights: ["Top Attractions", "Local Cuisine", "Cultural Events"],
    },
    {
      title: "Education",
      description: "Find schools, universities, and learning resources",
      icon: GraduationCap,
      href: "/education",
      color: "text-green-500",
      stats: "50+ Institutions",
      highlights: ["Universities", "Research Centers", "Libraries"],
    },
    {
      title: "Jobs",
      description: "Browse job listings and career opportunities",
      icon: Briefcase,
      href: "/jobs",
      color: "text-purple-500",
      stats: "1000+ Openings",
      highlights: ["Tech Jobs", "Healthcare", "Finance"],
    },
    {
      title: "Business",
      description: "Explore business centers and networking opportunities",
      icon: Building2,
      href: "/business",
      color: "text-orange-500",
      stats: "300+ Companies",
      highlights: ["Startups", "Co-working", "Investments"],
    },
  ];

  const upcomingEvents = [
    {
      title: "Tech Career Fair",
      date: "April 15, 2024",
      type: "Career",
      location: "Convention Center",
    },
    {
      title: "Cultural Festival",
      date: "April 20, 2024",
      type: "Tourism",
      location: "City Square",
    },
    {
      title: "University Open Day",
      date: "April 25, 2024",
      type: "Education",
      location: "City University",
    },
  ];

  const cityHighlights = [
    {
      title: "Growing Economy",
      icon: TrendingUp,
      description: "15% annual growth in tech sector",
    },
    {
      title: "Diverse Community",
      icon: Users,
      description: "100+ nationalities represented",
    },
    {
      title: "Rich Culture",
      icon: Calendar,
      description: "50+ annual cultural events",
    },
    {
      title: "Excellence in Education",
      icon: Award,
      description: "Top 10 universities in the region",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background px-4 py-16">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to Your Smart City Guide
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Your comprehensive guide to navigating the city. Whether you are a tourist,
            student, job seeker, or business professional, we have got you covered.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tourism">Explore City</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">City Services</h2>
          <p className="text-muted-foreground">Access everything our city has to offer</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="transition-all hover:shadow-lg">
              <Link href={feature.href}>
                <CardHeader>
                  <div className={cn("mb-2", feature.color)}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-4">
                    {feature.stats}
                  </Badge>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center">
                        <span className="mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* City Highlights */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">City Highlights</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cityHighlights.map((highlight) => (
              <Card key={highlight.title} className="border-none bg-transparent">
                <CardHeader>
                  <div className="mb-2 rounded-lg bg-primary/10 p-2 w-fit">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                  <CardDescription>{highlight.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Card key={event.title}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <Badge>{event.type}</Badge>
                </div>
                <CardDescription>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Need Help Getting Started?</CardTitle>
            <CardDescription className="text-primary-foreground/90">
              Our platform is designed to help you navigate the city with ease.
              Choose a category above or contact our support team for assistance.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}