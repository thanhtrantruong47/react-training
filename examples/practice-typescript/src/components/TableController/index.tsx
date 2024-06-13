import Button from 'components/Button';
import Input from 'components/Input';
import searchIcon from '../../assets/images/managers/icon-search.png';
import './index.scss';

const TableController = () => (
  <div className="table-control">
    <Input
      icon={searchIcon}
      typeInput="search"
      placeholder="Search All"
      iconSize={17}
    />
    <Button text="Add new" styleClass="btn-add" />
  </div>
);

export default TableController;
