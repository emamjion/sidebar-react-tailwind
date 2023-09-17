import React from 'react';
import logo from '';

const Sidebar = () => {
    return (
        <aside className='h-screen'>
            <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
                <div className='p-4 pb-2 flex justify-between items-center'>
                    <img src={logo} />
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;