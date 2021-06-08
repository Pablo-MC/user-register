const User = (props) => {
  return (
    <li>
      {props.data.username} ({props.data.age} years old)
    </li>
  );
}

export default User;