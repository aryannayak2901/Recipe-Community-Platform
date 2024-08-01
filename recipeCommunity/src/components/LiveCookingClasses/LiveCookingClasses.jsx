import React from 'react';
import '../../static/LiveCookingClasses/css/LiveCookingClasses.css'

const LiveCookingClasses = () => {
    const classes = [
        {
            image: 'https://imgs.search.brave.com/TZmpi0DLakdhG3sgMiZUwGfun9F9Iva-pSvtkXa_hdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGl0/Lm9yZy9lZGl0b3Iv/anNvbi8yMDIyLzAz/LzE1LzkvMC85MDA2/YTkzY2ExMGU4Yjc5/MGU1Y2I3ZjhiMmQx/NDlhNC53ZWJw',
            title: 'Italian Pasta Masterclass',
            date: 'July 15, 2024',
            time: '3:00 PM UTC',
            description: 'Join our expert chef for an interactive pasta-making experience.',
            instructor: 'Chef Giovanni Rossi'
        },
        {
            image: 'https://imgs.search.brave.com/4ZiybspWl0D0aYJVdlUmQc7s5_8ngsBwrI09hV5seUM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGl0/Lm9yZy9lZGl0b3Iv/anNvbi8yMDIyLzAz/LzE4LzIvMS8yMTVh/MWMyNzk5OGFiYWMw/YjAzMzcyZjQ1MWE5/ZmRkMS53ZWJw',
            title: 'Italian Pasta Masterclass',
            date: 'July 15, 2024',
            time: '3:00 PM UTC',
            description: 'Join our expert chef for an interactive pasta-making experience.',
            instructor: 'Chef Giovanni Rossi'
        },
        {
            image: 'https://imgs.search.brave.com/tBIXF5SLvO2PVV8F_F3mBYJTQ0toXcl9eMaipIJMoRk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGl0/Lm9yZy9lZGl0b3Iv/anNvbi8yMDIyLzAz/LzE1LzcvMC83MGE2/MTEyM2VkM2IxYWI5/NTcyMDI0N2VmOWY2/OTlhNi53ZWJw',
            title: 'Italian Pasta Masterclass',
            date: 'July 15, 2024',
            time: '3:00 PM UTC',
            description: 'Join our expert chef for an interactive pasta-making experience.',
            instructor: 'Chef Giovanni Rossi'
        }
    ];

    return (
        <section className="live-classes">
            <div className="container">
                <h2>Live Cooking Classes</h2>
                <div className="class-schedule">
                    {classes.map((classItem, index) => (
                        <div key={index} className="class-card">
                            <div className="class-image">
                                <img src={classItem.image} alt="Class Flyer" />
                            </div>
                            <div className="class-details">
                                <h3>{classItem.title}</h3>
                                <p>Date: {classItem.date}</p>
                                <p>Time: {classItem.time}</p>
                                <p>Description: {classItem.description}</p>
                                <p>Instructor: {classItem.instructor}</p>
                                <a href="#" className="btn join-btn">Join Now</a>
                                <a href="#" className="btn details-btn">View Details</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LiveCookingClasses;
