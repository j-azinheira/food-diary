import Restaurant from './Restaurant/Restaurant';
import CardGroup from '../../../node_modules/react-bootstrap/CardGroup';

const Restaurants = (props) => {
  if (props.restaurants.length === 0) {
    return <div>No restaurants to list...</div>;
  }

  const uniqueLocations = [];

  props.restaurants.map((restaurant) => {
    if (uniqueLocations.indexOf(restaurant.location) === -1) {
      uniqueLocations.push(restaurant.location);
    }
  });

  console.log('UNIQUE: ' + uniqueLocations);

  return (
    <CardGroup style={{ marginLeft: '5rem', marginRight: '5rem' }}>
      {props.restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant._id}
          restaurantName={restaurant.restaurantName}
          description={restaurant.description}
          rating={restaurant.rating}
          price={restaurant.price}
          latitude={restaurant.latitude}
          longitude={restaurant.longitude}
          url={restaurant.url}
          lastVisit={restaurant.lastVisit}
          image={restaurant.image}
        />
      ))}
    </CardGroup>
  );
};

export default Restaurants;
