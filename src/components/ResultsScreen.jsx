import React, { useState } from 'react'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { LiaBrainSolid } from 'react-icons/lia'
import { BiMessageRoundedMinus } from 'react-icons/Bi'
import { GoEye } from 'react-icons/go'
import './ResultsScreen.css'


export const ResultsScreen = () => {
    const [slideOut, setSlideOut] = useState(false);
    const handleBoxClick = () => {
        setSlideOut(!slideOut);
    };




    return (
        <div className='card-container'>
            <div className='card-one' onClick={handleBoxClick}>
                <div className='result-wrapper'>
                    <h2 className='title'>Your Result</h2>
                    <div className='percent-container'>
                        <p className='result-value'>76</p>

                        <p className='hundred'>of 100</p>


                    </div>
                    <h2 className='heading-two'>Great</h2>
                    <p className='text'>You scored higher than 65% of the people who have taken these tests.</p>
                </div>

            </div>

            <div className={slideOut ? "card-two slide-out .box-shadow" : "card-two slide-back"}>
                <h2 className='card-two-title'>Summary</h2>
                <div className='reaction-result '>
                    <AiOutlineThunderbolt className='thunderbolt-icon' />
                    <span className='reaction-result-text'>Reaction</span>
                    <span className='reaction-value-one'>80</span> <span className='slash'>/ </span> <span className='reaction-value-two'>100</span>

                </div>
                <div className='reaction-result reaction-bg'>
                    <LiaBrainSolid size={21} className='brain-icon' />
                    <span className='reaction-result-text col'>Memory </span>
                    <span className='reaction-value-one'>92</span> <span className='slash'>/ </span> <span className='reaction-value-two'>100</span>
                </div>



                <div className='reaction-result verbal-bg '>
                    <BiMessageRoundedMinus size={21} className='brain-icon' />
                    <span className='reaction-result-text col'>Verbal </span>
                    <span className='reaction-value-one'>61</span> <span className='slash'>/ </span> <span className='reaction-value-two'>100</span>
                </div>
               

                <div className='reaction-result visual-bg'>
                    <GoEye size={21} className='brain-icon visual-color' />
                    <span className='reaction-result-text visual-color'>Visual </span>
                    <span className='reaction-value-one'>72</span> <span className='slash'>/ </span> <span className='reaction-value-two'>100</span>
                </div>
                <button className='summary-btn'>Continue</button>
            </div>
            
        </div>
    )
}

