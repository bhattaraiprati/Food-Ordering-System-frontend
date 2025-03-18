import React from 'react'
import { MapPin, Star, Coffee, Clock } from "lucide-react";

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <div
      className="p-6 rounded-2xl animate-slide-in-bottom"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl text-gray-900 font-medium mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};


const AppFeatures = () => {

     const features = [
       {
         icon: <MapPin className="h-6 w-6 text-amber-500" />,
         title: "Discover Nearby",
         description:
           "Find the best restaurants in your area with our precise location-based recommendations.",
       },
       {
         icon: <Star className="h-6 w-6 text-amber-500" />,
         title: "Curated Selection",
         description:
           "Handpicked restaurants that meet our high standards for quality, service, and ambiance.",
       },
       {
         icon: <Coffee className="h-6 w-6 text-amber-500" />,
         title: "Filter by Cuisine",
         description:
           "Easily find restaurants serving your favorite cuisine types from around the world.",
       },
       {
         icon: <Clock className="h-6 w-6 text-amber-500" />,
         title: "Real-time Availability",
         description:
           "Check operating hours and make reservations instantly through our platform.",
       },
     ];


  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
            Why Choose Us
          </span>
          <h2 className="text-3xl text-gray-900 font-semibold tracking-tight mb-3">
            Discover Our Features
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Designed with simplicity and elegance in mind, our platform offers a
            seamless experience to find your perfect dining destination.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppFeatures