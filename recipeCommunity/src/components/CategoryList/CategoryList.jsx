import React from 'react';
import '../../static/CategoryList/css/CategoryList.css'

function CategoryList() {
    const handleFilterClick = (e) => {
        e.currentTarget.classList.toggle('selected');
        // Add your logic for filter selection here
        // Example: Highlight selected category or filter recipes
    };

    const categories = [
        {
            imgSrc: 'https://images.unsplash.com/photo-1599020792689-9fde458e7e17?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Vegetarian',
            label: 'Vegetarian',
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Non-Vegetarian',
            label: 'Non-Vegetarian',
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Vegan',
            label: 'Vegan',
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Cuisine',
            label: 'Cuisine',
        },
        {
            imgSrc: 'https://plus.unsplash.com/premium_photo-1695123862393-e93a4165fd29?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Meal Type',
            label: 'Meal Type',
        },
        {
            imgSrc: 'https://plus.unsplash.com/premium_photo-1669137055739-4cdaddc1a709?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Dietary Preferences',
            label: 'Dietary Preferences',
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1694192708180-0e006e150465?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JpbGxlZCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            alt: 'Cooking Method',
            label: 'Cooking Method',
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Cultural/Religious',
            label: 'Cultural/Religious',
        },
    ];

    return (
        <section className="category-list-section">
            <div className="category-list-title">
                <h2>Find Your Perfect Recipe</h2>
            </div>
            <div className="category-list">
                {categories.map((category, index) => (
                    <div
                        className="category-item filter-category"
                        key={index}
                        onClick={handleFilterClick}
                    >
                        <img src={category.imgSrc} alt={category.alt} />
                        <span>{category.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CategoryList;
