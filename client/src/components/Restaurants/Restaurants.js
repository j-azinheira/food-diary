import Restaurant from './Restaurant/Restaurant';

const Restaurants = (props) => {
  if (props.restaurants.length === 0) {
    return <div>No restaurants to list...</div>;
  }

  return (
    <div className='restaurants-list'>
      {props.restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant._id}
          restaurantName={restaurant.restaurantName}
        />
      ))}
    </div>
  );
};

export default Restaurants;
