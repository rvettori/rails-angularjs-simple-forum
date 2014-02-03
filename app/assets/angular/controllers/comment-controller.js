'use strict';

var app = angular.module('app');
app.controller('CommentsController', ['$scope', '$routeParams', 'Restangular',
    function($scope, $routeParams, Restangular) {
        // URL: /forums/:forum_id/comments/:id
        // console.log('params=====================');
        // console.log($routeParams);
        var Comment = Restangular.one($routeParams.uri).all('comments');
        Comment.getList().then(function(data) {
            $scope.comments = data;
        });

        //Define a 'save' method which will be called from the view.
        $scope.save = function() {
            var data = {
                name: $scope.name,
                body: $scope.body
            };
            Comment.post(data).then(
                function(response) {
                    $scope.comments.unshift(response);
                    $scope.name = $scope.body = "";
                },
                function(response) {
                    $scope.errors = response.data.errors;
                });

        }
    }
]);
