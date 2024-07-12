import { SearchIcon } from '../Icon/SearchIcon';
import styles from './searchInput.module.css';

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
    <form className={styles.container}>
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        className={styles.searchInput}
      />
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
    </form>
  );
};

export default SearchInput;
