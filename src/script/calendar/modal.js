import {availableTime} from './available';
import {confirmTime} from './available';
import service from './service';


const modal = (date) => {
	const parentModal = document.createElement('div');
	const modalCenter = document.createElement('div');
	const modalContent = document.createElement('div');
	const modalHeader = document.createElement('div');

	const modalClose = document.createElement('img');
	const modalHeaderH2 = document.createElement('p');
	const p = document.createTextNode("Please Select a Time");

	parentModal.setAttribute('id', 'myModal');
	parentModal.setAttribute('class', 'modal');
	modalClose.setAttribute('class', 'modal-close');
	modalClose.setAttribute('src', 'image/close.png');
	modalCenter.setAttribute('class', 'modal-center');
	modalContent.setAttribute('class', 'modal-content');
	modalHeader.setAttribute('class', 'modal-header');
	modalHeaderH2.appendChild(p);
	modalHeader.appendChild(modalClose);
	modalHeader.appendChild(modalHeaderH2);
	modalContent.appendChild(modalHeader);
	modalContent.appendChild(modalBody(date));
	modalCenter.appendChild(modalContent);
	parentModal.appendChild(modalCenter);

	parentModal.style.display = "block";
	modalClose.onclick = function() {
		parentModal.style.display = "none";
	};

	window.onclick = function(event) {
		if (event.target.className == "modal-center") {
			parentModal.style.display = "none";
		}
	};

	return parentModal;
};

const modalBody = (date) => {
	const body = document.createElement('div');
	const button = document.createElement('button');
	const text = document.createTextNode('Book Now');
	body.setAttribute('class', 'modal-body');
	body.appendChild(availableTime(date));
	body.appendChild(service());
	button.appendChild(text);
	body.appendChild(button);

	button.onclick = () => {
		console.log(confirmTime);
		while (body.firstChild) {
			body.firstChild.remove();
		}

		const p = document.createElement('p');
		const textP = document.createTextNode(confirmTime);
		p.appendChild(textP);
		body.appendChild(p);
	};

	return body;
};


export default modal;
