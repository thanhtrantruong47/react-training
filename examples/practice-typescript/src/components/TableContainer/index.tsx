import Table from 'components/Table';
import TableController from 'components/TableController';
import { UserMockList } from 'mocks/user';
import { PRODUCT_TABLE_HEADERS, USER_TABLE_HEADERS } from 'scripts/constants/user';
import './index.scss';
import { ProductMockList } from 'mocks/product';

const TableContainer = () => {
  return (
    <div className="table-container">
      <TableController />
      <Table headItems={PRODUCT_TABLE_HEADERS} listItems={ProductMockList} />
    </div>
  );
};

export default TableContainer;
