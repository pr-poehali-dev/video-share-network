import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

export const StreamDialog = () => {
  return (
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
  );
};

export const PhotoUploadDialog = () => {
  return (
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
  );
};

export const VideoUploadDialog = () => {
  return (
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
  );
};
