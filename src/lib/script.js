const root = document.getElementById('root');

const splashHeader = document.createElement("div");
splashHeader.classList.add('splash-header');


function createHeader() {
  const splashText = document.createElement('h1');
  const div = document.createElement('div');
  const triangle = document.createElement('div');
  splashText.append('Calendarly');
  triangle.classList.add('triangle');
  div.append(splashText);
  div.append(triangle);
  splashHeader.appendChild(div);
  return splashHeader;
}

function createSplash() {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  div.classList.add('splash-picture-button');
  const img = document.createElement('img');
  const button = document.createElement('button');
  button.append('Book Appointment Now');
  h2.append('Schedule Your Appointments Quicker!');
  img.setAttribute('src', 'https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  img.classList.add('splash-picture');
  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(button);
  const header = createHeader();
  header.append(div);
  return header;
}

function createFooter() {
  const footer = document.createElement('footer');
  const splash = createSplash();
  splash.append(footer);
  return splash;
}

root.appendChild(createFooter());
