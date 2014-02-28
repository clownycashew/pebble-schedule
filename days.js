(function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    Date.prototype.getMonthName = function() {
        return months[ this.getMonth() ];
    };
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
})();

var now = new Date();

var day = now.getDayName();

if (day = "Monday" );
  { 
  simply.title( n ,
  'Regular Schedule');
  }
if (day = "Tuesday");
  { 
  simply.title( n ,
  'Explorer Schedule');
  }
if (day = "Wednesday");
  { 
  simply.title( n ,
  'Block Schedule');
  }
if (day = "Thursday");
  { 
  simply.title( n ,
  'Block Schedule');
  }
if (day = "Friday");
  { 
  simply.title( n ,
  'Regular Schedule');
  }
  
