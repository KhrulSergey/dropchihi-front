export async function testFun() {
  const { SnowTransfer } = require('snowtransfer');
  const client = new SnowTransfer("OTEwMTA4OTA2NTQ4NzgxMTI4.YZOC-A.Nb-ha0_iyo-fDIt99GiwzUXJAdE");
  const request = async () => {
    const message = await client.channel.createMessage("909914081899737170", {
      embeds: [{
        title: "memes",
        description: "memes"
      }]
    });
    console.log(message);
  };
  request().then(() => {
    console.log("your memes worked ");
  }).catch(e => {
    console.error(e);
  });
}

// export async function testFun () {
//
// // You might want to store this in an environment variable or something
//   const botToken = process.env.DISCORD_BOT_TOKEN
//   const discordServerId = process.env.DISCORD_SERVER_ID
//
//   const fetchUser = async (id: any) => {
//     const response = await fetch(`https://discord.com/api/v9/guilds/${discordServerId}/members?limit=2`, {
//       headers: {
//         Authorization: `Bot ${botToken}`
//       }
//     });
//     if (!response.ok) throw new Error(`Error status code: ${response.status}`)
//     return JSON.parse(await response.json())
//   }
//   return fetchUser;
// }

// export function getDiscordCount() {
//   const client = new Client();
//
//   const botToken = process.env.DISCORD_BOT_TOKEN
//   console.log("token ", botToken);
//
//   client.on('ready', () => {
//     console.log('The client is ready!')
//
//     const channelId = '909914431998279691'
//     const targetGuild = client.guilds.cache.get(channelId)
//
//     const totalMembers = client.guilds.cache.map(guild => {
//       return guild.memberCount;
//     }).reduce((a, b) => a + b, 0);
//
//     console.log("totalMembers", totalMembers);
//   })
//
//   client.token = botToken;
//
//   client.connect();
// }
