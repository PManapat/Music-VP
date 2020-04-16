$(document).ready(function () {
  //for weather
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/forecast?q=New+York&Appid=338c0f586b9c50338b849da24ff79609&units=imperial",
    method: "GET",
  }).then(function (forecast) {
    // console.log(forecast);
    for (i = 0; i < forecast.list.length; i++) {
      if (forecast.list[i].dt_txt.indexOf("18:00:00") !== -1) {
        // console.log(forecast.list[i].dt);
        // console.log(forecast)
        // console.log(forecast.list[i].main.temp);
        // console.log(forecast.list[i].main.humidity);
        
        var utfiveday = new Date(forecast.list[i].dt * 1000);
        var cityName = forecast.city.name;

        //console.log(“five day date” + utfiveday);
        var realfiveDate = utfiveday.toLocaleDateString();
        // console.log(realfiveDate);
        var infoWeather = forecast.list[i].weather[0].description;
        var forecastcard = $(".weather");

         forecastcard.append(
          "<div class=fiveDayColor id=fiveDaybg>" +
            "<p>" +
            cityName +
            "</P>" +
            "<p>" +
            realfiveDate +
            "</p>" +
            "<p>" +
            "Mostly " +
            infoWeather +
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
  var queryURL1 =
    "https://rest.bandsintown.com/artists/" + weeknd + "?app_id=codingbootcamp";
  var queryURL2 =
    "https://rest.bandsintown.com/artists/" + billie + "?app_id=codingbootcamp";
  var queryURL3 =
    "https://rest.bandsintown.com/artists/" + M5 + "?app_id=codingbootcamp";

  $.ajax({
    url: queryURL1,
    method: "GET",
  }).then(function (trending) {
    $("#cImg1").append("<img>").attr("src", trending.image_url);
    $("#trending1").append(
      "<div id='cCaption' class='carousel-caption d-none d-md-block'><p class='cText'>The Weeknd</p></div>"
    );
  });

  $.ajax({
    url: queryURL2,
    method: "GET",
  }).then(function (trending) {
    $("#cImg2").append("<img>").attr("src", trending.image_url);
    $("#trending2").append(
      "<div id='cCaption' class='carousel-caption d-none d-md-block'><p class='cText'>Billie Eilish</p></div>"
    );
  });
  $.ajax({
    url: queryURL3,
    method: "GET",
  }).then(function (trending) {
    $("#cImg3").append("<img>").attr("src", trending.image_url);
    $("#trending3").append(
      "<div id='cCaption' class='carousel-caption d-none d-md-block'><p class='cText'>Maroon 5</p></div>"
    );
  });
  //console.log(trending.image_url);

  // Artist card click brings up modal
  $("#artistTix").on("click", function () {
    $("#artist-modal").empty();
    //Declare variables
    var APIKey = "?apikey=bormTRVJ8VGhGmIeOGKrWGP9sMRHoO02";
    var artistSearch = "/discovery/v2/attractions/";
    var genreSearch = "/discovery/v2/classifications/genres/";
    var dateSearch = "/discovery/v2/events/";
    var queryUrl = "https://app.ticketmaster.com/" + artistSearch + APIKey;
    //AJAX call ---- Name of event,artist,link,date and venue
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (response) {
      // console.log(response)
      // console.log(response._embedded.attractions[0].name);
      $("#exampleModalLongTitle").text(
        "Get Tix to New York City's Top Artists"
      );
      //Loop top 5 responses
      for (i = 0; i < 5; i++) {
        // console.log(response._embedded.attractions[i].url);
        //Append top 5 responses
        var urls = response._embedded.attractions[i].url;
        var names = response._embedded.attractions[i].name;
        $("#artist-modal").append(
          "<p class = 'topArtistTix'>" +
            [i + 1] +
            " <a href='" +
            urls +
            "'>" +
            names +
            "<img src='https://img.icons8.com/color/24/000000/add-ticket.png'/></a>"
        );
      }
    });
  });

  // Genre card click brings up modal
  $("#venueTix").on("click", function () {
    $("#artist-modal").empty();

    //Declare variables
    var APIKey = "&apikey=bormTRVJ8VGhGmIeOGKrWGP9sMRHoO02";
    var venueSearch = "https://app.ticketmaster.com//discovery/v2/venues.json?";
    var venueNYC = [
      "Madison Square Garden",
      "Barclays Center",
      "Radio City Music Hall",
      "Apollo Theater",
      "Bowery Ballroom",
    ];

    var msg = "&id=KovZpZA7AAEA";
    var bowery = "&id=KovZpZA7dkJA";
    var radioCity = "&id=KovZpZAE7vdA";
    var barclays = "&id=KovZpakSbe";
    var apollo = "&id=KovZpZA7AAIA";

    var queryUrl =
      venueSearch + msg + bowery + radioCity + barclays + apollo + APIKey;

    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (response) {
      // Display Modal
      $("#exampleModalLongTitle").text("Get Tix to the TOP 5 Venues in NYC");
      for (i = 0; i < venueNYC.length; i++) {
        var urls = response._embedded.venues[i].url;
        var names = response._embedded.venues[i].name;
        $("#artist-modal").append(
          "<p class = 'topVenueTix'>" +
            [i + 1] +
            " <a href='" +
            urls +
            "'>" +
            names +
            "<img src='https://img.icons8.com/color/24/000000/add-ticket.png'/></a>"
        );
      }
    });
  });

  // Dates card click brings up modal
  $("#datesTix").on("click", function () {
    $("#artist-modal").empty();

    //Declare variables
    var APIKey = "&apikey=bormTRVJ8VGhGmIeOGKrWGP9sMRHoO02";
    var venueSearch = "https://app.ticketmaster.com//discovery/v2/venues.json?";
    var venueNYC = [
      "Madison Square Garden",
      "Barclays Center",
      "Radio City Music Hall",
      "Apollo Theater",
      "Bowery Ballroom",
    ];

    var msg = "&id=KovZpZA7AAEA";
    var bowery = "&id=KovZpZA7dkJA";
    var radioCity = "&id=KovZpZAE7vdA";
    var barclays = "&id=KovZpakSbe";
    var apollo = "&id=KovZpZA7AAIA";

    var queryUrl =
      venueSearch + msg + bowery + radioCity + barclays + apollo + APIKey;

    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (response) {
      // Display Modal
      $("#exampleModalLongTitle").text("Get Tix to the TOP 5 Venues in NYC");
      for (i = 0; i < venueNYC.length; i++) {
        var urls = response._embedded.venues[i].url;
        var names = response._embedded.venues[i].name;
        $("#artist-modal").append(
          "<p class = 'topVenueTix'>" +
            [i + 1] +
            " <a href='" +
            urls +
            "'>" +
            names +
            "<img src='https://img.icons8.com/color/24/000000/add-ticket.png'/></a>"
        );
      }
    });
  });
///
$("#open-search").on("click", function(event){
event.preventDefault();
var searchInput = $("#user-input").val()
console.log(searchInput);

var APIKey = "&apikey=bormTRVJ8VGhGmIeOGKrWGP9sMRHoO02";
var openSearch = "https://app.ticketmaster.com//discovery/v2/events?keyword=";
var queryUrlS = openSearch + searchInput + APIKey;
$.ajax({
  url: queryUrlS,
  method: "GET",
}).then(function (response) {
  console.log(response);
console.log(response._embedded.events[0].url);
var results = response._embedded.events[0].name;
var ticketLink = "https://www.ticketmaster.com/search?q=";
window.open(ticketLink + results);
})
})
});
