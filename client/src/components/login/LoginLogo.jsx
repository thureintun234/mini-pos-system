import logo from '../../assets/logo.png';
import { AiFillStar, AiOutlineMail } from 'react-icons/ai';
import avatar from '../../assets/avatar.png';

import './loginLogo.scss';

const LoginLogo = () => {
  return (
    <div className='login login__logo'>
      {/* nav */}
      <div className='login__logo-nav'>
        <img src={logo} alt='logo' />
      </div>
      {/* main */}
      <div className='login__logo-main'>
        <div>
          {[...Array(5)].map((_val, index) => {
            return (
              <span className='icon' key={index}>
                <AiFillStar />
              </span>
            );
          })}
        </div>

        <h2>
          KLink has saved us thousands of hours of work. We’re able to spin up
          projects and features much faster.
        </h2>

        <div className='avatar'>
          <img src={avatar} alt='avatar' />
          <p>Lori Bryson</p>
          <p className='title'>Product Designer, Sisyphus</p>
        </div>
      </div>
      {/* footer */}
      <div className='footer'>
        <p>© klinkenterprise.com</p>
        <p className='mail'>
          <AiOutlineMail style={{ marginRight: '0.4rem' }} />{' '}
          help@klinkenterprise.com
        </p>
      </div>
    </div>
  );
};

export default LoginLogo;
