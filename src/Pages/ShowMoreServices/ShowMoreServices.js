import { useNavigate } from 'react-router';

function ShowMoreServices(props) {
    const { name, details, image } = props.moreService;

    const navigate = useNavigate();

    const handleViewMoreButton = () => {
        navigate(`/services/${props.parentService_Id}/${name.split(' ').join('-')}`);
    }

    return (
        <div className='relative flex items-center bg-white p-3 px-5 rounded-lg shadow-md'>
            <div>
                <img className='rounded-xl mx-auto' style={{ width: "200px", height: "120px" }} src={image} alt="" />
                <h3 className='font-bold text-2xl my-2 text-[#4e9a02]'>{name}</h3>
                <p className='font-semibold pb-16'>{details}</p>
                <button onClick={handleViewMoreButton} className='absolute bottom-3 left-32 py-3 px-7 bg-[#4e9a02] rounded-lg mt-2 hover:bg-[#63ac19] font-semibold text-white'>View More</button>
            </div>
        </div>
    )
}

export default ShowMoreServices