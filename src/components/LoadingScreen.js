import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/animations/loading.json';
import '../styles//loadingScreen.css';

const LoadingScreen = ({ onExplode }) => {
    const [exploding, setExploding] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        if (exploding) {
            // Trigger the "onExplode" callback after the explosion animation duration
            setTimeout(() => {
                onExplode();
            }, 800);
        }
    }, [exploding, onExplode]);

    const handleExplode = () => {
        setExploding(true);
    };

    return (
        <div className={`loading-screen ${exploding ? 'explode' : ''}`} onClick={handleExplode}>
            <Lottie options={defaultOptions} height={200} width={500} />
        </div>
    );
};

export default LoadingScreen;