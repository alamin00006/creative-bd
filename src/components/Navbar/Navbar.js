import React from 'react';
import logo from '../../images/creativebd-logo.jfif'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='mx-24'>
           <div className="navbar">
                <div className="flex-1">
                    <div className='flex items-center'>
                        <div>
                            <img style={{width:'100px', height:'50px'}} src={logo} alt=''/>
                        </div>
                        <h2 className='ml-2 text-rose-500 font-black text-xl'>Creativebd</h2>
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-black">
                    <li><Link to=''>হোম</Link></li>
                    <li><Link to=''>আমাদের সম্পর্কে</Link></li>
                    <li><Link to=''>সাফল্যের গল্প</Link></li>
                    <li><Link to=''>ফ্রিল্যান্সিং</Link></li>
                    <li><Link to=''>যোগাযোগ</Link></li>
                    <li className='bg-primary text-white px-5 py-1 rounded-lg'>
                        <div className='p-0'>
                            <BookOpenIcon className='h-6 w-6'/>
                        </div>
                        <div>
                            <Link to='' className='font-black'>ব্রাউজ কোর্স</Link>
                        </div>         
                        <div className='p-0'>
                            <ChevronDownIcon className='h-6 w-6'/>
                        </div>
                    </li>
                    
                    
                    </ul>
                </div>
           </div>
        </nav>
    );
};

export default Navbar;