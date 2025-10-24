import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

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

type Stream = {
  id: number;
  title: string;
  thumbnail: string;
  viewers: string;
  author: string;
  authorAvatar: string;
  isLive: boolean;
};

type Photo = {
  id: number;
  url: string;
  title: string;
  likes: string;
  author: string;
  uploadDate: string;
};

type UserProfile = {
  name: string;
  bio: string;
  avatar: string;
  subscribers: string;
  totalViews: string;
};

const mockVideos: Video[] = [
  {
    id: 1,
    title: 'Как создать крутое портфолио на React',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/2f4a3ed7-8626-4c7d-9728-008ce497e024.jpg',
    views: '125K',
    uploadDate: '2 дня назад',
    duration: '12:45',
    author: 'Алексей Dev',
    authorAvatar: '',
    category: 'Программирование'
  },
  {
    id: 2,
    title: 'ТОП-10 трендов веб-дизайна 2024',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/2d71fc1c-06d3-4539-9bde-b73ac2f7fbfe.jpg',
    views: '89K',
    uploadDate: '5 дней назад',
    duration: '18:30',
    author: 'Мария Design',
    authorAvatar: '',
    category: 'Дизайн'
  },
  {
    id: 3,
    title: 'Создаём AI-приложение за час',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/5a09649e-6b9c-4c42-8444-f5d8475ffbe4.jpg',
    views: '256K',
    uploadDate: '1 неделю назад',
    duration: '45:12',
    author: 'Tech Guru',
    authorAvatar: '',
    category: 'AI & ML'
  },
  {
    id: 4,
    title: 'Мастер-класс по TypeScript',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/2f4a3ed7-8626-4c7d-9728-008ce497e024.jpg',
    views: '145K',
    uploadDate: '3 дня назад',
    duration: '32:18',
    author: 'Алексей Dev',
    authorAvatar: '',
    category: 'Программирование'
  },
  {
    id: 5,
    title: 'Анимации в CSS: от базы до профи',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/2d71fc1c-06d3-4539-9bde-b73ac2f7fbfe.jpg',
    views: '92K',
    uploadDate: '1 день назад',
    duration: '24:55',
    author: 'Мария Design',
    authorAvatar: '',
    category: 'Дизайн'
  },
  {
    id: 6,
    title: 'Neural Networks простыми словами',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/5a09649e-6b9c-4c42-8444-f5d8475ffbe4.jpg',
    views: '187K',
    uploadDate: '4 дня назад',
    duration: '38:42',
    author: 'Tech Guru',
    authorAvatar: '',
    category: 'AI & ML'
  }
];

const mockStreams: Stream[] = [
  {
    id: 1,
    title: 'Стрим: Кодим React приложение',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/0d1f7b9d-3dc7-4799-8539-0eecba88d97c.jpg',
    viewers: '1.2K',
    author: 'Алексей Dev',
    authorAvatar: '',
    isLive: true
  },
  {
    id: 2,
    title: 'Рисуем UI дизайн в реальном времени',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/2d71fc1c-06d3-4539-9bde-b73ac2f7fbfe.jpg',
    viewers: '856',
    author: 'Мария Design',
    authorAvatar: '',
    isLive: true
  }
];

