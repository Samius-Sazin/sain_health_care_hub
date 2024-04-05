import { useNavigate, useParams } from "react-router";
import LoadServices from "../LoadServices/LoadServices";

function ShowServicesWithDetails() {
  const { serviceID, serviceName } = useParams();

  const { services } = LoadServices();
  const service = services.find(serv => serv._id === serviceID);
  const moreServices = service?.moreServices;

  let moreService = {};
  if (moreServices) {
    for (const key in moreServices) {
      if (moreServices[key].name === serviceName.split('-').join(' ')) {
        moreService = { ...moreServices[key] };
        break;
      }
    }
  }

  const navigate = useNavigate();
  const handleBookService = () => {
    alert("Successfully Booked !!");
    navigate('/services');
  }

  return (
    <div className="w-2/4 mx-auto mt-28 mb-8 border-2 px-10 py-8 drop-shadow-lg rounded-lg bg-[#89af18]">

      <img className='rounded-xl mx-auto mb-5' style={{ width: "300px", height: "180px" }} src={moreService?.image} alt="" />

      <div className="bg-[#f2ffca] p-5 rounded-lg">
        <h2 className="text-xl mb-2"><span className="font-semibold">Service Name : </span>{moreService?.name}</h2>
        <p className="text-xl mb-2"><span className="font-semibold">Service Details : </span>{moreService?.details}</p>
        <h2 className="text-xl mb-2"><span className="font-semibold">Service Cost : </span><span className="font-bold">{moreService?.serviceCost}</span></h2>
        <button onClick={handleBookService} className='bg-[#a7d02d] px-8 py-3 mt-2 rounded-lg text-black font-semibold text-lg hover:bg-[#89af18] shadow-lg'>Book Service</button>
      </div>

    </div>
  )
}

export default ShowServicesWithDetails
