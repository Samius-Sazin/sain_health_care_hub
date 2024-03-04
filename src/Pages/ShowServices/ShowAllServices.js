import ShowMoreServices from '../ShowMoreServices/ShowMoreServices';
import './ShowAllServices.css';

function ShowAllServices(props) {
    const { serviceName, serviceDetails, serviceImg, moreServices } = props.service;
    const moreServicess = [];

    for(let key in moreServices){
        moreServicess.push((moreServices[key]));
    }

    return (
        <div id={props.service.id} className='mb-10 bg-[#f7f1e6] p-5 rounded-lg shadow-lg'>
            <div className='service'>
                <div className='flex items-center'>
                    <img className='rounded-lg hover:scale-105' src={serviceImg} alt="" style={{ width: "350px", height: "196px" }} />
                </div>
                <div className='flex items-center justify-center'>
                    <div className='ms-5'>
                        <h2 className='font-bold text-3xl mb-2 text-[#4e9a02]'>{serviceName}</h2>
                        <p className='font-normal text-lg text-justify'>{serviceDetails}</p>
                    </div>
                </div>
            </div>

            <div className='mt-3 grid gap-4 grid-cols-3 py-3 px-10'>
                {
                    moreServicess.map(moreService => <ShowMoreServices key={moreService.name} moreService={moreService} />)
                }
            </div>
        </div>
    )
}

export default ShowAllServices
