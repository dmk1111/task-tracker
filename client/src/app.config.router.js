const testComponent = require('./components/test/component');


module.exports = function(app) {

  app.component('testComponent', testComponent);

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('home', {
            url: '/',
            component: 'testComponent'
        })

        .state('home.boards', {
          url: '/boards',
          component: 'boardsComponent'
        })

        .state('home.tasks', {
            url: '/tasks',
            component: 'tasksComponent'
        });

    $urlRouterProvider.otherwise('/');
  }]);

}
