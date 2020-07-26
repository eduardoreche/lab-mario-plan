import React from 'react';
import { NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom';

const SignedInLinks =  () => {
  const { auth } = useSelector(state => state.firebase);
  const firebase = useFirebase();
  const history = useHistory();

  const logout = async () => {
    await firebase.logout();
    history.push('/');
  }

  const initials = () => {
    if(!auth.displayName) return;
    const first = auth.displayName.split(' ')[0];
    const last = auth.displayName.split(' ')[1];

    return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
  }

  return (
    <ul className="right">
        <li><NavLink to="/create">New Project</NavLink></li>
        <li>
          <a onClick={logout}>Logout</a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            {initials()}
          </NavLink>
        </li>
    </ul>
  );
}

export default SignedInLinks;
