const times = {
	8: '8:00 AM',
	9: '9:00 AM',
	10: '10:00 AM',
	11: '11:00 AM',
	12: '12:00 PM',
	13: '1:00 PM',
	14: '2:00 PM',
	15: '3:00 PM',
	16: '4:00 PM',
	17: '5:00 PM'
};

const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"];

const SERVICES = [  "Computer Support",
  									"Printer Setup",
  									"Wifi Solution",
  									"Virus Removal",
  									"Electronic Setup",
  									"PC Tune-Up",
  									"Data Backup"
									];

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentHour = currentDate.getHours();
export var confirmTime = '';

export const availableTime = (date) => {
	let parent = document.createElement('ul');
	parent.classList.add("modal-Time");
	let c = currentDate.getDate();

	// console.log("currentHour ", currentHour);
	for (var i = 8; i < 18; i++) {
		if((c == date && currentHour < i) || (c < date)) {
			let li = document.createElement('li');
			let text = document.createTextNode(times[i]);
			li.appendChild(text);
			li.onclick = function() {
				const ul = document.getElementsByClassName('modal-Time')[0];
				ul.childNodes.forEach(l => {
					l.removeAttribute("id");
				});
				li.setAttribute('id', 'modal-Time-color');
				let time = li.innerHTML;
				let service = document.getElementsByTagName('select')[0].selectedIndex;
				confirmTime = `You made an appointment for ${SERVICES[service]} ${monthNames[currentMonth]} ${date}, ${currentYear} at ${time}.`;
			};
			parent.appendChild(li);
		}
	}
	return parent;
};
