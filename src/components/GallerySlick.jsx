import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class GallerySlick extends Component {

  render() {
    var settings = {
      centerMode: true,
      centerPadding: '60px',
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 6,
      slidesToScroll: 1,
      // index: 2,
      // initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
        <div className="container">
          <h2> Responsive </h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <h3>2</h3>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <h3>3</h3>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <h3>4</h3>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <h3>5</h3>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <h3>6</h3>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <h3>7</h3>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <h3>8</h3>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <h3>9</h3>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <h3>10</h3>
              <img src="http://placekitten.com/g/400/200" />
            </div>
          </Slider>
        </div>
    );
  }
}
