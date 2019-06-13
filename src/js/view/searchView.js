import { elements } from './base';

// Images of current weather
const getImage = name => {

	if(name.id >= 701 && name.id <= 781) {
		return 'img/Fog.svg';
	}
	return `img/${name.main}.svg`;
}

// Images of weather forecast  
const getImageFor = name => {

	if(name.id >= 701 && name.id <= 781) {
		return 'img/Fog-for.svg';
	}
	return `img/${name.main}-for.svg`;
}

// Get the value of input
export const getInput = () => elements.searchInput.value;

// Clear input
export const clearInput = () => {
    elements.searchInput.value = '';
};

// Clear result after eache query
export const clearResults =() => {
	elements.weather.innerHTML = '';
	elements.forecastList.innerHTML = '';
}


// Render current weather into DOM
export const renderResults = (result, date) => {

	let direction;

	// Transform directions of wind 
	if(result.wind.deg > 0 && result.wind.deg < 90) {
		direction = 'NE';
	} else if(result.wind.deg >= 90  && result.wind.deg < 180) {
		direction = 'SE';
	} else if(result.wind.deg >= 180  && result.wind.deg < 270) {
		direction = 'SW';
	} else if(result.wind.deg >= 270  && result.wind.deg < 360) {
		direction = 'NW';
	} else {
		direction = '';
	}
	

	const markup = `
		<div class="location">
			<h1 class="heading-primary">${result.sys.country}, ${result.name}</h1>
			<p class="location__date">${date}</p>
		</div>
		<div class="weather-today">
			<div class="weather-main">
				<img src="${getImage(result.weather[0])}" alt="${result.weather[0].main}" class="weather-main__img">
				<p class="weather-main__temperature">+${Math.floor(result.main.temp)} ° C</p>
				<p class="weather-main__description">${result.weather[0].main}</p>
			</div>
			<ul class="weather-details">
				<li class="weather-details__item">
					<i class="fas fa-wind"></i>
					<span class="weather-details__info" id="wind">${result.wind.speed} mps</span>
				</li>
				<li class="weather-details__item">
					<i class="far fa-compass"></i>
					<span class="weather-details__info" id="windDirection">${direction}</span>
				</li>
				<li class="weather-details__item">
					<i class="fas fa-tint"></i>
					<span class="weather-details__info" id="humidity">${result.main.humidity}%</span>
				</li>
			</ul>
		</div>
	`;

	// Add markup of current weather into DOM
	elements.weather.insertAdjacentHTML('beforeend', markup);

}

// Render weather forecast into DOM
export const renderForecast = forecast => {
	forecast.list.forEach((item, id) => {

		const time = item.dt_txt.split(' ')[1];

		const markup = `
		<li class="weather-forecast__item" id="${id + 1}">	
			<p class="weather-forecast__date">${time}</p>
			<div class="weather-forecast__info">
				<img src="${getImageFor(item.weather[0])}" alt="${item.weather[0].main}" class="weather-forecast__img">
				<p class="weather-forecast__temperature">
				+${Math.floor(item.main.temp)}° C
				</p>
			</div>
		</li>
		`;

		// Add markup of weather forecast into DOM
		elements.forecastList.insertAdjacentHTML('beforeend', markup);
	});
}

