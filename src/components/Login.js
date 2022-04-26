import { useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Navigate } from 'react-router-dom';

import {auth} from '../Firebase';

const Login = ({ loggedIn, setLoggedIn}) => {

    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/',
        signInOptions: [
          auth.GoogleAuthProvider.PROVIDER_ID,
        ],
      };

      useEffect(() => {
        const unregisterAuthObserver = auth().onAuthStateChanged(user => {
            setLoggedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
      }, []);

    return (
        <>
        <h1>Login</h1>
        {!loggedIn && <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />}
        {loggedIn && <button onClick={() => auth().signOut().then(Navigate('/'))}>Sign-out</button>}
        {auth && auth().currentUser && loggedIn && <h1>Welcome {auth().currentUser.displayName}</h1>}
        {auth && auth().currentUser && loggedIn && <h1>Welcome {auth().currentUser.email}</h1>}
            </>
    );
}

export default Login;