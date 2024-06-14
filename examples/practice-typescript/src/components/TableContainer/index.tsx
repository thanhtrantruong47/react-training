import Table from 'components/Table';
import TableController from 'components/TableController';
import { UserMockList } from 'mocks/user';
import { USER_TABLE_HEADERS } from 'scripts/constants/user';
import './index.scss';

const TableContainer = () => {
  return (
    <div className="table-container">
      <TableController />
      <Table headItems={USER_TABLE_HEADERS} listItemMock={UserMockList} />
    </div>
  );
};

export default TableContainer;
