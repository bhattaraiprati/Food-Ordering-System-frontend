import React from 'react'
import { Star } from "lucide-react";

const TestimonialCard = ({ content, author, position, rating, delay }) => {
  return (
    <div
      className="flex flex-col p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <blockquote className="mb-4 text-lg font-medium text-gray-700 italic">
        "{content}"
      </blockquote>

      <div className="mt-auto">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">{author}</span>
          <span className="text-xs text-gray-500">{position}</span>
        </div>
      </div>
    </div>
  );
};

const LandingReview = () => {
    const testimonials = [
      {
        content:
          "This app completely transformed how I discover new restaurants. The curated recommendations are spot on!",
        author: "Sarah Johnson",
        position: "Food Enthusiast",
        rating: 5,
      },
      {
        content:
          "I've found some of my favorite dining spots through this platform. The user experience is simply unmatched.",
        author: "Michael Chen",
        position: "Restaurant Critic",
        rating: 5,
      },
      {
        content:
          "As someone who travels frequently, this app has been invaluable for finding authentic local cuisines wherever I go.",
        author: "Emma Rodriguez",
        position: "Travel Blogger",
        rating: 4,
      },
    ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-base font-semibold text-blue-600 mb-2">
            Testimonials
          </h3>
          {/* Replaced Separator with a custom div for horizontal line */}
          <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why food enthusiasts and culinary explorers trust our
            platform for finding exceptional dining experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              rating={testimonial.rating}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LandingReview