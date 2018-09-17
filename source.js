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
  })();

// (function () {
//   var day = $('.day').text()
//   if (day === currentDay) {
//   console.log(currentDay)
//   } else {
//   console.log(day)
//   }
// })();

(function () {
    var zip = '78756'
    var country = 'us'
    var APIKEY = '9c9fef8066d1cc44c8414b3be1666862'
    $.ajax({
    url:'https://api.openweathermap.org/data/2.5/forecast/daily?zip=' + zip + ',' + country + '&APPID=' + APIKEY,
    }).done(function(data) {
      console.log(data);
      var friday = 0
      var saturday = 1
      var sunday = 2
      var monday = 3
      var tuesday = 4
      var wednesday = 5
      var thursday = 6
    })
})();

(function () {
  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth();
  curr_month++;
  var curr_year = d.getFullYear();
  date = (curr_date + "-" + curr_month + "-" + curr_year);
})();

console.log(date)

$('.day').click(function(e) {
  e.preventDefault()
  $('.currentDay').removeClass('currentDay');
  $(this).addClass('currentDay');
  console.log(this)
});







});



