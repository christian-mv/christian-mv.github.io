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
var format_Ln0 = new ol.format.GeoJSON();
var features_Ln0 = format_Ln0.readFeatures(json_Ln0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ln0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ln0.addFeatures(features_Ln0);var lyr_Ln0 = new ol.layer.Vector({
                source:jsonSource_Ln0, 
                style: style_Ln0,
                title: 'Ln<br />\
        <img src="styles/legend/Ln0_0.png" /> <45 dB(A)<br />\
        <img src="styles/legend/Ln0_1.png" /> 45-50 dB(A)<br />\
        <img src="styles/legend/Ln0_2.png" /> 50-55 dB(A)<br />\
        <img src="styles/legend/Ln0_3.png" /> 55-60 dB(A)<br />\
        <img src="styles/legend/Ln0_4.png" /> 60-65 dB(A)<br />\
        <img src="styles/legend/Ln0_5.png" /> 65-70 dB(A)<br />\
        <img src="styles/legend/Ln0_6.png" /> 70-75 dB(A)<br />\
        <img src="styles/legend/Ln0_7.png" /> >75 dB(A)<br />'
            });

lyr_Ln0.setVisible(true);
var layersList = [baseLayer,lyr_Ln0];
lyr_Ln0.set('fieldAliases', {'IDISO': 'IDISO', 'Ln': 'Ln', });
lyr_Ln0.set('fieldImages', {'IDISO': 'TextEdit', 'Ln': 'TextEdit', });
lyr_Ln0.set('fieldLabels', {'IDISO': 'no label', 'Ln': 'no label', });
lyr_Ln0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});