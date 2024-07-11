import styles from './searchInput.module.css';
import { SearchIcon } from '../Icon/Icon';

interface SearchInputProps {
  placeholder: string;
  inputType: string;
  onChange: () => void;
}

const SearchInput = ({
  placeholder,
  inputType,
  onChange,
}: SearchInputProps) => {
  return (
    <div className={styles.container}>
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        className={styles.searchInput}
      />
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
