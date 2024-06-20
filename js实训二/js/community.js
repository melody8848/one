// 在线聊天功能
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatBody = document.getElementById('chat-body');

chatSend.addEventListener('click', function() {
  const message = chatInput.value;
  if (message.trim() !== '') {
    const messageElement = document.createElement('div');
    messageElement.textContent = `用户: ${message}`;
    chatBody.appendChild(messageElement);
    chatInput.value = '';

    // 模拟客服回复
    setTimeout(() => {
      const replyElement = document.createElement('div');
      replyElement.textContent = '客服: 您好，有什么可以帮助您的吗？';
      chatBody.appendChild(replyElement);
    }, 1000);
  }
});

chatInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    chatSend.click();
  }
});