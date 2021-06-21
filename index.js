const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
client.login(config.BOT_TOKEN);
const bot = new Discord.Client
bot.once('ready', () => {
   console.log(`Bot online: ${bot.user.tag}!`);    
});
client.on('ready', () => console.log('toma no cu mano tem q trabalha dnv - O bot está pronto!'));
client.on('message', msg => {
  if (msg.content === '.bom dia') {
    msg.reply('Bom Dia!');
}});
client.on('message', msg => {
  if (msg.content === 'Oi bot') {
    msg.reply('Olá');
}});
client.on('message', msg => {
  if (msg.content === '.Boa tarde') {
    msg.reply('Boa Tarde!');
}});
client.on('message', msg => {
  if (msg.content === '.Bom dia') {
    msg.reply('Bom Dia!');
}});
client.on('message', msg => {
  if (msg.content === '.boa tarde') {
    msg.reply('Boa Tarde!');
}});
client.on('message', msg => {
  if (msg.content === '.Boa noite') {
    msg.reply('Boa Noite!');
}});
client.on('message', msg => {
  if (msg.content === '.boa noite') {
    msg.reply('Boa Noite!');
}});
client.on('message', msg => {
  if (msg.content === '.piada') {
    msg.reply('ainda não sei contar piadas.')
}});
client.on('message', msg => {
  if (msg.content === '.avatar') {
    msg.reply('ainda não sei fazer.')
}});
client.on('message', msg => {
  if (msg.content === '.vai se fuder') {
    msg.reply('vai vc retardado')
}});
client.on('message', msg => {
  if (msg.content === '.te amo') {
    msg.reply('bots não tem sentimentos, então não ligo.')
}});
client.on('message', (message) => {
      if (message.content.startsWith('!kiss')) {
      if (!message.mentions.users.size) { 
        return message.reply('você não marcou ninguém, então te darei um abraço!');
      }
      let membro = message.mentions.users.first() || client.users.cache.get(args[0])
      if (message.mentions.users.first()) {
      const {MessageAttachment} = require('discord.js');
      const fetch = require("node-fetch");
      const {body} = fetch('https://nekos.life/api/v2/img/kiss').then(res => res.json()).then(result => {
        if (!result.url) return message.channel.send ("Algo deu errado.")
        const attachment = new MessageAttachment(result.url);
        message.channel.send(`${message.author} beijou ${membro}!`, attachment)
})}}})
client.on('message', message => {
  if (message.content === '.ping') {  
    message.channel.send(`📶 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});
client.on('message', message => {
  if (message.content === '.arabe') {
    message.channel.send("ta ai baitola", {files: ["https://img.ifunny.co/images/a7259284e4bc85ae9d1827c60afe44a440279bfcf23dc9c673fb7fb7c88e88a4_3.jpg"]})}})
client.on('message', message => {
  if (message.content === ('!hentai')) {
    const {MessageAttachment} = require('discord.js');
      const fetch = require("node-fetch");
    const {body} = fetch('https://nekos.life/api/v2/img/Random_hentai_gif')
    .then(res => res.json()).then(result => {
    const attachment = new MessageAttachment(result.url);
    message.channel.send("Você é um pervertido!", attachment)
    })}});
    client.on('message', (message) => {
  if (!message.content.startsWith(prefix = '!') || message.author.bot) return;

  const args = message.content
    .toLowerCase()
    .slice(prefix.length)
    .trim()
    .split(/\s+/);
  const [command, input] = args;

  if (command === 'clear' || command === 'c') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.channel
        .send(
          "You cant use this command since you're missing `manage_messages` perm",
        );
    }

    if (isNaN(input)) {
      return message.channel
        .send('enter the amount of messages that you would like to clear')
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    }

    if (Number(input) < 0) {
      return message.channel
        .send('enter a positive number')
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    }

    // add an extra to delete the current message too
    const amount = Number(input) > 100
      ? 101
      : Number(input) + 1;

    message.channel.bulkDelete(amount, true)
    .then((_message) => {
      message.channel
        // do you want to include the current message here?
        // if not it should be ${_message.size - 1}
        .send(`Bot cleared \`${_message.size}\` messages :broom:`)
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    });
  }

  if (command === 'help' && input === 'clear') {
    const newEmbed = new MessageEmbed()
      .setColor('#00B2B2')
      .setTitle('**Clear Help**')
      .setDescription(
        `This command clears messages for example \`${prefix}clear 5\` or \`${prefix}c 5\`.`,
      )
      .setFooter(
        `Requested by ${message.author.tag}`,
        message.author.displayAvatarURL(),
      )
      .setTimestamp();

    message.channel.send(newEmbed);
  }
});

client.on('message', message => {
  if (message.content === '.love') {
    message.channel.send("ta ai baitola", {files: ["https://i.ytimg.com/vi/o3be5nSB048/hqdefault.jpg"]})}})
    client.on('message', message => {
  if (message.content === '.bravo') {
    message.channel.send("ta ai baitola", {files: ["https://i.ytimg.com/vi/OvEMXwhigzM/mqdefault.jpg"]})}})
client.on('message', message => {
  if (message.content === '.triste') {
    message.channel.send("ta ai baitola", {files: ["https://i.ytimg.com/vi/JKM7egr1mfk/maxresdefault.jpg"]})}})
    client.on('message', message => {
  if (message.content === '.feliz') {
    message.channel.send("ta ai baitola", {files: ["https://pbs.twimg.com/profile_images/1367087144817336322/M2PPqpLI_400x400.jpg"]})}})
client.on('message', message => {
  if (message.content === '.bluezao') {
    message.channel.send("Comandos do Bluezao: '.arabe', '.feliz', '.triste', '.bravo', '.love'")}})

