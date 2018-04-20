const description = () => {
  const descriptionDiv = document.createElement('div');
  const pictureOne = document.createElement('img');
  const pictureTwo = document.createElement('img');
  const pictureThree = document.createElement('img');
  const pictureOneCap = document.createElement('caption');
  const pictureTwoCap = document.createElement('caption');
  const pictureThreeCap = document.createElement('caption');
  pictureOneCap.append("This is the first picture");
  pictureTwoCap.append("This is the second picture");
  pictureThreeCap.append("This is the third picture");
  descriptionDiv.classList.add('description-div');
  pictureOne.setAttribute('src', 'https://cdn.pixabay.com/photo/2018/02/23/09/39/accounting-3175108_1280.jpg');
  pictureTwo.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/07/31/18/41/calendar-2559888_1280.jpg');
  pictureThree.setAttribute('src', 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  pictureOne.classList.add('description-picture');
  pictureTwo.classList.add('description-picture');
  pictureThree.classList.add('description-picture');
  descriptionDiv.append(pictureOne);
  descriptionDiv.append(pictureTwo);
  descriptionDiv.append(pictureThree);
  // console.log(document.documentElement.scrollHeight);

  // window.onscroll = function() {
  //   if (window.pageYOffset > 3) {
  //     descriptionDiv.className = 'active';
  //   } else {
  //     descriptionDiv.className = '';
  //   }
  // };

  return descriptionDiv;
};

export default description;
