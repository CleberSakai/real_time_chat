const submitButton = document.getElementById("enviar");
const messageBox = document.getElementById("texto");
const chat = document.getElementById('mensagens');


const socket = io();

submitButton.addEventListener("click", () => {
  if (messageBox.value !== "") {
    socket.emit("new message", messageBox.value);
    messageBox.value = "";
  }
});

socket.addEventListener('new message', (msg) => {
   const messageElement = document.createElement('li') //<li></li>
    messageElement.textContent = msg; //<li>Hello, world</li> 
    messageElement.classList.add('mensagem'); //<li class='mensagem1>Hello, world</li> 
    chat.appendChild(messageElement); //<div id='mensagens'><li class='mensagem1>Hello, world</li> </div>

})