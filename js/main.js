const params = BotChat.queryParams(location.search);
var avatar = '"img/' + params['avatar'] + '"';
    document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector(".wc-header span").innerHTML = params['botname'];
    document.querySelector(".wc-shellinput").placeholder = params['placeholder'];
    document.querySelector(".wc-header span").style.background = 'url(' + avatar + ') no-repeat left 15px';
    document.querySelector(".wc-header span").style.backgroundSize = '30px 30px';


    var element = document.createElement("a");
    var createAText = document.createTextNode("By Bot4App");
    element.setAttribute('href', "https://bots4app.azurewebsites.net/");
    element.setAttribute('target', "_blank");
    element.appendChild(createAText);

    element.className = 'power';
   // element.appendChild(document.createTextNode('<a href="" target="_blank">By Chat4App </a>'));
    document.querySelector(".wc-header").appendChild(element);
});

//Load css
var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
var customcss = 'css/' + params['css'] + '.css';

link.id = "cssId";
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = customcss;
link.media = 'all';
head.appendChild(link);

const user = {
    id: params['userid'] || 'userid',
    name: params['username'] || 'username'
};


const bot = {
    id: params['botid'] || 'botid',
    name: params['botname'] || 'botname'
};

const botConnection = new BotChat.DirectLine({
    //domain: 'brazilsouth.api.cognitive.microsoft.com',
    secret: params['s'],
    //token: params['t'] || '',
    webSocket: true
});

BotChat.App({
    botConnection: botConnection,
    user: user,
    bot: bot,
    resize: 'detect',
    sendTyping: true
    //locale: 'pt-BR'
}, document.getElementById("chatBot"));
 

// function postButtonMessage() {
//     botConnection
//       .postActivity({
//         from: { id: 'me' },
//         name: 'buttonClicked',
//         type: 'event',
//         value: 'oi'
//       })
//       .subscribe(function (id) {
//         console.log('"buttonClicked" sent');
//       });
//   };

//   postButtonMessage();