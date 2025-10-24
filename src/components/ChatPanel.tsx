import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Friend, ChatMessage, mockFriends, mockChatMessages } from '@/data/mockData';

export const ChatPanel = () => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: ChatMessage = {
      id: messages.length + 1,
      senderId: 0,
      senderName: 'Я',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      isRead: true
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Icon name="MessageCircle" size={20} />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-accent border-0 text-xs">
            3
          </Badge>
        </Button>
      </SheetTrigger>
      <SheetContent className="glass-effect border-white/20 w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Сообщения
          </SheetTitle>
        </SheetHeader>
        
        {!selectedFriend ? (
          <ScrollArea className="h-[calc(100vh-120px)] mt-6">
            <div className="space-y-2">
              {mockFriends.map((friend) => (
                <div
                  key={friend.id}
                  onClick={() => setSelectedFriend(friend)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors glass-effect border border-white/10"
                >
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                        {friend.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    {friend.isOnline && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold truncate">{friend.name}</p>
                      {friend.unreadCount > 0 && (
                        <Badge className="bg-accent border-0 h-5 px-2">
                          {friend.unreadCount}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {friend.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="flex flex-col h-[calc(100vh-120px)] mt-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedFriend(null)}
              >
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                  {selectedFriend.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold">{selectedFriend.name}</p>
                <p className="text-xs text-muted-foreground">
                  {selectedFriend.isOnline ? 'В сети' : 'Не в сети'}
                </p>
              </div>
            </div>

            <ScrollArea className="flex-1 py-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === 0 ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                        message.senderId === 0
                          ? 'bg-gradient-to-r from-primary to-secondary text-white'
                          : 'glass-effect border border-white/10'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.senderId === 0 ? 'text-white/70' : 'text-muted-foreground'
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex items-center gap-2 pt-4 border-t border-white/10">
              <Input
                placeholder="Написать сообщение..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="glass-effect border-white/20"
              />
              <Button
                size="icon"
                onClick={sendMessage}
                className="bg-gradient-to-r from-primary to-secondary shrink-0"
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
