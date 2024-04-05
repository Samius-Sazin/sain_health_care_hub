import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import AboutUs from './Pages/Aboutus/AboutUs';
import Departments from './Pages/Departments/Departments';
import Doctors from './Pages/Doctors/Doctors';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import ShowServicesWithDetails from './Pages/ShowServicesWithDetails/ShowServicesWithDetails';
import Register from './Pages/Register/Register';
import AuthProvider from './Pages/Context/AuthProvider';
import AuthMiddleware from './Pages/AuthMiddleware/AuthMiddleware';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div style={{ boxShadow: "0px 0px 5px 0px #7fa802" }} className='bg-white text-[#1f1f1f] p-5 ps-8 pe-8 w-full fixed left-0 top-0 z-10'>
            <Header />
          </div>
          <div className='mt-20'></div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/departments' element={<Departments />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/register' element={<Register />} />

            <Route element={<AuthMiddleware />}>
              <Route path='/services/:serviceID/:serviceName' element={<ShowServicesWithDetails />} />
            </Route>

            <Route path='*' element={<PageNotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
