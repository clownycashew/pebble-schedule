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

if ( n == "Monday" );
  { 
  Pebble.showSimpleNotificationOnPebble( n ,'Regular Schedule');
  }
else if ( n == "Tuesday");
  { 
  Pebble.showSimpleNotificationOnPebble( n ,'Explorer Schedule');
  }
if ( n == "Wednesday");
  { 
  Pebble.showSimpleNotificationOnPebble( n ,'Block Schedule');
  }
else if ( n == "Thursday");
  { 
  Pebble.showSimpleNotificationOnPebble( n ,'Block Schedule');
  }
if ( n == "Friday");
  {
  Pebble.showSimpleNotificationOnPebble( n ,'Regular Schedule');
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
return hours + ":" + minute + " " + period
}


