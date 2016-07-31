$(document).ready(
  function ()
  {
    loadWeather();
  }
)

function loadWeather()
{
  $.ajax({
    url: 'http://api.imikay.com/weather',
    dataType: 'json',
    success: function (response) {
      setWeather(response);
    }
  });
}

function setWeather(data)
{
  var icon = {
    "clear-day": 'wi-day-sunny',
    "clear-night": 'wi-night-clear',
    rain: 'wi-rain',
    snow: 'wi-snow',
    sleet: 'wi-sleet',
    wind: 'wi-windy',
    fog: 'wi-fog',
    cloudy: 'wi-cloudy',
    "partly-cloudy-day": 'wi-day-cloudy',
    "partly-cloudy-night": 'wi-night-alt-cloudy'
  };

  $('.weather-icon').addClass(icon[data.weather]);
  $('.temperature').text(data.temperature);
}
