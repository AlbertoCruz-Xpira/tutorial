async function initMap() {
  if (typeof google === "undefined") {
    console.error("Google Maps API no está cargada.");
    return;
  }

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const map = new Map(document.getElementById("map"), {
    center: { lat: 37.4239163, lng: -122.0947209 },
    zoom: 14,
    mapId: "4504f8b37365c3d0",
  });

  new AdvancedMarkerElement({
    map,
    position: { lat: 37.4239163, lng: -122.0947209 },
  });
}

// Esperar a que el DOM esté listo antes de inicializar
window.addEventListener("load", () => {
  initMap();
});
  