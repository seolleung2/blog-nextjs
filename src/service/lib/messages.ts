import axios from 'axios';

export const getMessages = async () => {
  const response = await axios.get('/api/messages');
  return response.data;
};

export const addMessage = async (text: string) => {
  const response = await axios.post('/api/messages', {
    text,
  });
  return response;
};
