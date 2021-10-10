mapboxgl.accessToken = 'pk.eyJ1Ijoib2xnYXRvbHB5a2luYSIsImEiOiJja3VsOTh4ankxMWg5Mm9ydnVvbzY3aDQ1In0.ymueQX4D7qy9G9gN5bL3lQ';

const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/light-v10',
    center: [2.3364, 48.86091],
    zoom: 16
});

const marker1 = new mapboxgl.Marker({ color: 'black' })
    .setLngLat([2.3364, 48.86091])
    .addTo(map);
const marker2 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3333, 48.8602])
    .addTo(map);
const marker3 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3397, 48.8607])
    .addTo(map);
const marker4 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3330, 48.8619])
    .addTo(map);
const marker5 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3365, 48.8625])
    .addTo(map);