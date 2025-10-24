import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

type Photo = {
  id: number;
  url: string;
  title: string;
  likes: string;
  author: string;
  uploadDate: string;
};

type PhotoCardProps = {
  photo: Photo;
};

export const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <Card 
      className="group glass-effect border-white/10 overflow-hidden hover-scale cursor-pointer animate-fade-in"
    >
      <div className="relative aspect-square">
        <img 
          src={photo.url} 
          alt={photo.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-semibold text-white mb-2">{photo.title}</h3>
            <div className="flex items-center justify-between text-white/90 text-sm">
              <span className="flex items-center gap-1">
                <Icon name="Heart" size={14} />
                {photo.likes}
              </span>
              <span>{photo.uploadDate}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
