let myMap;

const init = () => {
    myMap =new ymaps.Map("map",{
        center:  [59.94439323694133,30.408656535000002],
        zoom: 11,
        controls: []
    });
const coords = [
    [59.954037299788446,30.365397868007836]

];
const myCollection = new ymaps.GeoObjectCollection({}, {
    draggble: false,
    iconLayout: 'default#image',
    iconImageHref:"./images/icon_ballone_map.svg",
    iconImageSize: [57, 57],
    iconImageOffset: [-26, -46]
});
coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
})
myMap.geoObjects.add(myCollection);

myMap.behaviors.disable('scrollZoom');
}
ymaps.ready(init);
