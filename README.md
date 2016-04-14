# FDA_CartoDB_Test
##Documentation for CartoDB  
http://academy.cartodb.com/courses/cartodbjs-ground-up/createvis-vs-createlayer/

###Fron Chris code - the important bits:  
####main.js  
css switching  

    var changeCartoCSS = function(layer, css) {
        layer.setCartoCSS(css);
      };
  
sql switching 

    // change SQL query of a layer
    var changeSQL = function(layer, sql) {
      layer.setSQL(sql);
    }
  
This is where it all starts : 
    
      // get it all going!
      var init = function() {
        initMap();
        initButtons();
        initCheckboxes();
        searchAddress();
        initZoomButtons();
        app.intro.init();  
  
####mapstyles.js  
  This is where all the css is for each layer
  


  
####change buttons in all these locations

        /Users/hollyorr/Desktop/nyumhealth_git/FDA-WebApp-Code/js/main_orig.js:
          280: availfar : function() {
        
        /Users/hollyorr/Desktop/nyumhealth_git/FDA-WebApp-Code/index_orig.html:
          40: <a href="#availfar" id="availfar" class="button">
        
        /Users/hollyorr/Desktop/nyumhealth_git/FDA-WebApp-Code/js/main.js:
          280: availfar : function() {
        
        /Users/hollyorr/Desktop/nyumhealth_git/FDA-WebApp-Code/index.html:
          40: <a href="#availfar" id="availfar" class="button">
        
        /Users/hollyorr/Desktop/nyumhealth_git/FDA-WebApp-Code/js/intro.js:
          96: el.taxLotActions['availfar']();

####Layer selection code block:  
http://bl.ocks.org/andrewxhill/10506396  

####Select by location:  
http://academy.cartodb.com/courses/sql-postgis/postgis-in-cartodb/  
ST_DWithin()  

http://duspviz.mit.edu/web-map-workshop/databases-leaflet-cartodb/  

Turf for selecting:  
http://turfjs.org/static/docs/module-turf_inside.html  
http://turfjs.org/  



