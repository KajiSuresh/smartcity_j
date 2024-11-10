'use client'
import React from 'react';
import { Share, Save, Star, ChevronDown } from 'lucide-react';

import { RoomCalendar } from '@/components/room-calendar';


const PropertyListing = () => {
  const property = {
    title: "Jeyamani Villa",
    location: "Entire home in Manipay, Sri Lanka",
    capacity: {
      guests: 6,
      bedrooms: 3,
      beds: 3,
      baths: 1
    },
    rating: 4.75,
    reviews: 4,
    price: "Rs8,000",
    host: {
      name: "Earnest",
      hostingSince: "7 months hosting"
    },
    images: [
      "/image/i5.jpg",
      "/image/i1.jpg",
      "/image/i2.jpg",
      "/image/i3.jpg",
      "/image/i4.jpg"
    ],
    ratings: {
      cleanliness: 4.8,
      accuracy: 4.7,
      checkIn: 4.9,
      communication: 4.8,
      location: 4.6,
      value: 4.7
    },
    reviewsList: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/api/placeholder/40/40",
        location: "New York, USA",
        date: "October 2023",
        stayDuration: "5 nights",
        tripType: "Family trip",
        comment: "Great place to stay with family. Very clean and comfortable."
      }
    ]
  };

  const RatingBar = ({ rating }: { rating: number }) => (
    <div className="h-1.5 bg-gray-100 rounded-full w-32">
      <div 
        className="h-1.5 rounded-full" 
        style={{ width: `${(rating / 5) * 100}%`, backgroundColor: '#A0D683' }}
      />
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">{property.title}</h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-lg transition duration-200">
              <Share className="h-5 w-5" />
              <span className="text-gray-700">Share</span>
            </button>
            <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-lg transition duration-200">
              <Save className="h-5 w-5" />
              <span className="text-gray-700">Save</span>
            </button>
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-3 rounded-2xl overflow-hidden h-[480px] mb-12">
          <div className="col-span-2 row-span-2 transition duration-300 hover:opacity-90">
            <img src={property.images[0]} alt="Property" className="w-full h-full object-cover" />
          </div>
          {property.images.slice(1).map((image, index) => (
            <div key={index} className="transition duration-300 hover:opacity-90">
              <img src={image} alt="Property" className="w-full h-full object-cover" />
            </div>
          ))}
          <button className="absolute bottom-8 right-8 bg-white hover:bg-gray-50 px-6 py-2 rounded-lg text-sm font-medium shadow-lg transition duration-200">
            Show all photos
          </button>
        </div>

        {/* Property details */}
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">{property.location}</h2>
            <div className="flex gap-2 text-sm mb-6 text-gray-600">
              <span>{property.capacity.guests} guests</span>
              <span>·</span>
              <span>{property.capacity.bedrooms} bedrooms</span>
              <span>·</span>
              <span>{property.capacity.beds} beds</span>
              <span>·</span>
              <span>{property.capacity.baths} bath</span>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <Star className="h-5 w-5" style={{ color: '#769C5D' }} />
              <span className="font-semibold">{property.rating}</span>
              <span>·</span>
              <a href="#" className="underline hover:text-gray-600 transition duration-200">
                {property.reviews} reviews
              </a>
            </div>
            <div className="flex items-center gap-4 py-6 border-t">
              <img src="/api/placeholder/56/56" alt={property.host.name} className="rounded-full" />
              <div>
                <h3 className="font-medium text-lg">Hosted by {property.host.name}</h3>
                <p className="text-gray-600">{property.host.hostingSince}</p>
              </div>
            </div>
            <RoomCalendar />
          </div>

          

          {/* Booking card */}
          <div className="border rounded-2xl p-6 shadow-lg h-fit bg-white sticky">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-2xl font-semibold">{property.price}</span>
                <span className="text-gray-600"> night</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5" style={{ color: '#769C5D' }} />
                <span className="font-semibold">{property.rating}</span>
                <span>·</span>
                <a href="#" className="underline">{property.reviews} reviews</a>
              </div>
            </div>
            <div className="grid grid-cols-2 border rounded-xl overflow-hidden mb-4">
              <div className="p-4 border-r border-b hover:bg-gray-50 transition duration-200">
                <div className="text-xs font-medium text-gray-700">CHECK-IN</div>
                <div className="mt-1">11/11/2024</div>
              </div>
              <div className="p-4 border-b hover:bg-gray-50 transition duration-200">
                <div className="text-xs font-medium text-gray-700">CHECKOUT</div>
                <div className="mt-1">11/16/2024</div>
              </div>
              <div className="col-span-2 p-4 hover:bg-gray-50 transition duration-200">
                <div className="text-xs font-medium text-gray-700">GUESTS</div>
                <div className="flex justify-between items-center mt-1">
                  <span>1 guest</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
            <button 
              className="w-full py-3.5 rounded-xl mt-2 font-medium text-white transition duration-200 hover:opacity-90"
              style={{ backgroundColor: '#A0D683' }}
            >
              Reserve
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-16">
          <div className="border-t pt-12">
            <div className="flex items-center gap-2 mb-10">
              <Star className="h-6 w-6" style={{ color: '#769C5D' }} />
              <span className="text-2xl font-semibold">{property.rating}</span>
              <span className="text-2xl">·</span>
              <span className="text-2xl font-semibold">{property.reviews} reviews</span>
            </div>

            {/* Rating Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-6 mb-16">
              {Object.entries(property.ratings).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-600 capitalize">{key}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{value}</span>
                    <RatingBar rating={value} />
                  </div>
                </div>
              ))}
            </div>

            {/* Reviews List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {property.reviewsList.map((review) => (
                <div key={review.id} className="space-y-4 p-6 rounded-xl bg-white shadow-sm">
                  <div className="flex items-center gap-4">
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h3 className="font-medium text-lg">{review.name}</h3>
                      <p className="text-gray-600">{review.location}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4" style={{ color: '#769C5D' }} />
                        ))}
                      </div>
                      <span>·</span>
                      <span>{review.date}</span>
                      {review.stayDuration && (
                        <>
                          <span>·</span>
                          <span>{review.stayDuration}</span>
                        </>
                      )}
                    </div>
                    {review.tripType && (
                      <div className="mt-2 text-sm">
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                          {review.tripType}
                        </span>
                      </div>
                    )}
                    <p className="mt-4 text-gray-700 leading-relaxed">{review.comment}</p>
                    <button className="mt-4 text-sm font-medium hover:text-gray-600 transition duration-200">
                      Show more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PropertyListing;