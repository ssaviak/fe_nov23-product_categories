import classNames from 'classnames';
import { User } from '../User/User';

export const UsersList = ({ data }) => {
  const { users } = data;

  return (
    <>
      <p className="panel-tabs has-text-weight-bold">
        <a
          data-cy="FilterAllUsers"
          href="#/"
          onClick={() => data.setSelectedUser('')}
          className={classNames({ 'is-active': data.selectedUser === '' })}
        >
          All
        </a>

        {
          users.map(user => (
            <User user={user} data={data} key={user.id} />
          ))
        }
      </p>
    </>
  );
};
