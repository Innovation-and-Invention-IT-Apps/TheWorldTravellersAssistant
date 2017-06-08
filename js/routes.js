angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.trackTravel', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/trackTravel.html',
        controller: 'trackTravelCtrl'
      }
    }
  })

  .state('tabsController.travelManagement', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/travelManagement.html',
        controller: 'travelManagementCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('accountActivation', {
    url: '/page8',
    templateUrl: 'templates/accountActivation.html',
    controller: 'accountActivationCtrl'
  })

  .state('aboutTheApp', {
    url: '/page9',
    templateUrl: 'templates/aboutTheApp.html',
    controller: 'aboutTheAppCtrl'
  })

  .state('reportIssue', {
    url: '/page10',
    templateUrl: 'templates/reportIssue.html',
    controller: 'reportIssueCtrl'
  })

  .state('tabsController.createTravelPlan', {
    url: '/page11',
    views: {
      'tab2': {
        templateUrl: 'templates/createTravelPlan.html',
        controller: 'createTravelPlanCtrl'
      }
    }
  })

  .state('tabsController.editTravelPlan', {
    url: '/page12',
    views: {
      'tab2': {
        templateUrl: 'templates/editTravelPlan.html',
        controller: 'editTravelPlanCtrl'
      }
    }
  })

  .state('tabsController.removeTravelPlan', {
    url: '/page13',
    views: {
      'tab2': {
        templateUrl: 'templates/removeTravelPlan.html',
        controller: 'removeTravelPlanCtrl'
      }
    }
  })

  .state('tabsController.myTravelReport', {
    url: '/page14',
    views: {
      'tab2': {
        templateUrl: 'templates/myTravelReport.html',
        controller: 'myTravelReportCtrl'
      }
    }
  })

  .state('tabsController.sendTravelInvitations', {
    url: '/page15',
    views: {
      'tab2': {
        templateUrl: 'templates/sendTravelInvitations.html',
        controller: 'sendTravelInvitationsCtrl'
      }
    }
  })

  .state('tabsController.viewTravellersList', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/viewTravellersList.html',
        controller: 'viewTravellersListCtrl'
      }
    }
  })

  .state('tabsController.contactTravellers', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/contactTravellers.html',
        controller: 'contactTravellersCtrl'
      }
    }
  })

  .state('tabsController.trackTravelStatus', {
    url: '/page18',
    views: {
      'tab1': {
        templateUrl: 'templates/trackTravelStatus.html',
        controller: 'trackTravelStatusCtrl'
      }
    }
  })

  .state('tabsController.trackCurrentTravel', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/trackCurrentTravel.html',
        controller: 'trackCurrentTravelCtrl'
      }
    }
  })

  .state('tabsController.teamTable', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/teamTable.html',
        controller: 'teamTableCtrl'
      }
    }
  })

  .state('tabsController.locateOnMap', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/locateOnMap.html',
        controller: 'locateOnMapCtrl'
      }
    }
  })

  .state('tabsController.notifyOthers', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/notifyOthers.html',
        controller: 'notifyOthersCtrl'
      }
    }
  })

  .state('tabsController.sendTextMessage', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/sendTextMessage.html',
        controller: 'sendTextMessageCtrl'
      }
    }
  })

  .state('tabsController.askToEnableGPS', {
    url: '/page24',
    views: {
      'tab1': {
        templateUrl: 'templates/askToEnableGPS.html',
        controller: 'askToEnableGPSCtrl'
      }
    }
  })

  .state('tabsController.notifyInvisibility', {
    url: '/page25',
    views: {
      'tab1': {
        templateUrl: 'templates/notifyInvisibility.html',
        controller: 'notifyInvisibilityCtrl'
      }
    }
  })

  .state('tabsController.refreshInterval', {
    url: '/page26',
    views: {
      'tab3': {
        templateUrl: 'templates/refreshInterval.html',
        controller: 'refreshIntervalCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')


});