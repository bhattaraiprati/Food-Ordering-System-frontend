import React, { useEffect, useState } from "react";
import { Search, MapPin, Filter, ChevronDown } from "lucide-react";
import FeaturedRestaurants from "./landing/FeaturedRestaurant";
import { Checkbox } from "antd";
import '../../../assets/css/CustomStyle.css'
// import FeaturedRestaurants from "@/components/FeaturedRestaurants";


const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Thamel, Kathmandu");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cuisineTypes = [
    "Italian",
    "Mexican",
    "Japanese",
    "Chinese",
    "Indian",
    "Thai",
    "French",
    "Greek",
    "Spanish",
    "Korean",
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h1 className="text-4xl text-gray-900 font-bold tracking-tight mb-4">
              Explore Restaurants
            </h1>
            <p className="text-muted-foreground text-gray-900 text-lg">
              Discover new culinary experiences from our curated selection of
              exceptional restaurants.
            </p>
          </div>

          <div
            className="flex flex-col md:flex-row gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <div className="relative flex-1">
              {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" /> */}
              {/* Replaced Input with styled input */}
              <input
                type="text"
                placeholder="Search restaurants, cuisines..."
                className="w-full px-3 py-2 border border-gray-300 text-black bg-white rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-[#ffb700] focus:border-[#ffb700]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="relative md:w-64">
              {/* <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" /> */}
              <MapPin
                color="#ffb700"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
              />
              {/* Replaced Input with styled input */}
              <input
                type="text"
                placeholder="Location"
                className="w-full h-10 pl-10 pr-4 py-2 border border-gray-300 text-black bg-white rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-[#ffb700] focus:border-[#ffb700]"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Custom Popover implementation */}
            <div className="relative">
              <button
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                className="h-10 flex items-center gap-2 px-4 py-2 border border-gray-300 text-black bg-white rounded-full shadow-sm focus:ring-1 focus:ring-[#ffb700] focus:border-[#ffb700] focus:outline-none  hover:bg-accent hover:text-accent-foreground"
              >
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown className="h-4 w-4" />
              </button>

              {isPopoverOpen && (
                <div className="absolute z-30 top-full right-0 mt-2 w-80 bg-[#fff]  rounded-md border border-border bg-background shadow-md">
                  <div className="p-4 space-y-4">
                    <h4 className="font-medium text-gray-900">Cuisine Types</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {cuisineTypes.map((cuisine) => (
                        <div
                          key={cuisine}
                          className="flex items-center space-x-2"
                        >
                          <div className="relative flex items-center">
                            
                            {/* <input
                              type="checkbox"
                              id={cuisine}
                              className="w-4 h-4 outline-solid opacity-0 absolute"
                            /> */}

                            <Checkbox className="custom-checkbox">
                              <label
                                htmlFor={cuisine}
                                className="text-sm text-gray-900 ml-2 cursor-pointer"
                              >
                                {cuisine}
                              </label>
                            </Checkbox>

                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Custom Separator */}
                    <div className="h-px w-full bg-border my-2"></div>                    

                    <div className="flex justify-end gap-2">
                      {/* Custom Buttons */}
                      <button className="px-3 py-1 text-sm rounded-md border border-input bg-[#ffb700] hover:bg-accent hover:text-accent-foreground">
                        Reset
                      </button>
                      <button className="px-3 py-1 text-sm rounded-md bg-[#ffb700] text-primary-foreground hover:bg-primary/90">
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Custom Button */}
            <button className="h-10 px-4 py-2 rounded-full bg-[#ffb700] text-primary-foreground hover:bg-[#f5cd67] transition-colors  focus:outline-none ">
              Search
            </button>
          </div>
          <FeaturedRestaurants />
        </div>
      </main>
    </div>
  );
};

export default Explore;
