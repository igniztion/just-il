function modelsBuilderController($scope, umbRequestHelper, $log, $http, modelsBuilderResource) {

    $scope.generate = function() {
        $scope.generating = true;
        umbRequestHelper.resourcePromise(
                $http.post(umbRequestHelper.getApiUrl("modelsBuilderBaseUrl", "BuildModels")),
                'Failed to generate.')
            .then(function (result) {
                $scope.generating = false;
                $scope.dashboard = result;
            });
    };

    $scope.reload = function () {
        $scope.ready = false;
        modelsBuilderResource.getDashboard().then(function (result) {
            $scope.dashboard = result;
            $scope.ready = true;
        });
    };

    function init() {
        modelsBuilderResource.getDashboard().then(function(result) {
            $scope.dashboard = result;
            $scope.ready = true;
        });
    }

    init();
}
angular.module("umbraco").controller("Umbraco.Dashboard.ModelsBuilderController", modelsBuilderController);
