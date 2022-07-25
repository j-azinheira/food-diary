import './Map.css';
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from '@react-google-maps/api';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Map = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [selected, setSelected] = useState({});

  function Map(props) {
    const { state } = useLocation();
    let lat;
    let long;
    let zoom;
    if (state != null) {
      lat = state.latitude;
      long = state.longitude;
      zoom = 17;
    } else {
      lat = 38.72170970553606;
      long = -9.138726599793921;
      zoom = 13;
    }

    const center = useMemo(
      () => ({
        lat: lat,
        lng: long,
      }),
      []
    );

    function getPosition(latitude, longitude) {
      return { lat: Number(latitude), lng: Number(longitude) };
    }

    const onSelect = (item) => {
      setSelected(item);
    };

    return (
      <div
        style={{
          paddingTop: '10px',
          paddingLeft: '15rem',
          paddingRight: '15rem',
          paddingBottom: '2rem',
        }}
      >
        <GoogleMap
          zoom={zoom}
          center={center}
          mapContainerClassName='map-container'
        >
          {props.restaurants.map((restaurant) => (
            <Marker
              key={restaurant._id}
              position={getPosition(restaurant.latitude, restaurant.longitude)}
              onClick={() => onSelect(restaurant)}
            />
          ))}
          {selected._id && (
            <InfoWindow
              position={getPosition(selected.latitude, selected.longitude)}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.restaurantName}</p>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    );
  }

  if (!isLoaded) return <div>Carregando...</div>;
  return <Map restaurants={props.restaurants} />;
};

export default Map;
