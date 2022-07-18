/**
 * Alters CSS Display property of an HTML Element if day is Sunday
 */
export function sundayMornings() {
	if (location.href != 'https://firstchurch.net/hub') return;
	const sundays = document.getElementById('sundayMornings');
	const date = new Date.getDay();
	displaySection(sundays, 'none');
	if (date != 0) return;
	displaySection(sundays, 'block');
}

/** Set CSS Display value for a section
 * @param section {HTML} the Element to modify
 * @param display {string} the CSS value to set
 */
function displaySection(section, display) {
	section.style.display = display;
}
