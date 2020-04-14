$(document).ready(function() {
    //for weather
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=New+York&Appid=338c0f586b9c50338b849da24ff79609&units=imperial",
        method: "GET"
    }).then(function (forecast) {
        // console.log(forecast);
        for (i = 0; i < forecast.list.length; i++) {
            if (forecast.list[i].dt_txt.indexOf("18:00:00") !== -1){
                // console.log(forecast.list[i].dt);
                // console.log(forecast)
                // console.log(forecast.list[i].main.temp);
                // console.log(forecast.list[i].main.humidity);

        var utfiveday = new Date(forecast.list[i].dt_txt);

        //console.log(“five day date” + utfiveday);
        var realfiveDate = utfiveday.toLocaleDateString();
        console.log(realfiveDate);
        var forecastcard = $(".weather");
     
        forecastcard.append(
          "<div class=fiveDayColor>" +
            "<p>" +
            realfiveDate +
            "</p>" +
            `<img src="https://openweathermap.org/img/wn/${forecast.list[i].weather[0].icon}@2x.png">` +
            "<p>" +
            "Temperature: " +
            forecast.list[i].main.temp +
            "</p>" +
            "<p>" +
            "Humidity: " +
            forecast.list[i].main.humidity +
            "%" +
            "</p>" +
            "</div>"
        );
      }
    }
  });

  // For carousel-begin
  /*$.ajax({
    url:
      "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=f35dc94b7584e054481a5dfa63bfb1c8&format=json",
    method: "GET",
  }).then(function (trending) {
    // console.log(trending);

        var topArtist = trending.artists.artist[0].name;
        // console.log(topArtist);

    if (topArtist === "The Weeknd") {
      $("#cImg1").empty();
      $("#cImg1").append("<img id='cImg' src='https://static.billboard.com/files/media/02-the-weeknd-press-2019-cr-Nabil-Elderkin-billboard-1548-1024x677.jpg' class='d-block w-100' alt='Trending Event 1'>");
      $("#trending#cImg1").append("<div id='cCaption' class='carousel-caption d-none d-md-block'><button type='button' class='btn btn-danger btn-lg'>Search</button><p class='cText'>Checkout Trending Artists heading to the Big Apple</p></div>"
      );
    }
  });
  */
  // For carousel-end
  
var weeknd = "theweeknd";
var billie = "billieeilish";
var M5 = "Maroon 5";
var queryURL1 = "https://rest.bandsintown.com/artists/" + weeknd + "?app_id=codingbootcamp";
var queryURL2 = "https://rest.bandsintown.com/artists/" + billie + "?app_id=codingbootcamp";
var queryURL3 = "https://rest.bandsintown.com/artists/" + M5 + "?app_id=codingbootcamp";

    $.ajax({
      url: queryURL1,
      method: "GET"
    }).then(function(trending) {
            $("#cImg1").append("<img>").attr("src", trending.image_url);
            $("#trending1").append("<div id='cCaption' class='carousel-caption d-none d-md-block'><button type='button' class='btn btn-danger btn-lg'>The Weeknd</button><p class='cText'></p></div>")
    })

    $.ajax({
        url: queryURL2,
        method: "GET"
      }).then(function(trending) {
              $("#cImg2").append("<img>").attr("src", trending.image_url);
              $("#trending2").append("<div id='cCaption' class='carousel-caption d-none d-md-block'><button type='button' class='btn btn-danger btn-lg'>Billie Eilish</button><p class='cText'></p></div>");
      })
      $.ajax({
        url: queryURL3,
        method: "GET"
      }).then(function(trending) {
              $("#cImg3").append("<img>").attr("src", trending.image_url);
              $("#trending3").append("<div id='cCaption' class='carousel-caption d-none d-md-block'><button type='button' class='btn btn-danger btn-lg'>Maroon 5</button><p class='cText'></p></div>");
      })
console.log(trending.image_url);

  //Declare variables
  /*var APIKey = "?apikey=bormTRVJ8VGhGmIeOGKrWGP9sMRHoO02";
    var artistSearch = "/discovery/v2/attractions";
    var genreSearch = "/discovery/v2/classifications/genres/";
    var dateSearch= "/discovery/v2/events";
    var queryUrl = "https://app.ticketmaster.com/" + artistSearch + APIKey;
    //AJAX call ---- Name of event,artist,link,date and venue
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response){
        console.log(response)
        // console.log(response._embedded.attractions[0].name);
        //Loop top 5 responses
        for (i =0; i < 5; i++){
            console.log(response._embedded.attractions[i].url);
            //Append top 5 responses
            var urls = response._embedded.attractions[i].url;
            var names = response._embedded.attractions[i].name;
            // $("#artist-modal").empty();
            $("#artist-modal").append("<p class = 'topArtistTix'>" + [i+1] + " <a href='" + urls + "'>" + names + "</a>");       
        }
    })   
    */
});
