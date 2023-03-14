import { useEffect, useState } from 'react';
// import { deepClone } from './utils';
// import { data } from './users-data';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';
import { fetchUsers, saveUser } from './api';

function App() {
  const [users, setUsers] = useState([]);
  const [userEdit, setUserEdit] = useState(null);
  const [userBackup, setUserBackup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .then(() => setLoading(false));
  }, []); //[] скобки нужны, чтобы тело useEffect было запущено только один раз

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Form
        users={users}
        setUsers={setUsers}
        userEdit={userEdit}
        setUserEdit={setUserEdit}
        userBackup={userBackup}
        setLoading={setLoading}
        saveUser={saveUser}
        fetchUsers={fetchUsers}
        checked={checked}
        setChecked={setChecked}
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
