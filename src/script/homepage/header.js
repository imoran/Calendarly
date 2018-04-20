const navBar = () => {
	const img = document.createElement('img');
	const ul = document.createElement('ul');
	const list = ['About', 'Features', 'Contact Us'];
	const imgWrapper = document.createElement('div');
	imgWrapper.setAttribute('id', 'img-wrapper');
	ul.classList.add('nav-bar');
	ul.setAttribute('id', 'top-nav');
	img.setAttribute('src', 'src/image/hamburger.png');

	list.forEach(l => {
		const li = document.createElement('li');
		li.append(l);
		ul.appendChild(li);
	});

	imgWrapper.onclick = function() {
		let navbar = document.getElementById('top-nav');
		if (navbar.className === 'nav-bar') {
			navbar.className += ' responsive';
		} else {
			navbar.className = 'nav-bar';
		}
	};

	imgWrapper.append(img);
	ul.appendChild(imgWrapper);
	return ul;
};


const header = () => {
	const splashHeader = document.createElement("div");
	const h1 = document.createElement('h1');
	splashHeader.classList.add('splash-header');
	h1.append('Calendarly');
	h1.onclick = function() {
		location.reload();
	};
	splashHeader.appendChild(h1);
	splashHeader.appendChild(navBar());
	return splashHeader;
};


export default header;
