L.mapbox.accessToken = 'pk.eyJ1IjoiZnJhbmNpc2Jpc3Nvbm5ldHRlIiwiYSI6ImlXcEVoTVEifQ.IZx-ZfPFKR65IS3LxBYFlA';
var map = L.mapbox.map('map', 'francisbissonnette.23a25f01', { zoomControl:false }).setView([48.85697, -71.25219], 6);
new L.Control.Zoom({ position: 'topright' }).addTo(map);

 $('.drawer').drawer();


/* credits: https://github.com/turban/Leaflet.Mask
L.Mask = L.Polygon.extend({
	options: {
		stroke: false,
		color: '#333',
		fillOpacity: 0.5,
		clickable: true,

		outerBounds: new L.LatLngBounds([-90, -360], [90, 360])
	},

	initialize: function (latLngs, options) {
        
         var outerBoundsLatLngs = [
			this.options.outerBounds.getSouthWest(),
			this.options.outerBounds.getNorthWest(),
			this.options.outerBounds.getNorthEast(),
			this.options.outerBounds.getSouthEast()
		];
        L.Polygon.prototype.initialize.call(this, [outerBoundsLatLngs, latLngs], options);	
	},

});
L.mask = function (latLngs, options) {
	return new L.Mask(latLngs, options);
};



// Polygon created with http://geojson.io/
var france = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": 
      }
    }
  ]
};

 

 

// transform geojson coordinates into an array of L.LatLng
var coordinates = france.features[0].geometry.coordinates[0];
var latLngs = [];
for (i=0; i<coordinates.length; i++) {
    latLngs.push(new L.LatLng(coordinates[i][1], coordinates[i][0]));
}

L.mask(latLngs).addTo(map);
    
///////////////////////////////////////////// */

















/////////////////////////////////////////////////////////////////////     

function deplaceVers(longi, lati, url, leCercle){

	console.log(leCercle);
	
	map.setZoom((9), {animate: true});

	setTimeout(function() {
		map.panTo([longi,lati]);
	}, 1000);

	setTimeout(function() {
      map.setZoom((14), {animate: true});
	}, 2000);

	

	//console.log(quelCercle);
};

/////////////////////////////////////////////////////////////////////     

var laMalbaie = {
 	longi :47.686438, 
 	lati : -70.208441,
 	circle: "circleLaMalbaie",
 	url :"http://affaires.lapresse.ca/economie/fabrication/201402/12/01-4738279-fermeture-de-lusine-general-cable-de-la-malbaie-60-mises-a-pied.php"
 };

$('#laMalbaie').click(function(){
    deplaceVers(laMalbaie.longi, laMalbaie.lati, laMalbaie.url, laMalbaie.circle);
    setTimeout(function() {
    	circleLaMalbaie.openPopup();
	}, 3500);

});



var circleLaMalbaie = L.circle([laMalbaie.longi,laMalbaie.lati], 200, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.78
	}).addTo(map);

var leUrl = "<a href='" + laMalbaie.url + "' target='_blank'>GENERAL CABLE </a>  "

 

circleLaMalbaie.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////        

var metabetchouan = {
 	longi :48.434965, 
 	lati : -71.857836, 
 	url :"http://www.lapresse.ca/le-quotidien/actualites/201404/26/01-4761116-norfruit-ferme-ses-portes.php"
 };

$('#metabetchouan').click(function(){
    deplaceVers(metabetchouan.longi, metabetchouan.lati, metabetchouan.url);
      setTimeout(function() {
    	circlemetabetchouan.openPopup();
	}, 3500);
});



