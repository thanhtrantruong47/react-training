import Button from 'components/Button';
import InputField from 'components/Input';
import './index.scss'

const TableController = () => {
  return (
    <div className='table-control'>
      <InputField
        icon={require('../../assets/images/managers/icon-search.png')}
        typeInput="search"
        description="Search All"
        size="17"
      />
      <Button text="Add new" styleClass="btn-add" />
    </div>
  );
};

export default TableController;
