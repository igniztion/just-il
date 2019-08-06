angular.module("umbraco").controller("eff.element.sizesController", function ($scope) {

	if ($scope.model.value == null) {
		$scope.model.value = 'auto';
	}
	//could read positions from defaultConfig
	// Element sizes
	$scope.elementSizes = [
		{
			name: 'FullWidth',
			value: 'full',
			width: '100%',
			dictionaryKey: 'WidthFull'
		},
		{
			name: 'ThreeQuarters',
			value: 'threequarters',
			width: '75%',
			dictionaryKey: 'WidthOneThird'
		},
		{
			name: 'TwoThirds',
			value: 'twothirds',
			width: '66.667%',
			dictionaryKey: 'WidthTwoThirds'
		},
		{
			name: 'Half',
			value: 'half',
			width: '50%',
			dictionaryKey: 'WidthHalf'
		},
		{
			name: 'OneThird',
			value: 'third',
			width: '33.333%',
			dictionaryKey: 'WidthOneThird'
		},
		{
			name: 'OneQuarter',
			value: 'quarter',
			width: '25%',
			dictionaryKey: 'WidthOneQuarter'
		},
		{
			name: 'auto',
			value: 'auto',
			width: 'auto',
			dictionaryKey: 'WidthAuto'
		}
	];
});
