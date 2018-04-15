const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

fetch('https://data.sfgov.org/resource/cuks-n6tp.json', {
  method: 'get',
}).then(function(response) {
  if (response.ok) {
    response.json().then(function(json) {
      var data = json;
      printData(data);
    });
  }
}).catch(function(err) {
  console.log('Network request for products.json failed');
});

const printData = data => {
  data.forEach(datum => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = datum.category;

    const p = document.createElement('p');
    p.textContent = datum.pddistrict;

    container.appendChild(card);

    card.appendChild(h1);
    card.appendChild(p);
  });
};
