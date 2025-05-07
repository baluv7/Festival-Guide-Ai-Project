interface FestivalCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  religion?: string;
}

export default function FestivalCard({ title, date, description, image, religion }: FestivalCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          {religion && (
            <span className="text-sm text-[#E84D1C]">{religion}</span>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-2">{date}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}