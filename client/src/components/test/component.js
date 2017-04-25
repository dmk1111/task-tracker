const TestController = require('./controller.js');

const testComponent = {
    bindings: {
        item: '='
    },
    template: require('./template.html'),
    controller: TestController
};

module.exports = testComponent;
