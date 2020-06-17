const api = require('discord-script') 
const bd = new api({
  token: "NzIwNzQzMzUwMDIxNjUyNTkx.XueYIw.H5w_Rd87W9gz8x5OXNtNHRkY1Kk",
  prefix: ["rx!"],
})

bd.MessageEvent()
bd.Command({
  name: "play",
  code: `
$description[<a:check:721062363209400411> | Cancion añadida Correctamente]
$footer[Usa el comando rx!queue para ver la lista.]
$color[3bff01]
$play[$message[]]
$onlyIf[$message[1]!=; Necesitas proporcionar el nombre de una cancion.]
`
})  
bd.Command({
  name: "hug",
  code: `
$color[ff9874]
$onlyIf[$mentioned[1]!=;¡Por favor menciona a alguien!]
$description[**<@$authorID> le dió un abrazo a $username[]**]
$image[$randomText[https://media1.tenor.com/images/b1b282be98c98c8f8a03debd2156d090/tenor.gif;http://s7.favim.com/orig/151124/anime-couple-gif-hug-Favim.com-3637687.gif;https://data.whicdn.com/images/190359499/original.gif;https://i.imgur.com/GuADSLm.gif;https://media1.tenor.com/images/432f76096f2de4191a7b949f6dea0b41/tenor.gif?itemid=8833018;https://media1.tenor.com/images/7b041e8f41e53eab519fb72ef0a82b22/tenor.gif?itemid=14903934;https://media1.tenor.com/images/2f1ff7baa057cbeb019e1e51acdf9fa6/tenor.gif?itemid=14903950;https://media1.tenor.com/images/1d94b18b89f600cbb420cce85558b493/tenor.gif?itemid=15942846;https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif?itemid=9200935;https://media1.tenor.com/images/34a1d8c67e7b373de17bbfa5b8d35fc0/tenor.gif?itemid=8995974;https://media1.tenor.com/images/f2805f274471676c96aff2bc9fbedd70/tenor.gif?itemid=7552077;https://media1.tenor.com/images/d3dca2dec335e5707e668b2f9813fde5/tenor.gif?itemid=12668677]]
$footer[$username[] ejecutó este comando;$userAvatar[$authorID]]
$addTimestamp
`
})
bd.Command({
name: "say", 
code: `
$onlyIf[$message[1]!=;¡Necesitas proveer algo para que el bot diga!]
$deletecommand[1ms]
$message[]
`
});

bd.Command({
name: "ping", 
code: `
$title[¡Pong! :ping_pong:]
$description[Mi ping es de $ping ms]
$footer[$username[];$userAvatar[$authorID]]
$addTimestamp
`
})
bd.Command({
name: "kiss",
code:`
$color[#800000]
$description[$username[] besó a $username[$mentioned[1]]]
$image[$randomText[https://cdn.discordapp.com/attachments/485083054461943821/703514186419798036/tenor.gif;https://cdn.discordapp.com/attachments/485083054461943821/703514185795108924/giphy.gif;https://cdn.discordapp.com/attachments/485083054461943821/703514185040003082/tenor_1.gif;https://cdn.discordapp.com/attachments/485083054461943821/703514184335491113/source.gif]]
$footer[$username[$authorID] ejecutó este comando;$userAvatar[$authorID]]
$addTimestamp
$onlyIf[$mentioned[1]!=;¡Por favor menciona a alguien!]
`})
bd.Variables({
 Prefix: "!",
 Colour: "969C9F",
 Code: "",
});
bd.Command({
 name: "help",
 code: `
$author[RetroX BOT]
$description[**Comandos oficiales del bot \`RetroX BOT\`**
---------------------------------------------------------
*Comandos de Interaccion*

- \`rx!kiss\` \`rx!hug\` \`rx!kill\` \`rx!avatar\`
---------------------------------------------------------
*Comandos de Musica*

- \`rx!play\` \`rx!skip\` \`rx!resume\` \`rx!pause\`
- \`rx!queue\`
---------------------------------------------------------
*Comandos de Moderacion*

- \`rx!mute\` \`rx!unmute\` \`rx!ban-id\` \`rx!unban\`    
- \`rx!setsuggest\` \`rx!setsuggest off\` \`rx!username\`
- \`rx!dmall\` \`rx!set-join-message\` \`rx!set-leave-channel\`
- \`rx!set-join-channel\` \`rx!set-leave-message\`
- \`rx!kick\` \`rx!massr-add\` \`rx!massr-remove\`
---------------------------------------------------------
*Comandos de Utilidad*

- \`rx!ping\` \`rx!info\` \`rx!userinfo\` \`rx!serverinfo\` 
- \`rx!encuesta\` \`rx!bot\` \`rx!afk\` \`rx!afk off\` \`rx!say\`
- \`rx!corona\` \`rx!pokemon\` \`rx!weather\` \`rx!level\` 
- \`rx!skin\` \`rx!haste\` \`rx!random\` \`rx!ticket\`
- \`rx!solved\`
---------------------------------------------------------
*Comandos de Diversion*

- \`rx!love\` \`rx!penis\` \`rx!8ball\` \`rx!random\`
---------------------------------------------------------
*Comandos de Giveaway*

- \`rx!ghelp\` \`rx!reroll\` \`rx!start\`
---------------------------------------------------------]
$footer[$username[]#$discriminator[$authorID];$userAvatar[709728568711708693]]
$addTimestamp
`
});
bd.Command({
name: "info",
code: `
$title[Informacion del Bot]
$description[ Este **BOT** ha sido creado por C̲͕̏ȁ̋̐m̟̖͓į̭ͮl̡̛ó̶͂#5819, Disfruta de sus **COMANDOS** y sus funciones :D.]
$image[https://cdn.discordapp.com/attachments/707433567839322157/707696384417202237/fdp_10.png]
$color[$random[0;999999]]
`
});

