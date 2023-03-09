import './Form.scss'

export function Form({ users, setUsers, userEdit, setUserEdit, setUserBackup, userBackup }) {
  const handleSubmit = () => {

    const usersChanged = users.map((user) => {
      if (user.id === userEdit.id) {
        return userEdit;
      }
      return user;
    });
    setUsers(usersChanged);
    setUserEdit(null);
  };

  const handleChange = (e) => {
    setUserEdit({ ...userEdit, [e.target.name]: e.target.value });
  };

  return (
    userEdit && (
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">User editor:</h2>
        <input
          className="form__input"
          type="text"
          name="firstName"
          id="first-name"
          placeholder="First Name"
          value={userEdit.firstName}
          onChange={handleChange}
        />
        <input
          className="form__input"
          type="text"
          name="lastName"
          id="last-name"
          placeholder="Last Name"
          value={userEdit.lastName}
          onChange={handleChange}
        />
        <input
          className="form__input"
          type="email"
          name="email"
          id=""
          placeholder="Email"
          value={userEdit.email}
          onChange={handleChange}
        />
        {/* <input type="hidden" name="id" value={userEdit.id} onChange={handleChange}/> */}

        <div className="form__button-wrap">
          <button  className="form__button" type="submit">
            Submit
          </button>

          <button onClick={() => setUserEdit(userBackup)} className="form__button" type="reset">
            Reset
          </button>

          <button onClick={() => setUserEdit(null)} className="form__button">
            Cancel
          </button>
          
        </div>
      </form>
    )
  );
}