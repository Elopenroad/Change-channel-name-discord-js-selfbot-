const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  
  // Assuming you want to change the name of a channel after the bot is ready
  const guildId = 'Your guild id (server id)'; // Replace YOUR_GUILD_ID with the actual ID of your guild
  const channelIDs = ['Your channel ids' , 'Your channel ids' , '...']
  const emojis = ["🍏" , "🍎" , "🍐"  , " 🍊" , "🍋" , "🍌" , "🍉" , "🍇", "🍓", "🍈", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥬", "🥒", "🌶️", "🌽", "🥕", "🧄", "🧅", "🥔", "🍠", "🥐", "🥯", "🍞", "🥖", "🥨", "🧀", "🥚", "🍳", "🧈", "🧈", "🥞", "🧇", "🥓", "🥩", "🍗", "🍖", "🦴", "🌭", "🍔", "🍟", "🍕", "🥪", "🥙" , "🧆" , "🌮" , "🌯"  , "🥗" , "🥘"  , "🥫"  , "🍝" , "🍜" , "🍲" , "🍛" , "🍣" , "🍱" , "🥟" , "🦪" , "🍤" , "🍙" , "🍚" , "🍘", "🍥", "🥠", "🍢", "🍡", "🍧", "🍨", "🍦", "🥧", "🧁", "🍰", "🎂", "🍮", "🍭", "🍬", "🍫", "🍿", "🍩", "🍪", "🌰" , "🥜", "🍯", "🥛" , "🍼", "☕", "🍵", "🧉", "🧃", "🥤", "🍶", "🍺" , "🍻", "🥂", "🍷", "🥃", "🍸", "🍹", "🍾", "🧊", "🧂"];

  while (true) {

    for (const chl of channelIDs) {
      function chooseRandomFromList(list) {
        // Generate a random index between 0 (inclusive) and the length of the list (exclusive)
        const randomIndex = Math.floor(Math.random() * list.length);
        // Return the item at the randomly chosen index
        return list[randomIndex];
      }
  
      let newEmoji = chooseRandomFromList(emojis);
      const guild = client.guilds.cache.get(guildId);
      if (!guild) return console.log('Guild not found.');
      let channel = guild.channels.cache.get(chl);
      if (!channel) return console.log('Channel not found.');

      let channelName = channel.name;
      let separatorIndex = channelName.indexOf('✧');
      if (separatorIndex !== -1) { // Ensure that '|' exists in the channel name
        let newName = channelName.substring(separatorIndex + 1).trim();
        let updatedName = newEmoji + "✧" +newName;
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          await channel.setName(updatedName);
          console.log(`Channel name changed successfully to ${channel.name}`);
        } catch (error) {
          console.error('Error occurred while changing channel name:', error);
        }
      } else {
        console.log(`Separator '|' not found in channel name: ${channelName}`);
      }
    }
  }
});


client.login('You discord token here');//It must be your account token not a bot token cuz it's a self bot
