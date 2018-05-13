const navBar = () => {
	const img = document.createElement('img');
	const ul = document.createElement('ul');
	const list = ['About', 'Features', 'Contact Us'];
	const links = ['https://github.com/imoran/Calendarly',
								 'https://github.com/imoran/Calendarly',
								 'mailto:isismoran93@gmail.com'];
	const imgWrapper = document.createElement('div');
	imgWrapper.setAttribute('id', 'img-wrapper');
	ul.classList.add('nav-bar');
	ul.setAttribute('id', 'top-nav');
	img.setAttribute('src', 'src/image/hamburger.png');

	for (let i = 0; i < 3; i++) {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.textContent = list[i];
		a.href = links[i];
		li.append(a);
		ul.append(li);
	}

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
