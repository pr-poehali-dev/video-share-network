import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Comment, mockComments } from '@/data/mockData';

type CommentsSectionProps = {
  videoId: number;
  commentsCount: number;
};

export const CommentsSection = ({ videoId, commentsCount }: CommentsSectionProps) => {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState('');
  const [likedComments, setLikedComments] = useState<Set<number>>(new Set());

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: comments.length + 1,
      author: 'Я',
      authorAvatar: '',
      text: newComment,
      timestamp: 'Только что',
      likes: 0
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  const toggleLike = (commentId: number) => {
    const newLiked = new Set(likedComments);
    if (newLiked.has(commentId)) {
      newLiked.delete(commentId);
    } else {
      newLiked.add(commentId);
    }
    setLikedComments(newLiked);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Icon name="MessageCircle" size={18} />
          <span className="text-xs">{commentsCount}</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="glass-effect border-white/20 w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Комментарии ({comments.length})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-[calc(100vh-120px)] mt-6">
          <div className="flex items-center gap-2 pb-4 border-b border-white/10">
            <Input
              placeholder="Добавить комментарий..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
              className="glass-effect border-white/20"
            />
            <Button
              size="icon"
              onClick={handleAddComment}
              className="bg-gradient-to-r from-primary to-secondary shrink-0"
            >
              <Icon name="Send" size={20} />
            </Button>
          </div>

          <ScrollArea className="flex-1 pt-4">
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3 glass-effect border border-white/10 p-3 rounded-lg">
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-xs">
                      {comment.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-sm">{comment.author}</p>
                      <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                    </div>
                    <p className="text-sm mb-2">{comment.text}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleLike(comment.id)}
                      className={`h-7 gap-1 -ml-2 ${
                        likedComments.has(comment.id) ? 'text-red-500' : ''
                      }`}
                    >
                      <Icon
                        name="Heart"
                        size={14}
                        className={likedComments.has(comment.id) ? 'fill-current' : ''}
                      />
                      <span className="text-xs">
                        {comment.likes + (likedComments.has(comment.id) ? 1 : 0)}
                      </span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};
