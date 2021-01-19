import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

let mapHeight = "calc(100vh - 49px)";

const Map = ({ LocationData, center, zoom }) => {


  const Locations = LocationData.map((location, i) => {
    return (
      <LocationMarker
        key={i}
        lat={LocationData[i].lat}
        lng={LocationData[i].lng}
        location={LocationData[i].location}
        
      />
    );
  });

  return (
    <div className="w-4/5" style={{ height: mapHeight }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_ACCESSKEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {Locations}
        
      </GoogleMapReact>
       
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },

  zoom: 5,
};

export default Map;
