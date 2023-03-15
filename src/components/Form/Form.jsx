import './Form.scss'

export function Form({  setUsers, userEdit, setUserEdit, userReset, setLoading, saveUser, fetchUsers, updateUserAge, setUpdateUserAge}) {

  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateUserAge) {
      userEdit.age = Math.floor((new Date() - new Date(userEdit.birthDate)) / (365 * 24 * 60 * 60 * 1000))
  }

    setLoading(true);

    saveUser(userEdit)
    .then(fetchUsers)
    .then(setUsers)
    .then(() => {
      setUserEdit(null)
      setLoading(false)
    });

  };

  const handleChange = (e) => {
    setUserEdit({ ...userEdit, [e.target.name]: e.target.value });
  };

  const handleHairChange = (color)=> {
    setUserEdit({...userEdit, hair:{...userEdit.hair,color}})
  }

  const handleUpdateUserAge = () => {
		setUpdateUserAge(!updateUserAge); // инвертируем стейт checkbox for ubdate user age
	}

  const arrColorHair = [ 
  "Brown",
  "Blonde",
  "Black",
  "Red",
  "Gray",
  "Auburn",
  "Chestnut",
  "Mahogany",
  "Burgundy",
  "Gray",
  "Strawberry blonde",
  "Platinum blonde",
  "Ash blonde",
  "Silver"]

  const bloodGroups = [
             {title: 'A+', desc: "A RhD positive (A+)"},
             {title:'A-', desc: "A RhD negative (A-)"},
             {title:'B+', desc: "B RhD positive (B+)"},
             {title:'B-', desc: "B RhD negative (B-)"},
             {title:'O+', desc: "O RhD positive (O+)"},
             {title:'O-', desc: "O RhD negative (O-)"},
             {title:'AB+', desc: "AB RhD positive (AB+)"},
             {title:'AB-', desc: "AB RhD negative (AB-)"}
  ]

  return (
    userEdit && (
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">User editor:</h2>

        <label htmlFor='firstName'>FirstName:</label>
        <input
          className="form__input"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          required
          value={userEdit.firstName}
          onChange={handleChange}
        />

          <label htmlFor='lastName'>LastName:</label>
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

          <label htmlFor='email'>Email:</label>
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

          <label htmlFor='password'>Password:</label>
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

            <label htmlFor='birthDate'>Birthday:</label>
            <label htmlFor='birthDate'>Update user age 
            <input type="checkbox" checked={updateUserAge} onChange={handleUpdateUserAge}/>
            </label>

            <input
            className="form__input"
            type="date"
            name="birthDate"
            id="birthDate"
            placeholder="birthDate"
            required  
            value={userEdit.birthDate}
            onChange={handleChange}
          />

         <label htmlFor='phone'>Phone:</label>
         <input
          className="form__input"
          type="tel"
          name="phone"
          id="phone"
          placeholder="+00 000 00 00 000"
          required  
          pattern = "[+, 0-9]{13,17}"
          title="+00 000 00 00 000"
          minLength="13"
          maxLength="17"
          value={userEdit.phone}
          onChange={handleChange}
        />

<div className='form__input-gender'>
          <input
            className="form__input"
            type="radio"
            name="gender"
            placeholder="Gender"
            required  
            value='male'
            onChange={handleChange}
            checked={userEdit.gender==='male'}
          />
          <label htmlFor="contactChoice1">Male</label>
  
          <input
            className="form__input"
            type="radio"
            name="gender"
            placeholder="Gender"
            required  
            value='female'
            onChange={handleChange}
            checked={userEdit.gender==='female'}
          />
          <label htmlFor="contactChoice1">Female</label>

          <input
            className="form__input"
            type="radio"
            name="gender"
            placeholder="Gender"
            required  
            value='Prefer not to respond'
            onChange={handleChange}
            checked={userEdit.gender==='Prefer not to respond'}
          />
          <label htmlFor="contactChoice1">Prefer not to respond</label>
</div>

        <select name="bloodGroup" value={userEdit.bloodGroup} onChange={handleChange} >
                {bloodGroups.map(bloodGroup => <option value={bloodGroup.title}>{bloodGroup.desc}</option>)}
        </select>

<label htmlFor="hairsColor">Choose color hair:</label>
<input list="hairColor" id="hairsColor" value={userEdit.hair.color} onChange={(e) => handleHairChange(e.target.value)}/>

<datalist id="hairColor">
  {arrColorHair.map(color => <option value={color}/>)}
</datalist>

        <div className="form__button-wrap">
          <button  className="form__button" type="submit">
            Submit
          </button>

          <button onClick={() => setUserEdit(userReset)} className="form__button" type="reset">
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