bd.Command({
name: "kill",
code: `
$color[ff9874]
$argsCheck[>1;**¡Necesitas mencionar a alguien para asesinar!**]
$description[**<@$authorID> asesinó a $username[$mentioned[1]]**]
$image[$randomText[https://media.discordapp.net/attachments/399448944889036801/664060217226690560/d32133d8-c698-4157-bf7c-697794830be1.gif;https://cdn.discordapp.com/attachments/399448944889036801/595828073400893465/tenor_14.gif;https://cdn.discordapp.com/attachments/399448944889036801/620655855825715219/41b3fa86-0635-4a87-aafd-ff31463ac265.gif;https://cdn.discordapp.com/attachments/604911557276729366/632372730477543444/k1.gif;https://media2.giphy.com/media/BFL20NiE18A2A/source.gif;https://25.media.tumblr.com/b1b599b6d51dcfb89348044e006830dd/tumblr_n0l0ac210Z1sa0n84o1_400.gif;https://cdn.discordapp.com/attachments/399448944889036801/650318284645990400/3f7082829735834d3e991e1934db5c14299c4872_hq.gif;https://cdn.discordapp.com/attachments/399448944889036801/608645883487322112/kill.gif;https://i.imgur.com/6iddVOo.gif]]
$addTimestamp
$footer[$username[] ejecutó este comando;$userAvatar[$authorID]]
$onlyIf[$mentioned[1]!=; **¡Necesitas mencionar a alguien!**]
`
})
bd.Status({
        0: {
            description: "rx!help", 
            type: "LISTENING" 
        }, 
        1: {
            description: "Creado y desarrollado por C̲͕̏ȁ̋̐m̟̖͓į̭ͮl̡̛ó̶͂#5819", 
            type: "PLAYING" 
        },
        2: {
            description: "RETRO ✘ 𝑰𝒏𝒎𝒐𝒓𝒕𝒂𝒍 (𝒗2.4) | Viendo a 150+ Usuari@s",
            type: "LISTENING"
      }
        
    }, 12000)
