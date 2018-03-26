
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

 
        function Opneva() {
            height = 500;
            width = 400;
            t = window.innerHeight - height;
            l = window.innerWidth - width - 10;
            window.open('https://bots4app.azurewebsites.net/Chat.html?appid=0012ss22sfs23333&avatar=Bot4App.png&botname=Ann - Agente Virtual&placeholder=Digite aqui sua mensagem&userid=Você&s=W1taz4am4SQ.cwA.tFs.j0hMo-Fc_3Q1XpiWkoexCLgU6zDW81BLIT7WnlUb4uc&css=botconfig ', '', 'height=' + height + ', width=' + width + ', left=' + l + ', top=' + t);
        }

        document.querySelector("#ebook").style.visibility = "hidden";
        document.querySelector("#msgnod").style.visibility = "hidden";
        document.querySelector("#msgd").style.visibility = "hidden";
        


        var download = getParameterByName('d');
        if (download != null)
        {
            document.querySelector("#ebook").style.visibility = "visible";
            document.querySelector("#msgd").style.visibility = "visible";
        }else
        {
            document.querySelector("#msgnod").style.visibility = "visible";
            
        }