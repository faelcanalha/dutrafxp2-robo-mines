const TelegramBot = require('node-telegram-bot-api');

const token = '';
const bot = new TelegramBot(token, { polling: true });


const second = 1000;
const minute = second * 60;

function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

const bet = [
  `
⚫️⚫️⚫️⚫️⚫️
⚫️⚫️⚫️💎💎
⚫️⚫️⚫️💎⚫️
⚫️⚫️⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
  `,
  `
⚫️💎⚫️💎⚫️
⚫️⚫️⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
💎⚫️⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
  `,
  `
⚫️⚫️⚫️⚫️💎
⚫️⚫️⚫️⚫️⚫️
💎⚫️⚫️⚫️⚫️
⚫️⚫️⚫️💎⚫️
⚫️⚫️⚫️⚫️💎
  `,
  `
⚫️⚫️⚫️⚫️⚫️
⚫️⚫️💎⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
💎⚫️⚫️💎⚫️
💎⚫️⚫️⚫️⚫️
  `,
  `
⚫️⚫️💎⚫️💎
💎⚫️💎⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
  `,
  `
⚫️⚫️⚫️⚫️⚫️
💎⚫️💎💎⚫️
⚫️⚫️⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
  `,
  `
⚫️⚫️⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
⚫️💎💎⚫️⚫️
⚫️⚫️💎⚫️⚫️  
  `,
  `
⚫️⚫️⚫️⚫️⚫️
💎⚫️💎💎⚫️
⚫️⚫️⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
  `,
  `
⚫️⚫️⚫️💎⚫️
⚫️⚫️💎⚫️⚫️
⚫️💎⚫️⚫️⚫️
⚫️💎⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️  
  `,
  `
⚫️⚫️⚫️⚫️⚫️
⚫️💎⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️
💎⚫️⚫️⚫️⚫️
💎⚫️⚫️⚫️⚫️
  `
]

setInterval(() => {
  const expirationTime = new Date();
  expirationTime.setTime(expirationTime.getTime() + 2 * minute);
  const formattedExpirationTime = formatTime(expirationTime);

  const randomNumber = Math.floor(Math.random() * 2) + 2;
  const randomBet = bet[Math.floor(Math.random() * bet.length)];

  bot.sendMessage("-1001713196523", `O BOT detectou um sinal

Aposte com: ${randomNumber} 💣
${randomBet}
🎯 Use até 2 gales
⏰ Validade até: ${formattedExpirationTime}
🎯 Plataforma: https://betslots.bet/yuj854dic`);
}, minute * 2)

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const isGroup = msg.chat.type === 'group' || msg.chat.type === 'supergroup';

  if (!isGroup) {
    bot.sendMessage(chatId, "Para receber sinais de aposta entre no nosso grupo do telegram: https://t.me/+dWaKLepJWjI3NzJh");
  }
});
