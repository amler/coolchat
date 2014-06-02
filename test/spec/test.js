/* global describe, it */

(function () {
  'use strict';

  describe('User Name Click Event', function () {
    describe('Validates user name and passes user property to Coolchat', function () {


      it('should not accept an empty string or max character as a user name', function () {
        // false positive
        $('.username-input').val('');
        $('#login button').click(function() {
          var userName = $('.username-input').val();
          expect(userName).to.throw(Error)
        })
      });

      it('should not accept more than 15 characters for a user name.', function(){
        $('.username-input').val('varylongstringrihrh');
        $('#login button').click(function() {
          var userName = $('.username-input').val();
          expect(userName).to.throw(Error)
        })
      });

      it('should not accept special characters for a user name.', function () {
        var userName = $('.username-input').val('!@#$%^&*()');
        var specialCharacter = function (userName) {
          chat = new Chat(userName);
          console.log(userName);
        }
        expect(chat).to.throw(Error)
      });

      it('should pass user name to be a property of the contructor function', function () {
      // When using the .val() line would get this as the property jQuery.fn.init[0]}

        var userName = 'Scamler';
        var chat = new Chat(userName);
        //console.log(coolGal);
        chat.should.have.property('username', 'Scamler')
      });

      it('should hide username input field', function () {
      var setusername = $('.wrap-input').html().length;
      //console.log(total);
          expect(setusername).to.equal(1);
      });

      it('should render login message and user name', function () {
      var renderLogin = $('.logged-in .greeting').html().length;
      //console.log(total);
          expect(setusername).to.equal(0);
      });
    });
  });
  
  describe('Log Out Click Event', function () {
    describe('Should reset username and chat object', function () {
     
      $('#signed-in button').click();

      it('should reset value on click', function () {
        var loggedOut = $('.username-input').val();
        expect(loggedOut).to.be.empty;
      });

      it('should add null to constructor', function () {
        // how to get the result from the server
        expect(chat).to.be.null;
      });

      it('should show login', function () {
        // how to get the result from the server
        var countLogin = $('#login').length;
        //console.log(total);
            expect(countLogin).to.equal(1);
        //expect(userMessage).to.throw(Error);
      }); 
    });
  });

  describe('Message Post Click Event', function () {
    describe('Validates user message and passes user property to setmessage', function () {
     
      $('.message-button').click();

      it('should not accept an empty string for a message', function () {
        var userMessage = $('.chat-message').val('');
        if (userMessage.length  <= 0) 
        expect(userMessage.length).to.throw(Error);
      });

      it('should add message property to constructor', function () {
        // how to get the result from the server
      
        //expect(userMessage).to.throw(Error);
      });

    });
  });

})();
