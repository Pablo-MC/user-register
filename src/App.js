import { Fragment, useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers(prevUsers => {
      return [...prevUsers, newUser];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </Fragment>
  );
}

export default App;