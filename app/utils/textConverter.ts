export function toTitleCase(str: string) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

export function toVideoDuration(totalMinutes: number | undefined) {
	if (totalMinutes === undefined) return null;
	const minutes = totalMinutes % 60;
	const hours = Math.floor(totalMinutes / 60);

	return `${
		hours > 9 ? padTo2Digits(hours) + 'h' : hours > 0 ? hours + 'h' : ''
	} ${padTo2Digits(minutes)}min`;
}

function padTo2Digits(num: number) {
	return num.toString().padStart(2, '0');
}
