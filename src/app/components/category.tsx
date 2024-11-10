import React from 'react';
import { Heart } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';

const Category = () => {
  const experiences = [
    {
      id: 1,
      type: 'GUIDED TOUR',
      title: 'Historical City Walking Tour',
      duration: '5.5 hours',
      features: ['Audio guide available', 'Skip the line'],
      rating: 4.8,
      reviews: 4884,
      originalPrice: 41.90,
      currentPrice: 20.90,
      image: '/image/i1.jpg'
    },
    {
      id: 2,
      type: 'DAY TRIP',
      title: 'Cultural Heritage Experience',
      duration: '3 hours',
      features: ['Pickup available'],
      rating: 4.6,
      reviews: 953,
      originalPrice: 26.80,
      currentPrice: 20.90,
      image: '/image/i2.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F9F2]">
      <Tabs defaultValue="culture" className="w-full">
        <div className="bg-[#A0D683] sticky top-0 z-10">
          <div className="max-w-7xl mx-auto py-4">
            <TabsList className="bg-transparent border-none h-auto w-full justify-between">
              <TabsTrigger 
                value="culture"
                className="data-[state=active]:bg-[#ffffff] data-[state=active]:text-[#8BC46D] text-white hover:bg-[#ffffff]/80 px-6 py-2.5 rounded-3xl"
              >
                Culture
              </TabsTrigger>
              <TabsTrigger 
                value="food"
                className="data-[state=active]:bg-[#ffffff] data-[state=active]:text-[#8BC46D] text-white hover:bg-[#ffffff]/80 px-6 py-2.5 rounded-3xl"
              >
                Food
              </TabsTrigger>
              <TabsTrigger 
                value="nature"
                className="data-[state=active]:bg-[#ffffff] data-[state=active]:text-[#8BC46D] text-white hover:bg-[#ffffff]/80 px-6 py-2.5 rounded-3xl"
              >
                Nature
              </TabsTrigger>
              <TabsTrigger 
                value="sports"
                className="data-[state=active]:bg-[#ffffff] data-[state=active]:text-[#8BC46D] text-white hover:bg-[#ffffff]/80 px-6 py-2.5 rounded-3xl"
              >
                Sports
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="culture" className="m-0">
          <main className="max-w-7xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-[#2C4A1B]">Unforgettable cultural experiences</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiences.map(experience => (
                <div key={experience.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-48 object-cover"
                      width={2000}
                      height={150}
                    />
                    <Heart className="absolute top-4 right-4 w-6 h-6 text-white hover:text-[#A0D683] cursor-pointer transition-colors" />
                  </div>
                  
                  <div className="p-4">
                    <div className="text-sm font-semibold text-[#A0D683] mb-2">
                      {experience.type}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-[#2C4A1B]">{experience.title}</h3>
                    <div className="text-sm text-[#4A7032] mb-2">
                      {experience.duration} • {experience.features.join(' • ')}
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="text-[#8BC46D]">
                        {'★'.repeat(Math.floor(experience.rating))}
                      </div>
                      <span className="ml-1 text-sm text-[#4A7032]">
                        {experience.rating} ({experience.reviews.toLocaleString()})
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-gray-400 line-through">
                        From ${experience.originalPrice.toFixed(2)}
                      </span>
                      <span className="text-lg font-semibold text-[#2C4A1B]">
                        From ${experience.currentPrice.toFixed(2)}
                      </span>
                      <span className="text-sm text-[#4A7032]">per person</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </TabsContent>

        <TabsContent value="food" className="m-0">
          <main className="max-w-7xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-[#2C4A1B]">Delicious food experiences</h1>
            {/* Food experiences content */}
          </main>
        </TabsContent>

        <TabsContent value="nature" className="m-0">
          <main className="max-w-7xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-[#2C4A1B]">Nature adventures</h1>
            {/* Nature experiences content */}
          </main>
        </TabsContent>

        <TabsContent value="sports" className="m-0">
          <main className="max-w-7xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-[#2C4A1B]">Sports activities</h1>
            {/* Sports experiences content */}
          </main>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Category;