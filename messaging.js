document.addEventListener("DOMContentLoaded", loadMessages);

function loadMessages() {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    let messageList = document.getElementById("message-list");

    messageList.innerHTML = messages.map(msg => `<li class="message">${msg}</li>`).join('');
}

function sendMessage() {
    let messageText = document.getElementById("message-text").value.trim();

    if (!messageText) return;

    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(messageText);
    localStorage.setItem("messages", JSON.stringify(messages));

    document.getElementById("message-text").value = "";
    loadMessages();
}
