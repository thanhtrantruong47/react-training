import logo from '../../assets/logo.svg';
import './index.css';

const Logo = () => {
  return (
    <div>
      <a href="/">
        <svg height="34" width="160">
          <image width="35" height="34" href={logo} />
          <text className="logo logo-secondary" x="44" y="23">
            mangcoding Store
          </text>
        </svg>
      </a>
    </div>
  );
};

export default Logo;
