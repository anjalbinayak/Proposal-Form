var btn = document.getElementById("code_get");
var btncopy = document.getElementById("copy_code");
var select = document.getElementById("style_of_icon");
select.onchange = selectchange;
btncopy.onclick = copycode;

btn.onclick = checkdata;

function checkdata(){
var fb = document.getElementById('fb').value;
var tw = document.getElementById('tw').value;
var ins = document.getElementById("ins").value;
var yt = document.getElementById("yt").value;
var output = document.getElementById("output_code");
var ico = document.getElementById('style_of_icon').value;

var script2 = "<script src='icons.js'></script>";
var script1 =  "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>";
var script3 = "<script> var fb =\'"+fb+"\';var tw =\'"+tw+"\';var ins=\'"+ins+"\';var yt=\'"+yt+"\'; var sty = \'"+ico+"\';binayak(fb,tw,ins,yt,sty);</script>";
output.value =script1+script2+script3;




}

function selectchange(){
var styleoficon = document.getElementById("style_of_icon").value;

switch(styleoficon){
case 'no': 
document.getElementById("ro").style.display="none";
document.getElementById("co").style.display="none";
document.getElementById("fl").style.display="none";
document.getElementById("fc").style.display="none";
document.getElementById("rc").style.display="none";
document.getElementById('no').style.display="block";  break; 

case 'ro':
document.getElementById("ro").style.display="block";
document.getElementById("co").style.display="none";
document.getElementById("fl").style.display="none";
document.getElementById("fc").style.display="none";
document.getElementById("rc").style.display="none";
document.getElementById('no').style.display="none"; break; 

case 'co': 
document.getElementById("ro").style.display="none";
document.getElementById("rc").style.display="none";
document.getElementById("fl").style.display="none";
document.getElementById("fc").style.display="none";
document.getElementById("no").style.display="none";
document.getElementById('co').style.display="block"; break;

case 'fl': 
document.getElementById("ro").style.display="none";
document.getElementById("co").style.display="none";
document.getElementById("no").style.display="none";
document.getElementById("fc").style.display="none";
document.getElementById("rc").style.display="none";
document.getElementById('fl').style.display="block"; break; 

case 'fc' :
document.getElementById("ro").style.display="none";
document.getElementById("co").style.display="none";
document.getElementById("fl").style.display="none";
document.getElementById("no").style.display="none";
document.getElementById("rc").style.display="none";
 document.getElementById('fc').style.display="block"; break; 

case 'rc' :
document.getElementById("ro").style.display="none";
document.getElementById("co").style.display="none";
document.getElementById("fl").style.display="none";
document.getElementById("fc").style.display="none";
document.getElementById("no").style.display="none";
document.getElementById('rc').style.display="block"; break; 

default: alert("Invaild Choice");break; 

}


}



function copycode(){
    var output = document.getElementById("output_code");
  output.select();
    document.execCommand("copy");
    alert("Code Copied To clipboard");

}


