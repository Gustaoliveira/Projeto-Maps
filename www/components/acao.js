// This is a JavaScript file



  $(document).on("click", "#btn", function(){

    
function checkConnection() {
  var networkState = navigator.connection.type;
    if(navigator.connection.type == Connection.NONE){
      alert('No network connection')
      navigator.notification.beep(3);
      navigator.vibrate(6000);
    }
}

checkConnection();


navigator.notification.beep(1);

   var onSuccess = function(position) {

   L.mapquest.key = 'R7FVoAc2JWm0iuZfs22keZSALq3mRaJk';

        var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15,

        });
};

      navigator.geolocation.getCurrentPosition(onSuccess);

});
  