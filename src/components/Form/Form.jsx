import './Form.scss'
import { fetchProducts, saveProduct } from '../../api';


export function Form({ users, setUsers, userEdit, setUserEdit, userBackup, setLoading, saveProduct, fetchProducts }) {

  const handleSubmit = () => {
    setLoading(true);

    saveProduct(userEdit)
    .then(fetchProducts)
    .then(setUsers)
    .then(() => {
      setUserEdit(null)
      setLoading(false)
    });
  };

    // const usersChanged = users.map((user) => {
    //   if (user.id === userEdit.id) {
    //     return userEdit;
    //   }
    //   return user;
    // });
    // setUsers(usersChanged);
    // setUserEdit(null);

  const handleChange = (e) => {
    setUserEdit({ ...userEdit, [e.target.name]: e.target.value });
  };

  return (
    userEdit && (
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">User editor:</h2>

        <label for='firstName'>FirstName:</label>
        <input
          className="form__input"
          type="text"
          name="firstName"
          id="firstname"
          placeholder="First Name"
          required
          value={userEdit.firstName}
          onChange={handleChange}
        />

          <label for='lastName'>LastName:</label>
        <input
          className="form__input"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          required
          value={userEdit.lastName}
          onChange={handleChange}
        />

          <label for='email'>Email:</label>
        <input
          className="form__input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          value={userEdit.email}
          onChange={handleChange}
        />

          <label for='age'>Age:</label>
        <input
          className="form__input"
          type="number"
          name="age"
          id="age"
          placeholder="Age"
          required
          value={userEdit.age}
          onChange={handleChange}
        />

          <label for='password'>Password:</label>
         <input
            className="form__input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required  
            value={userEdit.password}
            onChange={handleChange}
          />

<label for='birthday'>Birthday:</label>
         <input
            className="form__input"
            type="date"
            name="birthday"
            id="birthday"
            placeholder="birthday"
            required  
            value={userEdit.birthDate}
            onChange={handleChange}
          />


          <label for='phone'>Phone:</label>
         <input
          className="form__input"
          type="tel"
          name="phone"
          id="phone"
          placeholder="111-111-1111"
          required  
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={userEdit.phone}
          onChange={handleChange}
        />

<div className='form__input-gender'>
  
          <input
            className="form__input"
            type="radio"
            name="gender"
            id=""
            placeholder="Gender"
            required  
            value='male'
            onChange={handleChange}
            checked={userEdit.gender==='male'}
          />
          <label for="contactChoice1">Male</label>
  
          <input
            className="form__input"
            type="radio"
            name="gender"
            id=""
            placeholder="Gender"
            required  
            value='female'
            onChange={handleChange}
            checked={userEdit.gender==='female'}
          />
          <label for="contactChoice1">Female</label>

  <input
            className="form__input"
            type="radio"
            name="gender"
            id=""
            placeholder="Gender"
            required  
            value='Prefer not to respond'
            onChange={handleChange}
            checked={userEdit.gender==='Prefer not to respond'}
          />
          <label for="contactChoice1">Prefer not to respond</label>
</div>

            <select name="bloodGroup" value={userEdit.bloodGroup}
            onChange={handleChange} >
            <option value='A+'>A RhD positive (A+)</option>
            <option value='A-'>A RhD negative (A-)</option>
            <option value='B+'>B RhD positive (B+)</option>
            <option value='B-'>B RhD negative (B-)</option>
            <option value='O+'>O RhD positive (O+)</option>
            <option value='O-'>O RhD negative (O-)</option>
            <option value='AB+'>AB RhD positive (AB+)</option>
            <option value='AB-'>AB RhD negative (AB-)</option>
</select>

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