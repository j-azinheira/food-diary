import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Restaurant.css';
import { Rating } from 'react-simple-star-rating';
import Card from '../../../../node_modules/react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Restaurant = (props) => {
  const navigate = useNavigate();
  console.log(props.image);

  function goToMap(latitude, longitude) {
    navigate('/map/', { state: { latitude: latitude, longitude: longitude } });
  }

  return (
    <Card>
      <Card.Header as='h5'>{props.restaurantName}</Card.Header>
      <Card.Img
        variant='top'
        style={{ maxWidth: '300px', width: '100%' }}
        src='{image}'
        alt='trap'
      />
      <Card.Body>
        <Card.Text
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></Card.Text>
        <Rating initialValue={props.rating} readonly={true} />
        <p>{props.price}</p>
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
        <small className='text-muted'>
          Última visita em: {props.lastVisit}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default Restaurant;
