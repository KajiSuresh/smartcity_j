"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Hotel, Utensils, Camera, Star, MapPin, DollarSign, Clock, LucideIcon } from "lucide-react";

// Base interface for common properties
interface BaseItem {
  name: string;
  description: string;
  rating: number;
  price: number;
  address: string;
  images: string[];
  openHours: string;
}

// Specific interfaces for each category
interface HotelItem extends BaseItem {
  amenities: string[];
}

interface RestaurantItem extends BaseItem {
  cuisine: string;
}

interface AttractionItem extends BaseItem {
  type: string;
}

// Union type for all possible item types
type TourismItem = HotelItem | RestaurantItem | AttractionItem;

// Interface for category structure
interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  items: TourismItem[];
}

// Props interface for DetailDialog
interface DetailDialogProps {
  item: TourismItem;
}

export default function Tourism() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<"rating" | "price">("rating");
  // const [selectedItem, setSelectedItem] = useState<TourismItem | null>(null);

    // Handle slider value change with proper type conversion
    const handlePriceRangeChange = (value: number[]) => {
      // Ensure we always have a valid tuple
      setPriceRange([value[0] ?? 0, value[1] ?? 500]);
    };

   // Handle sort value change with type checking
   const handleSortChange = (value: string) => {
    if (value === "rating" || value === "price") {
      setSortBy(value);
    }
  };

  const categories: Category[] = [
    {
      id: "hotels",
      name: "Hotels",
      icon: Hotel,
      items: [
        {
          name: "Grand Hotel",
          description: "5-star luxury hotel in the heart of the city",
          rating: 4.8,
          price: 299,
          address: "123 Main Street",
          amenities: ["Pool", "Spa", "Restaurant", "Gym"],
          images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945"],
          openHours: "24/7",
        },
        {
          name: "Boutique Inn",
          description: "Charming boutique hotel with personalized service",
          rating: 4.6,
          price: 199,
          address: "456 Park Avenue",
          amenities: ["Breakfast", "Garden", "Bar"],
          images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"],
          openHours: "24/7",
        },
      ],
    },
    {
      id: "restaurants",
      name: "Restaurants",
      icon: Utensils,
      items: [
        {
          name: "City Bistro",
          description: "Modern European cuisine with local ingredients",
          rating: 4.5,
          price: 80,
          address: "789 Food Street",
          cuisine: "European",
          images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"],
          openHours: "11:00 AM - 10:00 PM",
        },
        {
          name: "Sushi Master",
          description: "Authentic Japanese sushi experience",
          rating: 4.7,
          price: 100,
          address: "321 Ocean Drive",
          cuisine: "Japanese",
          images: ["https://images.unsplash.com/photo-1579871494447-9811cf80d66c"],
          openHours: "12:00 PM - 11:00 PM",
        },
      ],
    },
    {
      id: "attractions",
      name: "Attractions",
      icon: Camera,
      items: [
        {
          name: "City Museum",
          description: "Historical artifacts and cultural exhibitions",
          rating: 4.6,
          price: 15,
          address: "101 History Lane",
          type: "Museum",
          images: ["https://images.unsplash.com/photo-1582711012124-a56cf82307a0"],
          openHours: "9:00 AM - 6:00 PM",
        },
        {
          name: "Botanical Gardens",
          description: "Beautiful gardens with rare plant species",
          rating: 4.4,
          price: 10,
          address: "202 Garden Path",
          type: "Park",
          images: ["https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"],
          openHours: "8:00 AM - 7:00 PM",
        },
      ],
    },
  ];

  const filteredItems = (categoryItems: TourismItem[]) => {
    return categoryItems
      .filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((item) => item.price >= priceRange[0] && item.price <= priceRange[1])
      .sort((a, b) => (sortBy === "rating" ? b.rating - a.rating : a.price - b.price));
  };

  const DetailDialog = ({ item }: DetailDialogProps) => (
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <DialogTitle>{item.name}</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4">
        <img
          src={item.images[0]}
          alt={item.name}
          className="h-64 w-full rounded-lg object-cover"
        />
        <div className="grid gap-2">
          <p className="text-muted-foreground">{item.description}</p>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{item.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{item.openHours}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>{item.rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            <span>${item.price}</span>
          </div>
          {'amenities' in item && (
            <div className="flex flex-wrap gap-2">
              {item.amenities.map((amenity: string) => (
                <Badge key={amenity} variant="secondary">
                  {amenity}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </DialogContent>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Tourism Guide</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Input
            placeholder="Search places..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="space-y-2">
            <label className="text-sm font-medium">Price Range (${priceRange[0]} - ${priceRange[1]})</label>
            <Slider
              min={0}
              max={500}
              step={10}
              value={priceRange}
             onValueChange={handlePriceRangeChange}
            />
          </div>
          <Select value={sortBy} onValueChange={handleSortChange}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="price">Price</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="hotels" className="space-y-4">
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
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer transition-all hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="mb-4 h-48 w-full rounded-lg object-cover"
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400" />
                            <span>{item.rating}</span>
                          </div>
                          <span>${item.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DetailDialog item={item} />
                </Dialog>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}