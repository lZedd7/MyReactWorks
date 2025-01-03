import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email : '',
    password : ''
  })

  cosnt [didEdit, setDidEdit] = useState({
    email: false,
    password : false
  })

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@')

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted')

    setEnteredValues({
    email : '',
    password : ''
    });

  }

  function handleInputChange(identifier, value) {
  setEnteredValues(prevValues => ({
    ...prevValues,
    [identifier] : value
  }));
  setDidEdit(prevEdit => ({
    ...prevEdit,
    [identifier] : false,
  }))
}
 function handleEmailBlur (identifier) {
  setDidEdit(prevEdit => ({
    ...prevEdit,
    [identifier] : true
  }));
 }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          onBlur={()=> handleEmailBlur('email')}
          onChange={(event) => handleInputChange('email', event.target.value)} 
          value={enteredValues.email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email adress</p>} </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password"
          name="password" 
          onChange={(event) => handleInputChange('password', event.target.value)} 
          value={enteredValues.password}
          
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}