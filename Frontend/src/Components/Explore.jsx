import React from 'react'
import { FaRegHeart, FaRegStar } from 'react-icons/fa'
import { AiOutlineAntDesign } from 'react-icons/ai'
import '../CSS/Explore.css'
const Explore = () => {
    return (
        <>
            <div className='header'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit, sed do eiusmod tempor.</p>
            </div>
            <div className='features'>
                <div className='feature'>
                    <FaRegHeart />
                    <h3>Feature 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
                <div className='feature'>
                    <FaRegStar />
                    <h3>Feature 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
                <div className='feature'>
                    <AiOutlineAntDesign />
                    <h3>Feature 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
            </div>
        </>
    )
}

export default Explore