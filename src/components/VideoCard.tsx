import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

type Video = {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  uploadDate: string;
  duration: string;
  author: string;
  authorAvatar: string;
  category: string;
};

type VideoCardProps = {
  video: Video;
};

export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <Card 
      className="group glass-effect border-white/10 overflow-hidden hover-scale cursor-pointer animate-fade-in"
    >
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute bottom-2 right-2 bg-black/80 text-white border-0">
          {video.duration}
        </Badge>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Icon name="Play" size={48} className="text-white" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 flex-shrink-0">
            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-xs">
              {video.author.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold line-clamp-2 mb-1 group-hover:text-primary transition-colors">
              {video.title}
            </h3>
            <p className="text-sm text-muted-foreground">{video.author}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
              <span>{video.views} просмотров</span>
              <span>•</span>
              <span>{video.uploadDate}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
