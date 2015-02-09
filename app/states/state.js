define(
    [
        "lodash"
    ],
    function (_) {
    	"use strict";

    /**
     *
     */
    var State = function(type, goFunction) {
        this.type = type;
        this.getName = function() {
        	if( this.type===undefined) {
        		return "";
        	}
        	var name = _.chain(this.type)
        					.words()
        					.last() + " "
        					;
        	name += _.chain(this.type)
        					.words()
        					.dropRight(1)
        					.join(" ")
        					;
        	return _.capitalize(name.toLowerCase());
        };

        this.go = function () {
            throw 'The "go" function is not implemented!';
        };

        if(_.isFunction(goFunction)) {
            this.go = goFunction;
        }
    }; // Sate

    return State;

});