function Chat(a){this.username=a}function displayLogin(){$("#login").show(),$("#signed-in").hide(),$("#message-input").hide()}function displayGreeting(a){$("#signed-in").show(),$(".greeting span").html(a),$("#login").hide(),$("#message-input").show()}function timeSince(a){if(void 0==a)return"";if(1==isNaN(a))return a;if(""==a.trim())return"";a=parseInt(a),a=new Date(a);var b=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],c=b[a.getMonth()],d=a.getDate(),e=a.getFullYear(),f=a.getHours(),g=a.getMinutes();return 10>g&&(g="0"+g),12>f?c+". "+d+", "+e+" @ "+f+":"+g+"AM":f>=12?(f-=12,c+". "+d+", "+e+" @ "+f+":"+g+"PM"):void 0}function renderData(a){var b=$("#all-messages").html(),c=_.template(b);a.reverse(),a.forEach(function(a){if(lastId<a._id){a.time=timeSince(a.time);var b=c(a);$(".chat-content").prepend(b),lastId=a._id}})}function getNewChats(){$.getJSON(serverUrl).done(renderData)}var serverUrl="http://tiny-pizza-server.herokuapp.com/collections/chat-messages/",chat=null,lastId="";Chat.prototype.sendMessage=function(a){var b={user:this.username,message:a,time:Date.now(),meta:"",appID:"secret"};$.post(serverUrl,b)},displayLogin(),getNewChats(),setInterval(getNewChats,6e4),$("#login button").click(function(){var a=$(".username-input").val(),b=a.length;if(/[^a-zA-Z0-9]/.test(a))throw alert("Dude, try using some letters or numbers."),new Error("Invalid user name characters.");if(0>=b||b>15)throw alert("Sorry brah, please select a user name within 1-15 characters."),new Error("Invalid user name length.");chat=new Chat(a),displayGreeting(a)}),$("#signed-in button").click(function(){$(".username-input").val(""),chat=null,displayLogin()}),$(".message-button").click(function(){var a=$(".chat-message").val(),b=a.length;if(0>=b)throw alert("Yeah, well, you know, like, that's just where you put down your opinion, man."),new Error("Please select a smaller user name.");chat.sendMessage(a),$(".chat-message").val(""),getNewChats()});