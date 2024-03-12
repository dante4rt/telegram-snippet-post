# telegram-snippet-post

A simple Node.js module to send messages to Telegram chats using a bot.

## Installation

Install the package with NPM:

```sh
npm install telegram-snippet-post
```

## Usage

To use this module, you will need a Telegram bot token and the chat ID of the recipient chat. Then, you can send a message as follows:

```js
const sendTelegramPost = require('telegram-snippet-post');

const token = 'YOUR_TELEGRAM_BOT_TOKEN'; // Replace with your Telegram bot token
const chatId = 'YOUR_CHAT_ID'; // Replace with your chat ID
const message = 'Your message here';

sendTelegramPost(token, chatId, message)
  .then((response) => console.log('Message sent:', response))
  .catch((error) => console.error('Error:', error));
```

## API

This module exports a single function `sendTelegramPost`:

### sendTelegramPost(token, chatId, message)

Sends a message to a Telegram chat.

#### Parameters:

- `token` - _String_ - Your Telegram bot token.
- `chatId` - _String_ - The chat ID where the message will be sent.
- `message` - _String_ - The content of the message to be sent.

#### Returns:

- A Promise that resolves to the response data from Telegram.

## Errors

If the message fails to send, the function will throw an error with the message "Failed to send message to Telegram: [Error message]".
