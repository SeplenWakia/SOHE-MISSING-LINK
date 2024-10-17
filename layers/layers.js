ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32755").setExtent([576593.628777, 9101529.241784, 595448.438863, 9110875.972211]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Road_1 = new ol.format.GeoJSON();
var features_Road_1 = format_Road_1.readFeatures(json_Road_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Road_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_1.addFeatures(features_Road_1);
var lyr_Road_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_1, 
                style: style_Road_1,
                popuplayertitle: "Road",
                interactive: true,
                title: '<img src="styles/legend/Road_1.png" /> Road'
            });
var format_Bridge_2 = new ol.format.GeoJSON();
var features_Bridge_2 = format_Bridge_2.readFeatures(json_Bridge_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Bridge_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bridge_2.addFeatures(features_Bridge_2);
var lyr_Bridge_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bridge_2, 
                style: style_Bridge_2,
                popuplayertitle: "Bridge",
                interactive: true,
                title: '<img src="styles/legend/Bridge_2.png" /> Bridge'
            });
var format_Hurata_Point_3 = new ol.format.GeoJSON();
var features_Hurata_Point_3 = format_Hurata_Point_3.readFeatures(json_Hurata_Point_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Hurata_Point_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hurata_Point_3.addFeatures(features_Hurata_Point_3);
var lyr_Hurata_Point_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hurata_Point_3, 
                style: style_Hurata_Point_3,
                popuplayertitle: "Hurata_Point",
                interactive: true,
                title: '<img src="styles/legend/Hurata_Point_3.png" /> Hurata_Point'
            });
var format_Sowara_Point_4 = new ol.format.GeoJSON();
var features_Sowara_Point_4 = format_Sowara_Point_4.readFeatures(json_Sowara_Point_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Sowara_Point_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sowara_Point_4.addFeatures(features_Sowara_Point_4);
var lyr_Sowara_Point_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sowara_Point_4, 
                style: style_Sowara_Point_4,
                popuplayertitle: "Sowara_Point",
                interactive: true,
                title: '<img src="styles/legend/Sowara_Point_4.png" /> Sowara_Point'
            });
var format_Kira_Point_5 = new ol.format.GeoJSON();
var features_Kira_Point_5 = format_Kira_Point_5.readFeatures(json_Kira_Point_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Kira_Point_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kira_Point_5.addFeatures(features_Kira_Point_5);
var lyr_Kira_Point_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kira_Point_5, 
                style: style_Kira_Point_5,
                popuplayertitle: "Kira_Point",
                interactive: true,
                title: '<img src="styles/legend/Kira_Point_5.png" /> Kira_Point'
            });
var format_Wuwu_Point_6 = new ol.format.GeoJSON();
var features_Wuwu_Point_6 = format_Wuwu_Point_6.readFeatures(json_Wuwu_Point_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Wuwu_Point_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wuwu_Point_6.addFeatures(features_Wuwu_Point_6);
var lyr_Wuwu_Point_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wuwu_Point_6, 
                style: style_Wuwu_Point_6,
                popuplayertitle: "Wuwu_Point",
                interactive: true,
                title: '<img src="styles/legend/Wuwu_Point_6.png" /> Wuwu_Point'
            });
var format_Village_7 = new ol.format.GeoJSON();
var features_Village_7 = format_Village_7.readFeatures(json_Village_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Village_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Village_7.addFeatures(features_Village_7);
var lyr_Village_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Village_7, 
                style: style_Village_7,
                popuplayertitle: "Village",
                interactive: true,
                title: '<img src="styles/legend/Village_7.png" /> Village'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Road_1.setVisible(true);lyr_Bridge_2.setVisible(true);lyr_Hurata_Point_3.setVisible(true);lyr_Sowara_Point_4.setVisible(true);lyr_Kira_Point_5.setVisible(true);lyr_Wuwu_Point_6.setVisible(true);lyr_Village_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Road_1,lyr_Bridge_2,lyr_Hurata_Point_3,lyr_Sowara_Point_4,lyr_Kira_Point_5,lyr_Wuwu_Point_6,lyr_Village_7];
lyr_Road_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Distance': 'Distance', });
lyr_Bridge_2.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Hurata_Point_3.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', });
lyr_Sowara_Point_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Kira_Point_5.set('fieldAliases', {'ID': 'ID', });
lyr_Wuwu_Point_6.set('fieldAliases', {'ID': 'ID', });
lyr_Village_7.set('fieldAliases', {'CU_NAME': 'CU_NAME', 'CU_NO': 'CU_NO', 'GEOCODE': 'GEOCODE', 'PROV_KEY': 'PROV_KEY', 'DIST_NO': 'DIST_NO', 'LLG_NO': 'LLG_NO', 'WARD_NO': 'WARD_NO', 'WARD_NAME': 'WARD_NAME', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'REGHH': 'REGHH', 'TOTPOP2000': 'TOTPOP2000', 'MALE2000': 'MALE2000', 'FEMALE2000': 'FEMALE2000', 'POP2008': 'POP2008', 'G_RATE': 'G_RATE', });
lyr_Road_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Distance': 'TextEdit', });
lyr_Bridge_2.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr_Hurata_Point_3.set('fieldImages', {'ID': 'TextEdit', 'Name': '', });
lyr_Sowara_Point_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Kira_Point_5.set('fieldImages', {'ID': '', });
lyr_Wuwu_Point_6.set('fieldImages', {'ID': '', });
lyr_Village_7.set('fieldImages', {'CU_NAME': 'TextEdit', 'CU_NO': 'TextEdit', 'GEOCODE': 'TextEdit', 'PROV_KEY': 'TextEdit', 'DIST_NO': 'TextEdit', 'LLG_NO': 'TextEdit', 'WARD_NO': 'TextEdit', 'WARD_NAME': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'REGHH': 'Range', 'TOTPOP2000': 'Range', 'MALE2000': 'Range', 'FEMALE2000': 'Range', 'POP2008': 'Range', 'G_RATE': 'TextEdit', });
lyr_Road_1.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Distance': 'inline label - always visible', });
lyr_Bridge_2.set('fieldLabels', {'Id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Hurata_Point_3.set('fieldLabels', {'ID': 'inline label - always visible', 'Name': 'no label', });
lyr_Sowara_Point_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Kira_Point_5.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_Wuwu_Point_6.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_Village_7.set('fieldLabels', {'CU_NAME': 'inline label - always visible', 'CU_NO': 'inline label - always visible', 'GEOCODE': 'inline label - always visible', 'PROV_KEY': 'inline label - always visible', 'DIST_NO': 'inline label - always visible', 'LLG_NO': 'inline label - always visible', 'WARD_NO': 'inline label - always visible', 'WARD_NAME': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'REGHH': 'inline label - always visible', 'TOTPOP2000': 'inline label - always visible', 'MALE2000': 'inline label - always visible', 'FEMALE2000': 'inline label - always visible', 'POP2008': 'inline label - always visible', 'G_RATE': 'inline label - always visible', });
lyr_Village_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});