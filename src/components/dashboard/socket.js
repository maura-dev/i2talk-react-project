import io from 'socket.io-client';

export const socket = io("https://i2talk.live", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});