var circlemetabetchouan = L.circle([metabetchouan.longi,metabetchouan.lati], 200, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + metabetchouan.url + "' target='_blank'>Norfruit </a>  "

 

circlemetabetchouan.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////       

var Romeo = {
 	longi :46.091106, 
 	lati : -70.839007, 
 	url :"http://www.lapresse.ca/le-soleil/affaires/les-regions/201405/07/01-4764614-romeo-laflamme-et-fils-ferme-ses-portes.php"
 };

$('#Romeo').click(function(){
    deplaceVers(Romeo.longi, Romeo.lati, Romeo.url);
      setTimeout(function() {
    	circleRomeo.openPopup();
	}, 3500);
});



var circleRomeo = L.circle([Romeo.longi,Romeo.lati], 200, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Romeo.url + "' target='_blank'>Roméo Laflamme et fils </a>  "

 

circleRomeo.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////     

var Energizer = {
 	longi :45.467572, 
 	lati : -73.715517, 
 	url :"http://ici.radio-canada.ca/nouvelles/economie/2014/07/08/006-energizer-fermeture-usine-montreal.shtml"
 };

$('#Energizer').click(function(){
    deplaceVers(Energizer.longi, Energizer.lati, Energizer.url);
      setTimeout(function() {
    	circleEnergizer.openPopup();
	}, 3500);
});



var circleEnergizer = L.circle([Energizer.longi,Energizer.lati], 300, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Energizer.url + "' target='_blank'>Energizer Holdings </a>  "

 

circleEnergizer.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////     

var Cascades = {
 	longi :45.481457, 
 	lati : -71.663833, 
 	url :"http://www.lapresse.ca/la-tribune/economie-et-innovation/201410/03/01-4805955-cascades-cest-la-fin-pour-180-employes-a-east-angus.php"
 };

$('#Cascades').click(function(){
    deplaceVers(Cascades.longi, Cascades.lati, Cascades.url);
      setTimeout(function() {
    	circleCascades.openPopup();
	}, 3500);
});



var circleCascades = L.circle([Cascades.longi,Cascades.lati], 220, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Cascades.url + "' target='_blank'>Cascades  </a>  "

 

circleCascades.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Electrolux = {
 	longi :45.816596, 
 	lati : -73.432854, 
 	url :"http://ici.radio-canada.ca/nouvelles/economie/2014/07/16/004-electrolux-fermeture-assomption-devancee.shtml"
 };

$('#Electrolux').click(function(){
    deplaceVers(Electrolux.longi, Electrolux.lati, Electrolux.url);
      setTimeout(function() {
    	circleElectrolux.openPopup();
	}, 3500);
});



var circleElectrolux = L.circle([Electrolux.longi,Electrolux.lati], 620, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Electrolux.url + "' target='_blank'>Electrolux  </a>  "

 

circleElectrolux.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Electrolux = {
 	longi :45.816596, 
 	lati : -73.432854, 
 	url :"http://ici.radio-canada.ca/nouvelles/economie/2014/07/16/004-electrolux-fermeture-assomption-devancee.shtml"
 };

$('#Electrolux').click(function(){
    deplaceVers(Electrolux.longi, Electrolux.lati, Electrolux.url);
      setTimeout(function() {
    	circleElectrolux.openPopup();
	}, 3500);
});



var circleElectrolux = L.circle([Electrolux.longi,Electrolux.lati], 620, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Electrolux.url + "' target='_blank'>Electrolux  </a>  "

 

circleElectrolux.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    
var Bombardier = {
 	longi :45.4737821, 
 	lati : -73.7342275, 
 	url :"http://affaires.lapresse.ca/economie/transports/201409/30/01-4804807-bombardier-aeronautique-la-moitie-des-coupes-a-montreal.php"
 };

$('#Bombardier').click(function(){
    deplaceVers(Bombardier.longi, Bombardier.lati, Bombardier.url);
      setTimeout(function() {
    	circleBombardier.openPopup();
	}, 3500);
});



var circleBombardier = L.circle([Bombardier.longi,Bombardier.lati], 500, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Bombardier.url + "' target='_blank'>Bombardier  </a>  "

 

circleBombardier.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Tapis = {
 	longi :45.884002, 
 	lati : -72.521352, 
 	url :"http://www.journalexpress.ca/Actualites/Economie/2014-08-25/article-3847175/Tapis-Venture-fermera-ses-portes-le-7-novembre/1"
 };

$('#Tapis').click(function(){
    deplaceVers(Tapis.longi, Tapis.lati, Tapis.url);
      setTimeout(function() {
    	circleTapis.openPopup();
	}, 3500);
});



var circleTapis = L.circle([Tapis.longi,Tapis.lati], 180, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Tapis.url + "' target='_blank'>Tapis Venture </a>  "

 

circleTapis.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    


var Usine = {
 	longi :46.6094224, 
 	lati : -72.6888189, 
 	url :"http://ici.radio-canada.ca/regions/mauricie/2014/09/02/005-usine-laurentide-produits-forestiers-resolu-fermeture.shtml"
 };

$('#Usine').click(function(){
    deplaceVers(Usine.longi, Usine.lati, Usine.url);
      setTimeout(function() {
    	circleUsine.openPopup();
	}, 3500);
});



var circleUsine = L.circle([Usine.longi,Usine.lati], 230, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Usine.url + "' target='_blank'>Usine Laurentide de Resolu  </a>  "

 

circleUsine.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Saputo = {
 	longi :46.34416, 
 	lati : -72.54732, 
 	url :"http://ici.radio-canada.ca/regions/mauricie/2014/09/26/001-fermeture-usine-saputo-trois-rivieres.shtml"
 };

$('#Saputo').click(function(){
    deplaceVers(Saputo.longi, Saputo.lati, Saputo.url);
      setTimeout(function() {
    	circleSaputo.openPopup();
	}, 3500);
});



var circleSaputo = L.circle([Saputo.longi,Saputo.lati], 180, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Saputo.url + "' target='_blank'>Saputo</a>  "

 

circleSaputo.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Kruger = {
 	longi :45.483033, 
 	lati : -71.94955, 
 	url :"http://www.lapresse.ca/le-nouvelliste/economie/201409/25/01-4803410-kruger-ferme-une-machine-a-brompton.php"
 };

$('#Kruger').click(function(){
    deplaceVers(Kruger.longi, Kruger.lati, Kruger.url);
      setTimeout(function() {
    	circleKruger.openPopup();
	}, 3500);
});



var circleKruger = L.circle([Kruger.longi,Kruger.lati], 180, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Kruger.url + "' target='_blank'>Kruger</a>  "

 

circleKruger.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Resolu = {
 	longi :49.222148, 
 	lati : -68.150384, 
 	url :"http://affaires.lapresse.ca/economie/quebec/201410/03/01-4806104-resolu-ferme-deux-machines-a-baie-comeau-80-emplois-perdus.php"};

$('#Resolu').click(function(){
    deplaceVers(Resolu.longi, Resolu.lati, Resolu.url);
      setTimeout(function() {
    	circleResolu.openPopup();
	}, 3500);
});



var circleResolu = L.circle([Resolu.longi,Resolu.lati], 180, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Resolu.url + "' target='_blank'>Résolu</a>  "

 

circleResolu.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////   

var Industries = {
 	longi :47.449066, 
 	lati : -70.493812, 
 	url :"http://www.cihofm.com/nouvelles/Industries-Cover-ferme-pour-une-periode-indeterminee-2014-10-02-14-43"
 };

$('#Industries').click(function(){
    deplaceVers(Industries.longi, Industries.lati, Industries.url);
      setTimeout(function() {
    	circleIndustries.openPopup();
	}, 3500);
});



var circleIndustries = L.circle([Industries.longi,Industries.lati], 180, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Industries.url + "' target='_blank'>Industries Cover</a>  "

 

circleIndustries.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Serres = {
 	longi :47.584628, 
 	lati : -70.253744, 
 	url :"http://www.lapresse.ca/le-soleil/affaires/les-regions/201410/03/01-4806220-perte-de-80-emplois-dans-charlevoix.php"
 };

$('#Serres').click(function(){
    deplaceVers(Serres.longi, Serres.lati, Serres.url);
      setTimeout(function() {
    	circleSerres.openPopup();
	}, 3500);
});



var circleSerres = L.circle([Serres.longi,Serres.lati], 180, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Serres.url + "' target='_blank'>Serres Lacoste</a>  "

 

circleSerres.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Jacob = {
 	longi :45.489184, 
 	lati : -73.687716, 
 	url :"http://ici.radio-canada.ca/nouvelles/economie/2014/10/21/001-jacob-fermeture-faillite-plan-relance.shtml"
 };

$('#Jacob').click(function(){
    deplaceVers(Jacob.longi, Jacob.lati, Jacob.url);
      setTimeout(function() {
    	circleJacob.openPopup();
	}, 3500);
});



var circleJacob = L.circle([Jacob.longi,Jacob.lati], 580, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Jacob.url + "' target='_blank'>Jacob</a>  "

 

circleJacob.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Lithium = {
 	longi :48.423289, 
 	lati : -77.846419, 
 	url :"http://www.lesaffaires.com/secteurs-d-activite/ressources-naturelles/quebec-lithium-cesse-sa-production/572822"
 };

$('#Lithium').click(function(){
    deplaceVers(Lithium.longi, Lithium.lati, Lithium.url);
      setTimeout(function() {
    	circleLithium.openPopup();
	}, 3500);
});



var circleLithium = L.circle([Lithium.longi,Lithium.lati], 280, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Lithium.url + "' target='_blank'>Québec Lithium</a>  "

 

circleLithium.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    


var SNCLavalin = {
 	longi :45.50469, 
 	lati : -73.56561, 
 	url :"http://fr.canoe.ca/argent/actualites/archives/2014/11/20141106-075952.html"
 };

$('#SNCLavalin').click(function(){
    deplaceVers(SNCLavalin.longi, SNCLavalin.lati, SNCLavalin.url);
      setTimeout(function() {
    	circleSNCLavalin.openPopup();
	}, 3500);
});



var circleSNCLavalin = L.circle([SNCLavalin.longi,SNCLavalin.lati], 580, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + SNCLavalin.url + "' target='_blank'>SNC-Lavalin</a>  "

 

circleSNCLavalin.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Metso = {
 	longi :45.442108, 
 	lati : -73.663505, 
 	url :"http://tvanouvelles.ca/lcn/infos/regional/montreal/archives/2014/11/20141121-225649.html"
 };

$('#Metso').click(function(){
    deplaceVers(Metso.longi, Metso.lati, Metso.url);
      setTimeout(function() {
    	circleMetso.openPopup();
	}, 3500);
});



var circleMetso = L.circle([Metso.longi,Metso.lati], 180, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Metso.url + "' target='_blank'>Metso</a>  "

 

circleMetso.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Arvida = {
 	longi :48.4025, 
 	lati : -71.15935, 
 	url :"http://www.lapresse.ca/le-quotidien/actualites/201411/25/01-4822467-dur-coup-pour-50-travailleurs.php"
 };

$('#Arvida').click(function(){
    deplaceVers(Arvida.longi, Arvida.lati, Arvida.url);
      setTimeout(function() {
    	circleArvida.openPopup();
	}, 3500);
});



var circleArvida = L.circle([Arvida.longi,Arvida.lati], 180, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Arvida.url + "' target='_blank'>Atelier d'usinage d'Arvida</a>  "

 

circleArvida.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Arvida = {
 	longi :48.4025, 
 	lati : -71.15935, 
 	url :"http://www.lapresse.ca/le-quotidien/actualites/201411/25/01-4822467-dur-coup-pour-50-travailleurs.php"
 };

$('#Arvida').click(function(){
    deplaceVers(Arvida.longi, Arvida.lati, Arvida.url);
      setTimeout(function() {
    	circleArvida.openPopup();
	}, 3500);
});



var circleArvida = L.circle([Arvida.longi,Arvida.lati], 180, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Arvida.url + "' target='_blank'>Atelier d'usinage d'Arvida</a>  "

 

circleArvida.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Cliff = {
 	longi :52.8323444, 
 	lati : -67.2297456, 
 	url :"http://www.ledevoir.com/economie/actualites-economiques/424805/cliffs-ferme-sa-mine-du-lac-bloom-pres-de-fermont"
 };

$('#Cliff').click(function(){
    deplaceVers(Cliff.longi, Cliff.lati, Cliff.url);
      setTimeout(function() {
    	circleCliff.openPopup();
	}, 3500);
});



var circleCliff = L.circle([Cliff.longi,Cliff.lati], 280, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Cliff.url + "' target='_blank'>Cliff Resources, mines Lac-Bloom</a>  "

 

circleCliff.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Resolu2 = {
 	longi :47.6207556, 
 	lati : -70.1411359, 
 	url :"http://www.lapresse.ca/le-soleil/affaires/actualite-economique/201412/05/01-4825672-resolu-perte-de-120-emplois-a-baie-comeau-et-a-clermont.php"
 };

$('#Resolu2').click(function(){
    deplaceVers(Resolu2.longi, Resolu2.lati, Resolu2.url);
      setTimeout(function() {
    	circleResolu2.openPopup();
	}, 3500);
});



var circleResolu2 = L.circle([Resolu2.longi,Resolu2.lati], 180, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Resolu2.url + "' target='_blank'>Résolu Clermont et Baie-Comeau</a>  "

 

circleResolu2.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Fonderie = {
 	longi :45.77689, 
 	lati : -74.010952, 
 	url :"http://argent.canoe.ca/nouvelles/regions/mueller-ferme-son-usine-de-saint-jerome-19122014"
 };

$('#Fonderie').click(function(){
    deplaceVers(Fonderie.longi, Fonderie.lati, Fonderie.url);
      setTimeout(function() {
    	circleFonderie.openPopup();
	}, 3500);
});



var circleFonderie = L.circle([Fonderie.longi,Fonderie.lati], 180, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Fonderie.url + "' target='_blank'>Fonderie  Mueller</a>  "

 

circleFonderie.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Avon = {
 	longi :45.4714, 
 	lati : -73.809749, 
 	url :"http://montrealgazette.com/business/local-business/avon-slashes-jobs-at-pointe-claire-distribution-centre?__lsa=3303-e0da"
 };

$('#Avon').click(function(){
    deplaceVers(Avon.longi, Avon.lati, Avon.url);
      setTimeout(function() {
    	circleAvon.openPopup();
	}, 3500);
});



var circleAvon = L.circle([Avon.longi,Avon.lati], 380, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Avon.url + "' target='_blank'>Avon Canada, centre de distribution Pointe-Claire</a>  "

 

circleAvon.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Mexx = {
 	longi :45.514481, 
 	lati : -73.665586, 
 	url :"http://affaires.lapresse.ca/economie/commerce-de-detail/201401/21/01-4730701-mexx-canada-sort-les-ciseaux.php"
 };

$('#Mexx').click(function(){
    deplaceVers(Mexx.longi, Mexx.lati, Mexx.url);
      setTimeout(function() {
    	circleMexx.openPopup();
	}, 3500);
});



var circleMexx = L.circle([Mexx.longi,Mexx.lati], 220, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Mexx.url + "' target='_blank'>Mexx : fermeture de 30 boutiques</a>  "

 

circleMexx.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Target = {
 	longi :45.502917, 
 	lati : -73.3781308, 
 	url :"http://www.journaldemontreal.com/2015/01/15/target-fermera-ses-magasins-au-canada"
 };

$('#Target').click(function(){
    deplaceVers(Target.longi, Target.lati, Target.url);
      setTimeout(function() {
    	circleTarget.openPopup();
	}, 3500);
});



var circleTarget = L.circle([Target.longi,Target.lati], 620, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Target.url + "' target='_blank'>Target : fermeture de 24 magasins</a>  "

 

circleTarget.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Parasuco = {
 	longi :45.521621, 
 	lati : -73.656425, 
 	url :"http://affaires.lapresse.ca/economie/commerce-de-detail/201502/06/01-4841821-parasuco-ferme-ses-sept-boutiques.php"
 };

$('#Parasuco').click(function(){
    deplaceVers(Parasuco.longi, Parasuco.lati, Parasuco.url);
      setTimeout(function() {
    	circleParasuco.openPopup();
	}, 3500);
});



var circleParasuco = L.circle([Parasuco.longi,Parasuco.lati], 200, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Parasuco.url + "' Parasuco='_blank'>Parasuco : fermeture de 7 boutiques</a>  "

 

circleParasuco.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

var Parmalat = {
 	longi :45.434578, 
 	lati : -73.149611, 
 	url :"http://affaires.lapresse.ca/economie/quebec/201502/19/01-4845709-parmalat-fermera-son-usine-de-marieville.php"
 };

$('#Parmalat').click(function(){
    deplaceVers(Parmalat.longi, Parmalat.lati, Parmalat.url);
      setTimeout(function() {
    	circleParmalat.openPopup();
	}, 3500);
});



var circleParmalat = L.circle([Parmalat.longi,Parmalat.lati], 200, {
	    color: '#bd000a',
	    fillColor: '#bd000a',
	    fillOpacity: 0.7
	}).addTo(map);

var leUrl = "<a href='" + Parmalat.url + "' Parmalat='_blank'>Parmalat</a>  "

 

circleParmalat.bindPopup(leUrl);

/////////////////////////////////////////////////////////////////////    

 