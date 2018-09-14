$( document ).ready(function() {
    $('.container').show()
      callApi()
  });


function callApi() {
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
      console.log(saturday);
    })
};

// https://api.openweathermap.org/data/2.5/forecast/daily?zip=78756,us&APPID=9c9fef8066d1cc44c8414b3be1666862

