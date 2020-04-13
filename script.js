$(document).ready(function() {
    //for weather
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=New+York&Appid=338c0f586b9c50338b849da24ff79609&units=imperial",
        method: "GET"
    }).then(function (forecast) {
        console.log(forecast);
        for (i = 0; i < forecast.list.length; i++) {
            if (forecast.list[i].dt_txt.indexOf("18:00:00") !== -1){
                console.log(forecast.list[i].dt);
                console.log(forecast)
                console.log(forecast.list[i].main.temp);
                console.log(forecast.list[i].main.humidity);

                var utfiveday = new Date(forecast.list[i].dt*1000);
                var utfiveday = new Date(forecast.list[i].dt_txt);

                //console.log(“five day date” + utfiveday);
                var realfiveDate = utfiveday.toLocaleDateString();
                console.log(realfiveDate);
                var forecastcard = $(".weather");

                forecastcard.append("<div class=fiveDayColor>" + "<p>" + realfiveDate + "</p>" + `<img src="https://openweathermap.org/img/wn/${forecast.list[i].weather[0].icon}@2x.png">` + "<p>" + "Temperature: " + forecast.list[i].main.temp + "</p>" + "<p>" + "Humidity: " + forecast.list[i].main.humidity + "%" + "</p>" + "</div>")
                forecastcard.append("<div class='fiveDayColor'>" + "<p>" + realfiveDate + "</p>" + '<img src="http://openweathermap.org/img/w/"' + forecast.list[i].weather[0].icon +'.png " > <p>  Temperature: ' + forecast.list[i].main.temp + "</p>" + "<p>" + "Humidity: " + forecast.list[i].main.humidity + "%" + "</p>" + "</div>") 
            }
        }
    });
    // For carousel-begin
    $.ajax({
        url: "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=f35dc94b7584e054481a5dfa63bfb1c8&format=json",
        method: "GET"
    }).then(function (trending){
        // console.log(trending);

        var topArtist = trending.artists.artist[0].name;
        console.log(topArtist);

        if (topArtist === "The Weeknd"){
            $("#trending").empty();
            $("#trending").append("<img src='https://static.billboard.com/files/media/02-the-weeknd-press-2019-cr-Nabil-Elderkin-billboard-1548-1024x677.jpg' class='d-block w-100' alt='Trending Event 1'>");
            $("#trending").append("<div id='cCaption' class='carousel-caption d-none d-md-block'><button type='button' class='btn btn-danger btn-lg'>Search</button><p class='cText'>Checkout Trending Artists heading to the Big Apple</p></div>")
        }
    });
    // For carousel-end
})