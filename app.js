const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('ready', function () {
  console.log('Je suis connecté !');
});

bot.on('message', (message) => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'help') {
    message.channel.send({
      embed: {
        color: 3447003,
        title: 'HELP',
        description: `
						1. How To Install Kali Linux?
						2. Things To Do After Installing Kali Linux
						3. Where Can I Download Kali Linux/Images?
						4. What Is The Linux Kernel?
						5. What Are The Components Of Linux?
						6. What Is Special About Kali Linux?
						7. How To Become Root In Linux?
						8. How To Reset Username And Password In Kali Linux?
						9. How To Install Kali Linux On Android Using Linux Deploy?
						10. What Is BASH?
						11. How Do You Change Permissions Under Linux?
						12. Most Dangerous Linux Commands You Should Never Execute
						13. How To Create/Remove A User In Kali Linux?
						14. How To Install A Wireless Adapter On Kali Linux?
						15. How To Connect To A Wireless WiFi In Kali Linux?
						16. How To Check If Your Wireless Network Adapter Supports Monitor Mode & Packet Injection ?`,
        timestamp: new Date(),
      },
    });
  }
  if (command === 'view') {
    let num = args[0];
    message.channel.send({
      embed: {
        color: 3447003,
        title: `${num}`,
        description: config + '.' + num,
        timestamp: new Date(),
      },
    });
  }
  if (command === 'say') {
    let text = args.join(' ');
    message.delete();
    message.channel.send(text);
  }
});
bot.login(config.token);
