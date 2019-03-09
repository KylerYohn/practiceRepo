

//make an ajax call to idgb

var QueryUrl = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=D0aORjYxSYjihO8QnG86bs1yQJ5QfQpC"

$.ajax({
    url: QueryUrl,
    method: "GET",

}).then(function(response){

console.log(response);
    
})

var URLLL = ""

$.ajax({
    url: "https://api-v3.igdb.com/private/reviews",
    method: "POST",
    headers: {
        "Accept": "application/json",
        "user-key": "89267c056e5105fb4d4fd944625d0641",
    }
        }).then(function(response){
        console.log(response.data);
    })

$.ajax({
    url: "http://api.rottentomatoes.com/api/public/v1.0/movies/770672122/reviews.json?apikey=dg9cs9k5wpdwk3wzwn9mmdtr",
    method: "GET"
}).then(function(response){
    console.log(response);
});