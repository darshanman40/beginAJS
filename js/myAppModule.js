var myAppModule = angular.module('myAppModule',[]);
myAppModule.filter('stripDashes',function(){
	return function(txt){
		//filter code would go here
		return txt.split('-').join(' ');
	};
});

myAppModule.filter("toTitleCase", function () {
    return function (str) {
        return str.replace(/\w\S*/g, function(txt){ return txt.charAt(0).toUpperCase() + txt.
        substr(1).toLowerCase();});
    };
});

/*
myAppModule.controller('MyFilterDemoCtrl', function($scope){
		//controller code would go here
		var someData = {
            firstName: 'JENNA',
            surname: 'GRANT',
            dateJoined: new Date(2010, 2, 23),
            consumption: 123.659855,
            plan: 'super-basic-plan'
        };
        $scope.data=someData;
	}
);
*/
myAppModule.controller('myProductDetailCtrl', function($scope){
		//controller code would go here
		$scope.isHidden = true;

		$scope.showHideColors = function () {
    		$scope.isHidden = !$scope.isHidden;
		}
	}
);