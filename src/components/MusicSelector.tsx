import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { trendingMusic, MusicTrack } from '@/data/mockData';

type MusicSelectorProps = {
  selectedTrack: MusicTrack | null;
  onSelectTrack: (track: MusicTrack) => void;
};

export const MusicSelector = ({ selectedTrack, onSelectTrack }: MusicSelectorProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filteredMusic = trendingMusic.filter(
    (track) =>
      track.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (track: MusicTrack) => {
    onSelectTrack(track);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="glass-effect border-white/20 justify-start">
          <Icon name="Music" size={18} className="mr-2" />
          {selectedTrack ? (
            <span className="truncate">
              {selectedTrack.name} - {selectedTrack.artist}
            </span>
          ) : (
            'Выбрать музыку'
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-effect border-white/20 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Трендовые звуки
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Поиск музыки..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 glass-effect border-white/20"
            />
          </div>

          <ScrollArea className="h-[400px]">
            <div className="space-y-2">
              {filteredMusic.map((track) => (
                <div
                  key={track.id}
                  onClick={() => handleSelect(track)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors glass-effect border border-white/10 hover:border-primary/50"
                >
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <Icon name="Music" size={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{track.name}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {track.artist}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <Badge variant="outline" className="glass-effect border-white/20">
                      {track.duration}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">
                      <Icon name="PlayCircle" size={12} className="inline mr-1" />
                      {track.usageCount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};
