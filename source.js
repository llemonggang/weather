$( document ).ready(function() {
(function () {
  var days = [
    'Sunday', 
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
    ];
  d = new Date(); 
  x = d.getDay();
  currentDay = (days[x]);
  console.log(currentDay
  })();


(function (data) {
    var zip = '78756'
    var country = 'us'
    var APIKEY = '9c9fef8066d1cc44c8414b3be1666862'
    $.ajax({
    url:'https://api.openweathermap.org/data/2.5/forecast/daily?zip=' + zip + ',' + country + '&APPID=' + APIKEY,
    }).done(function(data) {
      var weekdays = [
        data.list[0],
        data.list[1],
        data.list[2],
        data.list[3],
        data.list[4],
        data.list[5],
        data.list[6]
      ];
      console.log(weekdays)

      if (currentDay === 'Friday') {
        console.log(0);
      } else if (currentDay === 'Saturday') {
        console.log(1);
      } else if (currentDay === 'Sunday') {
        console.log(2);
      } else if (currentDay === 'Monday') {
        console.log(3);
      } else if (currentDay === 'Tuesday') {
        console.log(4);
      } else if (currentDay === 'Wednesday') {
        console.log(5);
      } else {
        console.log(6);
      }
  });
})();

// find currentDay string and match id, then set currentDay class

// currentDay when selected
$('.day').click(function(e) {
  e.preventDefault()
  $('.currentDay').removeClass('currentDay');
  $(this).addClass('currentDay');
});

// to find date
(function () {
  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth();
  curr_month++;
  var curr_year = d.getFullYear();
  date = (curr_date + "-" + curr_month + "-" + curr_year);
})();








});



