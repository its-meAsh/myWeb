const timeSpan = document.querySelector("#timeSpan");
const greetSpan = document.querySelector("#greetSpan");
const dateSpan = document.querySelector("#dateSpan");
const weekSpan = document.querySelector("#weekSpan");

const interval = setInterval(() => {
	let date = new Date();
	let hrs = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	let msec = date.getMilliseconds();

	function addZero(to) {
		let array = String(to).split("");
		if (array.length == 1) {
			array.unshift("0");
		}
		let returnVal = array.join("");
		return returnVal;
	}

	function addMs(to) {
		let array = String(to).split("");
		let cond = 3 - array.length;
		for (let i = 0; i < cond; i++) {
			array.unshift("0");
		}
		let returnVal = array.join("")
		return returnVal;
	}
	let greet;
	if (0 <= hrs && hrs<12){
		greet = "Morning"
	}else if (12 <= hrs && hrs<18){
		greet = "Afternoon"
	}else if (18 <= hrs && hrs<21){
		greet = "Evening"
	}else if (21 <= hrs && hrs<23){
		greet = "Night"
	}
	greetSpan.innerHTML = greet;
	
	hrs = addZero(hrs);
	min = addZero(min);
	sec = addZero(sec);
	msec = addMs(msec);

	timeSpan.innerHTML = `${hrs}:${min}:${sec}:${msec}`

	let month = date.getMonth();
	let din = date.getDate();
	let year = date.getFullYear();

	din = addZero(din);
	month = addZero(month)

	dateSpan.innerHTML = `${month}-${din}-${year}`

	let day = date.getDay();
	let dayW;
	switch (day) {
		case 1:
			dayW = "Monday";
			break;
		case 2:
			dayW = "Tuesay";
			break;
		case 3:
			dayW = "Wednesday";
			break;
		case 4:
			dayW = "Thursday";
			break;
		case 5:
			dayW = "Friday";
			break;
		case 6:
			dayW = "Saturday";
			break;
		case 7:
			dayW = "Sunday";
			break;
	}
	weekSpan.innerHTML = dayW;
	
	
}, 5);

const box = document.querySelector("#searchBox");

box.addEventListener('keyup',(e)=>{
	if (e.keyCode == 13){
		let val = box.value;
		if (val != ""){
			location.replace(`https://www.google.com/search?q=${val}`)
		}
	}
})