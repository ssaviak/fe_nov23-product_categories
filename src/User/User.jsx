import classNames from 'classnames';

export const User = ({ user, data }) => (
  <a
    data-cy="FilterAllUsers"
    href="#/"
    onClick={() => data.setSelectedUser(user.name)}
    className={classNames({ 'is-active': data.selectedUser === user.name })}
  >
    {user.name}
  </a>
);
