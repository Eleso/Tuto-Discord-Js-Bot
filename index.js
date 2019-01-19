client.on("message", async message => {

    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
  

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); // Args are defined
  

    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
       let o = new Discord.RichEmbed()
       .setTitle("ERROR")
       .setColor("PURPLE")
       .setDescription("Command is invalid or an error has occurred.")
       .setTimestamp()
       message.channel.send(o)
      console.log(err) // for the error
    }

});
