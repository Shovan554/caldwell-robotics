import React, { useState } from 'react';
import '../styles/gallery.css'; // Import the Gallery CSS

// Function to dynamically load images from the gallery/roboSoccer folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../public/gallery/roboSoccer', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); 

  // Function to handle image click and set the selected image
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <h1 className="gallery-page-title">Gallery</h1>
      <div className="gallery-container">
        <h1 className="gallery-title">RoboSoccer</h1>
        <div className="gallery-images">
          {images.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={`Robo Soccer ${index + 1}`}
              className="gallery-image"
              onClick={() => handleImageClick(imageSrc)}
            />
          ))}
        </div>

        {selectedImage && (
          <div className="image-modal">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Enlarged" className="modal-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;