(function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
})();

var now = new Date();

var day = now.getDayName();

if (day = "Monday" );
  { 
  simply.title( day ,
  'Regular Schedule');
  }
if (day = "Tuesday");
  { 
  simply.title( day ,
  'Explorer Schedule');
  }
if (day = "Wednesday");
  { 
  simply.title( day ,
  'Block Schedule');
  }
if (day = "Thursday");
  { 
  simply.title( day ,
  'Block Schedule');
  }
if (day = "Friday");
  { 
  simply.title( day ,
  'Regular Schedule');
  }
  
