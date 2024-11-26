import './css/navBar.css';

const stacklineLogo = require('../../../images/stackline_logo.svg').default;

export const NavBar = () => {
  return (
    <div className='nav'>
      <img src={stacklineLogo} alt="Stackline" className='logo' />
    </div>
  );
};