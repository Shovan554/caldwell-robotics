import React from 'react';
import Gallery from 'react-photo-gallery';
import '../styles/gallery.css'; // Import the Gallery CSS

// Array of images with src and width/height attributes
const photos = [
  
];

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Event Gallery</h1>
      {/* Render the photo gallery */}
      <Gallery photos={photos} />
    </div>
  );
};

export default GalleryPage;