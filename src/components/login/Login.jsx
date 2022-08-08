import e from 'express';
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  const handleClick = () => {
    // e.preventDefault();
    // try {
    //   const { data } = axios.get('https://jsonplaceholder.typicode.com/users/1');
    //   setUser(data);
    // } catch (e) {
    //   setShowError(true);
    // }
  };

  return (
    <div style={styles.container}>
      <span className="user">{user.name} is logged in</span>
      <div style={styles.formArea}>
        <form style={styles.form}>
          <h1 style={styles.text}>Login</h1>
          <input style={styles.input} type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <input style={styles.input} type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button disabled={!username || !password} style={styles.button}>
            Login
          </button>
          <br />
          <span data-testid="error" style={{ visibility: showError ? 'visible' : 'hidden' }}>
            {/* {showError ? 'Something went wrong!' : ''} */}
            Something went wrong!
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
