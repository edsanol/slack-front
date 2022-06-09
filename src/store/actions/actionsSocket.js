export const actionsSocket = (sockets) => {
  return {
    type: 'SOCKET_CONNECTED',
    payload: sockets,
  };
};

export const disconnectActionsSocket = () => {
  return {
    type: 'SOCKET_DISCONNECTED',
  };
};
