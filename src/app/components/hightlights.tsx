import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
    MapPin,

    TrendingUp,
    Users,
    Calendar,
    Award,
    ArrowRight,
} from "lucide-react";
const upcomingEvents = [
    {
        title: "Tech Career Fair",
        date: "April 15, 2024",
        type: "Career",
        location: "Convention Center",
        color: "bg-[#A0D683]/20 text-[#769C5D]",
    },
    {
        title: "Cultural Festival",
        date: "April 20, 2024",
        type: "Tourism",
        location: "City Square",
        color: "bg-[#769C5D]/20 text-[#557039]",
    },
    {
        title: "University Open Day",
        date: "April 25, 2024",
        type: "Education",
        location: "City University",
        color: "bg-[#A0D683]/20 text-[#769C5D]",
    },
];

const cityHighlights = [
    {
        title: "Growing Economy",
        icon: TrendingUp,
        description: "15% annual growth in tech sector",
        color: "text-[#A0D683]",
        bgColor: "bg-[#A0D683]/10",
    },
    {
        title: "Diverse Community",
        icon: Users,
        description: "100+ nationalities represented",
        color: "text-[#769C5D]",
        bgColor: "bg-[#769C5D]/10",
    },
    {
        title: "Rich Culture",
        icon: Calendar,
        description: "50+ annual cultural events",
        color: "text-[#A0D683]",
        bgColor: "bg-[#A0D683]/10",
    },
    {
        title: "Excellence in Education",
        icon: Award,
        description: "Top 10 universities in the region",
        color: "text-[#769C5D]",
        bgColor: "bg-[#769C5D]/10",
    },
];

const Hightlights = () => {
    return (
        <div>
            <section className="py-24 bg-gradient-to-b from-white to-[#A0D683]/5">
                <div className="container mx-auto px-4">
                    <h2 className="mb-16 text-center text-3xl font-bold bg-gradient-to-r from-[#769C5D] to-[#A0D683] bg-clip-text text-transparent">
                        City Highlights
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {cityHighlights.map((highlight) => (
                            <Card
                                key={highlight.title}
                                className="group transition-all duration-300 hover:scale-105 border-none bg-white/50 backdrop-blur-sm ring-1 ring-slate-200/50 hover:ring-[#A0D683]/50"
                            >
                                <CardHeader>
                                    <div className={cn(
                                        "mb-3 w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                                        highlight.bgColor
                                    )}>
                                        <highlight.icon className={cn("h-6 w-6", highlight.color)} />
                                    </div>
                                    <CardTitle className="text-xl">{highlight.title}</CardTitle>
                                    <CardDescription className="text-slate-500">{highlight.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>


            <section className="container mx-auto px-4 py-24">
                <h2 className="mb-16 text-3xl font-bold text-center bg-gradient-to-r from-[#769C5D] to-[#A0D683] bg-clip-text text-transparent">
                    Upcoming Events
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {upcomingEvents.map((event) => (
                        <Card
                            key={event.title}
                            className="group transition-all duration-300 hover:scale-105 border-none ring-1 ring-slate-200/50 hover:ring-[#A0D683]/50"
                        >
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg">{event.title}</CardTitle>
                                    <Badge className={event.color}>
                                        {event.type}
                                    </Badge>
                                </div>
                                <CardDescription>
                                    <div className="mt-4 space-y-2">
                                        <div className="flex items-center text-slate-500">
                                            <Calendar className="mr-2 h-4 w-4 text-[#A0D683]" />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center text-slate-500">
                                            <MapPin className="mr-2 h-4 w-4 text-[#A0D683]" />
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
            <section className="container mx-auto px-4 py-24">
                <Card className="bg-gradient-to-r from-[#769C5D] to-[#A0D683] text-white overflow-hidden relative group">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
                    <CardHeader className="text-center relative">
                        <CardTitle className="text-3xl">Need Help Getting Started?</CardTitle>
                        <CardDescription className="text-white/90 mt-2 text-lg">
                            Our platform is designed to help you navigate the city with ease.
                            Choose a category above or contact our support team for assistance.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center relative">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="bg-white text-[#769C5D] hover:bg-[#A0D683]/10 transition-all duration-300 hover:scale-105 group"
                            asChild
                        >
                            <Link href="/contact" className="flex items-center gap-2">
                                Contact Support
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}

export default Hightlights
