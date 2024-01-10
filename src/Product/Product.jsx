import classNames from 'classnames';

export const Product = ({ users, categories, product, id, data }) => {
  const category = categories
    .find(cat => cat.id === product.categoryId);
  const user = users.find(us => category.ownerId === us.id);

  if (data.selectedUser === '') {
    return (
      <tr data-cy="Product">
        <td className="has-text-weight-bold" data-cy="ProductId">
          {id + 1}
        </td>

        <td data-cy="ProductName">{product.name}</td>
        <td data-cy="ProductCategory">{`${category.icon} - ${category.title}`}</td>

        <td
          data-cy="ProductUser"
          className={classNames(user.sex === 'm'
            ? 'has-text-link'
            : 'has-text-danger')}
        >
          {user.name}
        </td>
      </tr>
    );
  }

  if (user.name === data.selectedUser) {
    return (
      <tr data-cy="Product">
        <td className="has-text-weight-bold" data-cy="ProductId">
          {id + 1}
        </td>

        <td data-cy="ProductName">{product.name}</td>
        <td data-cy="ProductCategory">{`${category.icon} - ${category.title}`}</td>

        <td
          data-cy="ProductUser"
          className="has-text-link"
        >
          {user.name}
        </td>
      </tr>
    );
  }

  return null;
};
