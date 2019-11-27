document.addEventListener('DOMContentLoaded', function () {
    
	function hideArrow() {
	 	const arrow = document.querySelector("#scroll-arrow");
		arrow.style.display = "none"
	}

	window.addEventListener('scroll', hideArrow);
});