bd.Command({
name: "unban",
code: `
$unban[$message[1]]
$description[Usuario desbaneado satisfactoriamente :white_check_mark:]
$addTimestamp
$footer[$username[$message[1]]#$discriminator[$message[1]];$userAvatar[$message[1]]]
$onlyPerms[ban; **¡No tienes permisos suficientes para ejecutar este comando!**]
$onlyIf[$userExists[$mentioned[1]] $userExists[$message[]]!=false false; Uso correcto: \`rx!unban <@User_ID>\`]
`
});
bd.Command({
name: "love",
code: `
$title[¡Shipeados!]
$description[$random[0;100]% de probabilidades de que suceda algo entre ambos]
$image[https://api.alexflipnote.dev/ship?user=$userAvatar[$mentioned[1]]&user2=$userAvatar[$mentioned[1]]]
$footer[$username[]#$discriminator[]]
$onlyIf[$mentioned[1]!=;🚨 — Necesitas mencionar a dos usuarios]
`
});
bd.Command({
name: "penis",
code: `
$description[**¿Cuanto te mide?**
*Pene de $username[$mentioned[1;yes]]*

$randomText[No hay.;8D:8=D;8==D;8===D;8====D;8=====D;8======D;8=======D;8========D;8=========D;8==========D;8===========D;8============D;8=============D;8==============D;8===============D;8================D;8=================D;8==================D;8===================D;8====================D;8=====================D;8======================D;8=======================D;8========================D;8=========================D;8==========================D;8===========================D;8============================D;8=============================D;8==============================D;8===============================D;8================================D;8=================================D;8==================================D]]
$color[$random[0;999999]]
`});
bd.Command({
name: "encuesta",
code: `
$title[¡Tiempo para una encuesta!]
$onlyAdmin[¡Solo Admins/Moderadores pueden usar este comando!]
$addReactions[👍;👎]
$description[$message[]] 
$footer[👍 Estas Deacuerdo - 👎 Estas en desacuerdo] 
$deletecommand[1ms]
`
});
bd.Command({
name: "skip",
code: `
$skip[everyone; ¡No tienes permisos para hacer esto!] :white_check_mark: | Cancion saltada satisfactoriamente. 
`
});
bd.Command({
name: "queue",
code:`
$queue[]
$suppressErrors[¡La lista de reproduccion esta Vacia!]
`
});
bd.Command({
name: "avatar",
"code": `
$title[Avatar de  $username[$mentioned[1]]#$discriminator[$mentioned[1]]]
$description[]
$footer[$username[]#$discriminator[$authorID]]
$image[$userAvatar[$mentioned[1;yes]]]
$color[$random[0;999999]]
`
});
bd.Command({
name: "avatar-id",
"code": `
$title[Avatar de  $username[$message[1]]#$discriminator[$message[1]]]
$description[]
$footer[$username[]#$discriminator[$authorID]]
$image[$userAvatar[$message[1]]]
$color[$random[0;999999]]
$onlyIf[$userExists[$mentioned[1]] $userExists[$message[]]!=false false; Uso correcto: \`rx!avatar-id User_ID\`]
`
})

bd.Command({
 name: "ban",
 code: `
$deletecommand[60]
$ban[$mentioned[1];Moderador: $username[$authorID]$discriminator[$authorID] | Razon | $message[2] $message[3] $message[4] $message[5] $message[6]]
$onlyPerms[ban;¡No tienes permisos para usar este comando!]
$title[El usuario ha sido baneado! ✅]
$color[$random[0;99999]]
$description[Usuario Baneado: <@$mentioned[1]>Baneado Por: <@$authorID>  Razon: $noMentionMessage[]]
$footer[$username[$authorID] | $username[$mentioned[1]]]
$onlyIf[$mentioned[1]!=; **Formato incorrecto. Intenta esto: \`rx!ban {@username} {reason}\`**]
`
})

