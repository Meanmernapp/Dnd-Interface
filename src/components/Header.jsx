import React from 'react';
import '../assets/styles/App.css'
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
    return (
        <div className='main-div'>
            <div className='inner-box' style={{ borderRight: "1px solid" }}>
                <p>0%</p>
                <p>sent</p>
            </div>
            <div className='inner-box' style={{ borderRight: "1px solid" }}>
                <p>0%</p>
                <p>open rate</p>
            </div>
            <div className='inner-box' style={{ borderRight: "1px solid" }}>
                <p>0%</p>
                <p>link</p>
            </div>
            <div className='inner-box bottomDiv'>
                <div>
                    <p>0%</p>
                    <p>sales</p>
                </div>
                <AiFillDelete />
            </div>
        </div>
    )
}

export default Header