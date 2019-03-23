const Discord = require('discord.js');
const bot = new Discord.Client();
/*
const cfg = require('./index.json'); // a garder en version desktop
*/
const token = process.env.token // a garder en version heroku
const prefix = ("/");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('Surveiller').catch(console.error)
});
bot.login(token)
bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur, va lire les règles et appui sur la réaction pour avoir ton grade' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});



bot.on('message', msg => {
    if (msg.content === "kick"){
        msg.reply("Ne reviens plus.")
    }
    if (msg.content.match(/mpx en force/i)) {
            msg.reply('Je suis d\'accord avec toi la mpx est la meileure.')
    }
    if (msg.content === prefix + "chaine"){
        msg.channel.send("https://www.youtube.com/channel/UCOhGDL7a89EkC91H6Kp-Alg?view_as=subscriber")
        console.log("Une personne a demandé pour aller sur ta chaine.")
    }
 
});

/*
bot.login(cfg.token); //a garder en version desktop
*/
