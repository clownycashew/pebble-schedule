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

if (n = 1);
  { 
  Pebble.showSimpleNotificationOnPebble( n ,
  'Regular Schedule');
  }
if (n = 2);
  { 
  Pebble.showSimpleNotificationOnPebble( n ,
  'Explorer Schedule');
  }
if (n = 3);
  { 
  Pebble.showSimpleNotificationOnPebble( n ,
  'Block Schedule');
  }
if (n = 4);
  { 
  Pebble.showSimpleNotificationOnPebble( n ,
  'Block Schedule');
  }
if (n = 5);
  { 
  Pebble.showSimpleNotificationOnPebble( n ,
  'Regular Schedule');
  }
  
