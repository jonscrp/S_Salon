import React, { useState, useEffect } from 'react';
import GalleryItems from './GalleryItems';


function GalleryContainer() {

    const slides = [
        { url: 'http://localhost:3000/img1.JPG', title: 'img1' },
        { url: 'http://localhost:3000/img2.png', title: 'img2' },
        { url: 'http://localhost:3000/img3.jpg', title: 'img3' },
        { url: 'http://localhost:3000/img4.jpg', title: 'img4' },
        { url: 'http://localhost:3000/img7.JPG', title: 'img7' },
        { url: 'http://localhost:3000/img8.png', title: 'img8' },
        { url: 'http://localhost:3000/img9.jpg', title: 'img9' },
        { url: 'http://localhost:3000/img10.jpg', title: 'img10' },
        { url: 'http://localhost:3000/img11.JPG', title: 'img11' },
        { url: 'http://localhost:3000/img12.png', title: 'img12' },
        { url: 'http://localhost:3000/img14.jpg', title: 'img14' },
        { url: 'http://localhost:3000/img30.jpg', title: 'img30' },
        { url: 'http://localhost:3000/img340.JPG', title: 'img1' },
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
                <GalleryItems slides={slides} />
            </div>
        </div>
    );
}

export default GalleryContainer;