// var serverUrl = 'http://tiny-pizza-server.herokuapp.com/collections/chat-messages/';

//$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(setUserData);
/*
function Coolchat (userName) {
	this.user: userName,
    //message: everyone still having fun?,
    //time: Date.now();,
    //this.meta:"",
    this.appID: "Nunya",
}
*/

$('.username-button').click(function(){
	
	var userName = $('.username-input').val();
	var user = userName.length;


	if (userName.match(/[`~,.<>;':"\/\[\]\|{}()-=_+]/)) {    
    	alert("Dude, try using some letters or numbers.");
	} else if (user <= 0 || user  > 15) {
	// alert if user name is greater than 15 or less than 0
	    alert('Sorry brah, please select a user name within 1-15 characters.');
	    throw new Error ('Please select a smaller user name.');
	} else {
	//else send value to the object constructor 
		var user = new Postmessage(userName);
		//document.getElementById('username-input').reset()
	}
});
  	




	  	/*} else {if (user <= 0 || user  > 15) {
		// alert if user name is greater than 15 or less than 0
		    alert('Yeah, well, you know, that\'s just, like, put down your opinion, man.');
		    throw new Error ('Please select a smaller user name.');
	  	} else {*/
