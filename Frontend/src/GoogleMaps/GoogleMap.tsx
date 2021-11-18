import { MapDragEnd } from "./actions"
import { useReactiveVar } from "@apollo/client";
import { markerPositionVar } from "../cache";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { LoadingError, LoadingIcon } from "./styles";
/*
const options = {
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER // 'right-center' ,

        // ...otherOptions
    }
}
*/
const containerStyle = {
    width: '300px',
    height: '300px'
};

const center = {
    lat: 41.31491320423653,
    lng:  -72.90545411168635
};
export const Map = () => {
    const markerPosition = useReactiveVar(markerPositionVar)
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyB_KFzin_dG1jmLQ9zvgBPslFijVYaNHtM" // ,
        // ...otherOptions\
    })

    const renderMap = () => {
        // wrapping to a function is useful in case you want to access `window.google`
        // to eg. setup options or create latLng object, it won't be available otherwise
        // feel free to render directly if you don't need that
        /*
        const onLoad = React.useCallback(
            function onLoad(mapInstance) {
                // do something with map Instance
            }
        )
        */
        return <GoogleMap
            /*options={options}*/
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        /*onLoad={onLoad}*/
        >
            <Marker
                position={markerPosition}
                draggable={true}
                onDragEnd={MapDragEnd}
            />
            {
                // ...Your map components
            }
        </GoogleMap>
    }

    if (loadError) {
        return <LError></LError>
    }

    return isLoaded ? renderMap() : <LIcon></LIcon>
}

const LIcon = () => {
    return (
        <LoadingIcon>
            I'm loading. Fancy animations are for later
        </LoadingIcon>
    )
}
const LError = () => {
    return (
        <LoadingError>
            Some loading error occurred. Not sure how to test this yet.
        </LoadingError>
    )
}
