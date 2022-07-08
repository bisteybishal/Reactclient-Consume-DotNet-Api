import React from 'react'
import e1 from "../Image/e1.jpg";
import e2 from "../Image/e2.jpg";

const Content = () => {
    return (
        <>
            <div className='menu-card'>
                <img src={e1} alt="" className="shadow  rounded h-full " />
                {/* css written in index.css for global use (content-center) */}
                 <div className='content-center'>
                    <h1 className='text-2xl mb-2'>
                        Egg Omlet
                    </h1>
                    <p className='mb-2'>Delicious,Nutritious</p>
                    <span>$20</span>
                </div>
            </div>

            <div className='menu-card'>
                <img src={e2} alt="" className="  shadow  rounded h-full" />
                <div className='content-center'>
                    <h1 className='text-2xl mb-2'>
                        Egg Muffins
                    </h1>
                    <p className='mb-2'>Delicious,Nutritious</p>
                    <span>$29</span>
                </div>
            </div>
        </>
    )
}

export default Content