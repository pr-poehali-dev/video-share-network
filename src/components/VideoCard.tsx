import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Video } from '@/data/mockData';

type VideoCardProps = {
  video: Video;
  onOpenComments?: () => void;
};

export const VideoCard = ({ video, onOpenComments }: VideoCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(parseInt(video.likes.replace('K', '')) * 1000);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const formatLikes = (count: number) => {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}K` : count.toString();
  };

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
        
        {video.musicTrack && (
          <div className="absolute bottom-2 left-2 glass-effect border border-white/20 rounded-full px-3 py-1 flex items-center gap-2">
            <Icon name="Music" size={12} className="text-white" />
            <span className="text-xs text-white truncate max-w-[150px]">
              {video.musicTrack.name}
            </span>
          </div>
        )}
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

        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`gap-2 ${isLiked ? 'text-red-500' : ''}`}
          >
            <Icon name={isLiked ? 'Heart' : 'Heart'} size={18} className={isLiked ? 'fill-current' : ''} />
            <span className="text-xs">{formatLikes(likesCount)}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onOpenComments?.();
            }}
            className="gap-2"
          >
            <Icon name="MessageCircle" size={18} />
            <span className="text-xs">{video.comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Icon name="Share2" size={18} />
          </Button>
        </div>
      </div>
    </Card>
  );
};
