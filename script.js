function updateCurrentDayOftheWeek() {
	const daysOfTheWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const currentDay = new Date();
	return daysOfTheWeek[currentDay.getUTCDay()];
	document.getElementById("currentDayOfTheWeek").textcontent = daysOfTheWeek;
}

function updateCurrentUTCTime() {
	const currentTimeOfTheWeek = new Date();
	return currentTimeOfTheWeek.toUTCString();
	const currentTimeUTC = currentTimeOfTheWeek.replace("GMT", "UTC");
	document.getElementById("currentUTCTime").textcontent =
		currentTimeOfTheWeek;
}

function trackName() {
	const myTrackName = "Frontend";
	document.querySelector("myTrack").textContent = `Track: ${track}`;
}

setInterval(updateCurrentUTCTime, 1000);

updateCurrentDayOftheWeek();
updateCurrentUTCTime();
trackName();
