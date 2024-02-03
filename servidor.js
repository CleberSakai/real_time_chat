const http = require("http");
const express = require("express");
const app = express();

const serverHttp = http.createServer(app);
const io = require("socket.io")(serverHttp);

io.addListener("connection", (socket) => {
  console.log("A user logged in");
  socket.addListener("new message", (msg) => {
    io.emit("new message", msg);
  });
});

app.use(express.static("public"));

serverHttp.listen(1000);
