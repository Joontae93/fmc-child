export function copyright(brandName) {
	const copyright = document.getElementById('copyright');
	copyright.innerHTML = `<p>&copy; ${fmcData.today.year} ${brandName} <br/> All Rights Reserved.`;
}

/** Shorthand for Query Selector Function.
 * @param selector {string} CSS Selector. Must include class ('.') marker if needed
 * @param  [all] {boolean} optional to call querySelectorAll.
 * @return {Element} HTML Element
 * */
export function querySelector(selector, all = false) {
	return all === false
		? document.querySelector(selector)
		: document.querySelectorAll(selector);
}

export function getElementById(selector) {
	return document.getElementById(selector);
}

/** Set CSS Display value for a section
 * @param section {HTML} the Element to modify
 * @param displayValue {string} the CSS value to set
 */
export function displaySection(section, displayValue) {
	section.style.display = displayValue;
	return section;
}
