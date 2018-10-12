$('head').append('<link rel="stylesheet" href="https://github.com/Anjalbinayak43/binayak/edit/master/icon.css">');
$('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">');
$('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');

function binayak(fb,tw,ins,yt,st){
fblink = document.createElement('a');
fblink.setAttribute("href",fb);
fblink.setAttribute("target","_blank");
fbico = document.createElement("i");

twlink = document.createElement("a");
twlink.setAttribute("href",tw);
twlink.setAttribute("target","_blank");
twico = document.createElement("i");

inslink = document.createElement("a");
inslink.setAttribute("target","_blank");
inslink.setAttribute("href",ins);
insico = document.createElement("i");

ytlink = document.createElement("a");
ytlink.setAttribute("href",yt);
ytlink.setAttribute("target","_blank");
ytico = document.createElement("i");

switch(st){
case "no": 
fbico.setAttribute("class","ga fa fa-facebook");
fbico.setAttribute("style","color:#3B5998;");
ytico.setAttribute("class","ga fa fa-youtube");
insico.setAttribute("class","ga fa fa-instagram ");
twico.setAttribute("class","ga fa fa-twitter");
break;

case "ro":
fbico.setAttribute("class"," ga ga-rounded fa fa-facebook");
ytico.setAttribute("class","ga ga-rounded fa fa-youtube");
insico.setAttribute("class","ga ga-rounded fa fa-instagram ");
twico.setAttribute("class","ga ga-rounded fa fa-twitter");
break;

case "co":
fbico.setAttribute("class","ga ga-colorful facebook fa fa-facebook ");
ytico.setAttribute("class","ga ga-colorful youtube fa fa-youtube");
insico.setAttribute("class"," ga ga-colorful instagram fa fa-instagram");
twico.setAttribute("class","ga ga-colorful twitter fa fa-twitter");
break;
 
case "fl":
fbico.setAttribute("class"," ga ga-flat fa fa-facebook");
ytico.setAttribute("class","ga ga-flat fa fa-youtube");
insico.setAttribute("class"," ga ga-flat fa fa-instagram");
twico.setAttribute("class","ga ga-flat fa fa-twitter");
break;

case "fc":
fbico.setAttribute("class"," ga ga-flat-colorful facebook fa fa-facebook");
ytico.setAttribute("class","ga ga-flat-colorful youtube fa fa-youtube");
insico.setAttribute("class","ga ga-flat-colorful instagram fa fa-instagram");
twico.setAttribute("class","ga ga-flat-colorful twitter fa fa-twitter");
break;


case "rc":

fbico.setAttribute("class"," ga ga-rounded-colorful facebook fa fa-facebook");
ytico.setAttribute("class","ga ga-rounded-colorful youtube fa fa-youtube");
insico.setAttribute("class","ga ga-rounded-colorful instagram fa fa-instagram ");
twico.setAttribute("class","ga ga-rounded-colorful twitter fa fa-twitter");
break;

}

fblink.appendChild(fbico);
twlink.appendChild(twico);
ytlink.appendChild(ytico);
inslink.appendChild(insico);

document.body.appendChild(fblink);
document.body.appendChild(twlink);
document.body.appendChild(ytlink);
document.body.appendChild(inslink);

}


