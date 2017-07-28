var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Ld0 = new ol.format.GeoJSON();
var features_Ld0 = format_Ld0.readFeatures(json_Ld0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ld0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ld0.addFeatures(features_Ld0);var lyr_Ld0 = new ol.layer.Vector({
                source:jsonSource_Ld0, 
                style: style_Ld0,
                title: 'Ld<br />\
        <img src="styles/legend/Ld0_0.png" /> <45 dB(A)<br />\
        <img src="styles/legend/Ld0_1.png" /> 45-50 dB(A)<br />\
        <img src="styles/legend/Ld0_2.png" /> 50-55 dB(A)<br />\
        <img src="styles/legend/Ld0_3.png" /> 55-60 dB(A)<br />\
        <img src="styles/legend/Ld0_4.png" /> 60-65 dB(A)<br />\
        <img src="styles/legend/Ld0_5.png" /> 65-70 dB(A)<br />\
        <img src="styles/legend/Ld0_6.png" /> 70-75 dB(A)<br />\
        <img src="styles/legend/Ld0_7.png" /> >75 dB(A)<br />'
            });

lyr_Ld0.setVisible(true);
var layersList = [baseLayer,lyr_Ld0];
lyr_Ld0.set('fieldAliases', {'IDISO': 'IDISO', 'Ld': 'Ld', });
lyr_Ld0.set('fieldImages', {'IDISO': 'TextEdit', 'Ld': 'TextEdit', });
lyr_Ld0.set('fieldLabels', {'IDISO': 'no label', 'Ld': 'no label', });
lyr_Ld0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});