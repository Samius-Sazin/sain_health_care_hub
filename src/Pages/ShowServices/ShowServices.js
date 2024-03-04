import React from 'react'

function ShowServices(props) {
    const {serviceName, serviceDetails, serviceImg} = props.service;
    
    return (
        <div className='p-5 rounded-lg relative shadow-md'>
            <img className='mx-auto hover:scale-105 rounded-lg' style={{width:"300px", height:"200px"}} src={serviceImg} alt="" />
            <h3 className='font-bold text-2xl my-3 text-[#4e9a02]'>{serviceName}</h3>
            <h3 className='font-normal text-lg mb-16'>{serviceDetails.slice(0, 300)} . . . see more</h3>
            <button onClick={ () => props.handleViewdetailsButton(props.service) }  className='bg-[#4e9a02] rounded-lg px-7 py-2 font-semibold text-lg absolute bottom-3 hover:bg-[#63ac19]'>View Details</button>
        </div>
    )
}

export default ShowServices
