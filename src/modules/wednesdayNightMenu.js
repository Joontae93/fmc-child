import { fmcDate as today, querySelector } from './utilities';

export function menuControl() {
	const meals = querySelector('.meals', true);
	const sides = querySelector('.sides', true);
	// const year = date.getFullYear(),
	// 	month = date.getMonth(),
	// 	day = date.getDay();
	// const today = `${month}/${day}/${year}`;
	// const todayDate = Date.parse(today);
	// console.log(todayDate);
	meals.forEach((el, i, arr) => {
		const mealDateString = el.querySelector('.date');
		const mealDate = Date.parse(mealDateString.innerText);
		if (mealDate < Date.parse(today)) {
			el.style.display = 'none';
		}
	});
}
