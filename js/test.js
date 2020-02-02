function getOdd(number) {
	return new Promise((resolve, reject) => {
		let reminder = number % 2;
		if (reminder == 0) {
			reject({
				message: number + " is not odd"
			})
		} else if (reminder == Math.round(reminder)) {
			resolve({
				message: number + " is odd"
			});
		} else {
			reject({
				message: "invalid entry"
			})
		}
	})
};

function getEven(number) {
	return new Promise((resolve, reject) => {
		let reminder = number % 2;
		if (reminder == 0) {
			resolve({
				message: number + " is even"
			})
		} else if (reminder == Math.round(reminder)) {
			reject({
				message: number + " is not even"
			});
		} else {
			reject({
				message: "invalid entry"
			})
		}
	})
};

var bod = document.getElementsByTagName("BODY")[0];
var box = document.getElementById("main-grid")
let i = Math.floor(Math.random() * 10)
var n = document.createElement("h1")
n.textContent = i

d = document.createElement("div")
box.appendChild(d)

let p = document.createElement("p")
p.textContent = "Executing test.js"
p.style.border = "1px solid gray"
p.style.borderRadius = "10px"
p.style.padding = "8px"
d.style.width = "100%"
d.style.height = "100%"
d.style.display = "flex"
d.style.flexDirection = "column"
d.style.justifyContent = "center"
d.style.alignItems = "center"

var neg = document.createElement("p")
neg.textContent = "placeholder"
var pos = document.createElement("p")
pos.textContent = "placeholder"

getOdd(i).then((message) => {
	console.log(message.message)
	pos.textContent = "positive: " + message.message
}).catch((error) => {
	console.log(error.message)
	neg.textContent = "negative: " + error.message
})
getEven(i).then((message) => {
	console.log(message.message)
	pos.textContent = "positive: " + message.message

}).catch((error) => {
	console.log(error.message)
	neg.textContent = "negative: " + error.message
})

d.appendChild(p)
d.appendChild(n)
d.appendChild(pos)
d.appendChild(neg)
d.style.backgroundColor = "#666"
d.style.boxShadow = "0 0 8px rgba(0,0,0,0.15)"
d.style.color = "white"
d.style.padding = "40px"