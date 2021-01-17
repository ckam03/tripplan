

const LocationInfoBox = ({ lat, lng, location, onChildClick }) => {
    return (
        <div className="h-32 w-40 bg-gray-700 font-poppins text-gray-50 bg-opacity-60 rounded-xl text-center items-center pt-6 mt-8" onChildClick={onChildClick}>
            <li className="list-none">{location}</li>
            
        </div>
    );
}

export default LocationInfoBox;