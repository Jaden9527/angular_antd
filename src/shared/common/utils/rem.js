//控制网页字体大小
(function() {
	! function() {
		function e() {
			var e = document.documentElement.clientWidth;
			var t = document.querySelector("html");
			var f = (e > 750 ? 750 : e) / 20;
			window.fontSize = f;
			t.style.fontSize = f + "px"
		}
		e(), window.addEventListener("resize", e);
	}();
})();