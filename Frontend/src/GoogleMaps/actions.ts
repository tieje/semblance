import { markerPositionVar } from "../cache";

export const MapDragEnd = (e: google.maps.MapMouseEvent): void => {
    let latitude = e.latLng?.lat()
    let longitude = e.latLng?.lng()
    if (latitude && longitude) {
        const newLatLngLiteral: google.maps.LatLngLiteral = {
            lat: latitude,
            lng: longitude
        }
        markerPositionVar(newLatLngLiteral)
    }
}
