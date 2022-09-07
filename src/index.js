import '../sass/main.scss';
import { sundayMornings } from './modules/hub';
import { jobless } from './modules/jobs';
import { relatedEventsControl } from './modules/mec-events';
import { copyright } from './modules/utilities';
import { menuControl } from './modules/wednesdayNightMenu';

function init() {
	copyright('First Methodist Carrollton');
	if (location.href === 'https://firstchurch.net/hub/') sundayMornings();
	if (location.href === 'https://firstchurch.net/jobs/') jobless();
	if (
		location.href === 'http://fmc.local/menu/' ||
		location.href === 'https://firstchurch.net/menu'
	)
		menuControl();
	relatedEventsControl();
}

init();
