import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import { useState } from "react";
import LocationInfoBox from "./LocationInfoBox";

let mapHeight = "calc(100vh - 49px)";

const Map = ({ LocationData, center, zoom }) => {
  const [LocationInfo, setLocationInfo] = useState(LocationData); 
  const [open, setOpen] = useState(false);
  const Locations = LocationData.map((location, i) => {
    return (
      <LocationMarker
        key={i}
        lat={LocationData[i].lat}
        lng={LocationData[i].lng}
        onMouseEnter={() =>
          setLocationInfo({
            location: LocationData[i].location,
            lat: LocationData[i].lat,
            lng: LocationData[i].lng,
          })
        }
        onChildClick={() =>
          setOpen(!open)
        }
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
        
        {LocationInfo && (
          <LocationInfoBox
            lat={LocationInfo.lat}
            lng={LocationInfo.lng}
            location={LocationInfo.location}
            
          />
        )}
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
