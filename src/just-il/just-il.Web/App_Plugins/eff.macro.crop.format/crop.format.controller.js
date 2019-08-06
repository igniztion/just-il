angular.module("umbraco").controller("eff.macro.crop.formatController", function ($scope) {

	if ($scope.model.value == null) {
		$scope.model.value = '16x9';
	}
	//could read positions from defaultConfig
	// CROP FORMATS
	$scope.cropFormats = [
		{
			Name: 'Golden-ratio (16x9)',
			Value: '16x9',
			X: '16',
			Y: '9',
			Ratio: '0.5625',
			DictionaryKey: 'FormatGolden'
		},
		{
			Name: 'Square (1x1)',
			Value: '1x1',
			X: '1',
			Y: '1',
			Ratio: '1',
			DictionaryKey: 'FormatSquare'
		},
		{
			Name: 'Portrait (2x3)',
			Value: '2x3',
			X: '2',
			Y: '3',
			Ratio: '1.5',
			DictionaryKey: 'FormatPortrait'
		},
		{
			Name: 'Normal (3x2)',
			Value: '3x2',
			X: '3',
			Y: '2',
			Ratio: '0.666667',
			DictionaryKey: 'FormatNormal'
		},
		{
			Name: 'Banner (4x1)',
			Value: '4x1',
			X: '4',
			Y: '1',
			Ratio: '0.25',
			DictionaryKey: 'FormatBanner'
		}
	];
});
