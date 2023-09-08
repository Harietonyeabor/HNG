function returnCurrentDayOftheWeek() {
	const daysOfTheWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const currentDateOftheWeek = new Date();
	return daysOfTheWeek[currentDateOftheWeek.getUTCDay()];
	document.getElementById("currentDayOfTheWeek").textcontent = daysOfTheWeek;
}

function getCurrentUTCTime() {
	const currentDateOftheWeek = new Date();
	return currentDateOftheWeek.toUTCString();
}

function returnTrackName() {
	const trackName = "Frontend";
	document.querySelector("myTrack").textContent = `Track: ${track}`;
}
