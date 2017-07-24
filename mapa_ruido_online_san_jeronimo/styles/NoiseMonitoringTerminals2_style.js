var size = 0;

var styleCache_NoiseMonitoringTerminals2={}
var style_NoiseMonitoringTerminals2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    } else {
        labelText = ""
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})})
    }),new ol.style.Style({
        image: new ol.style.Circle({radius: 1.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})})
    })];
    key = value + "_" + labelText
    if (!styleCache_NoiseMonitoringTerminals2[key]){
        var text = new ol.style.Text({
                font: '23.4px \'MS Shell Dlg 2\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(255, 255, 0, 1)'
                })
            });
        styleCache_NoiseMonitoringTerminals2[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_NoiseMonitoringTerminals2[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};