var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
	alert("aqui1");
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var push = PushNotification.init({
		alert("aqui2");
            "android": {
                "senderID": "275015233935"
            },
            "ios": {"alert": "true", "badge": "true", "sound": "true"}, 
            "windows": {} 
        });
        
        push.on('registration', function(data) {	
			alert("aqui3");
            console.log("registration event");
            alert(data.registrationId);
            //console.log(JSON.stringify(data));
        });

        push.on('notification', function(data) {
        	console.log("notification event");
            console.log(JSON.stringify(data));
            var cards = document.getElementById("cards");
            var push = '<div class="row">' +
		  		  '<div class="col s12 m6">' +
				  '  <div class="card darken-1">' +
				  '    <div class="card-content black-text">' +
				  '      <span class="card-title black-text">' + data.title + '</span>' +
				  '      <p>' + data.message + '</p>' +
				  '    </div>' +
				  '  </div>' +
				  ' </div>' +
				  '</div>';
            cards.innerHTML += push;
        });

        push.on('error', function(e) {
            console.log("push error");
        });
    }
};
