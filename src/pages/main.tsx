import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0px',
    centerMode: true,
    pauseOnHover: true,
  };

  const sliders = [
    { id: 1, image: '../../image/lecture.jpg', link: '/' },
    { id: 2, image: '../../image/mapoSchoolProgram.jpg', link: '/' },
    { id: 3, image: '../../image/coffeeLesson.jpg', link: '/' },
  ];

  return (
    <div>
      <Slider {...settings}>
        {sliders.map((slide) => {
          return (
            <div className="">
              <img className="w-full h-full px-96" src={slide.image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Main;
