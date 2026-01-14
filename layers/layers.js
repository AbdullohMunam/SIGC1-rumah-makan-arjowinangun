var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasKelurahan_1 = new ol.format.GeoJSON();
var features_BatasKelurahan_1 = format_BatasKelurahan_1.readFeatures(json_BatasKelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_1.addFeatures(features_BatasKelurahan_1);
var lyr_BatasKelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahan_1, 
                style: style_BatasKelurahan_1,
                popuplayertitle: 'Batas Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahan_1.png" /> Batas Kelurahan'
            });
var format_BatasPemukiman_2 = new ol.format.GeoJSON();
var features_BatasPemukiman_2 = format_BatasPemukiman_2.readFeatures(json_BatasPemukiman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasPemukiman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasPemukiman_2.addFeatures(features_BatasPemukiman_2);
var lyr_BatasPemukiman_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasPemukiman_2, 
                style: style_BatasPemukiman_2,
                popuplayertitle: 'Batas Pemukiman',
                interactive: true,
                title: '<img src="styles/legend/BatasPemukiman_2.png" /> Batas Pemukiman'
            });
var format_BatasFasilitasUmum_3 = new ol.format.GeoJSON();
var features_BatasFasilitasUmum_3 = format_BatasFasilitasUmum_3.readFeatures(json_BatasFasilitasUmum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasFasilitasUmum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasFasilitasUmum_3.addFeatures(features_BatasFasilitasUmum_3);
var lyr_BatasFasilitasUmum_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasFasilitasUmum_3, 
                style: style_BatasFasilitasUmum_3,
                popuplayertitle: 'Batas Fasilitas Umum',
                interactive: true,
                title: '<img src="styles/legend/BatasFasilitasUmum_3.png" /> Batas Fasilitas Umum'
            });
var format_BatasPerkebunan_4 = new ol.format.GeoJSON();
var features_BatasPerkebunan_4 = format_BatasPerkebunan_4.readFeatures(json_BatasPerkebunan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasPerkebunan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasPerkebunan_4.addFeatures(features_BatasPerkebunan_4);
var lyr_BatasPerkebunan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasPerkebunan_4, 
                style: style_BatasPerkebunan_4,
                popuplayertitle: 'Batas Perkebunan',
                interactive: true,
                title: '<img src="styles/legend/BatasPerkebunan_4.png" /> Batas Perkebunan'
            });
var format_BatasLahanTerbukaHijau_5 = new ol.format.GeoJSON();
var features_BatasLahanTerbukaHijau_5 = format_BatasLahanTerbukaHijau_5.readFeatures(json_BatasLahanTerbukaHijau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasLahanTerbukaHijau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasLahanTerbukaHijau_5.addFeatures(features_BatasLahanTerbukaHijau_5);
var lyr_BatasLahanTerbukaHijau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasLahanTerbukaHijau_5, 
                style: style_BatasLahanTerbukaHijau_5,
                popuplayertitle: 'Batas Lahan Terbuka Hijau',
                interactive: true,
                title: '<img src="styles/legend/BatasLahanTerbukaHijau_5.png" /> Batas Lahan Terbuka Hijau'
            });
var format_JalanRaya_6 = new ol.format.GeoJSON();
var features_JalanRaya_6 = format_JalanRaya_6.readFeatures(json_JalanRaya_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRaya_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRaya_6.addFeatures(features_JalanRaya_6);
var lyr_JalanRaya_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRaya_6, 
                style: style_JalanRaya_6,
                popuplayertitle: 'Jalan Raya',
                interactive: true,
                title: '<img src="styles/legend/JalanRaya_6.png" /> Jalan Raya'
            });
var format_JalanPerumahan_7 = new ol.format.GeoJSON();
var features_JalanPerumahan_7 = format_JalanPerumahan_7.readFeatures(json_JalanPerumahan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPerumahan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPerumahan_7.addFeatures(features_JalanPerumahan_7);
var lyr_JalanPerumahan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanPerumahan_7, 
                style: style_JalanPerumahan_7,
                popuplayertitle: 'Jalan Perumahan',
                interactive: true,
                title: '<img src="styles/legend/JalanPerumahan_7.png" /> Jalan Perumahan'
            });
var format_JalanKampung_8 = new ol.format.GeoJSON();
var features_JalanKampung_8 = format_JalanKampung_8.readFeatures(json_JalanKampung_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKampung_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKampung_8.addFeatures(features_JalanKampung_8);
var lyr_JalanKampung_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKampung_8, 
                style: style_JalanKampung_8,
                popuplayertitle: 'Jalan Kampung',
                interactive: true,
                title: '<img src="styles/legend/JalanKampung_8.png" /> Jalan Kampung'
            });
