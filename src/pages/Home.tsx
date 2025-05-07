import { Book, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import FestivalCard from '../components/FestivalCard';
import PlanCreator from '../components/PlanCreator';

export default function Home() {
  const upcomingFestivals = [
    {
      title: "Diwali",
      date: "October/November",
      description: "Diwali, the festival of lights, celebrates the return of Lord Rama to Ayodhya after 14 years of exile and his victory over Ravana.",
      image: "https://media.istockphoto.com/id/588223710/photo/diwali-oil-lamp.jpg?s=612x612&w=0&k=20&c=Mwl1S6C-CemmHoDPx4kwE8XKNcRRlZLRmKkpdfkM4VU="
    },
    {
      title: "Holi",
      date: "February/March",
      description: "Holi celebrates the victory of good over evil, inspired by the legend of Prahlad and Holika. It marks the end of winter and the arrival of spring with vibrant colors and festivities.",
      image: "https://media.istockphoto.com/id/1381030718/photo/barsana-holi-one-of-the-most-joyful-festival-of-india-this-is-birth-place-of-radha-lord.webp?a=1&b=1&s=612x612&w=0&k=20&c=jTAyFnheEbcFcs8YfqVjRMzlBdl0lGG7F0bcGJyG5tU="
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B4513] mb-4">Discover Indian Festivals</h1>
          <p className="text-gray-600">
            Explore the rich cultural heritage of India through its diverse festivals. Learn about
            the stories behind these celebrations and plan your festivities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link to="/stories" className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <Book className="w-12 h-12 mx-auto mb-4 text-[#E84D1C]" />
            <h2 className="text-xl font-semibold mb-2">Festival Stories</h2>
            <p className="text-gray-600">Discover the fascinating stories and traditions behind each festival</p>
          </Link>

          <Link to="/videos" className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <Video className="w-12 h-12 mx-auto mb-4 text-[#E84D1C]" />
            <h2 className="text-xl font-semibold mb-2">Festival Videos</h2>
            <p className="text-gray-600">Watch engaging videos explaining the significance of each celebration</p>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Festival Library</h2>
            <div className="grid gap-8">
              {upcomingFestivals.map((festival) => (
                <FestivalCard key={festival.title} {...festival} />
              ))}
            </div>
          </div>
          
          <div>
            <PlanCreator />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <span className="text-sm text-gray-500">October/November</span>
          </div>
          <div className="space-y-4">
            {upcomingFestivals.map((festival) => (
              <div key={festival.title} className="border-b pb-4 last:border-b-0">
                <h3 className="font-semibold">{festival.title}</h3>
                <p className="text-sm text-gray-600">{festival.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}