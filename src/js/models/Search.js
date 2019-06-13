import { key } from '../config';

export default class Search {
	constructor(query) {
		this.query = query
	}

	// Get async data of current weather from weather API
	async getResults() {
		try {
			const information = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&APPID=${key}`);
			const data = await information.json();
			this.result = data;
			return this.result;

		} catch(error) {
			alert(error)
		}
	}

	//Get async data of forecast weather from weather API
	async getForecast() {
		try {
			const information = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.query}&units=metric&cnt=5&APPID=${key}`);
			const data = await information.json();
			this.forecast = data;
			return this.forecast;
		} catch(error) {
			alert(error);
		}
	}
}