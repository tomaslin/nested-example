'use strict';

angular.module('nestedApp')
  .directive('nested', function () {
    return {
      template : '<div ng-include="getTemplateUrl()"></div>',
      restrict: 'A',
      scope:{
      	things: "=",
      	template: "@"
      },
      controller: function($scope) {
      	$scope.getTemplateUrl = function() {
  			return '/views/' + $scope.template + '.html'
		};
      },
      link: function postLink(scope, element, attrs) {
      }
    };
});