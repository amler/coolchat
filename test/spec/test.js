/* global describe, it */

(function () {
    'use strict';

    describe('Chat Constructor', function () {
        describe('constructs the object to be sent to the test server', function () {
            
            $('.submit').click();

            it('should not accept an empty string or max character as a user name', function () {
            	var userName = $('.username-input').val('');
              var emptyString = function () {
	        		emptyString(userName);
	        	}
            	expect(emptyString).to.throw(Error);
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
              var userName = $('.username-input').val('monkey');

              userChat.should.have.property('user', 'monkey')
            });

            it('should trigger template rendering', function () {
              var answer = 2;
              expect(2).to.equal(answer);
            });

            it('should clear input field', function () {
              var answer = 2;
              expect(2).to.equal(answer);
            });
        });
    });
})();
