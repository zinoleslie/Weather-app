 const formbtn = document.getElementById('formInput');

const getweather = async (e) => {

	e.preventDefault();

	const city = document.getElementById('city').value;
	const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '26b4c59dd1msh08591a69b430eb6p11ac3cjsnbc29bbfb9eb8',
			'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		document.getElementById('temperature').innerHTML = `${result.current.temp_c}°C`;
		document.getElementById('location').innerHTML = result.location.name;
		document.getElementById('description').innerHTML = result.current.condition.text;
		document.getElementById('time').innerHTML = result.location.localtime;
	} catch (error) {
		document.getElementById('temperature').innerHTML = 'cannot provide temp info';
		document.getElementById('location').innerHTML = 'cannot provide locate info';	
		document.getElementById('description').innerHTML = 'cannot provide weather info';
	}
}

formbtn.addEventListener('submit', getweather) 