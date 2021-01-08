
import SearchBox from "./SearchBox";
import banff from '../imgs/banff.jpg'
import Toronto from '../imgs/Toronto.jpg'
import yosemite from '../imgs/yosemite.jpg'
import yellowstone from '../imgs/yellowstone.jpg'
const Locations = () => {

    return (
      <div className="flex flex-col">
      <div className="py-6 px-10">
        <SearchBox />
        <h1 className="pt-6 text-2xl text-bold text-gray-800 font-poppins">
          Explore
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-6 px-10">
        
        <img className="h-48 w-80 object-cover" src={banff} alt="banff" />
        <img className="h-48 w-80 object-cover" src={Toronto} alt="banff" />
        <img className="h-48 w-80 object-cover" src={yosemite} alt="banff" />
        <img className="h-48 w-80 object-cover" src={yellowstone} alt="banff" />
      </div>
    </div>
  );
};

export default Locations;
