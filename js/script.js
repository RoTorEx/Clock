const hr = document.querySelector('#hr')
const sc = document.querySelector('#sc')

let deg = 6;

setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;
	
	hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
	mn.style.transform = `rotateZ(${(mm)}deg)`;
	sc.style.transform = `rotateZ(${(ss)}deg)`;
});

document.querySelector('body').addEventListener('click', () => {
  document.querySelector('.clock').classList.toggle('clock-dis');
  // document.querySelector('.clock').classList.toggle('clock-dis');
});