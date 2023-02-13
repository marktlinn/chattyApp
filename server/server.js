const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const PORT = 3000;
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", socket => {
  console.log(socket.id);

  socket.on("join_room", roomId => {
    socket.join(roomId);
  });
  socket.on("send_message", message => {
    socket.to(message.room).emit("message_received", message);
  });
  socket.on("disconnect", () => {
    console.log(`user: ${socket.id} disconnected.`);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
