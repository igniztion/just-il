angular.module("umbraco").controller("eff.element.AlignController", function ($scope) {

	if ($scope.model.value == null) {
		$scope.model.value = 'normal';
	} 
	
	//could read positions from defaultConfig
	$scope.positions = [
		{
			Name: 'Normal',
			Value: 'normal',
			DictionaryKey: 'AlignNormal',
			CssClass: "align-normal"
		},
		{
			Name: 'Left',
			Value: 'left',
			DictionaryKey: 'AlignLeft',
			CssClass: "align-left"
		},
		{
			Name: 'Right',
			Value: 'right',
			DictionaryKey: 'AlignRight',
			CssClass: "align-right"
		},
		{
			Name: 'Center',
			Value: 'center',
			DictionaryKey: 'AlignCenter',
			CssClass: "align-center"
		}
	];
});
