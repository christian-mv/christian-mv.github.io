var size = 0;
function categories_Ldn0(feature, value, size) {
                switch(value) {case '0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.55)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(85,170,0,0.55)'})
    })];
                    break;
case '1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.55)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,0,0.55)'})
    })];
                    break;
case '2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.55)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(197,131,0,0.55)'})
    })];
                    break;
case '3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.55)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,92,11,0.55)'})
    })];
                    break;
case '4':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.55)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,0.55)'})
    })];
                    break;
case '5':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.55)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(156,0,0,0.55)'})
    })];
                    break;
case '6':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.55)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(85,0,127,0.55)'})
    })];
                    break;
case '7':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.55)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,255,0.55)'})
    })];
                    break;}};
var styleCache_Ldn0={}
var style_Ldn0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("IDISO");
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
    var style = categories_Ldn0(feature, value, size);
    key = value + "_" + labelText
    if (!styleCache_Ldn0[key]){
        var text = new ol.style.Text({
                font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_Ldn0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Ldn0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};