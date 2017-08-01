var MapWrapper = function(container, center, zoom){
	this.googleMap = new google.maps.Map(container, {
		center: center,
		zoom: zoom
	});
	this.markers = [];
}

	MapWrapper.prototype.addMarker = function(coords) {
		var marker = new google.maps.Marker({
			position: coords,
			map: this.googleMap
		})
		this.markers.push(marker);

		var contentString = '<div id="content">'+
								'<div id="siteNotice">'+
								'</div>'+
								'<h1 id="firstHeading" class="firstHeading">Genting Glasgow</h1>'+
								'<div id="bodyContent">'+
								'<p><b>Genting</b>, also referred to as <b>The wages</b>, is a large ' +
								'sea of fish, this natural phenomenon usually occurs late in  '+
								'the evenings and is particularly prominent on weekends. '+
								'</p>'+
								'</div>'+
				 '</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	})

	marker.addListener('click', function() {
		infowindow.open(this.googleMap, marker);
	});
}
	

	MapWrapper.prototype.addClickEvent = function(){
		google.maps.event.addListener(this.googleMap, 'click', function(event) {
			console.log(event.latLng.lat());
			console.log(event.latLng.lng());
			var coords = {
				lat: event.latLng.lat(),
				lng: event.latLng.lng()
			}
			this.addMarker(coords);
		}.bind(this));
	};

	MapWrapper.prototype.bounceMarkers = function() {
		this.markers.forEach(function(marker) {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		});
	}

	MapWrapper.prototype.vegasBaby = function() {
	  var vegas = { lat: 36.11454612, lng: -115.17276764 };
	  this.googleMap.setCenter(vegas);
	};


