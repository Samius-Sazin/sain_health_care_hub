import { useEffect, useState } from "react"

const LoadServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return{
        services,
        setServices
    }
}

export default LoadServices;