import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function Carouselphoto({ images, playicon, previewicon }) {
  return (
    <Carousel>
      {images.map((item) => (
        <Carousel.Item key={item.id} className='position-relative'>
          <a
            className="position-absolute top-50 start-50 translate-middle p-3"
            href={item.type === "play" ? "" : "/Resume/Untitled Raouls Project.pdf"} 
            target={item.type === "play" ? "" : "_blank"} 
            style={item.type === "play" ? { width: 110, height: 110 } : { width: `100%`, height: `100%` }}
            >
            <Image
              className='w-100'
              src={item.type === "play" ? playicon : previewicon} alt="button"
             />
          </a>
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