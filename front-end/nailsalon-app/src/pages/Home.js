import ImageSlider from '../components/ui/ImageSlider'

import React, { useState, useEffect } from 'react';


function Home() {

    const slides = [
        { url: 'http://localhost:3000/img1.JPG', title: 'img1' },
        { url: 'http://localhost:3000/img2.png', title: 'img2' },
        { url: 'http://localhost:3000/img3.jpg', title: 'img3' },
        { url: 'http://localhost:3000/img4.jpg', title: 'img4' },
    ];


    const [containerStyles, setcontainerStyles] = useState(
        {
            position: 'center',
            width: window.innerWidth,
            height: window.innerHeight*.30,
    
            margin: '0 auto',
        })

    useEffect(() => {

        const modifiedHeight = window.innerHeight * .60;
        //const modifiedWidth = window.innerWidth * .80;
        const handleResize = () => {
            setcontainerStyles({
                position: 'center',
                width: window.innerWidth,
                height: modifiedHeight*.30,
                margin: '0 auto',
            })
            console.log("handleResize");
        };

        window.addEventListener('fullscreenchange', handleResize);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('fullscreenchange', handleResize)
        };
    }, []);


    return (
        <div>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    );
}

export default Home;