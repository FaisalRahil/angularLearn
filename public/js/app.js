'use strict';

var app = angular.module('traveller', ['ngRoute','ui-notification','angular-loading-bar','blockUI']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'pages/home',
    controller: 'HomeCtrl',
    resolve: {
      SomeData: function() {
        return true;
      }
    }
  }).when('/test1', {
    templateUrl: 'pages/test1',
    controller: 'T1Ctrl',
    resolve: {
      cb1: function() {
        return true;
      }
    }
  }).when('/test2', {
    templateUrl: 'pages/test2',
    controller: 'T2Ctrl',
    resolve: {
      cb2: function() {
        return true;
      }
    }
  }).otherwise({
    redirectTo:'/'
  });
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
}]);

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
}]);
app.config(function(blockUIConfig) {

  // Change the default overlay message
  blockUIConfig.message = 'Please stop clicking!';

  // Change the default delay to 100ms before the blocking is visible
  blockUIConfig.delay = 100;

});
app.controller('HomeCtrl', ['$scope', '$http', '$timeout', 'cfpLoadingBar', 'blockUI', 'SomeData', function($scope, $http, $timeout, cfpLoadingBar, blockUI, SomeData) {
  $scope.citiesTripsEn = [
    {id: 1,name: 'Tripoli',trips: 100},
    {id: 2,name: 'Benghazi',trips: 80},
    {id: 3,name: 'Misrata',trips: 50},
    {id: 4,name: 'Jafara',trips: 30},
    {id: 5,name: 'Murqub',trips: 20},
    {id: 6,name: 'Jabal al Gharbi',trips: 10},
    {id: 7,name: 'Zawiya',trips: 9},
    {id: 8,name: 'Nuqat al Khams',trips: 10},
    {id: 9,name: 'Jabal al Akhdar',trips: 5},
    {id: 10,name: 'Sirte',trips: 20},
    {id: 11,name: 'Marj',trips: 15},
    {id: 12,name: 'Al Wahat',trips: 1},
    {id: 13,name: 'Derna',trips: 24},
    {id: 14,name: 'Butnan',trips: 1},
    {id: 15,name: 'Sabha',trips: 40},
    {id: 16,name: 'Nalut',trips: 11},
    {id: 17,name: 'Murzuq',trips: 13},
    {id: 18,name: 'Wadi al Shatii',trips: 2},
    {id: 19,name: 'Wadi al Hayaa',trips: 4},
    {id: 20,name: 'Jufra',trips: 16},
    {id: 21,name: 'Kufra',trips: 12},
    {id: 22,name: 'Ghat',trips: 26}
  ];
  $scope.citiesTripsAr = [
    {id: 1,name: 'طرابلس',trips: 100},
    {id: 2,name: 'بنغازي',trips: 80},
    {id: 3,name: 'مصراته',trips: 50},
    {id: 4,name: 'الجفارة',trips: 30},
    {id: 5,name: 'المرقب',trips: 20},
    {id: 6,name: 'الجبل الغربي',trips: 10},
    {id: 7,name: 'الزاوية',trips: 9},
    {id: 8,name: 'النقاط الخمس',trips: 10},
    {id: 9,name: 'الجبل الأخضر',trips: 5},
    {id: 10,name: 'سرت',trips: 20},
    {id: 11,name: 'المرج',trips: 15},
    {id: 12,name: 'الواحات',trips: 1},
    {id: 13,name: 'درنة',trips: 24},
    {id: 14,name: 'البطنان',trips: 1},
    {id: 15,name: 'سبها',trips: 40},
    {id: 16,name: 'نالوت',trips: 11},
    {id: 17,name: 'مرزق',trips: 13},
    {id: 18,name: 'وادي الشاطئ',trips: 2},
    {id: 19,name: 'وادي الحياة',trips: 4},
    {id: 20,name: 'الجفرة',trips: 16},
    {id: 21,name: 'الكفرة',trips: 12},
    {id: 22,name: 'غات',trips: 26}
  ];
  // cfpLoadingBar.start();
  var myBlock = blockUI.instances.get('home');
  myBlock.start();
  if (SomeData) {
    $timeout(function(){
      // cfpLoadingBar.complete();
      myBlock.stop();
    }, 3000);
  };
  $scope.onSubmit = function(){
    console.log("Hey i'm submitted");
    console.log($scope.formModel);
  };
}]);
app.controller('T1Ctrl', ['$scope', '$http', '$timeout', 'cfpLoadingBar', 'blockUI', 'cb1', function($scope, $http, $timeout, cfpLoadingBar, blockUI, cb1) {
  // cfpLoadingBar.start();
  blockUI.start();
  if (cb1) {
    // $timeout(function(){
      // cfpLoadingBar.complete();
      blockUI.stop();
    // }, 3000);
  };
}]);
app.controller('T2Ctrl', ['$scope', '$http', '$timeout', 'cfpLoadingBar', 'blockUI', 'cb2', function($scope, $http, $timeout, cfpLoadingBar, blockUI, cb2) {
  // cfpLoadingBar.start();
  blockUI.start();
  if (cb2) {
    // $timeout(function(){
      // cfpLoadingBar.complete();
      blockUI.stop();
    // }, 3000);
  };
}]);