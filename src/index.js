import '../sass/main.scss';
import { sundayMornings } from './modules/hub';
import { jobless } from './modules/jobs';
import { relatedEventsControl } from './modules/mec-events';
import { copyright } from './modules/utilities';

function init() {
	copyright('First Methodist Carrollton');
	if (location.href === 'https://firstchurch.net/hub/') sundayMornings();
	if (location.href === 'https://firstchurch.net/jobs/') jobless();
	relatedEventsControl();
}

init();
