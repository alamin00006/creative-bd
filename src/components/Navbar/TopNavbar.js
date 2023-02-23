import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

const TopNavbar = () => {
    return (
        <nav className='bg-primary text-white'>
            <div className='mx-24 flex items-center py-2'>
                <div className='flex items-center'>
                    <div>
                        <PhoneIcon className='h-5 w-5'/>
                    </div>
                    <div className='ml-3'>
                        <h2>01646516565</h2>
                    </div>
                </div>
                <div className='flex items-center ml-24'>
                    <div>
                        <EnvelopeIcon className='h-5 w-5'/>
                    </div>
                    <div className='ml-3'>
                        <h2> help@creativebd.com</h2>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;