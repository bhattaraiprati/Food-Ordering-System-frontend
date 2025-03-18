import React from 'react'
import FeaturedRestaurants from './landing/FeaturedRestaurant';
import CuisineCategories from './landing/CuisineCategories';
import AppFeatures from './landing/AppFeatures';
import LandingReview from './landing/LandingReview';
import HeroSection from './landing/HeroSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturedRestaurants />
      <CuisineCategories />
      <AppFeatures />
      <LandingReview />
    </div>
  );
}

export default HomePage