
http://blog.cartodb.com/the-versatility-of-retreiving-and-rendering-geospatial/  

    var sql = new cartodb.SQL({ user: 'legacy', format: 'geojson' });
    sql.execute("SELECT * FROM store_count_by_zip").done(function(geojson) {
      console.log("here is the geojson", geojson);
    });

view-source:http://cartodb.github.io/cartodb.js/examples/leaflet_vector.html
