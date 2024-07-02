import './logo.scss';

const Logo = () => {
  return (
    <div>
      <a href="/component.html">
        <svg height="45" width="200">
          <image
            width="45"
            height="45"
            href={require('../../assets/images/managers/logo-manager.svg')}
          />
          <text className="title" x="55" y="30">
            Company name
          </text>
        </svg>
      </a>
    </div>
  );
};

export default Logo;
