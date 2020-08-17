const Socket = io();

let btn = document.getElementById('btn');
let textarea = document.getElementById('textarea');
let name = document.getElementById('name');
let chat = document.getElementById('chat');


btn.addEventListener('click', function () {
    Socket.emit('message', {texto: textarea.value, name: name.value});
});


Socket.on('message', (data) => {
    
    chat.innerHTML += `
    
      <p><strong>${data.name}: </strong>${data.texto}</p>

    `
    textarea.value = ' ';
});