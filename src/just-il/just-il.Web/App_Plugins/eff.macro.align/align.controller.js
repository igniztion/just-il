angular.module("umbraco").controller("eff.macro.AlignController", function ($scope) {

	if ($scope.model.value == null) {
		$scope.model.value = 'full';
	} 
	
	//could read positions from defaultConfig
	$scope.positions = [
		{
			Name: 'Full width',
			Value: 'full',
			DictionaryKey: 'AlignFull',
			IconClass: "icon-pos-full"
		},
		{
			Name: 'Left',
			Value: 'left',
			DictionaryKey: 'AlignLeft',
			IconClass: "icon-pos-left"
		},
		{
			Name: 'Right',
			Value: 'right',
			DictionaryKey: 'AlignRight',
			IconClass: "icon-pos-right"
		}//,
		//{
		//	Name: 'Center',
		//	Value: 'center',
		//	DictionaryKey: 'AlignCenter',
		//	IconClass: "icon-pos-center"
		//}
	];
});
