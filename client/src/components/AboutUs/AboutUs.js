import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import him from '../../images/him.png';
import her from '../../images/her.png';

const AboutUs = (props) => {
  return (
    <div className='container marketing' style={{ justifyContent: 'center' }}>
      <div className='row'>
        <div className='col-lg-4'>
          <img
            className='rounded-circle'
            src={him}
            alt='Generic placeholder image'
            width='140'
            height='140'
          ></img>
          <h2>José Azinheira</h2>
          <p>29 anos, software developer.</p>
          <p>
            <a
              className='btn btn-secondary'
              href='https://www.linkedin.com/in/josé-azinheira-270a10101/'
              target='_blank'
              role='button'
            >
              LinkedIn »
            </a>
          </p>
        </div>
        <div className='col-lg-4'>
          <img
            className='rounded-circle'
            src={her}
            alt='Generic placeholder image'
            width='140'
            height='140'
          ></img>
          <h2>Nádia Hafez</h2>
          <p>28 anos, advogada/jurista.</p>
          <p>
            <a
              className='btn btn-secondary'
              href='https://www.linkedin.com/in/nádia-hafez/'
              target='_blank'
              role='button'
            >
              LinkedIn »
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
