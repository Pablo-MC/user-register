import { Fragment, useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [newUser, setNewUser] = useState({
    username: '',
    age: '',
  });

  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setNewUser(prevState => {
      return { ...prevState, username: event.target.value }
    });
  };

  const ageChangeHandler = (event) => {
    setNewUser(prevState => {
      return { ...prevState, age: event.target.value }
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    // Verify inputs fields
    if (newUser.username.trim() === '' || newUser.age === '') {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty-values)',
      });
      return; // Guard Clauses (Cláusula de protección)
    }

    if (+newUser.age < 0) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age ( >= 0 )',
      });
      return;
    }

    // Pass user data for App component
    props.onAddUser(newUser);

    // Clean inputs fields
    setNewUser({
      username: '',
      age: '',
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error &&
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      }
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={newUser.username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={newUser.age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;