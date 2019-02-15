const url = 'https://icanhazdadjoke.com/';
// const url ='http://b2cf5539.proxy.webhookapp.com/';

const exResponse = 
{
	"id": "UKuXvzAlOuc",
	"joke": "I was going to learn how to juggle, but I didn't have the..",
	"status": 200
}

$(document).ready(() =>
{
  console.log('here')
  let headers = new Headers(
  { 
    'Accept': 'application/json', 
    // 'X-User-Agent': 'Dad Jokes (https://github.com/nathanielw9/dadjokes)' 
  });
  fetch('', 
    {
      headers: headers,
    })
  // .then((response) => response.json())
  .then((responseJson) => 
  {
    console.log(exResponse.joke)
    $('#random-joke').text(exResponse.joke);
    // document.getElementById('random-joke').innerHTML = exResponse.joke
    console.log(responseJson)
  })
  .catch((error) =>
  {
    console.error(error)
  });
});

// window.onload = function()
// {
//   console.log('here')
//   let headers = new Headers(
//   { 
//     'Accept': 'application/json', 
//     // 'X-User-Agent': 'Dad Jokes (https://github.com/nathanielw9/dadjokes)' 
//   });
//   fetch('', 
//     {
//       headers: headers,
//     })
//   // .then((response) => response.json())
//   .then((responseJson) => 
//   {
//     console.log(exResponse.joke)
//     $('#randomjoke').innerHTML = exResponse.joke;
//     // document.getElementById('random-joke').innerHTML = exResponse.joke
//     console.log(responseJson)
//   })
//   .catch((error) =>
//   {
//     console.error(error)
//   });


//   document.getElementById("weatherSubmit").addEventListener("click", function(event) {
//     event.preventDefault();
//     const value = document.getElementById("weatherInput").value;
//     if (value === "") return;

//     const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=" + APIKey;
//     fetch(url)
//     .then(function(response) 
//     {
//       return response.json();
//     })
//     .then(function(json) 
//     {	
//       let results = "";
//       results += '<div class="spacer"></div>';
//       results += '<div class="grid-container">';

//       results += '<div class="grid-item">';
//       results += '<h2>Weather in ' + json.name + "</h2>";
//       results += '<div id="weather">';
//       for (let i=0; i < json.weather.length; i++) 
//       {
//         results += ('<div id="weather-icon">'
//               + '<img src="http://openweathermap.org/img/w/' 
//               + json.weather[i].icon + '.png"/>'
//               +'</div>');
//       }
//       results += '<h2 id="weather-temp">' + json.main.temp + " &deg;F</h2>";
//       results += "<p>";
//       for (let i=0; i < json.weather.length; i++) 
//       {
//         results += json.weather[i].description;
//         if (i !== json.weather.length - 1)
//           results += ", ";
//       }
//       results += "</p> </div>";
//       results += '<p>Max Temp:' + '  ' + json.main.temp_max + ' &deg;F</p>';
//       results += '<p>Min Temp:' + '  ' + json.main.temp_min + ' &deg;F</p>';
//       results += '<p>Pressure:' + '  ' + json.main.pressure + ' hPa</p>';
//       results += '<p>Humidity:' + '  ' + json.main.humidity + '%</p>';
//       results += '<p>Wind speed:' + '  ' + json.wind.speed + ' MPH</p>';
//       results += '<p>Cloudiness:' + '  ' + json.clouds.all + '%</p><br>';
//       results += '</div>'; //end grid-item

//       results += '<div class="grid-item">';
//       results += '<h2>Other information about ' + json.name + '</h2>';
//       results += '<p>Country: ' + json.sys.country + '</p>';
//       results += '<p>Latitude: ' + json.coord.lat + '</p>';
//       results += '<p>Longitude: ' + json.coord.lon + '</p>';
//       results += '<p>Sunrise: ' + moment.unix(json.sys.sunrise).format('HH:mm:ss a') + '</p>';
//       results += '<p>Sunset: ' + moment.unix(json.sys.sunset).format('HH:mm:ss a') + '</p>';
//       results += '</div>'; //end grid-item

//       results += '</div>'; //end grid-container
//       document.getElementById("weatherResults").innerHTML = results;


//       const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=" + APIKey;
//       fetch(url2)
//         .then(function(response) {
//         return response.json();
//         }).then(function(json) {
//         console.log(json);
//         let forecast = "";
//         forecast += '<div class="spacer"></div>';
//         forecast += '<hr>';
//         forecast += '<div class="spacer"></div>';
//         forecast += "<h2>Forecast for " + json.city.name + "</h2>";
//         for (let i=0; i < json.list.length; i++) 
//         {
//           forecast += "<h3>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h3>";
//           forecast += "<p>Temperature: " + json.list[i].main.temp + " &deg;F</p>";
//           forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
//           forecast += '<p>Max Temp:' + '  ' + json.list[i].main.temp_max + ' &deg;F</p>';
//           forecast += '<p>Min Temp:' + '  ' + json.list[i].main.temp_min + ' &deg;F</p>';
//           forecast += '<p>Pressure:' + '  ' + json.list[i].main.pressure + ' hPa</p>';
//           forecast += '<p>Humidity:' + '  ' + json.list[i].main.humidity + '%</p>';
//           forecast += '<p>Wind speed:' + '  ' + json.list[i].wind.speed + ' MPH</p>';
//           // results += '<p>Rain:' + '  ' + json.list[i].rain['3h'] + 'in</p>';
//           // results += '<p>Snow:' + '  ' + json.list[i].snow['3h'] + 'in</p>';
//           forecast += '<div class="spacer"></div>';
//         }

//         document.getElementById("forecastResults").innerHTML = forecast;
//         });
//     });

    
//   });
// }