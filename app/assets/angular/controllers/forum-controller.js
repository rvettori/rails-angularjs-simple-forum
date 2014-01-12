'use strict';

var app = angular.module('app');

angular.module('app').controller('ForumIndexController', ['$scope','Restangular' ,function($scope, Restangular) {
    var Forum = Restangular.all('forums');
    Forum.getList().then(function(data){   
        console.log(data);
        $scope.items = data;
    });

    $scope.destroy = function(item) {
        item.remove().then(function(){
            $scope.items.splice($scope.items.indexOf(item),1);
        });
    }
}]);

app.controller('ForumCreateController', ['$scope', '$location', '$routeParams', 'Restangular', function($scope, $location, $routeParams, Restangular) {
    //The save method which is called when the user wants to submit their data
    console.log('route params >>>>>>>>>>>>>>>>')
    console.log($routeParams.uri)
    var Forum = Restangular.all('forums')
    $scope.save = function() {
        Forum.post($scope.forum).then(function(){
            $location.path('/forums');
        },function(resp){
            $scope.errors = resp.data.errors;
        });
    }
}]);

// //A controller to show the forum and all it's glory
// app.controller('ForumShowController', ['$scope', '$routeParams', 'Restangular', function($scope, $routeParams, Restangular) {
//     // $scope.forum = Forum.get({id: $routeParams.id})
//     Restangular.one('forums',$routeParams.id).get().then(function(forum){
//         // $scope.forum = forum
//         console.log(forum);
//     });
// }]);
