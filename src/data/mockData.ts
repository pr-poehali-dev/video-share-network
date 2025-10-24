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
  likes: string;
  comments: number;
  musicTrack?: MusicTrack;
};

export type MusicTrack = {
  id: number;
  name: string;
  artist: string;
  duration: string;
  usageCount: string;
};

export type Comment = {
  id: number;
  author: string;
  authorAvatar: string;
  text: string;
  timestamp: string;
  likes: number;
};

export type ChatMessage = {
  id: number;
  senderId: number;
  senderName: string;
  text: string;
  timestamp: string;
  isRead: boolean;
};

export type Friend = {
  id: number;
  name: string;
  avatar: string;
  isOnline: boolean;
  lastMessage?: string;
  unreadCount: number;
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

export const trendingMusic: MusicTrack[] = [
  { id: 1, name: 'Monkeys Spinning Monkeys', artist: 'Kevin MacLeod', duration: '0:15', usageCount: '2.3M' },
  { id: 2, name: 'Blinding Lights', artist: 'The Weeknd', duration: '0:30', usageCount: '5.1M' },
  { id: 3, name: 'Levitating', artist: 'Dua Lipa', duration: '0:30', usageCount: '4.8M' },
  { id: 4, name: 'Heat Waves', artist: 'Glass Animals', duration: '0:15', usageCount: '3.9M' },
  { id: 5, name: 'As It Was', artist: 'Harry Styles', duration: '0:30', usageCount: '6.2M' },
  { id: 6, name: 'Anti-Hero', artist: 'Taylor Swift', duration: '0:15', usageCount: '4.5M' },
  { id: 7, name: 'Dance Monkey', artist: 'Tones and I', duration: '0:30', usageCount: '7.8M' },
  { id: 8, name: 'Оригинальный звук', artist: 'Trending', duration: '0:15', usageCount: '1.2M' }
];

export const mockVideos: Video[] = [
  {
    id: 1,
    title: 'Танец под трендовый звук 💃',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/2f4a3ed7-8626-4c7d-9728-008ce497e024.jpg',
    views: '125K',
    uploadDate: '2 дня назад',
    duration: '0:15',
    author: 'Алексей Dev',
    authorAvatar: '',
    category: 'Танцы',
    likes: '12.5K',
    comments: 342,
    musicTrack: trendingMusic[0]
  },
  {
    id: 2,
    title: 'Лайфхак дня 🔥',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/2d71fc1c-06d3-4539-9bde-b73ac2f7fbfe.jpg',
    views: '89K',
    uploadDate: '5 дней назад',
    duration: '0:30',
    author: 'Мария Design',
    authorAvatar: '',
    category: 'Лайфхаки',
    likes: '8.9K',
    comments: 156,
    musicTrack: trendingMusic[1]
  },
  {
    id: 3,
    title: 'Челлендж с друзьями',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/5a09649e-6b9c-4c42-8444-f5d8475ffbe4.jpg',
    views: '256K',
    uploadDate: '1 неделю назад',
    duration: '0:30',
    author: 'Tech Guru',
    authorAvatar: '',
    category: 'Челленджи',
    likes: '25.6K',
    comments: 892,
    musicTrack: trendingMusic[6]
  },
  {
    id: 4,
    title: 'Быстрый рецепт 🍕',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/2f4a3ed7-8626-4c7d-9728-008ce497e024.jpg',
    views: '145K',
    uploadDate: '3 дня назад',
    duration: '3:00',
    author: 'Алексей Dev',
    authorAvatar: '',
    category: 'Еда',
    likes: '14.5K',
    comments: 234,
    musicTrack: trendingMusic[2]
  },
  {
    id: 5,
    title: 'Переход в стиле ТикТок',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/2d71fc1c-06d3-4539-9bde-b73ac2f7fbfe.jpg',
    views: '92K',
    uploadDate: '1 день назад',
    duration: '0:15',
    author: 'Мария Design',
    authorAvatar: '',
    category: 'Креатив',
    likes: '9.2K',
    comments: 187,
    musicTrack: trendingMusic[4]
  },
  {
    id: 6,
    title: 'Смешной момент дня 😂',
    thumbnail: 'https://cdn.poehali.dev/projects/d6e66092-2b83-489b-b336-7296b6146ec3/files/5a09649e-6b9c-4c42-8444-f5d8475ffbe4.jpg',
    views: '187K',
    uploadDate: '4 дня назад',
    duration: '0:30',
    author: 'Tech Guru',
    authorAvatar: '',
    category: 'Юмор',
    likes: '18.7K',
    comments: 456,
    musicTrack: trendingMusic[7]
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

export const mockComments: Comment[] = [
  {
    id: 1,
    author: 'Мария Design',
    authorAvatar: '',
    text: 'Супер видео! 🔥',
    timestamp: '2 часа назад',
    likes: 23
  },
  {
    id: 2,
    author: 'Tech Guru',
    authorAvatar: '',
    text: 'Как ты это сделал?',
    timestamp: '5 часов назад',
    likes: 12
  },
  {
    id: 3,
    author: 'Иван Фото',
    authorAvatar: '',
    text: 'Хочу так же научиться! 😍',
    timestamp: '1 день назад',
    likes: 45
  }
];

export const mockFriends: Friend[] = [
  {
    id: 1,
    name: 'Мария Design',
    avatar: '',
    isOnline: true,
    lastMessage: 'Смотри какое видео сняла!',
    unreadCount: 2
  },
  {
    id: 2,
    name: 'Tech Guru',
    avatar: '',
    isOnline: true,
    lastMessage: 'Давай снимем челлендж вместе?',
    unreadCount: 0
  },
  {
    id: 3,
    name: 'Иван Фото',
    avatar: '',
    isOnline: false,
    lastMessage: 'Окей, завтра созвонимся',
    unreadCount: 0
  },
  {
    id: 4,
    name: 'Алексей Dev',
    avatar: '',
    isOnline: true,
    lastMessage: 'Новый трек огонь! 🔥',
    unreadCount: 1
  }
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: 1,
    senderId: 1,
    senderName: 'Мария Design',
    text: 'Привет! Видел мое новое видео?',
    timestamp: '10:30',
    isRead: true
  },
  {
    id: 2,
    senderId: 0,
    senderName: 'Я',
    text: 'Да, классное! Какой звук использовала?',
    timestamp: '10:32',
    isRead: true
  },
  {
    id: 3,
    senderId: 1,
    senderName: 'Мария Design',
    text: 'Blinding Lights от The Weeknd. Он сейчас в трендах!',
    timestamp: '10:35',
    isRead: false
  },
  {
    id: 4,
    senderId: 1,
    senderName: 'Мария Design',
    text: 'Давай снимем дуэт? 😊',
    timestamp: '10:36',
    isRead: false
  }
];