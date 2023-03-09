// import './styles.scss';
import { useState } from 'react';
import { deepClone } from './utils';
import { data } from './users-data';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';

function App() {
  const [users, setUsers] = useState(deepClone(data.users));
  const [userEdit, setUserEdit] = useState(null);
  const [userBackup, setUserBackup] = useState(null);

  return (
    <>
      <Form
        users={users}
        setUsers={setUsers}
        userEdit={userEdit}
        setUserEdit={setUserEdit}
        setUserBackup={setUserBackup}
        userBackup={userBackup}
      />
      <Table
        users={users}
        setUserEdit={setUserEdit}
        userEdit={userEdit}
        setUserBackup={setUserBackup}
        userBackup={userBackup}
      />
    </>
  );
}

export default App;
