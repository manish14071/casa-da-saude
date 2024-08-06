import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Departments = () => {
    const departmentsArray = [
        {
            name: "Pediatrics",
            imageUrl: "/departments/pedia.jpg",
        },
        {
            name: "Orthopedics",
            imageUrl: "/departments/ortho.jpg",
        },
        {
            name: "Cardiology",
            imageUrl: "/departments/cardio.jpg",
        },
        {
            name: "Neurology",
            imageUrl: "/departments/nuro.jpg",
        },

        {
            name: "Radiology",
            imageUrl: "/departments/radio.webp",
        },
        {
            name: "Physical Therapy",
            imageUrl: "/departments/therapy.jpg",
        },
        {
            name: "Dermatology",
            imageUrl: "/departments/derma.jpg",
        },

    ];
    const responsive = {

        extraLarge: {
            breakpoint: { max: 3000, min: 1324 },
            items: 4,
            slideToSlide: 1,
        },
        large: {
            breakpoint: { max: 1324, min: 10005 },
            items: 3,
            slideToSlide: 1,
        },
        medium: {
            breakpoint: { max: 1005, min: 700 },
            items: 2,
            slideToSlide: 1,
        },
        small: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
            slideToSlide: 1,
        }
    };
    return (
        <div className='container departments'>
            <h2>
                Departments
            </h2>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["medium","small"]} >

                {departmentsArray.map((depart, index) => {
                    return (

                        <div className='card' key={index}>
                            <div className='depart-name'>
                                {depart.name}

                            </div>
                            <img src={depart.imageUrl} alt={depart.name} />

                        </div>
                    )
                })
                }
            </Carousel>
        </div>
    )
}

export default Departments