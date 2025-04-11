import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slideImg1 from '../assets/sliderimg1.webp';
import slideImg2 from '../assets/sliderimg2.webp';
import slideImg3 from '../assets/sliderimg3.webp';
import slideImg4 from '../assets/sliderimg4.webp';
import slideImg5 from '../assets/sliderimg5.webp';

const OfferSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        cssEase: 'ease-in-out',
    };

    const slideImages = [
        slideImg1,
        slideImg2,
        slideImg3,
        slideImg4,
        slideImg5
    ];

    return (
        <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2, py: 4 }}>
            <Slider {...settings}>
                {slideImages.map((img, index) => (
                    <Box key={index} sx={{
                        position: 'relative',
                        borderRadius: 2,
                        overflow: 'hidden',
                        height: '250px'
                    }}>
                        <Box
                            component="img"
                            src={img}
                            alt={`slide image ${index}`}
                            sx={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default OfferSlider;
