var date = new Date();
var day = date.getDay();
var hour = date.getHours();
var min = date.getMinutes();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementById("small").innerHTML = hour +" : "+min
document.getElementById("time").innerHTML = hour +" : "+min
document.getElementById("day").innerHTML = daylist[day]