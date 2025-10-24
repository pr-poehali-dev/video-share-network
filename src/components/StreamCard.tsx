import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

type Stream = {
  id: number;
  title: string;
  thumbnail: string;
  viewers: string;
  author: string;
  authorAvatar: string;
  isLive: boolean;
};

type StreamCardProps = {
  stream: Stream;
};

export const StreamCard = ({ stream }: StreamCardProps) => {
  return (
    <Card 
      className="group glass-effect border-white/10 overflow-hidden hover-scale cursor-pointer animate-fade-in"
    >
      <div className="relative">
        <img 
          src={stream.thumbnail} 
          alt={stream.title}
          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {stream.isLive && (
          <Badge className="absolute top-2 left-2 bg-red-600 border-0 animate-pulse">
            <Icon name="Radio" size={12} className="mr-1" />
            LIVE
          </Badge>
        )}
        <Badge className="absolute bottom-2 right-2 bg-black/80 text-white border-0">
          <Icon name="Users" size={12} className="mr-1" />
          {stream.viewers}
        </Badge>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Icon name="Play" size={48} className="text-white" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 flex-shrink-0">
            <AvatarFallback className="bg-gradient-to-br from-accent to-primary text-white text-xs">
              {stream.author.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold line-clamp-2 mb-1">{stream.title}</h3>
            <p className="text-sm text-muted-foreground">{stream.author}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
