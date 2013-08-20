function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {
	navigator.notification.alert("PhoneGap is working");
}

function onBtnClick() {
	var phoneName = window.device.name;
	alert("Your phone's Name is: " + phoneName);
}