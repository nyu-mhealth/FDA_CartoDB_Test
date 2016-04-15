      // Put layer data into a JS object
      var layerSource = {
        user_name: 'legacy',
        type: 'cartodb',
        sublayers: [{
          sql: "SELECT * FROM warnings_dc", // warning letters
          cartocss: '#warnings_dc{ marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #FF9900;marker-allow-overlap: true;}'
        },
        {
          sql: "SELECT * FROM cmp_dc", // cmps
          cartocss: '#cmp_dc{ marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #850200;marker-allow-overlap: true;}'
        },
        // {
        //   sql: "SELECT * FROM ny_censustrct_2014 WHERE geoid = '36017970200'", // block groups
        //   cartocss: '#ny_blockgroup_2014{polygon-fill: #FF6600;polygon-opacity: 0.7;line-color: #000000;line-width: 0;line-opacity: 1;'
        // }

        // {
        //   sql: "SELECT * FROM ny_blockgroup_2014", // block groups
        //   cartocss: '#ny_blockgroup_2014{polygon-fill: #FFFFFF;polygon-opacity: 0.7;line-color: #000000;line-width: 0;line-opacity: 0;'
        // }

        ]     
      }