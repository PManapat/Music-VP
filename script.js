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
                //console.log(“five day date” + utfiveday);
                var realfiveDate = utfiveday.toLocaleDateString();
                console.log(realfiveDate);
                var forecastcard = $(".weather");
                forecastcard.append("<div class=fiveDayColor>" + "<p>" + realfiveDate + "</p>" + `<img src="https://openweathermap.org/img/wn/${forecast.list[i].weather[0].icon}@2x.png">` + "<p>" + "Temperature: " + forecast.list[i].main.temp + "</p>" + "<p>" + "Humidity: " + forecast.list[i].main.humidity + "%" + "</p>" + "</div>")
            }
        }
    });
})