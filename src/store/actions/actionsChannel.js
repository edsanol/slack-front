import axios from 'axios';
const BASE_URL = 'http://localhost:8080';

export function createChannelAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/channels`,
        {
          name: data.name,
          description: data.description,
          userId: data.userId,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      dispatch(createChannel(response.data));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
}
const createChannel = (channel) => ({
  type: 'CREATE_CHANNEL',
  payload: channel,
});
export function getChannelsAction() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/channels`);
      dispatch(getChannels(response.data.data));
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
}
const getChannels = (channels) => ({
  type: 'GET_CHANNELS',
  payload: channels,
});
