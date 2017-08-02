var initialise = function(){
  var center = { lat: 55.86610695, lng: -4.26944375 };
  var zoom = 18;
  var mapDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(mapDiv, center, zoom);

  mainMap.addMarker(center);

  mainMap.addClickEvent();

  var button = document.querySelector("#bounce-button");
  button.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var vegas = document.querySelector("#vegas-button");
  vegas.addEventListener("click", mainMap.vegasBaby.bind(mainMap));

  var home = document.querySelector("#home");
  home.addEventListener("click", function(){mainMap.googleMap.setCenter(center)
  });
}

window.addEventListener("load", initialise);