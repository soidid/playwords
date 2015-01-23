
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
      templateUrl: 'partials/index.html'
    }).
      when('/wordcloud',{
      templateUrl: 'partials/wordcloud.html',
      controller: 'wordcloudCtrl'
    }).
      when('/contribution',{
      templateUrl: 'partials/contributionNav.html'
    }).
      when('/contribution/:billName',{
      templateUrl: 'partials/contribution.html',
      controller: 'contributionCtrl'
    }).
      when('/proposals',{
      templateUrl: 'partials/proposals.html',
      controller: 'proposalsCtrl'
    }).
      when('/proposal',{
      templateUrl: 'partials/proposal.html',
      controller: 'proposalCtrl'
    }).
      when('/saying',{
      templateUrl: 'partials/saying.html',
      controller: 'sayingCtrl'
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

app.controller('wordcloudCtrl', ['$scope', 'DataService', '$location', '$sce', function ($scope, DataService, $location, $sce){
  
  
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

  DataService.getData('Nationality').then(function(data){
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

app.controller('contributionCtrl', ['$scope', 'DataService', '$location', '$routeParams', '$sce', function ($scope, DataService, $location, $routeParams, $sce){
  var billName = 'Nationality';//default
  if($routeParams.billName === 'FoodSafety'){
     billName = $routeParams.billName;
  }

  DataService.getData(billName).then(function(data){
      $scope.meeting = data;
      $scope.sayings = [];
      $scope.stat = [];//{name: 段宜康, count: 20}

      var temp = {};
      $scope.wordcount = {};
      var count = 0;

      $scope.colorSet = {};//{key: 段宜康, color: #}
      
      $scope.meeting.totalWord = 0;//發言字數統計

      for(var key in data.sayings){
          //console.log(data.sayings[key]);
          data.sayings[key].index = count;

          $scope.sayings.push(data.sayings[key]);

          if(!temp[data.sayings[key].speaker])
              temp[data.sayings[key].speaker] = 0;
          temp[data.sayings[key].speaker]++;

          if(!$scope.wordcount[data.sayings[key].speaker])
              $scope.wordcount[data.sayings[key].speaker] = 0;
        
          // console.log(data.sayings[key].paragraph);
          // console.log(data.sayings[key].paragraph.length);
          // console.log('-----');

          $scope.meeting.totalWord += data.sayings[key].paragraph.length;
          $scope.wordcount[data.sayings[key].speaker] += data.sayings[key].paragraph.length;

          count++;

      }
      $scope.meeting.total = count;//發言次數

      //change word count to array
      $scope.wordcountArray = [];
     
      for(var key in $scope.wordcount){
          var percentage = Math.floor($scope.wordcount[key] / $scope.meeting.totalWord * 100,0);
          //var percentage = Math.round($scope.wordcount[key] / $scope.meeting.totalWord * 100,0);
          
          $scope.wordcountArray.push({'name':key,'count':$scope.wordcount[key], 'percentage':percentage}); 
          count++;
      }
      $scope.wordcountArray.sort(function (a,b) {
          return b.count - a.count;
      });
      
      count = 0;
      for(var key in $scope.wordcountArray){
          var color = $scope.getColor(count);
          $scope.wordcountArray[key].color = color;
          count++;
      }



      var count = 0;
      for(var key in temp){
          $scope.stat.push({'name':key,'count':temp[key],'word_count':$scope.wordcount[key]});
          $scope.colorSet[key] = $scope.getColor(count);
          count++;   
      }
      console.log($scope.colorSet);

      $scope.stat.sort(function (a,b) {
          return b.count - a.count;
      });

  });

  $scope.getColor = function(index){
    $scope.colors = ['#d53e4f','#fc8d59','#fee08b','#ffffbf','#e6f598','#99d594','#3288bd'];
    return $scope.colors[index%7];
  };

  $scope.goToSaying = function (index) {
    console.log("Go to saying:"+index);
    var element = $( "#saying-"+index );
    var offset = element.offset();
    $('body').animate({scrollTop:offset.top}, 0);

  };
}]);
app.controller('sayingCtrl', ['$scope', 'DataService', '$location', '$routeParams', '$sce', function ($scope, DataService, $location, $routeParams, $sce){

  DataService.getData('saying').then(function(data){
      $scope.meeting = data;
      $scope.sayings = [];
      $scope.stat = [];//{name: 段宜康, count: 20}

      var temp = {};
      $scope.wordcount = {};
      var count = 0;

      $scope.colorSet = {};//{key: 段宜康, color: #}
      
      $scope.meeting.totalWord = 0;//發言字數統計

      for(var key in data.sayings){
          //console.log(data.sayings[key]);
          //data.sayings[key].index = count;

          $scope.sayings.push(data.sayings[key]);

          if(!temp[data.sayings[key].speaker])
              temp[data.sayings[key].speaker] = 0;
          temp[data.sayings[key].speaker]++;

          if(!$scope.wordcount[data.sayings[key].speaker])
              $scope.wordcount[data.sayings[key].speaker] = 0;
        
          // console.log(data.sayings[key].paragraph);
          // console.log(data.sayings[key].paragraph.length);
          // console.log('-----');

          $scope.meeting.totalWord += data.sayings[key].paragraph.length;
          $scope.wordcount[data.sayings[key].speaker] += data.sayings[key].paragraph.length;

          count++;

      }
      $scope.meeting.total = count;//發言次數

      //change word count to array
      $scope.wordcountArray = [];
     
      for(var key in $scope.wordcount){
          var percentage = Math.floor($scope.wordcount[key] / $scope.meeting.totalWord * 100,0);
          //var percentage = Math.round($scope.wordcount[key] / $scope.meeting.totalWord * 100,0);
          
          $scope.wordcountArray.push({'name':key,'count':$scope.wordcount[key], 'percentage':percentage}); 
          count++;
      }
      $scope.wordcountArray.sort(function (a,b) {
          return b.count - a.count;
      });
      
      count = 0;
      for(var key in $scope.wordcountArray){
          var color = $scope.getColor(count);
          $scope.wordcountArray[key].color = color;
          count++;
      }



      var count = 0;
      for(var key in temp){
          $scope.stat.push({'name':key,'count':temp[key],'word_count':$scope.wordcount[key]});
          $scope.colorSet[key] = $scope.getColor(count);
          count++;   
      }
      console.log($scope.colorSet);

      $scope.stat.sort(function (a,b) {
          return b.count - a.count;
      });

  });

  $scope.getColor = function(index){
    $scope.colors = ['#d53e4f','#fc8d59','#fee08b','#ffffbf','#e6f598','#99d594','#3288bd'];
    return $scope.colors[index%7];
  };

  $scope.goToSaying = function (index) {
    console.log("Go to saying:"+index);
    var element = $( "#saying-"+index );
    var offset = element.offset();
    $('body').animate({scrollTop:offset.top}, 0);

  };
}]);
app.controller('proposalsCtrl', ['$scope', 'DataService', '$location', '$routeParams', '$sce', function ($scope, DataService, $location, $routeParams, $sce){
  
  DataService.getData('Proposals').then(function(data){
      $scope.proposals = data;
  });

}]);
app.controller('proposalCtrl', ['$scope', 'DataService', '$location', '$routeParams', '$sce', function ($scope, DataService, $location, $routeParams, $sce){
  $scope.getColor = function(index){
    $scope.colors = ['#d53e4f','#fc8d59','#fee08b','#ffffbf','#e6f598','#99d594','#3288bd'];
    return $scope.colors[index%7];
  };
  DataService.getData('Proposals').then(function(data){
      
      //handle name & position data
      for(var key in data.content){
          var count = {};//count saying
          var party = {};
          var count_total = 0;
         

          for(var index in data.content[key].discuss){
              var name = data.content[key].discuss[index].speaker;
              

              if(name.indexOf("主席")!==-1){
                data.content[key].discuss[index].chairman = "主席";

              }else{
                if(name.indexOf("委員")!==-1)
                  data.content[key].discuss[index].position = "立法委員";

              }
              name = name.replace("主席","");
              name = name.replace("（","");
              name = name.replace("）","");
              name = name.replace("委員","");
              if(name.length > 3){
                 var position = name.substring(1,name.length-2);
                 name = name.substring(0,1)+name.substring(name.length-2,name.length);
                 data.content[key].discuss[index].position = position
              }

              if(!count[name]){//assuming name is unique
                 count[name] = 0;     
              }
              count[name] += data.content[key].discuss[index].paragraph.length;
              count_total += data.content[key].discuss[index].paragraph.length;
              
              party[name] = data.content[key].discuss[index].speaker_party;

              data.content[key].discuss[index].speaker = name;
              
          }
          var count_array = [];
          for(var kk in count){
            count_array.push({"name":kk,"count":count[kk],"percentage":Math.floor(count[kk]/count_total*100), "party":party[kk]});
          }
          count_array.sort(function (a,b) {
            return b.count - a.count;
          })
          var count_index = 0;
          count_array.map(function (item) {
            item.color = $scope.getColor(count_index);
            count_index++;
          });


          data.content[key].countTotal = count_total;
          data.content[key].countObj = count;
          data.content[key].countArray = count_array;


      }
      //
      $scope.proposals = data;

  });
  $scope.currentLine = '第二條之一';

  $scope.setFocus = function (line) {
    $scope.currentLine = line;
  };
  $scope.isFocus = function (line) {
    return $scope.currentLine === line;
  };

  $scope.view = 'discuss';
  $scope.isView = function (value) {
    return $scope.view === value;
  };
  $scope.setView = function (value) {
    $scope.view = value;
  };

}]);





