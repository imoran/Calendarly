import {calendar} from '../calendar/calendar';

const splash = () => {
	const Splash = document.createElement('div');
	const triangle = document.createElement('div');
	const triangleBottom = document.createElement('div');
	const h2 = document.createElement('h2');
	const img = document.createElement('img');
	const button = document.createElement('button');
	Splash.classList.add('splash-main');
	triangleBottom.classList.add('splash-main-bottom');
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
	Splash.appendChild(triangle);
	Splash.appendChild(img);
	Splash.appendChild(h2);
	Splash.appendChild(button);
	Splash.appendChild(triangleBottom);

	return Splash;
};



export default splash;
