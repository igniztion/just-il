$(function() {

	// MAIN NAV ON DEVICES
	$(".btn-nav-toggle").click(function() {
		$("body").toggleClass("menu-open");
		$(this).toggleClass("open");
		$(".nav-main-device-panel").toggleClass("open");
	});

	$(".nav-main-device-panel .nav-link").click(function() {
		$("body.menu-open").removeClass("menu-open");
		$("#navMainToggle.open").removeClass("open");
		$(".nav-main-device-panel.open").removeClass("open");
	});

	$("#")

});
