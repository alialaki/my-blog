import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return (
        <>
        <h1>Log In</h1>
        <input />
        <input type="password" />
        <button>Log In</button>
        <Link to="/create-account">Don't have an account? Create one here</Link>
        </>
    );
}

export default LoginPage;