import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

type UserProfile = {
  name: string;
  bio: string;
  avatar: string;
  subscribers: string;
  totalViews: string;
};

type NavbarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  userProfile: UserProfile;
  setUserProfile: (profile: UserProfile) => void;
  showProfileEdit: boolean;
  setShowProfileEdit: (show: boolean) => void;
  editedProfile: UserProfile;
  setEditedProfile: (profile: UserProfile) => void;
};

export const Navbar = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  userProfile,
  setUserProfile,
  showProfileEdit,
  setShowProfileEdit,
  editedProfile,
  setEditedProfile
}: NavbarProps) => {
  return (
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
  );
};
