import React from 'react';
import Navbar from '../components/NavBar';
import { Header } from './NewEmployee';

function Error() {
    return (
        <div>
            <Navbar />
            <Header>The page you are looking for does not exist</Header>
        </div>
    );
}

export default Error;
