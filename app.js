const celcius=document.querySelector('#celcius > input');
const fahrenheit=document.querySelector('#fahrenheit > input');
const kelvin=document.querySelector('#kelvin > input');

celcius.addEventListener('input',function(){
	const cel=parseFloat(celcius.value);
	const feh=(cel*(9/5))+32;
	const kel=cel+273.15;
	fahrenheit.value=feh;
	kelvin.value=kel;

});

fahrenheit.addEventListener('input',function(){
	const feh=parseFloat(fahrenheit.value);
	const cel=(feh-32)*(5/9);
	const kel=feh+459.67;
	celcius.value=cel;
	kelvin.value=kel;

});

kelvin.addEventListener('input',function(){
	const kel=parseFloat(kelvin.value);
	const cel=kel-273.15;
	const feh=kel-459.67;
	fahrenheit.value=feh;
	celcius.value=cel;

});