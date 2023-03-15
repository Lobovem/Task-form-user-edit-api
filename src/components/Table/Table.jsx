import './Table.scss'

export function Table({ setUserEdit, users, setUserReset }) {
  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__title">First Name</td>
            <td className="table__title">Last Name</td>
            <td className="table__title">Email</td>
            <td className="table__item-button table__item-button--color"></td>
          </tr>

          {users.map((user) => (
            <tr key={user.id}>
              <td className="table__item ">{user.firstName}</td>
              <td className="table__item">{user.lastName}</td>
              <td className="table__item">{user.email}</td>
              <td className="table__item-button">
                <button
                  onClick={() => {
                    setUserEdit(user);
                    setUserReset(user)
                  }}
                  className="table__button"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}