bd.Command({
 name: "kick",
 code: `
$deletecommand[60]
$kick[$mentioned[1;yes];$noMentionMessage[]]
$onlyPerms[kick;¡No tienes permisos para usar este comando!]
$title[El usuario ha sido Expulsado! ✅]
$color[$getVar[Colour]]
$description[Expulsado : <@$mentioned[1]>$nExpulsado por : <@$authorID>$nRazon : $noMentionMessage[]]
$footer[$username[$authorID] | Kazuto#9419]
$onlyIf[$mentioned[1]!=; **Formato incorrecto. Intenta esto: \`rx!kick {@username} {reason}\`.**]
` 
})
bd.Command({
name: "bot",
code: `
$title[¡Invitacion creada!]
$description[**Invitacion:** **https://discordapp.com/api/oauth2/authorize?client_id=$message[1]&permissions=8&scope=bot**
BOT ID: \`$message[1]\`
Bot Mention: <@$message[1]>
Pedido por: <@$authorID>]
$footer[Creado por C̲͕̏ȁ̋̐m̟̖͓į̭ͮl̡̛ó̶͂#5819;https://media.giphy.com/media/2dnGHOAQt1tIziib5X/giphy.gif]
$thumbnail[$userAvatar[$message[1]]]
$color[$random[0;999999]]
$onlyIf[$userExists[$mentioned[1]] $userExists[$message[]]!=false false; ¡Necesitas proporcionar una ID Valida!]

`});
bd.Command({
name: "purge",
code: `
$clear[$message[1]]
$suppressErrors[Uso correcto: \`rx!purge \{amount\}\`]
$onlyIf[$isNumber[$message[1]]==true;¡Introduce un numero valido!...]
$onlyPerms[managemessages; ¡No tienes permisos para usar este comando!]
`})
bd.Command({
name: "ban-id",
code: `
$ban[$message[1];Moderador: $username[$authorID]$discriminator[$authorID] | Razon | $message[2] $message[3] $message[4] $message[5] $message[6]]
$description[:white_check_mark: | $username[$message[1]]#$discriminator[$message[1]] ha sido baneado satisfactoriamente]
$onlyIf[$userExists[$mentioned[1]] $userExists[$message[1]]!=false false; Uso correcto: \`rx!ban-id User_ID {reason}\`]
`
})
bd.Command({
name: "8ball",
code: `
$title[$username[$authorID] 's Question is ]
$description[$noMentionMessage[]]

$addField[**Bot answer**;$randomText[Quizás; Mis fuentes dicen que sí; Mis fuentes dicen que no; No puedo decir que no; Absolutamente; Céntrate y pregunta de nuevo; Mejor no te cuento ahora; Es cetain; sí; definitivamente Muy dudoso; Absolutamente; Respuesta poco clara Preguntar más tarde; No se puede predecir ahora; No puedo decir ahora; No apuestes en ello; Centrarse y preguntar de nuevo; Las indicaciones dicen que sí; Parece que sí; No; No hay duda de eso; Afirmativamente; Buena perspectiva; Así será; Las estrellas dicen que no; Improbable; Muy probable; Si; Puedes contar con éso ; Claro jajaja por qué preguntas; 100% Sí]]
$thumbnail[https://www.vermontcountrystore.com/ccstore/v1/images/?source=/file/v436715391556442924/products/51327.main.png&height=500&width=500&quality=0.88]

$footer[Made by Camilo ~ 8ball]
$color[$randomText[65280;16711680;C8C864;47eabc;df2e90;543683;264bec;d20057;515e63;497147;376034;087264;4ca6ff;460a18;faebd7;eed330;cb4bca;fffff2;fffc3c;b507db;ff8d00;00ff38;ff00e7;98bdf0;daf7f8;b9e0d9;debcb0;ffb3b3;b8d9d0;83d0f2;552f2e;fff380;0000ff;ff4d00;afb169;afaf0a;ffffff;c7ae71;a77c86;17264f;cbffe8;c7bbc9;debcb0;010649;feebe6]]
$onlyIf[$message[1]!=;Pregunta algo en especifico para usar este comando.]
`})
bd.Command({
name: "howgay",
code: `
$title[Gay Machine]
$color[#00ffff]
$description[🏳️‍🌈 ¡Wow! <@$mentioned[1]> es \`$random[0;101]%\` Gay!]
$onlyIf[$mentioned[1]!=; **¡Necesitas mencionar a alguien!**]
`
});
bd.Command({
name: "pause",
code: `
$pause
$description[:white_check_mark: | Cancion pausada.]
`});
bd.Command({
name: "resume",
code: `
$description[:white_check_mark: | Cancion resumida.]
$resume
`
})
bd.Command({
name: "hack",
code: `
$title[Hacking $username[$mentioned[1]]]
$color[800000]
$onlyIf[$mentioned[1]!=; **¡Tienes que mencionar a un \`USUARIO\` Valido!**]
$description[Getting IP Address.. Hacking Into Database.. Hack COMPLETE. $editIn[2s;**IP-Address**]
$randomText[0;100].$randomText[0;345;854;473;583;472;483;584].$randomText[0;168;472;372;583;593;385;482;694;574;483].$randomText[0;254;463;737;372;282;474;392;584;281;594;362;382]]
**Email-Adress**
$randomText[iloveloli@gmail.com;bruhmoment@gmail.com;c0rnisth3b3st@gmail.com;zckz0ck@gmail.com] 
**Email-password**
$randomText[sxmfg22;pifpaf44;ursoxko332;password223;billgayts443;roblox556;stivjobs5;begf0rit;hhj765]
**Discord-password**
$randomText[ilovedisc134;m98g;suxmdix25;pifpaf33;flimflam36;smgf665;hhgkl998;ssfh56;hhgk445;c0rnl0ve5r;ow052]
`
});
bd.Command({
name: "serverinfo",
code: `
$color[$random[0;999999]]
$author[Server Info]
$description[
\`$serverName[]\`

3> | **Dueño del servidor:** <@$ownerID>

<3 | **Region:** $region

3> | **Nivel de proteccion:** $serverVerificationLvl

<3 | **Numero de miembros:** $membersCount[]

3> | \`Online\`: $membersCount[online]

<3 | \`No molestar\`: $membersCount[dnd]

3> | \`Ausentes\`: $membersCount[idle]

<3 | \`Canales totales\`: $channelCount

3> | \`Numero de roles\`: $roleCount

<3 | *Invitacion del servidor*: **https://$getServerInvite[]**]
$addTimestamp
$footer[$username[];https://cdn.discordapp.com/attachments/701206442073391145/704245194656317460/1587975518546.png]
$thumbnail[$serverIcon]
`
})
bd.Variables({
suggestChannel: "Not set",
canales: "",
WChannel: 0,
WMessage: "",
LMessage: "",
LChannel: 0,
BanChannel: 0,
BanJoin: 0,
msg: 0,
nm: 0
});
bd.Command({
name: "afk",
code: `
$title[Tu **AFK** Ha sido establecido]
$color[ff2052]
$setUserVar[nm;1]
$setUserVar[msg;$message[]]
$onlyIf[$message[1]!=;Por favor menciona un mensaje de AFK en especifico.]
$onlyIf[$getUserVar[nm]==0;Ya has establecido un mensaje AFK antes, para deshabilitarlo escribe \`rx!afk off\`]
$onlyIf[$toLowercase[$message[1]]!=off;{execute:Afk-Off}]
`
});
bd.ExecutableCommand({
name: "Afk-Off",
code: `
$description[Tu mensaje AFK ha sido **eliminado** ✅]
$color[ff2052]
$setUserVar[nm;0]
`
})
bd.Command({
name: "stop-afk",
code: `
$description[Tu mensaje AFK ha sido **eliminado** ✅]
$color[ff2052]
$setUserVar[nm;0]
`
})
bd.SpaceCommand({
    name: "Mention-If-Afk",
    code: `
<@$authorID>, Este usuario esta **AFK:** $getUserVar[msg;$mentioned[1]]
$onlyIf[$getUserVar[nm;$mentioned[1]]==1;]
$onlyIf[$mentioned[1]!=;]
`
})
bd.Command({
name: "skin",
code:  `
$title[Skin de $message[1]]
$description[]
$color[288cff]
$image[https://minotar.net/body/$message[1]/400.png]
$footer[$username[$authorID]$discriminator[$authorID];$userAvatar[$authorID]]
$addTimestamp
$cooldown[10s; ¡Debes esperar 10 segundos para volver a ejecutar este comando!]
$onlyIf[$message[1]!=;¡Escribe el Nombre de un usuario existente en Minecraft!]
`});

