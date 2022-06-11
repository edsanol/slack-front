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

export const getAllUserSocketAction = (listUsers) => {
  return {
    type: 'GET_ALL_USER',
    payload: listUsers,
  };
};

export const getActiveChatAction = (idChannel) => {
  return {
    type: 'GET_ACTIVE_CHAT',
    payload: idChannel,
  };
}

export const newMessage = (message) => {
  return {
    type: 'NEW_MESSAGE',
    payload: message,
  };
}
