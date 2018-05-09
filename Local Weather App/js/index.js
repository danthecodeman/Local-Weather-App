$(function(){
var long;
var lat;
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
     long = position.coords.longitude;
     lat = position.coords.latitude;
var api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=58659c9ec9dd69c9d72fd07f6dbbca68';
  $.getJSON(api, function(data){
    var fTemp;
    var cTemp;
     var tempSwap=true
    var weatherType = data.weather[0].description;
    var kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    //temp in kelvin
     fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    //temp in Farenheit
    //city name
    cTemp = (kTemp-273).toFixed(1);
    
    console.log(city);
    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#fTemp").html(fTemp + " &#8457;");
    $("#fTemp").click(function(){
      if(tempSwap===false){
          $("#fTemp").html(fTemp + " &#8457;");
        tempSwap=true;
      }
      else{
        $("#fTemp").html(cTemp + " &#8451;");
          tempSwap=false;
        }   
    });
   windSpeed = (2.237*(windSpeed)).toFixed(1);
       $("#windSpeed").html(windSpeed + " mph");
    
    if(fTemp>80) {
      $('body').css('background-image', 'url(http://bsnscb.com/data/out/189/39515873-sunny-day-backgrounds-wallpapers.jpg)');
    }
   else if(fTemp>70) {
     $('body').css('background-image', 'url(https://www.wallpapersbrowse.com/images/ey/ey2wnpj.jpg)');
   }
    else if(fTemp>60){
         $('body').css('background-image','https://wallpaperscraft.com/image/meadow_clouds_sky_volume_cloudy_wood_field_breadth_60167_3840x2160.jpg');
     }
      else if(fTemp>50){
        $('body').css('background-image','url(https://wallpaperscraft.com/image/coast_gloomy_darkness_cloudy_55573_1680x1050.jpg)');
      } 
    else if(fTemp>40){
        $('body').css('background-image','url(http://3.bp.blogspot.com/-stwTFNVbsPU/VFLo3-l6O6I/AAAAAAAABAk/bIs5rPaCYcg/s1600/Epic%2BClouds.jpg)');
      } 
    else if(fTemp>30){
        $('body').css('background-image','url(http://www.thenewlofi.com/wp-content/uploads/2017/12/lovelypath.jpg)');
      } 
  });
    });
  }
});