import availableTime from './available';


const modal = (date) => {
	const parentModal = document.createElement('div');
	const modalCenter = document.createElement('div');
	const modalContent = document.createElement('div');
	const modalHeader = document.createElement('div');
	const modalBody = document.createElement('div');
	const modalClose = document.createElement('img');
	const modalHeaderH2 = document.createElement('h2');
	const h2 = document.createTextNode("Please Select a Time");

	parentModal.setAttribute('id', 'myModal');
	parentModal.setAttribute('class', 'modal');
	modalClose.setAttribute('class', 'modal-close');
	modalClose.setAttribute('src', 'image/close.png');
	modalCenter.setAttribute('class', 'modal-center');
	modalContent.setAttribute('class', 'modal-content');
	modalHeader.setAttribute('class', 'modal-header');
	modalBody.setAttribute('class', 'modal-body');
	modalHeaderH2.appendChild(h2);
	modalHeader.appendChild(modalClose);
	modalHeader.appendChild(modalHeaderH2);
	modalContent.appendChild(modalHeader);
	modalContent.appendChild(modalBody);
	modalCenter.appendChild(modalContent);
	parentModal.appendChild(modalCenter);
	modalBody.appendChild(availableTime(date));
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


export default modal;
