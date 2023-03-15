import { useEffect, useState } from 'react';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';
import { fetchUsers, saveUser } from './api';

function App() {
  const [users, setUsers] = useState([]);
  const [userEdit, setUserEdit] = useState(null);
  const [userReset, setUserReset] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updateUserAge, setUpdateUserAge] = useState(false);

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
        userReset={userReset}
        setLoading={setLoading}
        saveUser={saveUser}
        fetchUsers={fetchUsers}
        updateUserAge={updateUserAge}
        setUpdateUserAge={setUpdateUserAge}
      />
      <Table
        users={users}
        userEdit={userEdit}
        setUserEdit={setUserEdit}
        userReset={userReset}
        setUserReset={setUserReset}
      />
    </>
  );
}

export default App;
