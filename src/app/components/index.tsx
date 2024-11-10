import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  ArrowRight,
  Phone
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const features = [
    {
      title: "Tourism",
      description: "Discover attractions, hotels, restaurants, and more",
      icon: MapPin,
      href: "/tourism",
      color: "text-[#A0D683]",
      bgColor: "bg-[#A0D683]/10",
      stats: "200+ Locations",
      highlights: ["Top Attractions", "Local Cuisine", "Cultural Events"],
    },
    {
      title: "Education",
      description: "Find schools, universities, and learning resources",
      icon: GraduationCap,
      href: "/education",
      color: "text-[#769C5D]",
      bgColor: "bg-[#769C5D]/10",
      stats: "50+ Institutions",
      highlights: ["Universities", "Research Centers", "Libraries"],
    },
    {
      title: "Jobs",
      description: "Browse job listings and career opportunities",
      icon: Briefcase,
      href: "/jobs",
      color: "text-[#A0D683]",
      bgColor: "bg-[#A0D683]/10",
      stats: "1000+ Openings",
      highlights: ["Tech Jobs", "Healthcare", "Finance"],
    },
    {
      title: "Business",
      description: "Explore business centers and networking opportunities",
      icon: Building2,
      href: "/business",
      color: "text-[#769C5D]",
      bgColor: "bg-[#769C5D]/10",
      stats: "300+ Companies",
      highlights: ["Startups", "Co-working", "Investments"],
    },
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A0D683]/5 to-white">
      {/* Hero Section */}
      <section className="relative px-4 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#A0D683]/10 to-[#B8E49B]/10 opacity-70" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="container relative mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-[#A0D683]/20 text-[#769C5D]">
            Your City Guide
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#769C5D] via-[#A0D683] to-[#B8E49B] bg-clip-text text-transparent">
            Welcome to Your Smart City Guide
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
            Your comprehensive guide to navigating the city. Whether you are a tourist,
            student, job seeker, or business professional, we have got you covered.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#A0D683] hover:bg-[#769C5D] transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <Link href="/tourism" className="flex items-center gap-2">
                Explore City
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#A0D683] text-[#769C5D] hover:bg-[#A0D683]/10 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="container mx-auto px-4 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r from-[#769C5D] to-[#A0D683] bg-clip-text text-transparent">
            City Services
          </h2>
          <p className="text-slate-600">Access everything our city has to offer</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="transition-all duration-300 hover:shadow-lg hover:scale-105 group border-none ring-1 ring-slate-200/50 hover:ring-[#A0D683]/50"
            >
              <Link href={feature.href}>
                <CardHeader>
                  <div className={cn("mb-3 w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110", feature.bgColor)}>
                    <feature.icon className={cn("h-6 w-6", feature.color)} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-500">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className={cn("mb-4", feature.bgColor, feature.color)}>
                    {feature.stats}
                  </Badge>
                  <ul className="space-y-2 text-sm text-slate-500">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center">
                        <span className={cn("mr-2 text-lg", feature.color)}>•</span>
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

     
    </div>
  );
}