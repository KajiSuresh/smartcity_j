"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Library, BookOpen, LucideIcon } from "lucide-react";

interface BaseItem {
  name: string;
  description: string;
  rating: number;
  address: string;
}

interface University extends BaseItem {
  programs: string[];
  website: string;
}

interface Library extends BaseItem {
  features: string[];
  hours: string;
}

interface TutoringCenter extends BaseItem {
  subjects: string[];
  hours: string;
}

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  items: (University | Library | TutoringCenter)[];
}

export default function Education() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories: Category[] = [
    {
      id: "universities",
      name: "Universities",
      icon: GraduationCap,
      items: [
        {
          name: "City University",
          description: "Leading research university with diverse programs",
          rating: 4.5,
          programs: ["Computer Science", "Business", "Engineering", "Medicine"],
          address: "123 University Ave",
          website: "https://cityuniversity.edu",
        },
        {
          name: "Technical Institute",
          description: "Specialized technical education and research",
          rating: 4.3,
          programs: ["Engineering", "Technology", "Applied Sciences"],
          address: "456 Tech Road",
          website: "https://techinstitute.edu",
        },
      ],
    },
    {
      id: "libraries",
      name: "Libraries",
      icon: Library,
      items: [
        {
          name: "Central Library",
          description: "Extensive collection of books and digital resources",
          rating: 4.6,
          features: ["Study Rooms", "Digital Archives", "Research Support"],
          address: "789 Knowledge Street",
          hours: "8:00 AM - 10:00 PM",
        },
      ],
    },
    {
      id: "tutoring",
      name: "Tutoring Centers",
      icon: BookOpen,
      items: [
        {
          name: "Learning Hub",
          description: "Professional tutoring in all subjects",
          rating: 4.4,
          subjects: ["Mathematics", "Sciences", "Languages", "Test Prep"],
          address: "321 Study Lane",
          hours: "9:00 AM - 8:00 PM",
        },
      ],
    },
  ];

  const filteredItems = (categoryItems: (University | Library | TutoringCenter)[]) => {
    return categoryItems.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">Education Resources</h1>
        <div className="flex gap-4">
          <Input
            placeholder="Search educational institutions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
          <Button>Search</Button>
        </div>
      </div>

      <Tabs defaultValue="universities" className="space-y-4">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              <category.icon className="mr-2 h-4 w-4" />
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems(category.items).map((item, index: number) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {item.name}
                      <Badge variant="secondary">{item.rating} ★</Badge>
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-semibold">Location</h4>
                        <p className="text-sm text-muted-foreground">{item.address}</p>
                      </div>
                      {'programs' in item && (
                        <div>
                          <h4 className="mb-2 font-semibold">Programs</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.programs.map((program: string) => (
                              <Badge key={program} variant="outline">
                                {program}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {'features' in item && (
                        <div>
                          <h4 className="mb-2 font-semibold">Features</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.features.map((feature: string) => (
                              <Badge key={feature} variant="outline">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {'subjects' in item && (
                        <div>
                          <h4 className="mb-2 font-semibold">Subjects</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.subjects.map((subject: string) => (
                              <Badge key={subject} variant="outline">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {'hours' in item && (
                        <div>
                          <h4 className="mb-2 font-semibold">Hours</h4>
                          <p className="text-sm text-muted-foreground">{item.hours}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}