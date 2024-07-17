import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="https://via.placeholder.com/1920x650"
        />
        <img
          src="https://via.placeholder.com/600x600"
          alt="Banner"
          className="banner__image"
        />
      </picture>
      <div className="banner__overlay">
        <h1 className="banner__title">Hello Developer!</h1>
        <p className="banner__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
    </div>
  );
};

export default Banner;
