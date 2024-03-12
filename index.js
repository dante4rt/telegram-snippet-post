const axios = require('axios');

const sendTelegramPost = async (token, chatId, message) => {
  const botUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await axios.post(botUrl, {
      chat_id: chatId,
      text: message,
      disable_web_page_preview: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to send message to Telegram: ${error.message}`);
  }
};

module.exports = sendTelegramPost;
