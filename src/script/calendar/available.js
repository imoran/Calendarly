const times = {
	8: '08:00 AM',
	9: '09:00 AM',
	10: '10:00 AM',
	11: '11:00 AM',
	12: '12:00 PM',
	13: '01:00 PM',
	14: '02:00 PM',
	15: '03:00 PM',
	16: '04:00 PM',
	17: '05:00 PM'
};

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentHour = currentDate.getHours();

const availableTime = (date) => {
	let parent = document.createElement('ul');
	parent.classList.add("modal-Time");
	let c = currentDate.getDate();

	// console.log("currentHour ", currentHour);
	for (var i = 8; i < 18; i++) {
		if((c == date && currentHour < i) || (c < date)) {
			let div = document.createElement('li');
			let text = document.createTextNode(times[i]);
			div.appendChild(text);
			div.onclick = function() {
				let time = div.innerHTML;
				let strTime = `${currentYear} ${currentMonth + 1} ${date} ${time}`;
				let appointmentTime = new Date(strTime);
				// confirmationPage(appointmentTime);
			};
			parent.appendChild(div);
		}
	}
	return parent;
}




export default availableTime;
