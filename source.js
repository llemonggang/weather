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
  console.log(currentDay)
  })();

(function (data) {
    var zip = '78756'
    var country = 'us'
    var APIKEY = '9c9fef8066d1cc44c8414b3be1666862'
    $.ajax({
    url:'https://api.openweathermap.org/data/2.5/forecast/daily?zip=' + zip + ',' + country + '&APPID=' + APIKEY,
    }).done(function(data) {
      var weatherData = [
        var description = [
          data.list[0].weather[0].description,
          data.list[1].weather[0].description,
          data.list[2].weather[0].description,
          data.list[3].weather[0].description,
          data.list[4].weather[0].description,
          data.list[5].weather[0].description,
          data.list[6].weather[0].description
        ],
        var weekdays = [
          data.list[0],
          data.list[1],
          data.list[2],
          data.list[3],
          data.list[4],
          data.list[5],
          data.list[6]
        ],
        var currentTemp = [
          data.list[0].temp,
          data.list[1].temp,
          data.list[2].temp,
          data.list[3].temp,
          data.list[4].temp,
          data.list[5].temp,
          data.list[6].temp
        ],
        var dayTemp = [
          currentTemp[0].day,
          currentTemp[1].day,
          currentTemp[2].day,
          currentTemp[3].day,
          currentTemp[4].day,
          currentTemp[5].day,
          currentTemp[6].day
        ],
        var eveTemp = [
          currentTemp[0].eve,
          currentTemp[1].eve,
          currentTemp[2].eve,
          currentTemp[3].eve,
          currentTemp[4].eve,
          currentTemp[5].eve,
          currentTemp[6].eve
        ],
        var mornTemp = [
          currentTemp[0].morn,
          currentTemp[1].morn,
          currentTemp[2].morn,
          currentTemp[3].morn,
          currentTemp[4].morn,
          currentTemp[5].morn,
          currentTemp[6].morn
        ],
        var nightTemp = [
          currentTemp[0].night,
          currentTemp[1].night,
          currentTemp[2].night,
          currentTemp[3].night,
          currentTemp[4].night,
          currentTemp[5].night,
          currentTemp[6].night
        ],
        var pressure = [
          data.list[0].pressure,
          data.list[1].pressure,
          data.list[2].pressure,
          data.list[3].pressure,
          data.list[4].pressure,
          data.list[5].pressure,
          data.list[6].pressure
        ],
        var humidity = [
          data.list[0].humidity,
          data.list[1].humidity,
          data.list[2].humidity,
          data.list[3].humidity,
          data.list[4].humidity,
          data.list[5].humidity,
          data.list[6].humidity
        ]
      ];

      console.log(weatherData[0][0])

      if (currentDay === 'Friday') {
        return $('#friday').addClass('currentDay')
      } else if (currentDay === 'Saturday') {
        return $('#saturday').addClass('currentDay')
      } else if (currentDay === 'Sunday') {
        return $('#sunday').addClass('currentDay')
      } else if (currentDay === 'Monday') {
        return $('#monday').addClass('currentDay')
      } else if (currentDay === 'Tuesday') {
        return $('#tuesday').addClass('currentDay')
      } else if (currentDay === 'Wednesday') {
        return $('#wednesday').addClass('currentDay')
      } else {
        return $('#thursday').addClass('currentDay')
      }
  });
})();

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



