var size = 0;

var styleCache_road_segment_UTM_18N1={}
var style_road_segment_UTM_18N1 = function(feature, resolution){
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
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.64)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })];
    key = value + "_" + labelText
    if (!styleCache_road_segment_UTM_18N1[key]){
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
        styleCache_road_segment_UTM_18N1[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_road_segment_UTM_18N1[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};