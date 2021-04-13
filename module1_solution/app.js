(function () {
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.foodList = "";
        $scope.response = "";
        
        $scope.checkList = function () {
            var foods = splitFood($scope.foodList);
            if ($scope.foodList == "") {
                $scope.response = "Please enter the data first";
            } else if (foods.length > 3){
                $scope.response = "Too much!";
            } else {
                $scope.response = "Enjoy!";
            }
        }

        function splitFood(str) {
            return str.split(',');
        }

    }

})();