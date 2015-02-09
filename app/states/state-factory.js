define(
    [
        "lodash",
        "states/states"
    ],
    function (_, States) {
        "use strict";

    /**
     *
     */
    var StateFactory = function StateFactory() {
        this.create = function (type) {
            var state;

            switch(type) {
                case "PrimaryTimer.Start":
                    state = States.PrimaryTimer.Start();
                break;
                case "PrimaryTimer.Stop":
                    state = States.PrimaryTimer.Stop();
                break;
                default:
                    //
                    // PrimaryTimer.Start
                    //
                    state = new States.PrimaryTimer.Start();
                break;
            }// switch

            return state;
        }
    }

    return StateFactory;

});