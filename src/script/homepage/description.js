

const description = () => {
  const LINKS = ['https://cdn.pixabay.com/photo/2018/02/23/09/39/accounting-3175108_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/07/31/18/41/calendar-2559888_1280.jpg',
  'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];
  const CAPTION = ["This is the first picture", "This is the second picture", "This is the third picture"];
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
