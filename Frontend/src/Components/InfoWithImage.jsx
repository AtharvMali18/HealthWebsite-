import React from 'react';
import '../Components/InfowithImage.css';

const InfoWithImage = () => {
    return (
        
        <div className="info-container">
            <div className="image-container">
                <img
                    src="https://via.placeholder.com/200"
                    alt="Sample"
                    className="round-image"
                />
            </div><br /><br />
            
            <br />
            <div className="info">
            <h2 className='med'>Medical Information </h2><br />
                <div>
                    <li>Patient Name:Atharv Mali</li>
                    <li>heigth:160 cm</li>
                    <li>Blood Group:B+</li>
                </div>
            </div>
            
        </div>
    );
};

export default InfoWithImage;
