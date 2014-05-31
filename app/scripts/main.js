// var serverUrl = 'http://tiny-pizza-server.herokuapp.com/collections/chat-messages/';

//$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(setUserData);


//// Constructor

function Coolchat (userName) {
	this.user = userName;
    //message: everyone still having fun?,
    //time: Date.now();,
    //this.meta:"",
    this.appID = "Nunya";
}




$('.username-button').click(function(){
	
	var userName = $('.username-input').val();
	var userLength = userName.length;
	
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
		var userChat = new Coolchat(userName);
		//document breaks everything!!!!! reverted back to classes in css & html
		//document.getElementById('username-input').reset()
	}
});
  	




/*} else {if (user <= 0 || user  > 15) {
// alert if user name is greater than 15 or less than 0
alert('Yeah, well, you know, that\'s just, like, just put down your opinion, man.');
throw new Error ('Please select a smaller user name.');
} else {*/
