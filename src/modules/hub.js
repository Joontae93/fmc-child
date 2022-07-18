import { displaySection, fmcDate } from './utilities';

/**
 * Alters CSS Display property of an HTML Element if day is Sunday
 */
export function sundayMornings() {
	const sundays = document.getElementById('sundayMornings');

	// If Today is Sunday, quit.
	if (fmcDate.getDay() === 0) return;

	// Else, set section to "None"
	displaySection(sundays, 'none');
}
