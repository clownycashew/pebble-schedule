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
     simply.setText({
  title: 'Regular Schedule!',
  body: 'All classes',
  }, true);
     break;
  case "Tuesday":
     simply.setText({
  title: 'Explorer Schedule!',
  body: 'All classes plus Explorer period',
  }, true);
     break;
  case "Wednesday": 
     simply.setText({
  title: 'Block Schedule!',
  body: 'English, Graphics, Spanish',
  }, true);
     break;
  case "Thursday":
     simply.setText({
  title: 'Block Schedule!',
  body: 'APUSH, APES, Precalc',
  }, true);
     break;
  case "Friday":
     simply.setText({
  title: 'Regular Schedule!',
  body: 'All classes',
  }, true);
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

