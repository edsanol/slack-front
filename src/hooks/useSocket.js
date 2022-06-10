import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { actionsChat } from '../store/actions/actionsChat';

export const useSocket = (serverURL) => {
  const [socket, setSocket] = useState(null);
  const [online, setOnline] = useState('');
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return false;
    }

    const newSocket = io.connect(serverURL, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
      query: {
        'x-token': token,
      },
    });

    setSocket(newSocket);
    setOnline('enable');
  }, [serverURL, token]);

  // useEffect(() => {
  //   socket?.on('emitAllUsers', (allUsers) => {
  //     dispatch(actionsChat(allUsers));
  //   });
  // }, [socket, dispatch]);

  return { socket, online };
};
