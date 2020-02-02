document.addEventListener('DOMContentLoaded', function () {
    
	function showConsoleLog() {
	 	const feed = document.querySelector("#feed");
		feed.textContent += feed.textContent
		
	}

	//window.addEventListener('scroll', showConsoleLog());
	
	const nametag = document.querySelector("#nametag")
	const nametagText = nametag.textContent
	const splitText  = nametagText.split("")
	nametag.textContent = ""
		
	for (let i=0; i < nametagText.length; i++){
		nametag.innerHTML += "<span>" + nametagText[i] + "</span>"
	}
	
	let char = 0;
	let timer = setInterval(onTick, 50)

	function onTick() {
		nametag.style.display = "block"
		const span = document.querySelectorAll('span')[char];
		span.classList.add('fade');
		char++;
		
		if (char === nametagText.length){
			complete()
			return;
		}
	}
	
	function complete() {
		clearInterval(timer);
		timer = null;
	}
	});