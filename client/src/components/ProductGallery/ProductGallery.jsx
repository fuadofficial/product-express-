import { useState } from 'react';
import './ProductGallery.css';

const ProductGallery = ({ images, product }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <img src={mainImage} alt={product.title} className="main-image" />
      </div>
      <div className="product-gallery__thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setMainImage(image)}
            className={`thumbnail ${image === mainImage ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
