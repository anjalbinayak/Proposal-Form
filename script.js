

var btn = document.getElementById("btn_start");
var opt = document.getElementById('opt');
btn.onclick = function(){
var i = 0;
var nameInput = document.getElementById("name");
var name = document.getElementById("name").value;

var ageInput = document.getElementById("age");
var age = document.getElementById("age").value;

var favPlaceInput = document.getElementById("placefav");
var favplace = document.getElementById("placefav").value;

var Opt = document.getElementById("opt");

if(name!="" || age!="" || opt!=""){
nameInput.setAttribute("disabled","disabled");
ageInput.setAttribute('disabled',"disabled");
favPlaceInput.setAttribute("disabled","disabled");
Opt.setAttribute("disabled","disabled");


var proposal = "<div class='anjal'>Hi <code>" + name + "</code>. You are the one i think who is suitable for  me. I dont know whats your past , I just want to be your future . I want to spend my whole life with you . I promise i will always keep you happy and smiling . I can't promise you to provide expensive Jwellieries and luxuries house . But I promise i will always make you smile , Always give you a warm hug when you feel low ,Support You when Whole world is against You . I Am not only saying . I actually Mean it. Will You marry Me "+ name + "?</div>";
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth' 
  });
  
 document.getElementById('result').innerHTML = proposal; 
 var nxt = document.createElement("input");
 nxt.setAttribute("placeholder","Will You Marry Me?");
 nxt.setAttribute("class","form-control");
 nxt.setAttribute("id","ans1");
nxtbtn = document.createElement("BUTTON");
nxtbtn.setAttribute("class","btn btn-succes");
nxtbtn.setAttribute("onclick","check()")
nxtbtn.setAttribute("value","Click");
nxtbtn.setAttribute("id","ans2");
text22 = document.createTextNode("Click");
nxtbtn.appendChild(text22);
document.getElementById("result").appendChild(nxt);
document.getElementById("result").appendChild(nxtbtn);

} 






}
opt.onkeyup= abc;


function abc(){
var val = document.getElementById('opt').value;
if(val === 'Yes' || val==="yes" || val ==="yEs" || val==="YeS" || val==="yEs"){
    btn.removeAttribute("class");
    btn.setAttribute("class","btn btn-danger");
   btn.setAttribute("disabled","disabled");
   btn.style.cursor = "not-allowed";
   btn.innerHTML = "You are Taken.You cannot register";
}
else {
    cba();
}
if(document.getElementById('age').value > 17 ){
    alert("You are Not Suitable");
    document.getElementById('age').value = "";
}
}

function cba(){
    btn.removeAttribute("class");
    btn.setAttribute("class","btn btn-success");
   btn.setAttribute("enabled","enabled");
   btn.style.cursor = "text";
   btn.innerHTML = "Press Here";


}
setInterval(abc,500);
 function check(){
     if(document.getElementById("ans1").value==="Yes"){
     
document.getElementById("ans1").style.display="none";
document.getElementById("ans2").style.display ="none";
     document.getElementById("result").innerHTML = "Lets get Married . Happy Married Life To Us";
 }

 else {
     alert("Okay. Stay happy");
 }
}