bd.Command({
name: "set-suggest",
code: `
$setServerVar[suggestChannel;$mentionedChannels[1;no]]

✅ Establecido!
Las sugerencias del servidor seran enviadas al canal <#$mentionedChannels[1;no]>! Intenta usando \`rx!suggest\` para enviar una sugerencia.
$description[
*$username[], No añadas nuevas reacciones a la sugerencia. <#$mentionedChannels[1;no]>. Esto ayudara a mantener el chat libre de spam y limpio de reacciones molestas!*
]
$onlyIf[$message[]!=off; ]

$onlyIf[$getServerVar[suggestChannel]==Not set;❗ Las sugerencias del servidor ya estan deshabilitadas!]

$onlyIf[$mentionedChannels[1]!=;❗ Menciona el canal que quieres usar para enviar las sugerencias del servidor! Mira este ejemplo: \`rx!setsuggest #channel\`]

$onlyPerms[admin;❌ Necesitas tener el permiso de \`Administrator\` para poder usar este comando!]
$onlyIf[$message[1]!=off;{execute:Suggestions-Disabled}]
`
});
bd.Command({
name: "setsuggest-off",
code: `
$onlyPerms[admin; :x: | Necesitas tener el permiso de\`Administrator\` para poder ejecutar este comando!]

$onlyIf[$getServerVar[suggestChannel]!=Not set;:x: | Las sugerencias del servidor ya estan deshabilitadas!]

$setServerVar[suggestChannel;Not set]

$username[], Has deshabilitado las sugerencias del servidor para $serverName[$guildID]! \`rx!suggest\` no funcionara mientras este deshabilitado!
`
});
bd.Command({
name: "suggest",
code: `
$color[2c2f33]
$author[$username[]#$discriminator[$authorID]]
$title[:white_check_mark: | Sugerencia Enviada!]
$description[$message[]]
$footer[👍 = Lo Apruebas | 👎 = Lo desapruebas | white_check_mark = Añadida | x = No añadida | Sugiere la tuya propia con \`rx!suggest\`]
$addReactions[👍;👎]
$thumbnail[$userAvatar[$authorID]]
$useChannel[$getServerVar[suggestChannel]]
$onlyIf[$message[]!=;:x: | Necesitas especificar una sugerencia. Mira este ejemplo: \`rx!suggest <tu sugerencia>\`]
$onlyIf[$getServerVar[suggestChannel]!=Not set;x | Las sugerencias en este servidor estan actualmente deshabilitadas!]
`
});
bd.ExecutableCommand({
name: "Suggestions-Disabled",
code: `
$setServerVar[suggestChannel;Not set]

$username[], Has deshabilitado las sugerencias del servidor para $serverName[$guildID]! \`rx!suggest\` no funcionara mientras este deshabilitado!

$onlyIf[$getServerVar[suggestChannel]!=Not set;❌ | Las sugerencias del servidor ya estan deshabilitadas!]

$onlyPerms[admin;❌ Necesitas tener el permiso de \`Administrator\` para poder usar este comando!]
`
})
bd.Command({
name: "embed",
code: `
$footer[$username[$authorID]$discriminator[$authorID];$userAvatar[$authorID]]
$addTimestamp
$deletecommand[1ms]
$description[$message[]]
`
});
bd.Command({
name: "stats",
code: `
$title[Estadisticas para Retro XBot#0044]
$description[\`Uso de CPU:\` $cpu
\`Uso de Memoria:\` $memory**mb**
\`Tiempo Activo:\` $uptime]
`});
bd.Command({
name: "rr",
code: `
$description[Reaction Role añadido con exito | :white_check_mark:]
$suppressErrors[Hubo un error al intentar crear el role reaction...]
$reactionRoleMessage[$mentionedChannels[1];$message[2];$message[3];$mentionedRoles[1]]
$onlyIf[$message[4]!=;**Menciona el rol el cual se dara en la reaccion: \`rx!reaction-role <#Channel_ID> Message_ID Emoji Role_Mention\`**]
$onlyIf[$message[3]!=;**Escribe un emote personalizado de este servidor: \`rx!reaction-role <#Channel_ID> Message_ID Emoji Role_Mention\`**]
$onlyIf[$message[2]!=;**Menciona una ID de mensaje Valido: \`rx!reaction-role <#Channel_ID> Message_ID Emoji Role_Mention\`**]
$onlyIf[$mentionedChannels[1]!=;**Menciona un canal valido: \`rx!reaction-role <#Channel_ID> Message_ID Emoji Role_Mention\`**]
$onlyPerms[admin; No tienes permisos para ejecutar este comando...]
`
});
bd.JoinedCommand({
name: "$getServerVar[WChannel]",
code: `
$description[$getServerVar[WMessage]]
$thumbnail[$userAvatar[$authorID]]
$title[¡Bienvenido! ]
$addField[Nombre:;<@$authorID>]
$addField[ID:;$authorID]
$addField[Cuenta creada:;$creationDate[$authorID] (A/L/Z)]
$addField[Miembros:;$membersCount[]]
$image[https://media.discordapp.net/attachments/684213689288622145/709065355989090354/retro_x.gif]
$color[ff2052]
$useChannel[$getServerVar[WChannel]]
`
})
bd.onJoined()
bd.ExecutableCommand({
name: "Join-Channel",
code: `
$color[ff2052]
$setServerVar[WChannel;$mentionedChannels[1]]
$title[Canal Establecido]
$description[Canal de bienvenida cambiado de <#$getServerVar[WChannel]> a <#$mentionedChannels[1]>]
$onlyIf[$mentionedChannels[1]!=; **¡Escribe un canal valido!** Uso correcto: \`rx!set-join-channel #Channel-Name\`
$onlyAdmin[<@$authorID>, No tienes permisos para ejecutar este comando.]]
`
})
bd.Command({
name: "set-join-channel",
code: `
$color[ff2052]
$setServerVar[WChannel;$mentionedChannels[1]]
$title[Canal Establecido]
$description[Canal de bienvenida cambiado de <#$getServerVar[WChannel]> a <#$mentionedChannels[1]>]
$onlyIf[$mentionedChannels[1]!=; **¡Escribe un canal valido!** Uso correcto: \`rx!set-join-channel #Channel-Name\`
$onlyAdmin[<@$authorID>, No tienes permisos para ejecutar este comando.]]
`})
bd.ExecutableCommand({
name: "Join-Message",
code: `
$setServerVar[WMessage;$message[]]
$title[Mensaje Actualizado]
$description[Mensaje de bienvenida cambiado de \`$getServerVar[WMessage]\` a \`$message[]\`]
$onlyPerms[admin; <@$authorID>, No tienes permisos para ejecutar este comando.]
`
})
bd.Command({
name: "set-join-message",
code: `
$setServerVar[WMessage;$message[]]
$title[Mensaje Actualizado]
$description[Mensaje de bienvenida cambiado de \`$getServerVar[WMessage]\` a \`$message[]\`]
$onlyPerms[admin; <@$authorID>, No tienes permisos para ejecutar este comando.]
`})
bd.LeaveCommand({
name: "$getServerVar[LChannel]",
code: `
$description[$getServerVar[LMessage]]
$thumbnail[$userAvatar[$authorID]]
$title[¡Esperamos te vaya bien!]
$addField[Nombre:;<@$authorID>]
$addField[ID:;$authorID]
$addField[Cuenta Creada:;$creationDate[$authorID] (A/L/Z)]
$addField[Miembros:;$membersCount[]]
$image[https://cdn.discordapp.com/attachments/704700738286256149/706934959889448971/LongTiredIberianlynx-size_restricted.gif]
$color[ff2052]
$useChannel[$getServerVar[LChannel]]
`
})
bd.onLeave()
bd.ExecutableCommand({
name: "Leave-Channel",
code: `
$color[ff2052]
$setServerVar[LChannel;$mentionedChannels[1]]
$title[Canal Establecido]
$description[Canal de despedida cambiado de <#$getServerVar[WChannel]> a <#$mentionedChannels[1]>]
$onlyIf[$mentionedChannels[1]!=; **¡Escribe un canal valido!** Uso correcto: \`rx!set-join-channel #Channel-Name\`
$onlyPerms[admin; <@$authorID>, No tienes permisos para ejecutar este comando.]]
`
})
bd.Command({
name: "set-leave-channel",
code: `
$color[ff2052]
$setServerVar[LChannel;$mentionedChannels[1]]
$title[Canal Establecido]
$description[Canal de despedida cambiado de <#$getServerVar[WChannel]> a <#$mentionedChannels[1]>]
$onlyIf[$mentionedChannels[1]!=; **¡Escribe un canal valido!** Uso correcto: \`rx!set-join-channel #Channel-Name\`
$onlyPerms[admin; <@$authorID>, No tienes permisos para ejecutar este comando.]]
`
})
bd.ExecutableCommand({
name: "Leave-Message",
code: `
$setServerVar[LMessage;$message[]]
$title[Mensaje Actualizado]
$description[Mensaje de bienvenida cambiado de \`$getServerVar[LMessage]\` a \`$message[]\`]
$onlyPerms[admin; <@$authorID>, No tienes permisos para ejecutar este comando.]
`
})
bd.Command({
name: "set-leave-message",
code: `
$setServerVar[LMessage;$message[]]
$title[Mensaje Actualizado]
$description[Mensaje de despedida cambiado de \`$getServerVar[LMessage]\` a \`$message[]\`]
$onlyPerms[admin; <@$authorID>, No tienes permisos para ejecutar este comando.]
`})
bd.Command({
name: "massr-add",
code: `
$massRole[add;$mentionedRoles[1]]
$description[:white_check_mark: | El rol <@&$mentionedRoles[1]> esta siendo añadido a todos los usuarios del servidor.[1]]
$color[$random[0;947184]]
$footer[$username[$authorID]$discriminator[$authorID]]
$addTimestamp
$onlyIf[$mentionedRoles[1]!=; Necesitas mencionar un rol valido: \`Uso: rx!massr-add <@&RoleID>\`]
$onlyPerms[admin; Necesitas el permiso \`ADMINISTRATOR\` para poder usar este comando.]
`});
bd.Command({
name: "massr-remove",
code: `
$description[:white_check_mark: | El rol <@&$mentionedRoles[1]> esta siendo removido de todos los usuarios del servidor.[1]]
$color[$random[0;947184]]
$footer[$username[$authorID]$discriminator[$authorID]]
$addTimestamp
$massRole[remove;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=; Necesitas mencionar un rol valido: \`Uso: rx!massr-remove <@&RoleID>\`]
$onlyPerms[admin; Necesitas el permiso \`ADMINISTRATOR\` para poder usar este comando.]
`})
bd.SpaceCommand({
name: "TroloHijodePuta",
code: `
<@$authorID>, Para de pingear trolo hijo de puta.
$onlyIfMessageContains[$message[];@everyone;]
`})
bd.JoinedCommand({
name: "$getServerVar[BanChannel]",
code: `
$username[$authorID]$discriminator[$authorID] intento entrar, pero lo banee porq es re joto ;).
$ban[$authorID; por raider, ojala se suicide el hijo de puta]
$onlyForUsers[$getServerVar[BanJoin];]
`
})
bd.onJoined()
bd.ExecutableCommand({
name: "BanChannel",
code: `
$description[Ahora cada que $username[$mentioned[1]]$discriminator[$mentioned[1]entre lo anunciare en <#$mentionedChannels[1]>]
$footer[Este usuario sera baneado inmediatamente.]
$setServerVar[BanChannel;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=; Menciona un canal valido.]
`})
bd.Command({
name: "userban-ch",
code: `
$description[Ahora el canal de anuncios para cuando $username[$getServerVar[BanJoin]]#$discriminator[$getServerVar[BanJoin]] entre sera <#$mentionedChannels[1]>]
$footer[Canal de Avisos.]
$setServerVar[BanChannel;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=; Menciona un canal valido.]
`})
bd.ExecutableCommand({
name: "BanUser",
code: `
$description[El usuario $username[$message[1]#$discriminator[$message[1] sera baneado cada que intente entrar al servidor]
$footer[Este usuario sera baneado inmediatamente.]
$setServerVar[BanJoin;$message[1]]
$onlyIf[$userExists[$mentioned[1]] $userExists[$message[]]!=false false; Uso correcto: \`rx!userban User_ID\`]
`})
bd.Command({
name: "userban",
code: `
$description[Ahora cada que $username[$message[1]]#$discriminator[$message[1]] entre sera baneado inmediatamente.]
$footer[Este usuario sera baneado inmediatamente.]
$setServerVar[BanJoin;$message[1]]
$onlyIf[$userExists[$mentioned[1]] $userExists[$message[]]!=false false; Uso correcto: \`rx!userban User_ID\`]
`})
