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

simply.title( n );

if (n = "Monday");
  { 
  simply.title( n ,
  'Regular Schedule');
  }
else if (n = "Tuesday");
  { 
  simply.title( n ,
  'Explorer Schedule');
  }
else if (n = "Wednesday");
  { 
  simply.title( n ,
  'Block Schedule');
  }
else if (n = "Thursday");
  { 
  simply.title( n ,
  'Block Schedule');
  }
else if (n = "Friday");
  { 
  simply.title( n ,
  'Regular Schedule');
  }
  
