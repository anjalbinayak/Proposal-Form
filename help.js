

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


var proposal = "<div class='anjal'>Hi <code>" + Ayush + "</code>. You are the blessing to  me. I dont care about the future , I just want to be with you in all our Present . I want to spend my whole life with you . I promise i will always keep you happy and smiling as you do to me . I promise to be there with You, Beside You in all the Ups and Downs . Always give you a warm hug when you feel low ,Support You when Whole world is against You . I Am not only saying . I actually Mean it. Will You spend your life with Me "+ Ayush + "?</div>";
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth' 
  });
  
 document.getElementById('result').innerHTML = proposal; 
 var nxt = document.createElement("input");
 nxt.setAttribute("placeholder","Will You spend your life with Me?");
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
if(document.getElementById('age').value > 25 ){
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
     document.getElementById("result").innerHTML = "Lets Promise to be Together Forever and Love eachother more and more";
 }

 else {
     alert("Okay. Stay happy");
 }
}



