const socket=io.connect("http://localhost:2000")
const d = document;
const input = d.querySelector(".inputbox");
const btn = d.querySelector(".button");
const list = d.querySelector(".chat-list");

btn.addEventListener("click",function(){
    const li = d.createElement("li");
    const text = input.value;
    li.textContent=`you : ${text}`;
    list.appendChild(li);
    input.value="";
    const message = `Steve : ${text}`
    socket.emit("message",message);


})

socket.on("broadcast",function(message){
    const li = d.createElement("li");
    li.textContent = message;
    list.appendChild(li)

})