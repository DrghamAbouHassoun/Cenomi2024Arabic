import { useEffect } from 'react';
import useAppStore from '../../store';


declare global {
    interface Window {
      companyId: string;
      aiiroBotConfig?: {
        messageTimeFormat?: string;
        language?: string;
      };
    }
  }
  
const ChatBotLoader = () => {
  const rtlLanguage = useAppStore(s=>s.rtlLanguage)
  useEffect(() => {
    if(rtlLanguage){
      window.companyId = 'b020a76c-0ca8-4334-a889-b6b3c2e01fdb';

      window.aiiroBotConfig = {
        messageTimeFormat: 'HH:mm',
        language: 'ar',
      };
  
      if (!document.getElementById('aiiro-chat-bot-root')) {
        const div = document.createElement('div');
        div.id = 'aiiro-chat-bot-root';
        document.body.appendChild(div);
      }
  
      const script = document.createElement('script');
      script.defer = true;
      script.src = 'https://bot.aiiro.ai/static/js/main.js';
      document.head.appendChild(script);
  
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://bot.aiiro.ai/static/css/main.css';
      document.head.appendChild(link);
    }
    else{
      if (!document.getElementById('aiiro-chat-bot-root')) {
        const div = document.createElement('div');
        div.id = 'aiiro-chat-bot-root';
        document.body.insertBefore(div, document.body.lastChild);
      }

      window.aiiroBotConfig = {
        messageTimeFormat: 'HH:mm',
        language: 'en',
      };
  
      window.companyId = '67edf8ee-822f-4d33-b563-02202e4d8b7d';
  
      const script = document.createElement('script');
      script.defer = true;
      script.src = 'https://bot.aiiro.ai/static/js/main.js';
  
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://bot.aiiro.ai/static/css/main.css';
  
      document.head.appendChild(link);
      document.head.appendChild(script);
    }

  }, [rtlLanguage]);

  return null;
};

export default ChatBotLoader;