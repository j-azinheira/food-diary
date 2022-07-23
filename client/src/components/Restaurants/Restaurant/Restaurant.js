import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image from '../../../images/volver1.PNG';

const Restaurant = (props) => {
  console.log(JSON.stringify(props));
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img className='card-img-top' src='{image}' alt='Card image cap'></img>
      <div className='card-body'>
        <h5 className='card-title'>{props.restaurantName}</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#' className='btn btn-primary'>
          Go to location
        </a>
      </div>
    </div>
  );
};

export default Restaurant;
