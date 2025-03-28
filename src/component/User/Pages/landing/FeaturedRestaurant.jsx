import React, { useEffect, useState } from 'react'
import { ArrowRight } from "lucide-react";
import { Button } from 'antd';
import { NavLink } from 'react-router';
import { getAllestaurantDetails } from '../../../../utils/Admin.util';

const RestaurantCard = ({ image, name, location, id }) => {
  return (
    <div
      className="group overflow-hidden"
      // style={{ animationDelay: `${delay * 100}ms` }}
    >
      <NavLink className="block" to={`/detail/${id}`}>
        {/* <a
          href={`/restaurant/${name.toLowerCase().replace(/\s+/g, "-")}`}
          className="block"
        > */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="aspect-w-4 aspect-h-3 bg-gray-100">
            <img
              src={image}
              alt={name}
              className="object-cover  w-full h-64 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-medium text-lg text-left">{name}</h3>
          <p className="text-gray-500 text-sm text-left">
            {/* {typeof location === "string" ? location : location.city} */}
            {location}
          </p>
        </div>
        {/* </a> */}
      </NavLink>
    </div>
  );
};

const FeaturedRestaurants = () => {
  const [RestaurantDetails, setRestaurantDetails] = useState([]);

  useEffect(()=>{
    getAllestaurantDetails().then((response)=>{
      console.log("Here the data is ", response)
      setRestaurantDetails(response);
    })
  },[]);

  console.log(RestaurantDetails)

   const restaurants = RestaurantDetails.map((restaurant) => ({
     image:
       "https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
     name: restaurant.restaurant_name, // Access properties from each restaurant object
     location: restaurant.address,
     id: restaurant.id,
   }));

  // const restaurants = [
  //   {
  //     image:
  //       "https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
  //     name: RestaurantDetails.restaurant_name,
  //     location: RestaurantDetails.location,
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
  //     name: "Fire And Ice Pizzeria",
  //     location: "Thamel",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
  //     name: "The Workshop Eatery",
  //     location: "Bakhundole",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35658.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
  //     name: "Le Trio",
  //     location: "Jhamsikhel",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/premium-photo/fresh-beef-burger-isolated-transparent-background_1180036-5143.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
  //     name: "Burger Shack",
  //     location: "Jawalakhel",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/premium-photo/delicious-red-sauce-pasta-with-cheese-top_78502-123.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
  //     name: "Koto Restaurant",
  //     location: "Thamel",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/free-photo/top-view-bowl-homemade-stew-pepper_23-2148494757.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
  //     name: "Kathmandu Marriott",
  //     location: "Kathmandu",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/premium-photo/detailed-bestquality-two-burgers-4k-hd-photo_1193781-9907.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
  //     name: "Burger Shack",
  //     location: "Kamaladi",
  //   },
  // ];

  return (
    <section className="py-20 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
            Curated Selection
          </span>
          <h2 className="text-3xl text-black font-semibold tracking-tight">
            Featured Restaurants
          </h2>
        </div>
        <a
          href="/featured"
          className="text-sm font-medium flex items-center hover:text-[#ffb700] transition-colors group"
        >
          View all
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={`${restaurant.name}-${index}`}
            image={restaurant.image}
            name={restaurant.name}
            location={restaurant.location}
            id = {restaurant.id}
            delay={index}
            
          />
        
        ))}
      </div>
    </section>
  );
};

export default FeaturedRestaurants;