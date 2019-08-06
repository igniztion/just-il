angular.module("umbraco").controller("eff.macro.crop.sizesController", function ($scope) {

	if ($scope.model.value == null) {
		$scope.model.value = 'M';
	}
	//could read positions from defaultConfig
	// CROP SIZES
	$scope.cropSizes = [
		{
			Name: 'X-Large (w1200)',
			Value: 'XL',
			Width: '1200',
			DictionaryKey: 'SizeXL'
		},
		{
			Name: 'Large (w800)',
			Value: 'L',
			Width: '800',
			DictionaryKey: 'SizeL'
		},
		{
			Name: 'Medium (w500)',
			Value: 'M',
			Width: '500',
			DictionaryKey: 'SizeM'
		},
		{
			Name: 'Small (w300)',
			Value: 'S',
			Width: '300',
			DictionaryKey: 'SizeS'
		},
		{
			Name: 'X-Small (w200)',
			Value: 'XS',
			Width: '200',
			DictionaryKey: 'SizeXS'
		}
	];
});
