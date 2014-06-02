
//////////////////////////////////////////////////
// Variables
//////////////////////////////////////////////////

var serverUrl = 'http://tiny-pizza-server.herokuapp.com/collections/chat-messages/';
var chat = null;
var lastId = '';


//////////////////////////////////////////////////
// Chat Object
//////////////////////////////////////////////////

function Chat(username) {
	if (/[^a-zA-Z0-9]/.test(userName)) {

		alert('Dude, try using some letters or numbers.');
		throw new Error ('Invalid user name characters.');
		return;

	// validating user name length
	} else if (userLength <= 0 || userLength  > 15) {
		
		// alert if user name length is greater than 15 or less than 0
		alert('Sorry brah, please select a user name within 1-15 characters.');
		throw new Error ('Invalid user name length.');
		return;
	}
	this.username = username;
}

Chat.prototype.sendMessage = function(message) {
	
	// create data to submit
	var data = {
		user: this.username,
		message: message,
		time: Date.now(),
		meta: '',
		appID: 'secret'
	};

	// submit to server
	$.post(serverUrl, data);
};

//////////////////////////////////////////////////
// State Functions
//////////////////////////////////////////////////

function displayLogin () {
	$('#login').show();
	$('#signed-in').hide();
	$('#message-input').show();
}
function displayGreeting (userName) {
	$('#signed-in').show();
	$('.greeting span').html(userName);
	$('#login').hide();
	$('#message-input').show();
}
displayLogin();

//////////////////////////////////////////////////
// Format Time Function
//////////////////////////////////////////////////

function timeSince(date) {

    if (date == undefined) {
    	return "";
    } else if (isNaN(date) == true) {
    	return date;
    } else if (date.trim() == "") {
    	return '';
    } 

    date = parseInt(date);
    date = new Date(date);
    
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

	var month = months[date.getMonth()]
	var day = date.getDate();
	var year = date.getFullYear();
	var hours = date.getHours();
	var minutes = date.getMinutes();

	if (minutes < 10) {
	 	minutes = '0' + minutes;
	}

    if (hours < 12 ) {
        return month + '. ' + day + ', ' + year + ' @ ' + hours +':'+ minutes + 'AM';
    } else if (hours >= 12) {
    	hours = hours - 12;
        return month + '. ' + day + ', ' + year + ' @ ' + hours +':'+ minutes + 'PM';
    }

}


//////////////////////////////////////////////////
// Render Function
//////////////////////////////////////////////////

function renderData(usersData) {

	var chatTemplate = $('#all-messages').html();
	var templateMethod = _.template(chatTemplate);
	usersData.reverse();

	usersData.forEach(function (message){
		if (lastId < message._id) {
			
			message.time = timeSince(message.time);
			
			// putting each repo in my template to be rendered
			var rendered = templateMethod(message);

			// actually rendering the content to div with the class repocontent.  
			$('.chat-content').prepend(rendered);

			// track last id make global variable
			lastId = message._id;
		}
	});
	//console.log(lastId);
}

function getNewChats() {
	$.getJSON(serverUrl).done(renderData);
}

getNewChats();
setInterval(getNewChats, 60000);

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
	
	
	chat = new Chat(userName);
	
	// call display greeting function
	displayGreeting(userName);
});

$('#signed-in button').click(function(){
	//reset user name & chat
	$('.username-input').val('');
	chat = null;
	// display login
	displayLogin();
});

$('.message-button').click(function(){
	// get message value
	var userMessage = $('.chat-message').val();
	var messageLength = userMessage.length;
	// validates message value
	if (messageLength <= 0) {
		alert('Yeah, well, you know, like, that\'s just where you put down your opinion, man.');
		throw new Error ('Please select a smaller user name.');
		return;
	}
	// post to server
	chat.sendMessage(userMessage);

	// resets message field
	$('.chat-message').val('');

	getNewChats();
});



