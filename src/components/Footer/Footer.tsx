import styles from './footer.module.css';
import companyLogo from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { FOOTER_LIST_CATEGORY, FOOTER_LIST_CONTACT, FOOTER_LIST_HOME, FOOTER_LIST_SHOP } from 'constants';
import { InstagramIcon, TwitterIcon, InIcon, FaceBookIcon, FooterNavList } from 'components';
import { default as styleUtils } from 'styles/modules/utils.module.css';

const Footer = () => {
  return (
    <footer className={styles.fluidContainer}>
      <div className={`${styleUtils.container} ${styles.footer}`}>
        <div className={styles.groupLogo}>
          <Link to={'/'}>
            <svg height="34" width="160">
              <image width="35" height="34" href={companyLogo} />
              <text className={styles.logo} x="44" y="50%" dominantBaseline="middle">
                mangcoding Store
              </text>
            </svg>
          </Link>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien
            faucibus lectus, vel tempor dolor augue et lectus.{' '}
          </p>
        </div>
        <div className={styles.group}>
          <FooterNavList title="Home" listItemFooter={FOOTER_LIST_HOME} />
          <FooterNavList title="Shop" listItemFooter={FOOTER_LIST_SHOP} />
          <FooterNavList title="Category" listItemFooter={FOOTER_LIST_CATEGORY} />
          <div>
            <FooterNavList title="Contact" listItemFooter={FOOTER_LIST_CONTACT} />
            <div className={styles.groupIcon}>
              <Link to={'/'}>
                <FaceBookIcon />
              </Link>
              <Link to={'/'}>
                <TwitterIcon />
              </Link>
              <Link to={'/'}>
                <InstagramIcon />
              </Link>
              <Link to={'/'}>
                <InIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
