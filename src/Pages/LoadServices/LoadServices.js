import { useEffect, useState } from "react";

const LoadServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://sain-health-care-hub-server.onrender.com/services")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return{
        services,
        setServices
    }
}

export default LoadServices;