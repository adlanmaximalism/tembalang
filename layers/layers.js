var wms_layers = [];

var format_TEMBALANGGGG_0 = new ol.format.GeoJSON();
var features_TEMBALANGGGG_0 = format_TEMBALANGGGG_0.readFeatures(json_TEMBALANGGGG_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEMBALANGGGG_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMBALANGGGG_0.addFeatures(features_TEMBALANGGGG_0);
var lyr_TEMBALANGGGG_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMBALANGGGG_0, 
                style: style_TEMBALANGGGG_0,
                popuplayertitle: 'TEMBALANGGGG',
                interactive: true,
    title: 'TEMBALANGGGG<br />\
    <img src="styles/legend/TEMBALANGGGG_0_0.png" /> <br />\
    <img src="styles/legend/TEMBALANGGGG_0_1.png" /> Danau<br />\
    <img src="styles/legend/TEMBALANGGGG_0_2.png" /> Flat<br />\
    <img src="styles/legend/TEMBALANGGGG_0_3.png" /> Gedung Olahraga<br />\
    <img src="styles/legend/TEMBALANGGGG_0_4.png" /> Gedung Pertemuan<br />\
    <img src="styles/legend/TEMBALANGGGG_0_5.png" /> Gereja<br />\
    <img src="styles/legend/TEMBALANGGGG_0_6.png" /> Hiburan Khusus<br />\
    <img src="styles/legend/TEMBALANGGGG_0_7.png" /> Hotel/Mote/Penginapan<br />\
    <img src="styles/legend/TEMBALANGGGG_0_8.png" /> Hutan<br />\
    <img src="styles/legend/TEMBALANGGGG_0_9.png" /> Indsutri Lainnya<br />\
    <img src="styles/legend/TEMBALANGGGG_0_10.png" /> Industri Aneka Pangan<br />\
    <img src="styles/legend/TEMBALANGGGG_0_11.png" /> Industri Aneka Sandang<br />\
    <img src="styles/legend/TEMBALANGGGG_0_12.png" /> Industri Lainnya<br />\
    <img src="styles/legend/TEMBALANGGGG_0_13.png" /> Instalasi Air Bersih<br />\
    <img src="styles/legend/TEMBALANGGGG_0_14.png" /> Instalasi Lainnya<br />\
    <img src="styles/legend/TEMBALANGGGG_0_15.png" /> Instalasi Listrik<br />\
    <img src="styles/legend/TEMBALANGGGG_0_16.png" /> Instalasi Minyak dan Gas<br />\
    <img src="styles/legend/TEMBALANGGGG_0_17.png" /> Jalan<br />\
    <img src="styles/legend/TEMBALANGGGG_0_18.png" /> Kampung Jarang<br />\
    <img src="styles/legend/TEMBALANGGGG_0_19.png" /> Kampung Padat<br />\
    <img src="styles/legend/TEMBALANGGGG_0_20.png" /> Kantor Pos/Ekspedisi/Logistik<br />\
    <img src="styles/legend/TEMBALANGGGG_0_21.png" /> Kantor Swasta<br />\
    <img src="styles/legend/TEMBALANGGGG_0_22.png" /> Kantor Telepon<br />\
    <img src="styles/legend/TEMBALANGGGG_0_23.png" /> Kantor/Bangunan Militer<br />\
    <img src="styles/legend/TEMBALANGGGG_0_24.png" /> Kantor/Bangunan Pemerintahan<br />\
    <img src="styles/legend/TEMBALANGGGG_0_25.png" /> Komplek Olahraga<br />\
    <img src="styles/legend/TEMBALANGGGG_0_26.png" /> Lapangan Olahraga<br />\
    <img src="styles/legend/TEMBALANGGGG_0_27.png" /> Lembaga Keuangan/Bank<br />\
    <img src="styles/legend/TEMBALANGGGG_0_28.png" /> Makam Khusus<br />\
    <img src="styles/legend/TEMBALANGGGG_0_29.png" /> Makam Komersial<br />\
    <img src="styles/legend/TEMBALANGGGG_0_30.png" /> Makam Pahlawan<br />\
    <img src="styles/legend/TEMBALANGGGG_0_31.png" /> Makam Umum<br />\
    <img src="styles/legend/TEMBALANGGGG_0_32.png" /> Masjid/Langgar/Surau<br />\
    <img src="styles/legend/TEMBALANGGGG_0_33.png" /> Padang Golf<br />\
    <img src="styles/legend/TEMBALANGGGG_0_34.png" /> Pasar Khusus<br />\
    <img src="styles/legend/TEMBALANGGGG_0_35.png" /> Pasar Modern<br />\
    <img src="styles/legend/TEMBALANGGGG_0_36.png" /> Pasar Tradisional<br />\
    <img src="styles/legend/TEMBALANGGGG_0_37.png" /> Pendidikan Dasar<br />\
    <img src="styles/legend/TEMBALANGGGG_0_38.png" /> Pendidikan Khusus<br />\
    <img src="styles/legend/TEMBALANGGGG_0_39.png" /> Pendidikan Menengah<br />\
    <img src="styles/legend/TEMBALANGGGG_0_40.png" /> Pendidikan Terpadu<br />\
    <img src="styles/legend/TEMBALANGGGG_0_41.png" /> Pendidkan Dasar<br />\
    <img src="styles/legend/TEMBALANGGGG_0_42.png" /> Perbengkelan Khusus<br />\
    <img src="styles/legend/TEMBALANGGGG_0_43.png" /> Perbengkelan Umum<br />\
    <img src="styles/legend/TEMBALANGGGG_0_44.png" /> Pergudangan Tertutup<br />\
    <img src="styles/legend/TEMBALANGGGG_0_45.png" /> Perguruan Tinggi<br />\
    <img src="styles/legend/TEMBALANGGGG_0_46.png" /> Perguruan TInggi<br />\
    <img src="styles/legend/TEMBALANGGGG_0_47.png" /> Pertokoan<br />\
    <img src="styles/legend/TEMBALANGGGG_0_48.png" /> Perumahan Jarang<br />\
    <img src="styles/legend/TEMBALANGGGG_0_49.png" /> Perumahan Padat<br />\
    <img src="styles/legend/TEMBALANGGGG_0_50.png" /> Pusdiklat<br />\
    <img src="styles/legend/TEMBALANGGGG_0_51.png" /> Puskesmas/Balai Kesehatan<br />\
    <img src="styles/legend/TEMBALANGGGG_0_52.png" /> Rumah Kantor<br />\
    <img src="styles/legend/TEMBALANGGGG_0_53.png" /> Rumah Makan/Resto/Cafe<br />\
    <img src="styles/legend/TEMBALANGGGG_0_54.png" /> Rumah Sakit Umum<br />\
    <img src="styles/legend/TEMBALANGGGG_0_55.png" /> Rumah Susun<br />\
    <img src="styles/legend/TEMBALANGGGG_0_56.png" /> Rumah Susun Umum<br />\
    <img src="styles/legend/TEMBALANGGGG_0_57.png" /> Rumah Toko<br />\
    <img src="styles/legend/TEMBALANGGGG_0_58.png" /> Sawah Non Irigasi<br />\
    <img src="styles/legend/TEMBALANGGGG_0_59.png" /> Sungai<br />\
    <img src="styles/legend/TEMBALANGGGG_0_60.png" /> Tanah Kosong Sudah Diperuntukkan<br />\
    <img src="styles/legend/TEMBALANGGGG_0_61.png" /> Tempat Pengobatan Khusus<br />\
    <img src="styles/legend/TEMBALANGGGG_0_62.png" /> Tempat Rekreasi<br />\
    <img src="styles/legend/TEMBALANGGGG_0_63.png" /> Toko/Warung/Kios/Mart<br />\
    <img src="styles/legend/TEMBALANGGGG_0_64.png" /> Waduk<br />\
    <img src="styles/legend/TEMBALANGGGG_0_65.png" /> <br />' });

lyr_TEMBALANGGGG_0.setVisible(true);
var layersList = [lyr_TEMBALANGGGG_0];
lyr_TEMBALANGGGG_0.set('fieldAliases', {'Keterangan': 'Keterangan', 'Luas': 'Luas', });
lyr_TEMBALANGGGG_0.set('fieldImages', {'Keterangan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_TEMBALANGGGG_0.set('fieldLabels', {'Keterangan': 'no label', 'Luas': 'no label', });
lyr_TEMBALANGGGG_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});