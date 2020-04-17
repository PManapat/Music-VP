$(document).ready(function () {
  //for weather
  $.ajax({

    url: "https://api.openweathermap.org/data/2.5/forecast?q=New+York&Appid=338c0f586b9c50338b849da24ff79609&units=imperial",

    method: "GET",
  }).then(function (forecast) {
    console.log(forecast);
    for (i = 0; i < forecast.list.length; i++) {
      if (forecast.list[i].dt_txt.indexOf("18:00:00") !== -1) {
        // console.log(forecast.list[i].dt);
        // console.log(forecast)
        console.log(forecast.list[i].main.temp);
        // console.log(forecast.list[i].main.humidity);
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        var utfiveday = new Date(forecast.list[i].dt * 1000);

        var dayName = days[utfiveday.getDay()];
        console.log(dayName);
        console.log(utfiveday);

        var cityName = forecast.city.name;

        //console.log(“five day date” + utfiveday);
        var realfiveDate = utfiveday.toLocaleDateString();
        // console.log(realfiveDate);

        var infoTemp = forecast.list[i].main.temp;
        var infoWeather = forecast.list[i].weather[0].description;
        console.log(infoWeather);
        var apparelInfo = forecast.list[i].weather[0].main;
        console.log(apparelInfo);
        var short = `<img src="https://clipartart.com/images250_/t-shirt-png-transparent-clipart-3.png"width=80px height=80px/>`;
        var rainyDay = `<img src="https://lathompson.co.nz/wp-content/uploads/2019/09/Its-Raining.jpg"width=100px height=100px/>`;
        var coldDayCloud=`<img src="https://besthqwallpapers.com/img/original/51113/brooklyn-bridge-new-york-world-trade-center-1-usa-skyscrapers.jpg" width=100px height=  100px`;
        var coldDay = `<img src="https://s1.1zoom.me/big0/813/USA_Bridges_Houses_Brooklyn_New_York_City_529472_1280x857.jpg" width=100px height=100px`;
        var sunny = `<img src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1449910230000/photosp/1b191d15-157a-44a0-84f4-bbf7126d504b/stock-photo-skyline-leaves-fall-sunny-nyc-iphone-centralpark-sheeps-meadows-1b191d15-157a-44a0-84f4-bbf7126d504b.jpg" width=100px height=100px/>`;
        var umbrella = ` <img src="/Images/umbrella.png"width=80px height=80px'/>
        `;
        var winter = `<img src="/Images/Jacket.png"width=80px height=80px/>`;
        var result = "";
        var result1 = "";

        //first compare to rain then only temp. 
        if (apparelInfo === "Rain") {

          result = ("Stay dry " + "<br>" + umbrella);
          result1 = rainyDay;
          console.log(short);
        } else if (infoTemp >= 55 ) {
          result = ("Stay light " + "<br>" + short);
          result1 = sunny;

        } else if (infoTemp < 55 &&infoWeather==="clear sky") {
          result = ("Stay Warm " + "<br>" + winter);
          console.log(winter);
          result1 = coldDay;
        }else if (infoTemp < 55 &&apparelInfo==="Clouds"){
          result = ("Stay Warm " + "<br>" + winter);
          result1 = coldDayCloud;


        };

        var forecastcard = $(".weather");

        forecastcard.append(
          "<div class=fiveDayColor id=fiveDaybg style='text-align:center'>" +

          "<p>" + cityName + "</P>" +
          "<p>" + dayName + "</p>" +
          "<p>" +
          realfiveDate +
          "</p>" +
          "<p>" + infoWeather + "<br>"+"</p>" + result1 + "<br>" +
          // `<img src="https://openweathermap.org/img/wn/${forecast.list[i].weather[0].icon}@2x.png">` +
          "<p>" +
          "Temperature: " +
          forecast.list[i].main.temp + " °F" +
          "</p>" +
          "<p>" +
          result
          +
          "</p>" +
          "</div>"

        );
      }
    }
  });


  ///when clicked the weather card it shows the next five days event of modal.
 /* $(".weather").click(function (event) {
   event.preventDefault();
//    alert("i am clicked");
$("#datesTix").click();
    $("#artist-modal").empty();
    //Declare variables
    var APIKey = "?apikey=bormTRVJ8VGhGmIeOGKrWGP9sMRHoO02";
    var venueSearch = "https://app.ticketmaster.com/discovery/v2/events";
    // var venueNYC = ["Madison Square Garden", "Barclays Center", "Radio City Music Hall", "Apollo Theater",  "Bowery Ballroom"];
    var today = (moment().format('YYYY-MM-DD'));
    var plus5days = (moment().add(5, 'days').format('YYYY-MM-DD'));
    var queryUrl = venueSearch + APIKey + "&classificationName=music&city=new%20york&sort=date,asc" + "&startEndDateTime=" + today + "T00:00:00Z," + plus5days + "T23:59:59Z";
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function (response) {
        console.log(response);
      // Display Modal
      $("#exampleModalLongTitle").text("Check What's Coming Up Soon in NYC");
      for (i = 0; i < 10; i++) {
        var urls = response._embedded.events[i].url;
        var names = response._embedded.events[i].name;
        var eventDates = response._embedded.events[i].dates.start.localDate;
        $("#artist-modal").append("<a class= 'topTixFont' target='_blank' href='" + urls + "'><div class = 'topTix'>" + moment(eventDates).format('LL') + " : " + names + "<img src='https://img.icons8.com/color/24/000000/add-ticket.png'/></div></a>");
      }
    });
  });*/

//want to put hover effect
  //$("#weather").text.hover(function(){
    //  $(this).fadeOut(1);
    // $(this).fadeIn(1);



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
$("#artistTix").on("click", function(){
    $(".modal-body").empty();
    //Declare variables
    var APIKey = "?apikey=bormTRVJ8VGhGmIeOGKrWGP9sMRHoO02";
    var artistSearch = "/discovery/v2/attractions/";
    var genreSearch = "/discovery/v2/classifications/genres/";
    var dateSearch = "/discovery/v2/events/";
    var queryUrl = "https://app.ticketmaster.com/" + artistSearch + APIKey;
    //AJAX call ---- Name of event,artist,link,date and venue
    $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response){
            // console.log(response)
            // console.log(response._embedded.attractions[0].name);
            $("#exampleModalLongTitle").text("Get Tix to New York City's Top Artists");
            //Loop top 5 responses
            for (i =0; i < 5; i++){
                // console.log(response._embedded.attractions[i].url);
                //Append top 5 responses
                var urls = response._embedded.attractions[i].url;
                var names = response._embedded.attractions[i].name;
                var images = response._embedded.attractions[i].images[2].url;
                $(".modal-body").append("<a class= 'topTixFont' target='_blank' href='" + urls + "'><div class = 'topTix'>" + names + " <img src='https://img.icons8.com/color/24/000000/add-ticket.png'/><p><img src='" + images + "'width='250px' height='150x'/></div></div></a>");       
            }$(".modal-body").append("<button type='button' class='btn btn-secondary' data-dismiss='modal' align='right'>Close</button>")
        })  
    })

    // Venue card click brings up modal
    $("#venueTix").on("click", function(){
        $(".modal-body").empty();
        
        //Declare variables
        var APIKey = "&apikey=bormTRVJ8VGhGmIeOGKrWGP9sMRHoO02";
        var venueSearch = "https://app.ticketmaster.com//discovery/v2/venues.json?";
        var venueNYC = ["Madison Square Garden", "Barclays Center", "Radio City Music Hall", "Apollo Theater",  "Bowery Ballroom"];

        var msg = "&id=KovZpZA7AAEA";
        var bowery = "&id=KovZpZA7dkJA";
        var radioCity = "&id=KovZpZAE7vdA";
        var barclays = "&id=KovZpakSbe";
        var apollo = "&id=KovZpZA7AAIA";

        var queryUrl = venueSearch + msg + bowery + radioCity + barclays + apollo + APIKey;

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response){
            // Display Modal
            $("#exampleModalLongTitle").text("Get Tix to the TOP 5 Venues in NYC");
            for (i = 0; i < venueNYC.length; i++){
                var urls= response._embedded.venues[i].url;
                var names= response._embedded.venues[i].name;
                var images= response._embedded.venues[i].images[0].url;
                $(".modal-body").append("<a class= 'topTixFont' target='_blank' href='" + urls + "'><div class = 'topTix'>" + names + " <img src='https://img.icons8.com/color/24/000000/add-ticket.png'/><p><img src='" + images + "'width='250px' height='150x'/></p></div></a>");
            } 
            $(".modal-body").append("<button type='button' class='btn btn-secondary' data-dismiss='modal' align='right'>Close</button>")
        })
    })

    // Dates card click brings up modal
    $("#datesTix").on("click", function(){
        $(".modal-body").empty();
        $(".modal-body").append("<div id='table-wrapper'><div id='table-scroll'><table id='modal-table'>");
        $("#modal-table").append("<thead><tr class='modal-table-header'><th>Date</th><th>Event</th></tr></thead>");
        $("#modal-table").append("<tbody>");
        
        //Declare variables
        var APIKey = "?apikey=bormTRVJ8VGhGmIeOGKrWGP9sMRHoO02";
        var venueSearch = "https://app.ticketmaster.com/discovery/v2/events";
        var today = (moment().format('YYYY-MM-DD'));
        var plus5days = (moment().add(5, 'days').format('YYYY-MM-DD'));

        var queryUrl = venueSearch + APIKey + "&classificationName=music&city=new%20york&sort=date,asc" + "&startEndDateTime=" + today + "T00:00:00Z," + plus5days + "T23:59:59Z";

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response){
            // Display Modal
            $("#exampleModalLongTitle").text("Check What's Coming Up Soon in NYC");
            for (i = 0; i < 20; i++){
                var urls= response._embedded.events[i].url;
                var names= response._embedded.events[i].name;
                var eventDates = response._embedded.events[i].dates.start.localDate;
                $("#modal-table").append("<tr><td>" + moment(eventDates).format('LL') + "</td><td><a class= 'topTixFont' target='_blank' href='" + urls + "'>" + names + " <img src='https://img.icons8.com/color/24/000000/add-ticket.png'/></a></td></tr>");
            } $(".modal-body").append("<button type='button' class='btn btn-secondary' data-dismiss='modal' align='right'>Close</button><tr>")
        })  
    })
/// Search function with Ajax ca
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
//});