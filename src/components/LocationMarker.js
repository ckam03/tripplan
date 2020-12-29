import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="text-indigo-500" onClick={ onClick }>
            <FontAwesomeIcon icon={faMapMarker} size="3x" />
        </div>
    );
}

export default LocationMarker;
