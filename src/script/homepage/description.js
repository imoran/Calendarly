

const description = () => {
  const LINKS = ['pic1.jpg',
  'pic2.jpg',
  'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];
  const CAPTION = ["Quick easy and convenient",
                   "Request appointments for services",
                   "Unclutter your life!"];
  const parentDiv = document.createElement('div');
  LINKS.forEach((link, idx) => {
    const descriptionDiv = document.createElement('div');
    const descriptionImg = document.createElement('img');
    const descriptionCaption = document.createElement('caption');
    const text = document.createTextNode(CAPTION[idx]);
    descriptionCaption.appendChild(text);
    descriptionImg.setAttribute('src', link);
    descriptionDiv.appendChild(descriptionImg);
    descriptionDiv.appendChild(descriptionCaption);
    parentDiv.appendChild(descriptionDiv);
  });

  window.onscroll = function() {
    if (window.pageYOffset > 220) {
      parentDiv.setAttribute('class', 'description-div description-active');
    } else {
      parentDiv.setAttribute('class', 'description-div');
    }
  };

  return parentDiv;
};

export default description;
