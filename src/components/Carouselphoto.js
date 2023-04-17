import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function Carouselphoto({ images, playicon, previewicon }) {
  return (
    <Carousel>
      {images.map((item) => (
        <Carousel.Item key={item.id} className='position-relative'>
          <Image
            src={item.type === "play" ? playicon : previewicon} alt="button"
            className="position-absolute top-50 start-50 translate-middle"
            style={item.type === "play" ? { width: 50, height: 50 } : { width: `100%`, height: `100%` }} />
          <Image
            className="d-block w-100"
            src={item.path}
            alt="..."
            style={{ height: 500 }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carouselphoto;