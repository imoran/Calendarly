import header from './header';
// import footer from './footer';
import splash from './splash';
import description from './description';

const homepage = () => {
	const homepage = document.createElement('div');
	homepage.classList.add('splash');
	homepage.appendChild(header());
	homepage.appendChild(splash());
	homepage.appendChild(description());
	// homepage.appendChild(footer());
	return homepage;
};


export default homepage;
