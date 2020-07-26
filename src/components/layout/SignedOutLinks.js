import React from 'react';
import { NavLink } from 'react-router-dom'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom';

const SignedOutLinks =  () => {
  const firebase = useFirebase();
  const history = useHistory();

  const login = async () => {
    await firebase
        .login({
            provider: 'google',
            type: 'popup'
        });
    
    history.push('/');
  }

  return (
    <ul className="right">
        <li>
          <a onClick={login}>Login</a>
        </li>
    </ul>
  );
}

export default SignedOutLinks;
