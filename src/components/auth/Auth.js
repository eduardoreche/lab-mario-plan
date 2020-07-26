import React from 'react';
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom';

const Auth = () => {
    const firebase = useFirebase();
    const history = useHistory();

    const signInWithGoogle = async () => {
        await firebase
            .login({
                provider: 'google',
                type: 'popup'
            });
        
        history.push('/');
    }

    return (
        <div>
          <h1>Sign In</h1>
          <button
            onClick={(event) => {
              event.preventDefault();
              signInWithGoogle();
            }}
          >
            Sign In with Google
          </button>
        </div>
      );
}

export default Auth;
