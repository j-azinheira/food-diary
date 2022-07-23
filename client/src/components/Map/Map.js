import './Map.css';
import {
  Wrapper,
  Status,
  GoogleMap,
  Marker,
  useLoadScript,
} from '@react-google-maps/api';

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  function Map() {
    return (
      <GoogleMap
        zoom={17}
        center={{ lat: 38.77021995717364, lng: -9.160863953667922 }}
        mapContainerClassName='map-container'
      />
    );
  }

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

export default Map;
