function initMap() {
	var shop = {lat: 40.7402962, lng: -73.9984276};
	var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: shop
        });
        var marker = new google.maps.Marker({
          position: shop,
          map: map 
		});
}		


