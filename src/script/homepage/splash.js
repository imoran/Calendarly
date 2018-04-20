import {calendar} from '../calendar/calendar';

const splash = () => {
	const splash = document.createElement('div');
	const triangle = document.createElement('div');
	const h2 = document.createElement('h2');
	const img = document.createElement('img');
	const button = document.createElement('button');
	const bottomTriangle = document.createElement('footer');
	splash.classList.add('splash-main');
	triangle.classList.add('splash-main-triangle');
	h2.append('Schedule Appointments Quicker!');
	img.setAttribute('src', 'https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
	button.append('Book Appointment');
	button.onclick = function() {
		while (root.firstChild) {
			root.removeChild(root.firstChild);
		}
		root.appendChild(calendar());
	};
	splash.appendChild(triangle);
	splash.appendChild(img);
	splash.appendChild(h2);
	splash.appendChild(button);
	splash.appendChild(bottomTriangle);

	return splash;
};



export default splash;
