import User from './User';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map(user =>
          <User
            key={Math.random()}
            data={user}
          />
        )}
      </ul>
    </Card>
  );
}

export default UsersList;