const mockPhotos: Photo[] = [
  {
    id: 1,
    url: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/3dc1fbe2-d23b-4d0b-8ca4-bbd74afde4ff.jpg',
    title: 'Закат в горах',
    likes: '234',
    author: 'Иван Фото',
    uploadDate: '1 день назад'
  },
  {
    id: 2,
    url: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/2f4a3ed7-8626-4c7d-9728-008ce497e024.jpg',
    title: 'Городская архитектура',
    likes: '189',
    author: 'Мария Design',
    uploadDate: '2 дня назад'
  },
  {
    id: 3,
    url: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/5a09649e-6b9c-4c42-8444-f5d8475ffbe4.jpg',
    title: 'Абстракция',
    likes: '421',
    author: 'Tech Guru',
    uploadDate: '3 дня назад'
  }
];

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
      <nav className="glass-effect sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                VideoHub
              </h1>
              
              <div className="hidden md:flex items-center gap-1">
                {[
                  { id: 'home', label: 'Главная', icon: 'Home' },
                  { id: 'trending', label: 'Популярное', icon: 'TrendingUp' },
                  { id: 'streams', label: 'Стримы', icon: 'Radio' },
                  { id: 'photos', label: 'Фото', icon: 'Image' },
                  { id: 'subscriptions', label: 'Подписки', icon: 'Users' },
                  { id: 'my-videos', label: 'Моё', icon: 'Video' }
                ].map((item) => (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? 'default' : 'ghost'}
                    onClick={() => setActiveTab(item.id)}
                    className="gap-2"
                  >
                    <Icon name={item.icon as any} size={18} />
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Поиск видео..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 glass-effect border-white/20"
                />
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    <Icon name="Upload" size={18} className="mr-2" />
                    Загрузить
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-effect border-white/20 max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Загрузка видео
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label>Название видео</Label>
                      <Input placeholder="Введите название..." className="glass-effect border-white/20" />
                    </div>
                    <div className="space-y-2">
                      <Label>Описание</Label>
                      <Textarea placeholder="Расскажите о вашем видео..." className="glass-effect border-white/20 min-h-24" />
                    </div>
                    <div className="space-y-2">
                      <Label>Категория</Label>
                      <Input placeholder="Выберите категорию..." className="glass-effect border-white/20" />
                    </div>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer glass-effect">
                      <Icon name="Upload" size={48} className="mx-auto mb-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Перетащите видео сюда или нажмите для выбора</p>
                      <p className="text-xs text-muted-foreground mt-2">Поддерживаются: MP4, MOV, AVI (до 2GB)</p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                      Опубликовать видео
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>

              <Dialog open={showProfileEdit} onOpenChange={setShowProfileEdit}>
                <DialogTrigger asChild>
                  <Avatar className="cursor-pointer hover-scale">
                    {userProfile.avatar ? (
                      <AvatarImage src={userProfile.avatar} />
                    ) : (
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                        {userProfile.name.charAt(0)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </DialogTrigger>
                <DialogContent className="glass-effect border-white/20 max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Профиль
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 mt-4">
                    <div className="flex items-center gap-6">
                      <Avatar className="h-24 w-24">
                        {editedProfile.avatar ? (
                          <AvatarImage src={editedProfile.avatar} />
                        ) : (
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-3xl">
                            {editedProfile.name.charAt(0)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className="flex-1">
                        <Button variant="outline" size="sm" className="glass-effect border-white/20">
                          <Icon name="Upload" size={16} className="mr-2" />
                          Загрузить фото
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Имя канала</Label>
                        <Input
                          value={editedProfile.name}
                          onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                          className="glass-effect border-white/20"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Описание</Label>
                        <Textarea
                          value={editedProfile.bio}
                          onChange={(e) => setEditedProfile({...editedProfile, bio: e.target.value})}
                          className="glass-effect border-white/20 min-h-24"
                          placeholder="Расскажите о себе..."
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <Card className="glass-effect border-white/10 p-4 text-center">
                          <Icon name="Users" size={24} className="mx-auto mb-2 text-primary" />
                          <p className="text-2xl font-bold">{userProfile.subscribers}</p>
                          <p className="text-sm text-muted-foreground">Подписчиков</p>
                        </Card>
                        <Card className="glass-effect border-white/10 p-4 text-center">
                          <Icon name="Eye" size={24} className="mx-auto mb-2 text-secondary" />
                          <p className="text-2xl font-bold">{userProfile.totalViews}</p>
                          <p className="text-sm text-muted-foreground">Просмотров</p>
                        </Card>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        className="flex-1 bg-gradient-to-r from-primary to-secondary"
                        onClick={() => {
                          setUserProfile(editedProfile);
                          setShowProfileEdit(false);
                        }}
                      >
                        Сохранить
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 glass-effect border-white/20"
                        onClick={() => {
                          setEditedProfile(userProfile);
                          setShowProfileEdit(false);
                        }}
                      >
                        Отмена
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="flex md:hidden items-center gap-2 mt-4 overflow-x-auto pb-2">
            {[
              { id: 'home', icon: 'Home' },
              { id: 'trending', icon: 'TrendingUp' },
              { id: 'streams', icon: 'Radio' },
              { id: 'photos', icon: 'Image' },
              { id: 'subscriptions', icon: 'Users' },
              { id: 'my-videos', icon: 'Video' }
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setActiveTab(item.id)}
              >
                <Icon name={item.icon as any} size={20} />
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="home" className="mt-0">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Рекомендованные видео
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockVideos.map((video) => (
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
                <Card 
                  key={stream.id} 
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
              ))}
            </div>
            <div className="mt-8 text-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-accent to-primary">
                    <Icon name="Radio" size={18} className="mr-2" />
                    Начать стрим
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-effect border-white/20 max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      Настройка стрима
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label>Название трансляции</Label>
                      <Input placeholder="О чём будет стрим..." className="glass-effect border-white/20" />
                    </div>
                    <div className="space-y-2">
                      <Label>Описание</Label>
                      <Textarea placeholder="Расскажите зрителям подробнее..." className="glass-effect border-white/20 min-h-24" />
                    </div>
                    <div className="flex items-center justify-between glass-effect border border-white/10 p-4 rounded-lg">
                      <div>
                        <p className="font-medium">Приватный стрим</p>
                        <p className="text-sm text-muted-foreground">Только по ссылке</p>
                      </div>
                      <Switch />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-accent to-primary">
                      <Icon name="Radio" size={18} className="mr-2" />
                      Запустить трансляцию
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </TabsContent>

          <TabsContent value="photos">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Фотогалерея
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mockPhotos.map((photo) => (
                <Card 
                  key={photo.id} 
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
              ))}
            </div>
            <div className="mt-8 text-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-secondary to-primary">
                    <Icon name="Image" size={18} className="mr-2" />
                    Загрузить фото
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-effect border-white/20 max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                      Загрузка фотографии
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label>Название</Label>
                      <Input placeholder="Название фото..." className="glass-effect border-white/20" />
                    </div>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-secondary/50 transition-colors cursor-pointer glass-effect">
                      <Icon name="Image" size={48} className="mx-auto mb-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Перетащите фото сюда или нажмите для выбора</p>
                      <p className="text-xs text-muted-foreground mt-2">Поддерживаются: JPG, PNG, WEBP (до 10MB)</p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-secondary to-primary">
                      Опубликовать фото
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Upload" size={18} className="mr-2" />
                    Загрузить первое видео
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-effect border-white/20 max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Загрузка видео
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label>Название видео</Label>
                      <Input placeholder="Введите название..." className="glass-effect border-white/20" />
                    </div>
                    <div className="space-y-2">
                      <Label>Описание</Label>
                      <Textarea placeholder="Расскажите о вашем видео..." className="glass-effect border-white/20 min-h-24" />
                    </div>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer glass-effect">
                      <Icon name="Upload" size={48} className="mx-auto mb-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Перетащите видео сюда или нажмите для выбора</p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                      Опубликовать видео
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;