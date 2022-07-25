import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';

const Header = () => {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light rounded'>
        <Link to='/' style={{ marginLeft: '1rem' }}>
          <h4>Papinhas boas</h4>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarsExample09'
          aria-controls='navbarsExample09'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarsExample09'>
          <ul className='navbar-nav mr-auto'>
            {/* TODO: set active style */}
            <li className='nav-item active'>
              <Link to='/' style={{ marginLeft: '10px' }}>
                Lista de Restaurantes
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/map' style={{ marginLeft: '10px' }}>
                Mapa Mundo
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about-us' style={{ marginLeft: '10px' }}>
                Sobre Nós
              </Link>
            </li>
          </ul>
          <form
            className='form-inline my-2 my-md-0'
            style={{ marginLeft: '17rem' }}
          >
            <input
              className='form-control'
              type='text'
              placeholder='Insira o seu email...'
              aria-label='Search'
            ></input>
          </form>
          <button
            className='btn btn-primary'
            style={{ marginLeft: '1rem' }}
            type='submit'
          >
            Subscrever newsletter!
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
