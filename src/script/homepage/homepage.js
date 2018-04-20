import header from './header';
import footer from './footer';
import splash from './splash';
import description from './description';

const homepage = () => {
	const Homepage = document.createElement('div');
	Homepage.classList.add('splash');
	Homepage.appendChild(header());
	Homepage.appendChild(splash());
	Homepage.appendChild(description());
	Homepage.appendChild(footer());
	return Homepage;
};


export default homepage;
