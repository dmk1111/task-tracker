require("./style.scss");
let testComponent = require("./test/component");


module.exports = function(app) {

  app.component('testComponent', testComponent);

  const testController = require("./test/controller.js");
  app.component('testComponent', {
    bindings: {
      item: '='
    },
    template: require('./test/template.html'),
    controller: testController
  });

};
