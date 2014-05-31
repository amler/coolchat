/* global describe, it */

(function () {
  'use strict';

  describe('User Name Click Event', function () {
    describe('Validates user name and passes user property to Coolchat', function () {
     
      $('.submit').click();

      it('should not accept an empty string or max character as a user name', function () {
        $('.username-input').val('');
        var userName = $('.username-input').val();
        
        expect(userName).to.throw(Error);
      });

      it('should not accept more than 15 characters for a user name.', function(){
        var userName = $('.username-input').val('verylongassstring');
        var maxCharacter = function () {
          maxCharacter(userName);
        }
        expect(maxCharacter).to.throw(Error)
      });

      it('should not accept special characters for a user name.', function () {
        var userName = $('.username-input').val('!@#$%^&*()');
        var specialCharacter = function () {
          specialCharacter(userName);
        }
        expect(specialCharacter).to.throw(Error)
      });

      it('should pass user name to be a property of the contructor function', function () {
    // When using the .val() line would get this as the property jQuery.fn.init[0]}

        var userName = 'Scamler';
        var coolGal = new Setuser(userName);
        //console.log(coolGal);
        coolGal.should.have.property('user', 'Scamler')
      });

      it('should hide username input field', function () {
      var setusername = $('.wrap-input').html().length;
      //console.log(total);
          expect(setusername).to.equal(0);
      });

      it('should render login message and user name', function () {
      var renderLogin = $('.logged-in .greeting').html().length;
      //console.log(total);
          expect(setusername).to.equal(0);
      });

      it('should trigger template rendering', function () {
      var renderedDiv = $('.slides .owner-input').length;
      //console.log(total);
          expect(renderedDiv).to.equal(1);
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

      it('should add date property to constructor', function () {
        // how to get the result from the server
      
        //expect(userMessage).to.throw(Error);
      });

      it('should post to server', function () {
        // how to get the result from the server
      
        //expect(userMessage).to.throw(Error);
      });

      
      
    });
  });

})();
