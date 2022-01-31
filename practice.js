document.getElementById("name").innerHTML = "Sultan";
document.getElementById("group").innerHTML = "CS-2122N";
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
  var now=new Date();
  document.getElementById("year").innerHTML="Year : "+now.getFullYear();
  switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
  document.getElementById("weekday").innerHTML="Today is : "+day;
  switch (new Date().getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
     month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month="August";
    break;
  case 8:
    month="September";
    break;
  case 9:
    month="October";
    break;
  case 10:
    month="November";
    break;
  case 11:
    month="December";
}
    document.getElementById("month").innerHTML="Date : "+month;
  document.getElementById("day").innerHTML="Date : "+now.getDate();
  document.getElementById("time").innerHTML="Current time is : "+now.getHours()+" : "+now.getMinutes()+" : "+now.getSeconds();
