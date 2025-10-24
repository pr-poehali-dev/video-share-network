import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Navbar } from '@/components/Navbar';
import { VideoCard } from '@/components/VideoCard';
import { StreamCard } from '@/components/StreamCard';
import { PhotoCard } from '@/components/PhotoCard';
import { StreamDialog, PhotoUploadDialog, VideoUploadDialog } from '@/components/UploadDialogs';
import { mockVideos, mockStreams, mockPhotos, UserProfile } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Мой Канал',
    bio: 'Создатель контента',
    avatar: '',
    subscribers: '0',
    totalViews: '0'
  });
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userProfile);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        userProfile={userProfile}
        setUserProfile={setUserProfile}
        showProfileEdit={showProfileEdit}
        setShowProfileEdit={setShowProfileEdit}
        editedProfile={editedProfile}
        setEditedProfile={setEditedProfile}
      />

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="home" className="mt-0">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Рекомендованные видео
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trending">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              Популярные видео
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockVideos.slice(0, 3).map((video) => (
                <Card 
                  key={video.id} 
                  className="group glass-effect border-white/10 overflow-hidden hover-scale cursor-pointer animate-fade-in"
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-accent to-secondary border-0">
                      <Icon name="TrendingUp" size={14} className="mr-1" />
                      В тренде
                    </Badge>
                    <Badge className="absolute bottom-2 right-2 bg-black/80 text-white border-0">
                      {video.duration}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <div className="flex gap-3">
                      <Avatar className="h-10 w-10 flex-shrink-0">
                        <AvatarFallback className="bg-gradient-to-br from-accent to-secondary text-white text-xs">
                          {video.author.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold line-clamp-2 mb-1">{video.title}</h3>
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
              ))}
            </div>
          </TabsContent>

          <TabsContent value="streams">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Прямые трансляции
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockStreams.map((stream) => (
                <StreamCard key={stream.id} stream={stream} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <StreamDialog />
            </div>
          </TabsContent>

          <TabsContent value="photos">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Фотогалерея
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mockPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <PhotoUploadDialog />
            </div>
          </TabsContent>

          <TabsContent value="subscriptions">
            <div className="text-center py-16">
              <Icon name="Users" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">Подписки</h2>
              <p className="text-muted-foreground mb-6">Здесь будут видео от ваших подписок</p>
              <Button className="bg-gradient-to-r from-primary to-secondary">
                Найти каналы
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="my-videos">
            <div className="text-center py-16">
              <Icon name="Video" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">Мои видео</h2>
              <p className="text-muted-foreground mb-6">У вас пока нет загруженных видео</p>
              <VideoUploadDialog />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
