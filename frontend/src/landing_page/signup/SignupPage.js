import React from 'react';
import Signup from './Signup';
import Investments from './Investments';
import Steps from './Steps';
import Benefits from './Benefits';
import OpenAccounts from '../OpenAccounts'
function SignupPage() {
    return ( 
        <>
        <Signup/>
        <Investments/>
        <Steps/>
        <Benefits/>
        <OpenAccounts/>
        </>
     );
}

export default SignupPage;