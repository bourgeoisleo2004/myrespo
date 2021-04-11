const Discord = require('discord.js');
const clientmoi = new Discord.Client();
const embed = 

clientmoi.login(process.env.TOKEN);

clientmoi.on("ready", async () =>{
    console.log(" ")
    console.log("Connécté en tant que : " + clientmoi.user.tag)
    clientmoi.user.setActivity("BeamNG.drive", {type: "PLAYING"})
})


clientmoi.on('guildMemberAdd', memberadd =>{
    let embed = new Discord.RichEmbed()
    .setColor('#00dcff')
    .setDescription(":wink:  Salut " + memberadd.user + " je trés heureux qui tu sois arrivé dans le serveur de @Mr_fox141 !!! :star_struck: ")
    .setAuthor("🇯🇵 Bourgeois・レオ🇨🇦#9792")
memberadd.guild.channels.get('729802069153677749').send(embed)
})



clientmoi.on("message", message =>{
    if(!message.guild) return
    if(message.content ==="hello"){
        message.channel.send("slt couzin " + message.author.username + " ! Je commençais à t'attendre ")
    }
    if(message.content ==="slt"){
        message.channel.send("yep couzin " + message.author.username + "!! Tu es de retour !")
    }
    if(message.content ==="salut"){
        message.channel.send("hello couzin " + message.author.username + "!! Tu es de retour !")
    }
    if(message.content ==="bonjour"){
        message.channel.send("yep couzin " + message.author.username + " ! Je commençais à t'attendre ")
    }
    if(message.content ==="bjr"){
        message.channel.send("salut couzin " + message.author.username + " ! Je commençais à t'attendre ")
    }
    if(message.content ==="yo"){
        message.channel.send("Coucou couzin " + message.author.username + "! Je commençais à t'attendre ")
    }
    if(message.content ==="re"){
        message.channel.send("Fréro, " + message.author.username + "!! Tu es de retour !")
    }
    if(message.content ==="coucou"){
        message.channel.send("Coucou couzin " + message.author.username + " ! Je commençais à t'attendre ")
    }
    if(message.content ==="yep"){
        message.channel.send("Coucou " + message.author.username)
    }
    if(message.content ==="a+"){
        message.channel.send("A la prochaine " + message.author.username)
    }
    if(message.content ==="au revoir"){
        message.channel.send("a+ " + message.author.username)
    }
    if(message.content ==="yo"){
        message.channel.send("Fréro, " + message.author.username + "!! Tu es de retour !")
    }

});

async function getReadyForBed() {
    let teethPromise = brushTeeth();
    let tempPromise = getRoomTemperature();
  
    // Change clothes based on room temperature
    let temp = await tempPromise;
    // Assume `changeClothes` also returns a Promise
    if(temp > 20) {
      await changeClothes("warm");
    } else {
      await changeClothes("cold");
    }
  
    await teethPromise;
  }
  
