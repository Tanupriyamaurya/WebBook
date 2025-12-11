
import { styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { carouselData } from '../../../data/data';
import carousel1 from '../../../assets/carousel1.jpg'
import carousel2 from '../../../assets/carousel2.png'
import carousel3 from '../../../assets/carousel3.jpg'

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};
const responsiveThree = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};
const fixedImages = [carousel1,carousel2,carousel3];

const CarouselComponent = () => {
  return (<>
    <Carousel
      responsive={responsive}
      autoPlay
      infinite
      autoPlaySpeed={3000}
      showDots
      arrows={false}
    >
      {carouselData.map((item) => (
        <Image key={item.id} src={item.url} alt="carousel" />
      ))}
    </Carousel>

    <Spacer /> 

    <Carousel
        responsive={responsiveThree}
        infinite
        arrows
        autoPlay={false}
      >
        {fixedImages.map((img, index) => (
  <ImageWrapper key={index}>
    <SmallImage src={img} alt="fixed-carousel" />
  </ImageWrapper>
))}

      </Carousel>
      </>
  );
};

export default CarouselComponent;

const Image = styled('img')({
  width: '100%',
  height: 280,
  objectFit: 'cover'
});


const SmallImage = styled('img')({
  width: '100%',
  height: 160,
  objectFit: 'cover',
  borderRadius: 8,
});

const Spacer = styled('div')({
  height: 50   
});
const ImageWrapper = styled('div')({
  padding: '0 10px',   
});
