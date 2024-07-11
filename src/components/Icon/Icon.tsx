import styles from './icon.module.css';

interface IconCartProps {
  itemCount: number;
}

export const CartIcon = ({ itemCount }: IconCartProps) => {
  return (
    <div className={styles.container}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M6.12403 9.03885C6.2568 7.97675 7.42732 7.39149 8.35666 7.92254L10.7597 9.29568C11.5282 9.73487 12.4718 9.73487 13.2403 9.29568L15.6433 7.92254C16.5727 7.39149 17.7432 7.97675 17.876 9.03885L19.2229 19.8139C19.3348 20.7092 18.6367 21.5 17.7344 21.5H6.26556C5.36332 21.5 4.66524 20.7092 4.77715 19.8139L6.12403 9.03885Z"
          stroke="#0D1222"
        />
        <path
          d="M15 6V4.01042C15 2.89583 14.0076 2 12.7985 2H11.2015C9.98099 2 9 2.90625 9 4.01042V6"
          stroke="#0D1222"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="12" r="0.8" stroke="#0D1222" strokeWidth="0.4" />
        <circle cx="15" cy="12" r="0.8" stroke="#0D1222" strokeWidth="0.4" />
      </svg>
      {itemCount >= 0 && <div className={styles.badge}>{itemCount}</div>}
    </div>
  );
};

export const LikeIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M16.7549 3C14.6629 3 12.8539 4.27953 12.005 6.11493C11.1561 4.27953 9.35724 3 7.25517 3C4.35472 3 2 5.4437 2 8.45375C2 12.7643 8.04345 18.2915 10.7317 20.5359C11.4795 21.1547 12.5306 21.1547 13.2683 20.5359C15.9666 18.281 22 12.7538 22 8.45375C22.0101 5.4437 19.6554 3 16.7549 3Z"
        stroke="#0D1222"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LoginIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="7" r="2.5" stroke="#0D1222" />
      <path
        d="M5.5 19C5.5 15.4101 8.41015 12.5 12 12.5C15.5899 12.5 18.5 15.4101 18.5 19V19.5H5.5V19Z"
        stroke="#0D1222"
      />
    </svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7.875"
        cy="7.875"
        r="5.0625"
        stroke="#969696"
        strokeWidth="1.125"
      />
      <rect
        x="11.8687"
        y="11.1616"
        width="5.25"
        height="0.999857"
        rx="0.499929"
        transform="rotate(45 11.8687 11.1616)"
        fill="#969696"
      />
    </svg>
  );
};
