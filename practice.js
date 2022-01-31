document.getElementById("name").innerHTML = "Sultan";
document.getElementById("group").innerHTML = "CS-2122N";
document.getElementById("year").innerHTML="Year: 2022";
document.getElementById("weekday").innerHTML="Today is : Monday"
document.getElementById("day").innerHTML="Date: 31";
document.getElementById("month").innerHTML="Month: January";
document.getElementById("time").innerHTML="Current time is : 5 PM : 17 : 48";
document.getElementById("left").innerHTML="881 days left until the freedom!";
function Multiply(){
  var a=document.getElementById("firstnum").value;
  var b=document.getElementById("secondnum").value;
  document.getElementById("res").innerHTML=a*b;
}
function Divide(){
  var a=document.getElementById("firstnum").value;
  var b=document.getElementById("secondnum").value;
  document.getElementById("res").innerHTML=a/b;
}
