import { querySelector } from './utilities';

export function menuControl() {
	const meals = querySelector('.meals', true);
	const sides = document.querySelectorAll('.sides');
	sides.forEach((el) => {
		const side = el.querySelectorAll('span');
		side.forEach((el, i) => {
			if (el.innerText != '') {
				side[i].insertAdjacentHTML('afterend', `<br>`);
			}
		});
	});
	meals.forEach((el) => {
		const mealDateStrings = el.querySelector('.date').innerText.split('/');
		mealDateStrings.forEach((el, i, arr) => (arr[i] = parseInt(el)));
		const [month, date, year] = mealDateStrings;
		if (
			month < parseInt(fmcData.today.month) ||
			(month === parseInt(fmcData.today.month) &&
				parseInt(fmcData.today.dayNum) > date)
		) {
			el.style.display = 'none';
		}
	});
}
