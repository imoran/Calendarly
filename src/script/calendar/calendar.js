import modal from './modal';

const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"];
const now = new Date();
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var daysInMonth = new Date(currentYear, (currentMonth + 1), 0).getDate();
var daysCounter = 1;

const createCell = () => {
	let newDate = new Date(`${currentYear} ${currentMonth + 1} ${1} 23:59`);
	let tr = document.createElement('tr');
	for (let i = 0; i < 7; i++) {
		newDate.setDate(daysCounter);
		let newWeekDay = newDate.getDay();
		let td = document.createElement('td');
		td.style.background = 'lightgray';
		if ( newWeekDay === i && daysCounter <= daysInMonth) {
			let text = document.createTextNode(newDate.getDate());
			td.appendChild(text);
			if (newDate > now) {
				td.style.background = 'none';
				td.onclick = function() {
					let date = td.innerHTML;
					let myModal = document.getElementById('myModal');
					if (myModal) {
						myModal.remove();
					}
					root.appendChild(modal(date));
				}
			}
			daysCounter++;
		}
		tr.appendChild(td);
	}
	return tr;
}

const calendarTableHeader = () => {
	let trHeader = document.createElement('tr');
	let weekArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	for (let i = 0; i < weekArr.length; i++) {
		let th = document.createElement('th');
		let text = document.createTextNode(weekArr[i]);
		th.appendChild(text);
		trHeader.appendChild(th);
	}
	return trHeader;
}

const nextMonth = () => {
	const next = document.createElement('h2');
	const text = document.createTextNode("Next Month");
	next.appendChild(text);
	next.onclick = () => {
		let temp = new Date(`${currentYear} ${currentMonth + 2} ${1}`);
		if (temp.getMonth() == now.getMonth()) {
			currentDate = now;
		} else if (temp.getMonth() < now.getMonth()) {
			currentYear = temp.getFullYear();
			currentMonth = temp.getMonth();
			daysInMonth = new Date(currentYear, (currentMonth + 1), 0).getDate();
			currentDate = new Date(`${currentYear} ${currentMonth + 1} ${daysInMonth} 23:59`);
		} else {
			currentDate = temp
		}
		currentYear = currentDate.getFullYear();
		currentMonth = currentDate.getMonth();
		daysInMonth = new Date(currentYear, (currentMonth + 1), 0).getDate();
		daysCounter = 1;
		while (root.firstChild) {
			root.removeChild(root.firstChild);
		}
		root.appendChild(calendar());
	};
	return next;
}

const previousMonth = () => {
	const previous = document.createElement('h2');
	const text = document.createTextNode("Previous Month");
	previous.appendChild(text);
	previous.onclick = () => {
		var temp = new Date(`${currentYear} ${currentMonth} ${1}`);
		var now = new Date();
		if (temp.getMonth() == now.getMonth()) {
			currentDate = now;
		} else if (temp.getMonth() < now.getMonth()) {
			currentYear = temp.getFullYear();
			currentMonth = temp.getMonth();
			daysInMonth = new Date(currentYear, (currentMonth + 1), 0).getDate();
			currentDate = new Date(`${currentYear} ${currentMonth + 1} ${daysInMonth} 23:59`);
		} else {
			currentDate = temp
		}
		currentYear = currentDate.getFullYear();
		currentMonth = currentDate.getMonth();
		daysInMonth = new Date(currentYear, (currentMonth + 1), 0).getDate();
		daysCounter = 1;
		while (root.firstChild) {
			root.removeChild(root.firstChild);
		}
		root.appendChild(calendar());
	};
	return previous;
}

export const calendar = () => {
	const container = document.createElement('div');
	const topHeader = document.createElement('div');
	const month = document.createElement('h1');
	const table = document.createElement('table');
	const monthYear = `${monthNames[currentMonth]} ${currentYear}`;
	table.setAttribute('id', 'calendar-table');
	container.setAttribute('id', 'calendar-container');
	topHeader.setAttribute('id', 'calendar-top-header');
	topHeader.appendChild(previousMonth());
	month.append(monthYear);
	topHeader.appendChild(month);
	topHeader.appendChild(nextMonth());
	container.appendChild(topHeader);
	table.appendChild(calendarTableHeader());
	for (let j = 0; j < 5; j++) {
		table.appendChild(createCell());
	}
	container.appendChild(table);
	return container;
}
