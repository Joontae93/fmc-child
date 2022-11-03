export class MECEvents {
	eventsContainer = document.querySelector('.mec-related-events');
	theEvents = this.eventsContainer.children;
	constructor() {
		this.relatedEventsControl();
	}
	relatedEventsControl() {
		this.eventsContainer.addEventListener('mouseup', (ev) => {
			let eventLink = ev.target
				.closest('article.mec-related-event-post')
				.children[0].querySelector('a').href;
			window.location.href = eventLink;
		});
	}
}
