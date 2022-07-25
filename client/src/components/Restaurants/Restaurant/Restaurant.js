import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Restaurant.css';
import image from '../../../images/volver1.PNG';
import { Rating } from 'react-simple-star-rating';
import Card from '../../../../node_modules/react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Restaurant = (props) => {
  const navigate = useNavigate();

  function goToMap(latitude, longitude) {
    console.log('lat: ' + latitude + '--- ' + 'long: ' + longitude);
    navigate('/map/', { state: { latitude: latitude, longitude: longitude } });
  }

  console.log(JSON.stringify(props));
  return (
    <Card>
      <Card.Header as='h5'>{props.restaurantName}</Card.Header>
      <Card.Img variant='top' src='holder.js/100px160' />
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        <Rating initialValue={props.rating} readonly={true} />
        <p>{props.priceRange}</p>
        <p>{props.url}</p>
        <button
          className='btn btn-primary'
          style={{ marginLeft: '1rem' }}
          type='text'
          onClick={() => goToMap(props.latitude, props.longitude)}
        >
          Ir para mapa
        </button>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>Última visita em: TODO</small>
      </Card.Footer>
    </Card>
    // <div
    //   className='card restaurant-card'
    //   style={{ width: '40rem', : 'center' }}
    // >
    //   <img className='card-img-top' src='{image}' alt='Card image cap'></img>
    //   <div className='card-body'>
    //     <h5 className='card-title'>{props.restaurantName}</h5>
    //     <p className='card-text'>{props.description}</p>
    //     <Rating initialValue={props.rating} readonly={true} />
    //     <p className='card-text'>{props.priceRange}</p>
    //     <p className='card-text'>{props.url}</p>
    //     <a href='#' className='btn btn-primary'>
    //       Go to location
    //     </a>
    //   </div>
    // </div>
  );
};

export default Restaurant;
