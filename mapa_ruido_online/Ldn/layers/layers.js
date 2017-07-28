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
var format_Ldn0 = new ol.format.GeoJSON();
var features_Ldn0 = format_Ldn0.readFeatures(json_Ldn0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ldn0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ldn0.addFeatures(features_Ldn0);var lyr_Ldn0 = new ol.layer.Vector({
                source:jsonSource_Ldn0, 
                style: style_Ldn0,
                title: 'Ldn<br />\
        <img src="styles/legend/Ldn0_0.png" /> <45 dB(A)<br />\
        <img src="styles/legend/Ldn0_1.png" /> 45-50 dB(A)<br />\
        <img src="styles/legend/Ldn0_2.png" /> 50-55 dB(A)<br />\
        <img src="styles/legend/Ldn0_3.png" /> 55-60 dB(A)<br />\
        <img src="styles/legend/Ldn0_4.png" /> 60-65 dB(A)<br />\
        <img src="styles/legend/Ldn0_5.png" /> 65-70 dB(A)<br />\
        <img src="styles/legend/Ldn0_6.png" /> 70-75 dB(A)<br />\
        <img src="styles/legend/Ldn0_7.png" /> >75 dB(A)<br />'
            });

lyr_Ldn0.setVisible(true);
var layersList = [baseLayer,lyr_Ldn0];
lyr_Ldn0.set('fieldAliases', {'IDISO': 'IDISO', 'Ldn': 'Ldn', });
lyr_Ldn0.set('fieldImages', {'IDISO': 'TextEdit', 'Ldn': 'TextEdit', });
lyr_Ldn0.set('fieldLabels', {'IDISO': 'no label', 'Ldn': 'no label', });
lyr_Ldn0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});