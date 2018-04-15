const collectData = () => {
  let jsonData = [];
  fetch('https://data.sfgov.org/resource/cuks-n6tp.json?$limit=5', {
    method: 'get',
  }).then(function(response) {
    if (response.ok) {
      response.json().then(function(json) {
        let data = json;
        data.forEach(datum => {
          jsonData.push(datum);
        });
      });
    }
  }).catch(function(err) {
    console.log('Network request failed');
  });
  return jsonData;
};

function initMap() {
  const jsonData = collectData();
  jsonData.pop();
  console.log(jsonData[0]);
  const center = {lat: 37.774929, lng: -122.419416};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: center
  });
  console.log("another jsondata", jsonData);
}
