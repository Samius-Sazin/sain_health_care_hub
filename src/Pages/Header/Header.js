import { NavLink, useLocation, useNavigate } from "react-router-dom";
import './Header.css';
import useAuth from "../Context/useAuth";

function Header() {
    const { user, setUser, setError, signInUsingGoogle, logOut } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    const handleLoginButton = () => {
        signInUsingGoogle()
            .then(res => {
                setUser(res.user);
                navigate(location?.state?.from?.pathname || '/home');
            })
            .catch(error => {
                setError(error);
            });
    }

    const handleLogoutButton = () => {
        logOut()
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setError(error);
            });
    }

    return (
        <div className='flex items-center justify-between'>

            <div className='font-medium text-lg flex items-center'>
                <NavLink
                    end='true' to='/'
                > <img src='/logo.png' alt="" style={{ width: "40px" }} className='' /> </NavLink>

                <div>
                    <NavLink
                        end='true' to="/"
                        activeclassname="active"
                        className="pe-5 ps-5 hover:underline decoration-[#4e9a02] decoration-2 underline-offset-4"
                    >Home</NavLink>

                    <NavLink
                        to="/services"
                        activeclassname="active"
                        className="hover:underline decoration-[#4e9a02] decoration-2 underline-offset-4"
                    >Services</NavLink>

                    <NavLink
                        to="/departments"
                        activeclassname="active"
                        className="ps-5 pe-5 hover:underline decoration-[#4e9a02] decoration-2 underline-offset-4"
                    >Departments</NavLink>

                    <NavLink
                        to="/doctors"
                        activeclassname="active"
                        className="hover:underline decoration-[#4e9a02] decoration-2 underline-offset-4"
                    >Doctors</NavLink>

                    <NavLink
                        to="/about-us"
                        activeclassname="active"
                        className="ps-5 hover:underline decoration-[#4e9a02] decoration-2 underline-offset-4"
                    >About Us</NavLink>
                </div>
            </div>

            <div className='font-semibold text-lg'>
                {
                    user?.email
                        ?
                        <button className='font-medium text-lg text-[#4e9a02] hover:underline hover:text-black decoration-[#4e9a02] decoration-2 underline-offset-4'
                        >{user.displayName}</button>
                        :
                        <button
                            className='font-medium text-lg hover:underline decoration-[#4e9a02] decoration-2 underline-offset-4'
                            onClick={handleLoginButton}
                        >Login</button>
                }

                <span className='font-semibold text-lg text-[#4e9a02]'> | </span>

                {
                    user.email
                        ?
                        <button
                            className='font-medium text-lg hover:underline decoration-[#4e9a02] decoration-2 underline-offset-4'
                            onClick={handleLogoutButton}
                        >Logout</button>
                        :
                        <NavLink
                            to='/register'
                            activeclassname='active'
                            className="hover:underline decoration-[#4e9a02] decoration-2 underline-offset-4"
                        >Register</NavLink>
                }

            </div>
        </div>
    )
}

export default Header
