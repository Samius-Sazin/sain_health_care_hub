import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='text-[#ffffff] w-full bg-[#161b39] p-16 py-16 grid gap-4 grid-cols-3 mt-10'>
            <div className='pe-10'>
                <div className='flex items-center mb-7'>
                    <Link end='true' to='/' className="me-3"> <img src='/logo.png' alt="" style={{ width: "100px" }} /> </Link>
                    <Link end='true' to='/'>
                        <h2 className='font-bold text-3xl'>SA<span className='text-[#a7d02d]'>i</span>N Health Care</h2>
                        <pre className='font-bold text-xl'>              Hospital</pre>
                    </Link>
                </div>
                <p className='text-justify'>Our hospital, a sanctuary of healing, blend='true's cutting-edge technology with compassionate care, embracing diversity to foster inclusive wellness. Miracles abound.</p>

                <h3 className='text-[#a7d02d] font-bold text-2xl mt-7'>Follow Us</h3>
                <div className='flex items-center'>
                    <a href='https://www.facebook.com/' target='_main'><i className="fa-brands fa-square-facebook"></i></a>
                    <a href='https://www.whatsapp.com/' target='_main'><i className="fa-brands fa-whatsapp px-7"></i></a>
                    <a href='https://www.linkedin.com/' target='_main'><i className="fa-brands fa-linkedin"></i></a>
                    <a href='https://twitter.com/' target='_main'><i className="fa-brands fa-x-twitter px-7"></i></a>
                </div>
            </div>

            <div className='ps-10 grid gap-4 grid-cols-2'>
                <div>
                    <h3 className='text-[#a7d02d] font-bold text-2xl mb-4'>About</h3>
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-[#a7d02d]"></i> About Hospital</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-[#a7d02d] my-5"></i> Services</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-[#a7d02d]"></i> Units</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-[#a7d02d] my-5"></i> Emergency</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-[#a7d02d]"></i> News</Link>
                </div>
                <div>
                    <h3 className='text-[#a7d02d] font-bold text-2xl mb-4'>Patient</h3>
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-[#a7d02d]"></i> Patient Help</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-[#a7d02d] my-5"></i> Insurance</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-[#a7d02d]"></i> Regulations</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-[#a7d02d] my-5"></i> inpatlent</Link>
                </div>
            </div>

            <div className='ms-10 pe-10'>
                <h3 className='text-[#a7d02d] font-bold text-2xl mb-4'>Newsletter</h3>
                <p>Sed ut perspiciatis unde omniste natus errors volupta accus volupta accus.</p>
                <input className='mt-5 px-3 py-4 w-full rounded-lg text-black font-semibold' type='email' placeholder='Enter your email'/>
                <button className='bg-[#a7d02d] px-8 py-3 mt-5 rounded-lg text-black font-semibold text-lg hover:bg-[#89af18]'>Subscribe</button>
            </div>
        </div>
    )
}

export default Footer
