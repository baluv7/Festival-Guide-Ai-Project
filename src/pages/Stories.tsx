import { useState } from 'react';
import FestivalCard from '../components/FestivalCard';
import { FESTIVALS } from '../data/festivals';

const CATEGORIES = ['All Festivals', 'Hindu Festivals', 'Muslim Festivals', 'Sikh Festivals', 'Christian Festivals', 'Jain Festivals', 'Buddhist Festivals'];

export default function Stories() {
  const [activeCategory, setActiveCategory] = useState('All Festivals');

  const filteredFestivals = FESTIVALS.filter(festival => 
    activeCategory === 'All Festivals' || 
    festival.religion === activeCategory.replace(' Festivals', '')
  );

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-[#8B4513] mb-8">Festival Stories</h1>
        
        <div className="flex overflow-x-auto space-x-4 mb-8 pb-4">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-[#E84D1C] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredFestivals.map(festival => (
            <FestivalCard 
              key={festival.title} 
              title={festival.title}
              date={festival.date}
              description={festival.description}
              image={festival.image}
              religion={festival.religion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}