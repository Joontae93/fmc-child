import { querySelector } from './utilities';

export function jobless() {
	const jobs = querySelector('.x-row-inner a.x-col', true);
	if (jobs.length === 0) {
		const site = querySelector('.x-container.max.width.offset');
		site.innerHTML = '';
		site.innerHTML = `<div class="x-container max width offset">There are no jobs to display right now. Please check back later.</div>`;
	}
}
