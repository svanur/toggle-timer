define(
    [
        "lodash"
        //"../timer-operator"
    ],
    function (_) {
      "use strict";

    /**
     *
     */
    var State = function(TimerOperator, goFunction) {
        //this.type = type;

        this.go = function () {
            throw 'The "go" function is not implemented!';
        };

        if(_.isFunction(goFunction)) {
            this.go = goFunction;
        }

    }; // Sate

    return State;

});
