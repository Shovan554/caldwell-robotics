import React from 'react';
import '../styles/gallery.css'; // Import the Gallery CSS

const Gallery = () => {
  return (
    <div className='gallery-page'>
      <h1 className='gallery-title'>Gallery</h1>

      
      {Object.entries(imagePaths).map(([path, context]) => (
        //loops through every single path in imagePaths and makes a galleryblock for every path
        //Variable in which the path is stored is shown as the title of the gallery eg: robosoccer, builds 
        <GalleryBlock key={path} title={path.charAt(0).toUpperCase() + path.slice(1)} path={path} />
      ))}
    </div>
  );
};

const imagePaths = {
  robosoccer: require.context('../../public/gallery/roboSoccer', false, /\.(png|jpe?g|svg|webp)$/),
  builds: require.context('../../public/gallery/projects', false, /\.(png|jpe?g|svg|webp)$/),
  // Add more paths as needed
};

const GalleryBlock = ({ title, path }) => {
  // Get the correct context based on the title
  const imagesContext = imagePaths[path];// default to robosoccer if no path is provided

  // Function to dynamically load images from the gallery folder
  const importAll = (r) => r.keys().map(r);
  const images = importAll(imagesContext);

  return (
    <div className='main-container'>
      <h1 className='masonry-title'>{title}</h1>
      <div className="masonry-grid">
        {images.map((image, index) => (
          <div key={index} className="masonry-item">
            <img
             src={image}
             alt={`${title} ${index}`}
             className="masonry-img" 
             loading='lazy'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