var format_JalanGang_9 = new ol.format.GeoJSON();
var features_JalanGang_9 = format_JalanGang_9.readFeatures(json_JalanGang_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_9.addFeatures(features_JalanGang_9);
var lyr_JalanGang_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_9, 
                style: style_JalanGang_9,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_9.png" /> Jalan Gang'
            });
var format_Sungai_10 = new ol.format.GeoJSON();
var features_Sungai_10 = format_Sungai_10.readFeatures(json_Sungai_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_10.addFeatures(features_Sungai_10);
var lyr_Sungai_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_10, 
                style: style_Sungai_10,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_10.png" /> Sungai'
            });
var format_Lokasi_Tempat_Makan_11 = new ol.format.GeoJSON();
var features_Lokasi_Tempat_Makan_11 = format_Lokasi_Tempat_Makan_11.readFeatures(json_Lokasi_Tempat_Makan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokasi_Tempat_Makan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokasi_Tempat_Makan_11.addFeatures(features_Lokasi_Tempat_Makan_11);
var lyr_Lokasi_Tempat_Makan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokasi_Tempat_Makan_11, 
                style: style_Lokasi_Tempat_Makan_11,
                popuplayertitle: 'Lokasi_Tempat_Makan',
                interactive: true,
                title: '<img src="styles/legend/Lokasi_Tempat_Makan_11.png" /> Lokasi_Tempat_Makan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BatasKelurahan_1.setVisible(true);lyr_BatasPemukiman_2.setVisible(true);lyr_BatasFasilitasUmum_3.setVisible(true);lyr_BatasPerkebunan_4.setVisible(true);lyr_BatasLahanTerbukaHijau_5.setVisible(true);lyr_JalanRaya_6.setVisible(true);lyr_JalanPerumahan_7.setVisible(true);lyr_JalanKampung_8.setVisible(true);lyr_JalanGang_9.setVisible(true);lyr_Sungai_10.setVisible(true);lyr_Lokasi_Tempat_Makan_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BatasKelurahan_1,lyr_BatasPemukiman_2,lyr_BatasFasilitasUmum_3,lyr_BatasPerkebunan_4,lyr_BatasLahanTerbukaHijau_5,lyr_JalanRaya_6,lyr_JalanPerumahan_7,lyr_JalanKampung_8,lyr_JalanGang_9,lyr_Sungai_10,lyr_Lokasi_Tempat_Makan_11];
lyr_BatasKelurahan_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'Kode Pos': 'Kode Pos', });
lyr_BatasPemukiman_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_BatasFasilitasUmum_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_BatasPerkebunan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_BatasLahanTerbukaHijau_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_JalanRaya_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_JalanPerumahan_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_JalanKampung_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_JalanGang_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_Sungai_10.set('fieldAliases', {'id': 'id', 'Namaa': 'Namaa', 'Panjang': 'Panjang', });
lyr_Lokasi_Tempat_Makan_11.set('fieldAliases', {'id': 'id', 'Lokasi': 'Lokasi', 'Alamat': 'Alamat', });
lyr_BatasKelurahan_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_BatasPemukiman_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_BatasFasilitasUmum_3.set('fieldImages', {'id': '', 'Nama': '', 'Luas': '', });
lyr_BatasPerkebunan_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_BatasLahanTerbukaHijau_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_JalanRaya_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_JalanPerumahan_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_JalanKampung_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_JalanGang_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_Sungai_10.set('fieldImages', {'id': 'TextEdit', 'Namaa': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_Lokasi_Tempat_Makan_11.set('fieldImages', {'id': 'TextEdit', 'Lokasi': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_BatasKelurahan_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'Kode Pos': 'no label', });
lyr_BatasPemukiman_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_BatasFasilitasUmum_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_BatasPerkebunan_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_BatasLahanTerbukaHijau_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_JalanRaya_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_JalanPerumahan_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_JalanKampung_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_JalanGang_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_Sungai_10.set('fieldLabels', {'id': 'no label', 'Namaa': 'no label', 'Panjang': 'no label', });
lyr_Lokasi_Tempat_Makan_11.set('fieldLabels', {'id': 'no label', 'Lokasi': 'no label', 'Alamat': 'no label', });
lyr_Lokasi_Tempat_Makan_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});