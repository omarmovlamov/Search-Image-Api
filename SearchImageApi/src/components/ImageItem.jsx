function ImageItem({ images }) {
  console.log(images);
  return (
    <div>
      <img
        className="image"
        src={images.urls.small}
        alt={images.alt_description}
      />
    </div>
  );
}

export default ImageItem;
