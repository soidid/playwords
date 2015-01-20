
var app = angular.module("app", [
  "ngRoute"

]);

app.filter('htmlToPlaintext', function() {
    return function(text) {
      var plain = String(text).replace(/<[^>]+>/gm, '');

      plain.replace(/&nbsp;/gi,' ');
      return plain;
    }
});

//http://stackoverflow.com/questions/16310298/if-a-ngsrc-path-resolves-to-a-404-is-there-a-way-to-fallback-to-a-default
app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {

      scope.$watch(function() {
          return attrs['ngSrc'];
        }, function (value) {
          if (!value) {
            element.attr('src', attrs.errSrc);
          }
      });

      element.bind('error', function() {
        element.attr('src', attrs.errSrc);
      });
    }
  }
});

app.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider){
    $routeProvider.
      when('/index',{
      templateUrl: 'partials/index.html',
      controller: 'indextrl'
    }).
      otherwise({
      redirectTo:'/',
      templateUrl: 'partials/index.html',
      controller: 'IndexCtrl'
    });
    //$locationProvider.html5Mode(true);

  }
]);

app.factory('DataService', function ($http, $q){

  var DataService = {};
  DataService.getData = function(path){
    var deferred = $q.defer();
    $http.get('data/'+path+'.json').
        success(function(data, status, headers, config) {
          deferred.resolve(data);
        }).
        error(function(data, status, headers, config) {
          deferred.resolve(data);
        });
    return deferred.promise;
  };


  return DataService;
})


app.controller('IndexCtrl', ['$scope', 'DataService', '$location', '$sce', function ($scope, DataService, $location, $sce){
  
  
  var client = new ZeroClipboard( $("#copy-button") );
  client.on( 'ready', function(event) {
      // console.log( 'movie is loaded' );
      client.on( 'copy', function(event) {
        event.clipboardData.setData('text/plain', $("#copy-text").text());//event.target.innerHTML);
      } );
      client.on( 'aftercopy', function(event) {
        console.log('Copied text to clipboard: ' + event.data['text/plain']);
      } );
  } );

  client.on( 'error', function(event) {
      // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
      ZeroClipboard.destroy();
  } );

  $scope.view = 'word';

  DataService.getData('result').then(function(data){
      $scope.meeting = data;
      $scope.sayings = [];
      $scope.stat = [];
      var temp = {};

      for(var key in data.sayings){
          //console.log(data.sayings[key]);
          $scope.sayings.push(data.sayings[key]);

          if(!temp[data.sayings[key].speaker])
              temp[data.sayings[key].speaker] = 0;
          
          temp[data.sayings[key].speaker]++;

      }
      for(var key in temp){
          $scope.stat.push({'name':key,'count':temp[key]});

      }
      $scope.stat.sort(function (a,b) {
          return b.count - a.count;
      });
      console.log($scope.stat);

     

      
  });
  



}]);





