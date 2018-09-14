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
    })
};



