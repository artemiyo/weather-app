// Modules
import Search from './models/Search';

// View
import * as searchView from './view/searchView';

import { elements, getDate } from './view/base';
import '../scss/main.scss';


//  State includes the value from input, current and forecast data of weather

const state = {};

const controlSearch = async () => {
	const query = searchView.getInput();


	if(query !== '') {
		state.search = new Search(query);

		searchView.clearInput();
		searchView.clearResults();
		
		// Add animation to each elements in the array
		[elements.weather, elements.weatherForecast].forEach((anim => {
			anim.classList.remove('animation');
		}));
		
		try {

			elements.loader.classList.remove('hidden');

			// If the request is successful in both variants then hide loader, add animation and render results
			if(await state.search.getResults() && await state.search.getForecast()) {
				elements.loader.classList.add('hidden');

				[elements.weather, elements.weatherForecast].forEach((anim => {
					anim.classList.add('animation');
				}));

				searchView.renderResults(state.search.result, getDate());
				searchView.renderForecast(state.search.forecast);
			}


			

		} catch (error) {
			alert(`This city doesn't exist!`)

		}
	}
}


window.addEventListener('keyup', function(e) {

	if(e.keyCode === 13) {
		controlSearch();
	}
});