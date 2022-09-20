import '../sass/main.scss';
import { sundayMornings } from './modules/hub';
import { jobless } from './modules/jobs';
import { relatedEventsControl } from './modules/mec-events';
import { copyright } from './modules/utilities';
import { menuControl } from './modules/wednesdayNightMenu';

function init() {
	copyright('First Methodist Carrollton');
	const href = location.href;
	if (href.includes('/hub')) sundayMornings();
	if (href.includes('/jobs')) jobless();
	if (href.includes('/menu')) menuControl();
	if (href.includes('/events/')) relatedEventsControl();
}

init();
