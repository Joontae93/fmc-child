export function relatedEventsControl() {
	const theEvents = document.querySelector('.the-event__related-events');
	const eventsContainer = document.querySelector('.mec-related-events');
	if (eventsContainer.children.length > 0) return;
	theEvents.style.display = 'none';
}
