var d=new Date();
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

var n = weekday[d.getDay()];
  
  switch(n)
{
  case "Monday":
     Pebble.showSimpleNotificationOnPebble( n ,'Regular Schedule');
     break;
  case "Tuesday":
     Pebble.showSimpleNotificationOnPebble( n ,'Explorer Schedule');
     break;
  case "Wednesday": 
     Pebble.showSimpleNotificationOnPebble( n ,'Block Schedule');
     break;
  case "Thursday":
     Pebble.showSimpleNotificationOnPebble( n ,'Block Schedule');
     break;
  case "Friday":
     Pebble.showSimpleNotificationOnPebble( n ,'Block Schedule');
     break;   
  default:
     break;
}
  
  

function getTime() {
var dTime = new Date();
var hours = dTime.getHours();
var minute = dTime.getMinutes();
var period = "AM";
if (hours > 12) {
period = "PM"
}
else {
period = "AM";
}
hours = ((hours > 12) ? hours - 12 : hours)
time = hours + ":" + minute + " " + period

}

