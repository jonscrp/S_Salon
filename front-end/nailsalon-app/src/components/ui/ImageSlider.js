import { useState } from 'react';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
    }
    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${slides[currentIndex].url})`,
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '70px',
        fontWeight: 'bold',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontWeight: 'bold',
        fontSize: '70px',
        color: '#fff',
        zIndex: 3,
        cursor: 'pointer',
    };
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        
    }

    const dotContainerStyles = {
        display: 'flex',
        justifyContent: 'center',

    };

    const dotStyles={
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px',
    }

const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex);
}


const homeTitleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '4rem',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px #000000',
}

    //setInterval(goToNext, 6000);

    return (
        <div style={sliderStyles}>
            <h1 style={homeTitleStyle}>Welcome to Nail Salon</h1>

            <div style={leftArrowStyles} onClick={goToPrevious}>&#x3c;</div>
            <div style={rightArrowStyles} onClick={goToNext}>&#x3e;</div>

            <div style={slideStyles}></div>
            <div style={dotContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div  key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>*</div>
                ))}

            </div>
        </div>
    );

}

export default ImageSlider;