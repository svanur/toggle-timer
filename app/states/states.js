define(
	[
		"lodash",
        "states/state-prototype"
	],
	function (_, StatePrototype) {
		"use strict";

	/**
	 *
	 */
	var States = {

		PrimaryTimer: {

			Start: function() {
				return StatePrototype.create({
					"type": "PrimaryTimer.Start",
					"go": function() {
								console.info('THIS is the PrimaryTimer.Start go function');
		    				}
		    	});

			}, //Start

			Stop: function() {
				return StatePrototype.create({
					"type": "PrimaryTimer.Stop",
					"go": 	function() {
		    					console.info('THIS is the PrimaryTimer.Stop go function');
		    				}
		    	});

			} //Stop

		}// PrimaryTimer



    };

    return States;

});
