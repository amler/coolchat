// var serverUrl = 'http://tiny-pizza-server.herokuapp.com/collections/chat-messages/';

//$.getJSON(serverUrl).done(setUserData);


//// Constructor... prototype?//////

/*function Setmessage (userMessage) {
    message: ,
    //time: Date.now();,
    //this.meta:"",
   	this.appID = "Nunya";
}*/

function Setuser (userName) {
	this.user = userName;
}



$('.username-button').click(function(){
	
	var userName = $('.username-input').val();
	var userLength = userName.length;
	//console.log(userName);

	// using regex to filter out any special characters from the user name
	// executes a search for a match between a regular expression and a specified string
	if (/[^a-zA-Z0-9]/.test(userName)) {    
		
		// if condition is false, alert message
    	alert("Dude, try using some letters or numbers.");
	    throw new Error ('Invalid user name characters.');
	
	// validating user name length
	} else if (userLength <= 0 || userLength  > 15) {
	
	// alert if user name length is greater than 15 or less than 0
	    alert('Sorry brah, please select a user name within 1-15 characters.');
	    throw new Error ('Invalid user name length.');
	
	} else {
	//else send value to the object constructor 
		var coolGal = new Setuser(userName);
		console.log(coolGal);
	}
	// clears value in username input
	$('.username-input').val('');
});
  	
$('.message-button').click(function() {
	var userMessage = $('.chat-message').val();
	var messageLength = userMessage.length;

	if (messageLength <= 0) {
		alert('Yeah, well, you know, like, that\'s just where you put down your opinion, man.');
		throw new Error ('Please select a smaller user name.');
	}
	
})

