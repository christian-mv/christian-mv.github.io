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
var format_LAeq_all_segments_UTM18N0 = new ol.format.GeoJSON();
var features_LAeq_all_segments_UTM18N0 = format_LAeq_all_segments_UTM18N0.readFeatures(json_LAeq_all_segments_UTM18N0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAeq_all_segments_UTM18N0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LAeq_all_segments_UTM18N0.addFeatures(features_LAeq_all_segments_UTM18N0);var lyr_LAeq_all_segments_UTM18N0 = new ol.layer.Vector({
                source:jsonSource_LAeq_all_segments_UTM18N0, 
                style: style_LAeq_all_segments_UTM18N0,
                title: 'LAeq_all_segments_UTM18N<br />\
        <img src="styles/legend/LAeq_all_segments_UTM18N0_0.png" /> <45 dB(A)<br />\
        <img src="styles/legend/LAeq_all_segments_UTM18N0_1.png" /> 45-50 dB(A)<br />\
        <img src="styles/legend/LAeq_all_segments_UTM18N0_2.png" /> 50-55 dB(A)<br />\
        <img src="styles/legend/LAeq_all_segments_UTM18N0_3.png" /> 55-60 dB(A)<br />\
        <img src="styles/legend/LAeq_all_segments_UTM18N0_4.png" /> 60-65 dB(A)<br />\
        <img src="styles/legend/LAeq_all_segments_UTM18N0_5.png" /> 65-70 dB(A)<br />\
        <img src="styles/legend/LAeq_all_segments_UTM18N0_6.png" /> 70-75 dB(A)<br />\
        <img src="styles/legend/LAeq_all_segments_UTM18N0_7.png" /> >75 dB(A)<br />'
            });var format_road_segment_UTM_18N1 = new ol.format.GeoJSON();
var features_road_segment_UTM_18N1 = format_road_segment_UTM_18N1.readFeatures(json_road_segment_UTM_18N1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_segment_UTM_18N1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_road_segment_UTM_18N1.addFeatures(features_road_segment_UTM_18N1);var lyr_road_segment_UTM_18N1 = new ol.layer.Vector({
                source:jsonSource_road_segment_UTM_18N1, 
                style: style_road_segment_UTM_18N1,
                title: '<img src="styles/legend/road_segment_UTM_18N1.png" /> road_segment_UTM_18N'
            });var format_NoiseMonitoringTerminals2 = new ol.format.GeoJSON();
var features_NoiseMonitoringTerminals2 = format_NoiseMonitoringTerminals2.readFeatures(json_NoiseMonitoringTerminals2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NoiseMonitoringTerminals2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NoiseMonitoringTerminals2.addFeatures(features_NoiseMonitoringTerminals2);var lyr_NoiseMonitoringTerminals2 = new ol.layer.Vector({
                source:jsonSource_NoiseMonitoringTerminals2, 
                style: style_NoiseMonitoringTerminals2,
                title: '<img src="styles/legend/NoiseMonitoringTerminals2.png" /> NoiseMonitoringTerminals'
            });

lyr_LAeq_all_segments_UTM18N0.setVisible(true);lyr_road_segment_UTM_18N1.setVisible(false);lyr_NoiseMonitoringTerminals2.setVisible(true);
var layersList = [baseLayer,lyr_LAeq_all_segments_UTM18N0,lyr_road_segment_UTM_18N1,lyr_NoiseMonitoringTerminals2];
lyr_LAeq_all_segments_UTM18N0.set('fieldAliases', {'IDISO': 'IDISO', });
lyr_road_segment_UTM_18N1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_NoiseMonitoringTerminals2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'LAeq_d': 'LAeq_d', });
lyr_LAeq_all_segments_UTM18N0.set('fieldImages', {'IDISO': 'TextEdit', });
lyr_road_segment_UTM_18N1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_NoiseMonitoringTerminals2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'LAeq_d': 'TextEdit', });
lyr_LAeq_all_segments_UTM18N0.set('fieldLabels', {'IDISO': 'no label', });
lyr_road_segment_UTM_18N1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_NoiseMonitoringTerminals2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'LAeq_d': 'header label', });
lyr_NoiseMonitoringTerminals2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});