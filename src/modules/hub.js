import { displaySection } from './utilities';

/**
 * Alters CSS Display property of an HTML Element if day is Sunday
 */
export function sundayMornings() {
	const sundays = document.getElementById('sundayMornings');
	if (fmcData.today.day != 'Sun') displaySection(sundays, 'none');
}
