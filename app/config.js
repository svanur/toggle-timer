require.config({
  // make components more sensible
  // expose lodash
  waitSeconds: 200,
  paths: {
    "components": "../bower_components",
    "lodash": "../bower_components/lodash/lodash",
    "knockout": "../bower_components/knockout/dist/knockout",
    "timer": "./timer",
    "pubsub": "../bower_components/pubsub.js/src/pubsub"
  }
});
