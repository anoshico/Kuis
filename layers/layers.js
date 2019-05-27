var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var lyr_Fasilitas_Umum_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Fasilitas_Umum",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fasilitas_Umum",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fasilitas_Umum_1, 0]);var lyr_Guna_Lahan_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Guna_Lahan",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Guna_Lahan",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Guna_Lahan_2, 0]);var lyr_Jaringan_jalan_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Jaringan_jalan",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Jaringan_jalan",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Jaringan_jalan_3, 0]);var lyr_KRB_Merapi_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "KRB_Merapi",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "KRB_Merapi",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_KRB_Merapi_4, 0]);var lyr_Curah_Hujan_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Curah_Hujan",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Curah_Hujan",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Curah_Hujan_5, 0]);var lyr_Sungai_Sleman_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Sungai_Sleman",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Sungai_Sleman",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Sungai_Sleman_6, 0]);var lyr_Batas_Desa_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Batas_Desa",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Batas_Desa",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Batas_Desa_7, 0]);

lyr_OSMStandard_0.setVisible(true);lyr_Fasilitas_Umum_1.setVisible(true);lyr_Guna_Lahan_2.setVisible(true);lyr_Jaringan_jalan_3.setVisible(true);lyr_KRB_Merapi_4.setVisible(true);lyr_Curah_Hujan_5.setVisible(true);lyr_Sungai_Sleman_6.setVisible(true);lyr_Batas_Desa_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Fasilitas_Umum_1,lyr_Guna_Lahan_2,lyr_Jaringan_jalan_3,lyr_KRB_Merapi_4,lyr_Curah_Hujan_5,lyr_Sungai_Sleman_6,lyr_Batas_Desa_7];
