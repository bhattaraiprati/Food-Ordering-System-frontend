import React from "react";
import { ArrowRight } from "lucide-react";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { cn } from "@/lib/utils";
// import { Link } from "react-router-dom";

const RestaurantCard = ({ image, name, location, delay }) => {
  return (
    <div
      className="restaurant-card group overflow-hidden"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <Link
        to={`/restaurant/${name.toLowerCase().replace(/\s+/g, "-")}`}
        className="block"
      >
        <div className="relative overflow-hidden rounded-2xl">
          <AspectRatio ratio={4 / 3} className="bg-muted">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 image-load"
              loading="lazy"
            />
          </AspectRatio>
        </div>
        <div className="mt-4">
          <h3 className="font-medium text-lg text-left">{name}</h3>
          <p className="text-muted-foreground text-sm text-left">{location}</p>
        </div>
      </Link>
    </div>
  );
};



const Customlanding = () => {
  const restaurants = [
    {
      image: "/lovable-uploads/c45a406a-87c8-43ae-8b73-649a177e23ac.png",
      name: "4 Corners - Detroit Style Pizza",
      location: "Detroit",
    },
    {
      image: "/lovable-uploads/c45a406a-87c8-43ae-8b73-649a177e23ac.png",
      name: "Fire And Ice Pizzeria",
      location: "Thamel",
    },
    {
      image: "/lovable-uploads/c45a406a-87c8-43ae-8b73-649a177e23ac.png",
      name: "The Workshop Eatery",
      location: "Bakhundole",
    },
    {
      image: "/lovable-uploads/c45a406a-87c8-43ae-8b73-649a177e23ac.png",
      name: "Le Trio",
      location: "Jhamsikhel",
    },
    {
      image: "/lovable-uploads/c45a406a-87c8-43ae-8b73-649a177e23ac.png",
      name: "Burger Shack",
      location: "Jawalakhel",
    },
    {
      image: "/lovable-uploads/c45a406a-87c8-43ae-8b73-649a177e23ac.png",
      name: "Koto Restaurant",
      location: "Thamel",
    },
    {
      image: "/lovable-uploads/c45a406a-87c8-43ae-8b73-649a177e23ac.png",
      name: "Kathmandu Marriott",
      location: "Kathmandu",
    },
    {
      image: "/lovable-uploads/c45a406a-87c8-43ae-8b73-649a177e23ac.png",
      name: "Burger Shack",
      location: "Kamaladi",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
            Curated Selection
          </span>
          <h2 className="text-3xl font-semibold tracking-tight">
            Featured Restaurants
          </h2>
        </div>
        <Link
          to="/featured"
          className="text-sm font-medium flex items-center hover:text-primary transition-colors group"
        >
          View all
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={`${restaurant.name}-${index}`}
            image={restaurant.image}
            name={restaurant.name}
            location={restaurant.location}
            delay={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Customlanding;

