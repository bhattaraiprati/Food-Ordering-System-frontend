import React from 'react'


const CategoryCard = ({ name, image, count, delay }) => {
  return (
    <a
      href={`/cuisine/${name.toLowerCase()}`}
      className="group relative overflow-hidden rounded-2xl animate-scale-in h-40 md:h-56"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 image-load"
        loading="lazy"
      />

      <div className="absolute bottom-0 left-0 p-6 z-20">
        <h3 className="text-xl font-medium text-white mb-1">{name}</h3>
        <p className="text-sm text-white/70">{count} Restaurants</p>
      </div>
    </a>
  );
};



const CuisineCategories = () => {
    const categories = [
      {
        name: "Italian",
        image:
          "https://rp-cms.imgix.net/wp-content/uploads/AdobeStock_513646998-scaled.jpeg",
        count: 24,
      },
      {
        name: "Japanese",
        image:
          "https://img.freepik.com/premium-photo/high-angle-view-sushi-plate-table_1048944-25226827.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
        count: 18,
      },
      {
        name: "Mexican",
        image:
          "https://img.freepik.com/premium-photo/high-angle-view-meal-served-table_1048944-19141310.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
        count: 15,
      },
      {
        name: "Indian",
        image:
          "https://img.freepik.com/free-photo/delicious-food-table_23-2150857814.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
        count: 32,
      },
      {
        name: "French",
        image:
          "https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
        count: 12,
      },
      {
        name: "Thai",
        image:
          "https://img.freepik.com/free-photo/business-lunch-chicken-spinach-with-rice-soup-chicken-salad-bread-drink-black-pepper-table_140725-10884.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid",
        count: 28,
      },
    ];
 
    

  return (
    <section className="pt-2 pb-5 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <div className="mb-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
          Explore Cuisines
        </span>
        <h2 className="text-3xl text-gray-900 font-semibold tracking-tight mb-3">
          Browse By Cuisine
        </h2>
        <p className="text-gray-500 max-w-2xl">
          Discover restaurants by your favorite cuisine types. From Italian pasta to Japanese sushi, explore diverse culinary traditions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard 
            key={category.name}
            name={category.name}
            image={category.image}
            count={category.count}
            delay={index}
          />
        ))}
      </div>
    </section>

  )
}

export default CuisineCategories;