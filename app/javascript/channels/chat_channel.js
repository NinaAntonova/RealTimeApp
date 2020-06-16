import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log('Connected to the chat channel')
  },

  disconnected() {
    console.log('Disconnected to the chat channel')
  },

  received(data) {
    var messages = $('#chatbox');
    messages.append(data['message']);
    messages.scrollTop(messages[0].scrollHeight);
  }
});
