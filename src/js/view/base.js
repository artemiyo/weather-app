export const elements = {
	date: document.querySelector('.location__date'),
	searchInput: document.querySelector('.search__input'),
	location: document.querySelector('.heading-primary'),
	weather: document.querySelector('.weather'),
	weatherForecast: document.querySelector('.weather-forecast'),
	weatherMain: document.querySelector('.weather-main'),
	currentTemp: document.querySelector('.weather-main__temperature'),
	description: document.querySelector('.weather-main__description'),
	weatherImg: document.querySelector('.weather-main__img'),
	wind: document.getElementById('wind'),
	windDirection: document.getElementById('windDirection'),
	humidity: document.getElementById('humidity'),
	forecastList: document.querySelector('.weather-forecast__list'),
	wrap: document.querySelector('.wrapper'),
	loader: document.querySelector('.loader-box')
}

// Get current date
export const getDate = () => {
	const date = new Date();
	const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	let currentDate;
	
	months.forEach((month, index) => {
		if(index === date.getMonth()) {
			currentDate = `${date.getDate()} ${month}, ${date.getFullYear()}`;
		}
	})

	return currentDate;
}