import { useState } from 'react';
import VideoCard from '../components/VideoCard';
import { FESTIVALS } from '../data/festivals';

const CATEGORIES = ['All Festivals', 'Hindu Festivals', 'Muslim Festivals', 'Sikh Festivals', 'Christian Festivals', 'Jain Festivals', 'Buddhist Festivals'];

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState('All Festivals');

  const filteredVideos = FESTIVALS.filter(festival => 
    (activeCategory === 'All Festivals' || 
    festival.religion === activeCategory.replace(' Festivals', '')) &&
    festival.videoId
  );

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-[#8B4513] mb-4">Festival Videos</h1>
        <p className="text-center text-gray-600 mb-8">
          Watch immersive videos about Indian festivals, learn about their significance, traditions, and
          celebrations through these carefully curated visual stories.
        </p>
        
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

        <div className="grid md:grid-cols-2 gap-8">
          {filteredVideos.map(festival => (
            <VideoCard 
              key={festival.title}
              title={festival.title}
              date={festival.date}
              description={festival.description}
              videoId={festival.videoId!}
              religion={festival.religion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}