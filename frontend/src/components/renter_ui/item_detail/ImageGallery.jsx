const ImageGallery = ({ images }) => {
  return (
      <div className="rounded-2xl overflow-hidden bg-white">
        <img
          src={images[0]}
          alt="item"
          className="w-full object-contain"
        />
      </div>

  );
};

export default ImageGallery;
