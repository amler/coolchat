
//////////////////////////////////////////////////
// Variables
//////////////////////////////////////////////////

var serverUrl = 'http://tiny-pizza-server.herokuapp.com/collections/chat-messages/';
var chat = null;
var current = 0;

//////////////////////////////////////////////////
// Chat Object
//////////////////////////////////////////////////

function Chat(username) {
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
	$('#message-input').hide();
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
    
    date = new Date(date);
    // how many seconds ago / by thousand to get seconds
    var seconds = Math.floor((new Date() - date) / 1000);
    //   how many seconds ago divided by seconds in a year
    var interval = Math.floor(seconds / 31536000);
    
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    var weekdays = [ 'Sun','Mon', 'Tue', 'Wed', 'Thu','Fri', 'Sat'];


    if (interval > 1) {
        // return Nov 25, 2013 --- 
        var year = date.getFullYear();
        return months[date.getMonth()] + ' ' + date.getDate() + ', ' + year;
    }

    // > 7 days
    interval = Math.floor(seconds / 604800);
    if (interval > 1) {
        // return Apr 9
        return months[date.getMonth()] + ' ' + date.getDate();
    }

    // > day
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      // return Thursday at 1:20am
      var day = date.getDay();
      var weekDay = (weekdays[day]);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      if (hours < 12) {
        // return Thursday at 10:00am
        return weekDay + ' at ' + hours + ':' + minutes + 'am';
     
      } else if (hours > 12){
        //return Thursday at 1:00pm
        hours = hours - 12;
        return weekDay + ' at ' + hours + ':' + minutes + 'pm';

      } else if (hours == 12) {
        // return Thursday 12:00pm
        return weekDay + ' at ' + hours + ':' + minutes + 'pm';
      }
      return interval + ' days';
    }

    // > hour
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + ' hours';
    }
    interval = Math.floor(seconds / 60);
    
    // > minute
    if (interval > 1) {
        return interval + ' minutes';
    }

    return Math.floor(seconds) + ' seconds';
}


//////////////////////////////////////////////////
// Render Function
//////////////////////////////////////////////////

function renderData (usersData) {

	var chatTemplate = $('#all-messages').html();
	var templateMethod = _.template(chatTemplate);
	usersData.reverse();

	usersData.forEach(function (message){
		message.time = timeSince(message.time);
	// putting each repo in my template to be rendered 
	var rendered = templateMethod(message);

	// actually rendering the content to div with the class repocontent.  
	$('.chat-content').append(rendered);

	// track last id 

	// intervally check new chats	

  });
}

function newChats (lastid) {
	// compare last id with most recent

	// if new id render??
}

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
});

$.getJSON(serverUrl).done(renderData);

