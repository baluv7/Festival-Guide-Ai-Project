interface VideoCardProps {
  title: string;
  date: string;
  description: string;
  videoId: string;
  religion?: string;
}

export default function VideoCard({ title, date, description, videoId, religion }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
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