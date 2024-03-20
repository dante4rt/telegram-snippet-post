const axios = require('axios');

const sendTelegramPost = async (token, chatId, message) => {
  const botUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await axios.post(botUrl, {
      chat_id: chatId,
      text: message,
      disable_web_page_preview: true,
    });

    console.log('Telegram API Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Failed to send message to Telegram:', error);

    throw new Error('Failed to send message to Telegram');
  }
};

module.exports = sendTelegramPost;
