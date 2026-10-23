var wms_layers = [];


        var lyr_GoogleSatelit_0 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

lyr_GoogleSatelit_0.setVisible(true);
var layersList = [lyr_GoogleSatelit_0];
