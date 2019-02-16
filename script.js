const url = 'https://icanhazdadjoke.com/';
// const url ='http://b2cf5539.proxy.webhookapp.com/';

const exResponse = 
{
	"id": "UKuXvzAlOuc",
	"joke": "I was going to learn how to juggle, but I didn't have the..",
	"status": 200
}

var resultsPage = 1;
var totalPages = 1;

$(document).ready(() =>
{
  getRandomJoke();

  $('.random-button').click(() =>
  {
    getRandomJoke();
  });

  $('.search-form').submit((form) =>
  {
    form.preventDefault();  
    searchForJoke();
  })

  $('.search-input').keypress(() =>
  {
    resultsPage = 1;
  });

  $('.search-button').click(() =>
  {
    // searchForJoke();
  });
});



const getRandomJoke = () =>
{
  let headers = new Headers(
  { 
    'Accept': 'application/json', 
    'User-Agent': 'Dad Jokes (https://github.com/nathanielw9/dadjokes)' 
  });

  fetch(url, 
    {
      headers: headers,
    })
  .then((response) => response.json())
  .then((responseJson) => 
  {
    $('#random-joke').text(responseJson.joke);
  })
  .catch((error) =>
  {
    console.error(error)
  });
}


const searchForJoke = () =>
{
  let headers = new Headers(
  { 
    'Accept': 'application/json', 
    'User-Agent': 'Dad Jokes (https://github.com/nathanielw9/dadjokes)' 
  });

  console.log('input: ' + $('.search-input').val())
  let term = $('.search-input').val();
  let limit = 10;
  let page = resultsPage++;
  console.log('totalPages: ' + totalPages)
  if (page > totalPages)
  {
    alert('No more jokes about ' + term + ' :(');
  }
  let searchUrl = url + 'search?limit=' + limit + '&page=' + page + '&term=' + term;

  fetch(searchUrl, 
    {
      headers: headers,
    })
  .then((response) => response.json())
  .then((responseJson) => 
  {
    console.log(responseJson);
    // $('#random-joke').text(responseJson.joke);

    $('.results').html('');
    totalPages = responseJson.totalPages;
    let results = responseJson.results;
    results.forEach((joke) =>
    {
      $('.results').append('<p class="joke">"' + joke.joke + '"</p>');
    });
  })
  .catch((error) =>
  {
    console.error(error)
  });
}
