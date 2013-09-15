'use strict';

angular.module('nestedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.things = [];
    
    $scope.things.awesomeThings = [
      'one',
      'two',
      'three'
    ];

    $scope.reshuffle = function(){
    	$scope.things.awesomeThings = [
    		'uno',
    		'dos',
    		'tres'
    	];
    };
  }
  );
