const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'zxzc.aternos.me',
    port: 61260,
    username: 'Bot123',
    version: '1.21.8'
  });

  bot.on('spawn', () => {
    console.log('Bot joined');

    setInterval(() => {
      bot.setControlState('forward', true);

      setTimeout(() => {
        bot.setControlState('forward', false);
        bot.look(Math.random() * Math.PI * 2, 0, true);
      }, 3000);

    }, 30000);
  });

  bot.on('error', (err) => {
    console.log('Error:', err.message);
  });

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 10 seconds...');
    setTimeout(createBot, 10000);
  });
}

createBot();
