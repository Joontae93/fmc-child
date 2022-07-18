import { fmcDate } from './utilities';

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

/** Set CSS Display value for a section
 * @param section {HTML} the Element to modify
 * @param displayValue {string} the CSS value to set
 */
function displaySection(section, displayValue) {
	section.style.display = displayValue;
	return section;
}
