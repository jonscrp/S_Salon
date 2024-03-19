import { useState } from 'react';
import GalleryItem from './GalleryItem';

const GalleryItems = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
    };

    const slideStyles = {
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };

    const dotContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
    };

    const dotStyles={
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px',
    };

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }

    //setInterval(goToNext, 6000);
    console.log(slides[0].url)
    return (
        <div style={sliderStyles}>
       
            <div style={slideStyles}>
                <GalleryItem style={{width:"20%", height:"20%"}} img={slides[0].url}></GalleryItem>  
            </div>
            <div style={dotContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div  key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>*</div>
                ))}
            </div>
        </div>
    );
}

export default GalleryItems;