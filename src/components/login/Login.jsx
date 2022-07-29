import React, { useState } from 'react';
import './Login.styles.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  formArea: {
    display: 'flex',
    alignItems: 'center',
    //justifyContent: 'center',
    //border: '1px solid red',
  },
  form: {},
  text: {
    //margin: '10px',
  },
  input: {
    marginBottom: '10px',
    border: '1px solid gray',
    borderRadius: '4px',
    height: '35px',
    paddingLeft: 5,
  },
  button: {
    border: 'none',
    color: 'white',
    height: '35px',
    width: 193,
    borderRadius: '5px',
    backgroundColor: '#43C59E',
    fontWeight: '900',
  },
  span: {
    display: 'flex',
    justifyContent: 'center',
    color: 'red',
  },
};

const Login = () => {
  const [showError, setShowError] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.formArea}>
        <form style={styles.form}>
          <h1 style={styles.text}>Login</h1>
          <input
            style={styles.input}
            type="text"
            placeholder="username"
            value=""
          />
          <br />
          <input
            style={styles.input}
            type="password"
            placeholder="password"
            value=""
          />
          <br />
          <button disabled style={styles.button} type="submit">
            Login
          </button>
          <br />
          <span data-testid="error" style={styles.span}>
            {showError ? 'Something went wrong!' : ''}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
