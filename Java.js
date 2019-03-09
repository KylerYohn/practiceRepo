

//make an ajax call to idgb

var QueryUrl = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=D0aORjYxSYjihO8QnG86bs1yQJ5QfQpC"


//===============================TIMES CALL (Works)
// $.ajax({
//     url: QueryUrl,
//     method: "GET",

// }).then(function(response){

// console.log(response);
    
// });


//=============================IGDB CALL
// $.ajax({
//     type: 'GET',
//     url: "http://api-endpoint.igdb.com/games/1942?fields=*",
//     headers: {
//         'user-key': '89267c056e5105fb4d4fd944625d0641',
//         'Accept': 'application/json'
//     }
// }).done(function (response) {
//     console.log(response);
// });



//=====================================================rotten tomatoes call
//     $.ajax({
//     url: "http://api.rottentomatoes.com/api/public/v1.0/movies/770672122/reviews.json?apikey=nwpnm8fp3yqn8ataswweg546",
//     method: "GET",
 
    
    
// }).then(function(response){
//     console.log(response);
// });

//=======================================================GIANT BOMB API (works sorta)
// $.ajax({
//     url: "https://www.giantbomb.com/api/user_reviews/?api_key=6d4d56add8ea2c13803b154586967c3fc3973982&limit=10",
//     method:"GET"
// }).then(function(response){
//     console.log(response);
// })

var apikey = "nwpnm8fp3yqn8ataswweg546";
var baseUrl = "https://api.rottentomatoes.com/api/public/v1.0";

// construct the uri with our apikey
var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
var query = "Gone with the Wind";

$(document).ready(function() {

  // send off the query
  $.ajax({
    url: moviesSearchUrl + '&q=' + query,
    method: "GET",
    // success: searchCallback
  }).then(function(response){
      console.log(response);
  })
});

// function searchCallback(results){
//     console.log(results)
// }