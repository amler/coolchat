
//$.getJSON(serverUrl).done(setUserData);

//////////////////////////////////////////////////
// Variables
//////////////////////////////////////////////////

var serverUrl = 'http://tiny-pizza-server.herokuapp.com/collections/chat-messages/';


//////////////////////////////////////////////////
// Chat Object
//////////////////////////////////////////////////

function Chat(username) {
	this.username = username;
}

/*Chat.prototype.sendMessage(message) {
	
	// create data to submit
	var data = {
		user: this.username,
		message: message,
		time: Date.now(),
		meta: "",
		appID: "Nunya"
	};

	// submit to server
	$.post(serverUrl, data);
}*/

//////////////////////////////////////////////////
// State Functions
//////////////////////////////////////////////////

function displayLogin () {
	$('#login').show();
	$('#signed-in').hide();
	$('#message-input').hide();
}
function displayGreeting (userName) {
	// to do add user name
	$('#signed-in').show();
	$('.greeting span').append(userName);
	$('#login').hide();
	$('#message-input').show();
}

displayLogin();

//////////////////////////////////////////////////
// Click Events
//////////////////////////////////////////////////


$('#login button').click(function(){
	// get the username value
	var userName = $('.username-input').val();
		// storing the length in a variable to save calculating time.
	var userLength = userName.length;

	// validate the username string

		// executes a search for a match between a regex filter and a specified string
	if (/[^a-zA-Z0-9]/.test(userName)) {

		alert("Dude, try using some letters or numbers.");
		throw new Error ('Invalid user name characters.');

		// validating user name length
	} else if (userLength <= 0 || userLength  > 15) {
		// alert if user name length is greater than 15 or less than 0
		alert('Sorry brah, please select a user name within 1-15 characters.');
		throw new Error ('Invalid user name length.');

		//else send value to the object constructor 
	} else {
		chat = new Chat(userName);
		//console.log(chat);
	}
	// call display greeting function
	displayGreeting(userName);

	// clears value in username input
	$('.username-input').val('');	
});




$('#signed-in button').click(function(){
	//reset user name

	// display login
	displayLogin();
});

$('.message-button').click(function(){
	// get message value

	// validates message value

	// post to server

	// resets message field

});


  	
/*$('.message-button').click(function() {
	var userMessage = $('.chat-message').val();
	var messageLength = userMessage.length;

	if (messageLength <= 0) {
		alert('Yeah, well, you know, like, that\'s just where you put down your opinion, man.');
		throw new Error ('Please select a smaller user name.');
	} else {

	}
})*/

