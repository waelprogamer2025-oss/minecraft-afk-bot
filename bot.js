const mineflayer=require('mineflayer');
const bot=mineflayer.createBot({
const bot = mineflayer.createBot({
  host: 'zxzc.aternos.me',
  port: 61260,
  username: 'Bot123',
  version: '1.21.8'
});
bot.on('spawn',()=>{
 console.log('Bot joined');
 setInterval(()=>{
  bot.setControlState('forward',true);
  setTimeout(()=>{
   bot.setControlState('forward',false);
   bot.look(Math.random()*Math.PI*2,0,true);
  },3000);
 },30000);
});
bot.on('error',console.log);
bot.on('end',()=>console.log('Disconnected'));
