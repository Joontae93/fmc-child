export class MECEvents {
	constructor() {
		this.relatedEventsControl();
		this.archivePageControl();
	}
	relatedEventsControl() {
		const eventsContainer = document.querySelector('.mec-related-events');
		if (!eventsContainer) return;
		eventsContainer.addEventListener('mouseup', (ev) => {
			let eventLink = ev.target
				.closest('article.mec-related-event-post')
				.children[0].querySelector('a').href;
			window.location.href = eventLink;
		});
	}
	archivePageControl() {
		const theArchivePageCalendar = document.querySelector(
			'.mec-calendar.mec-box-calendar',
		);
		if (!theArchivePageCalendar) return;
		const theMECSkin = document.querySelector('.mec-wrap.colorskin-custom');
		theMECSkin.insertAdjacentHTML(
			'beforebegin',
			`<a class="mec-events-archive-subheadline" href="/past-events/"><span>View Past Events</span></a>`,
		);
	}
	insertLabel() {
		const catBox = document.querySelector('.mec-checkboxes-search');
		catBox.insertAdjacentHTML(
			'afterbegin',
			`<p style="margin:0 5px 0 0;">Event Category</p>`,
		);
	}
}
