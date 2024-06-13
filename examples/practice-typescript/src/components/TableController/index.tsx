import Button from 'components/Button';
import InputField from 'components/Input';
import searchIcon from '../../assets/images/managers/icon-search.png';
import './index.scss';

const TableController = () => (
  <div className="table-control">
    <InputField
      icon={searchIcon}
      typeInput="search"
      placeholder="Search All"
      iconSize={17}
    />
    <Button text="Add new" styleClass="btn-add" />
  </div>
);

export default TableController;
