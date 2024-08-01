import React, { useState } from 'react';
import '../../static/RecipeImagesStyle/css/RecipeImagesStyle.css'

const RecipeImagesComponent = () => {
    const [fullImageSrc, setFullImageSrc] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showFullImage = (imageSrc) => {
        setFullImageSrc(imageSrc);
        setIsModalOpen(true);
    };

    const closeFullImage = () => {
        setIsModalOpen(false);
        setFullImageSrc('');
    };

    return (
        <section className="recipe-images">
            <h2>Recipe Images</h2>
            <div className="image-gallery">
                <img 
                    src="https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Chocolate Cake 1" 
                    className="gallery-image" 
                    onClick={() => showFullImage('https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
                />
                <img 
                    src="https://images.unsplash.com/photo-1540337706094-da10342c93d8?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Chocolate Cake 2" 
                    className="gallery-image" 
                    onClick={() => showFullImage('https://images.unsplash.com/photo-1540337706094-da10342c93d8?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
                />
                <img 
                    src="https://plus.unsplash.com/premium_photo-1714587693634-55c9fcf80fdc?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Chocolate Cake 3" 
                    className="gallery-image" 
                    onClick={() => showFullImage('https://plus.unsplash.com/premium_photo-1714587693634-55c9fcf80fdc?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
                />

                <img 
                    src="https://plus.unsplash.com/premium_photo-1677000666720-e91b9115af85?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Chocolate Cake 3" 
                    className="gallery-image" 
                    onClick={() => showFullImage('https://plus.unsplash.com/premium_photo-1677000666720-e91b9115af85?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
                />
                <img 
                    src="https://images.unsplash.com/photo-1582577829927-897c60e62d52?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Chocolate Cake 3" 
                    className="gallery-image" 
                    onClick={() => showFullImage('https://images.unsplash.com/photo-1582577829927-897c60e62d52?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
                />
                <img 
                    src="https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Chocolate Cake 3" 
                    className="gallery-image" 
                    onClick={() => showFullImage('https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
                />
                <img 
                    src="https://images.unsplash.com/photo-1518091653999-278f46860620?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Chocolate Cake 3" 
                    className="gallery-image" 
                    onClick={() => showFullImage('https://images.unsplash.com/photo-1518091653999-278f46860620?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
                />
                <img 
                    src="https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Chocolate Cake 3" 
                    className="gallery-image" 
                    onClick={() => showFullImage('https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
                />
                <img 
                    src="https://plus.unsplash.com/premium_photo-1715968917640-4ca34750389c?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Chocolate Cake 3" 
                    className="gallery-image" 
                    onClick={() => showFullImage('https://plus.unsplash.com/premium_photo-1715968917640-4ca34750389c?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
                />
                <img 
                    src="https://plus.unsplash.com/premium_photo-1715968916859-f46905010567?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Chocolate Cake 3" 
                    className="gallery-image" 
                    onClick={() => showFullImage('https://plus.unsplash.com/premium_photo-1715968916859-f46905010567?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
                />
                <img 
                    src="https://plus.unsplash.com/premium_photo-1715969601648-b50f4b43f44f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Chocolate Cake 3" 
                    className="gallery-image" 
                    onClick={() => showFullImage('https://plus.unsplash.com/premium_photo-1715969601648-b50f4b43f44f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
                />
            </div>
            {isModalOpen && (
                <div className="full-image-modal" onClick={closeFullImage}>
                    <img id="fullImage" src={fullImageSrc} alt="Full Recipe Image" />
                </div>
            )}
        </section>
    );
};

export default RecipeImagesComponent;
