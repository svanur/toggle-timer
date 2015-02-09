define(
    [
        "lodash",
        "states/state"
    ],
    function (_, State) {
        "use strict";

    /**
     *
     */
    var StatePrototype = {

        create: function(proto) {
            var state = new State();

            if(_.isObject(proto)) {
                state.type = proto.type;
                state.go = proto.go;
            }

            return state;
        }

    }; // SatePrototype

    return StatePrototype;

});