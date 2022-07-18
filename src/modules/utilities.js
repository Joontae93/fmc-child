export var fmcDate = new Date();
export function copyright(brandName) {
	const copyright = document.getElementById('copyright');
	const thisYear = fmcDate.getFullYear();
	copyright.innerHTML = `<p>&copy; ${thisYear} ${brandName} <br/> All Rights Reserved.`;
}
