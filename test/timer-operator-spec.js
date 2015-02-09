/*global describe, it */
define(
	[
		'timer-operator',
		'states/state'
	],
	function (TimerOperator, State) {
		"use strict";

  		describe('TimerOperator', function () {

  			beforeEach(function() {
  				this.timerOperator = new TimerOperator();
  			});

			it('is an object', function () {
        		expect(_.isObject(this.timerOperator));
	      	});


   	  		it('has a "nextState" property', function () {
    	  		 expect(_.has(this.timerOperator, 'nextState')).toBeTruthy();
      		});

      		it('has a "setNextState" function', function () {
    	  		 expect(_.isFunction(this.timerOperator.setNextState)).toBeTruthy();
      		});

      		it('has a "go" function', function () {
    	  		 expect(_.isFunction(this.timerOperator.go)).toBeTruthy();
      		});

      		it('has a "change" function', function () {
    	  		 expect(_.isFunction(this.timerOperator.change)).toBeTruthy();
      		});

      		it('nextState sets and gets a state', function () {
      			var state = new State("SecondaryTimer.Start");
      			this.timerOperator.nextState = state;
    	  		expect(_.isEqual(this.timerOperator.nextState.type, state.type)).toBeTruthy();
      		});

      		describe("functions", function() {
      			it("setNextState works properly", function() {
      				var nextState = new State("SecondaryTimer.Start");
      				this.timerOperator.setNextState(nextState);
      				expect(_.isEqual(this.timerOperator.nextState, nextState, function(thisState, thatState) {
      					return _.isEqual(thisState.type, thatState.type)
      							&&
      							_.isEqual(thisState.name, thatState.name)
      							;
      				})).toBeTruthy();
      			});

      		it("the 'change' function sets next state", function() {
      			var state = new State("PrimaryTimer.Start", function() { console.info("This is it"); });
      			this.timerOperator.change(state);
      			expect( _.isEqual(state.type, this.timerOperator.nextState.type));
      		});

      		xit("the 'change' function also executes the next state´s go function", function() {
      			spyOn(State, 'go');
      			var goFunction = function(){console.info('hello go!');};
      			var state = new State("PrimaryTimer.Start", goFunction);
      			this.timerOperator.change(state);
      			expect(state.go).toHaveBeenCalled();
      		});

    		xit("the 'go' function executes the 'nextState' go function", function() {
      			spyOn(State, 'go');
      			var state = new State("PrimaryTimer.Start", function() { console.info("This is it"); });
      			this.timerOperator.setNextState(state);
 				this.timerOperator.go();
      			expect(State.go).toHaveBeenCalled();
      		});

      		});

	  });

});