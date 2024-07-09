import companyLogo from '../../assets/logo.svg';

const Logo = () => {
  return (
    <div>
      <a href="/component.html">
        <svg height="34" width="160">
          <image width="35" height="34" href={companyLogo} />
          <text className="title" x="44" y="25">
            mangcoding Store
          </text>
        </svg>
      </a>
    </div>
  );
};

export default Logo;
