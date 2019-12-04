import React from 'react';

export default () => {
    return (
        <React.Fragment>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="../Images/test1.png"></img>
                        <img className="startButtonForPT" src="../Images/Home_start.png"></img>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <script src="swiper/js/swiper.js"></script>
            <script src="index.js"></script>
        </React.Fragment>
    );
}