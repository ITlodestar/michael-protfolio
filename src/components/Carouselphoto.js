import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function Carouselphoto({ images }) {
  return (
    <Carousel>
      {images.map((item) => (
        <Carousel.Item key={item.id}>
          <Image
            className="d-block w-100"
            src={item.path}
            alt="..."
            style={{ maxHeight: 600 }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carouselphoto;