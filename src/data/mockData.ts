export type Video = {
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

export type Stream = {
  id: number;
  title: string;
  thumbnail: string;
  viewers: string;
  author: string;
  authorAvatar: string;
  isLive: boolean;
};

export type Photo = {
  id: number;
  url: string;
  title: string;
  likes: string;
  author: string;
  uploadDate: string;
};

export type UserProfile = {
  name: string;
  bio: string;
  avatar: string;
  subscribers: string;
  totalViews: string;
};

export const mockVideos: Video[] = [
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

export const mockStreams: Stream[] = [
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

export const mockPhotos: Photo[] = [
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
