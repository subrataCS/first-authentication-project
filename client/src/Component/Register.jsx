import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Register = ({ onLoginClick }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:5000/api/user/register', formData);
            alert(response.data.message);
        } catch (err) {
            console.error('Error registering user:', err.response ? err.response.data : err.message);
            alert('Error: ' + (err.response ? err.response.data.message : err.message));
        }
    };

    return (
        <Container>
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChanges}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChanges}
                    required
                />
                <button type="submit">Register</button>
                <Info>
                    <a href="#" onClick={onLoginClick}>Login</a>
                </Info>
            </Form>
        </Container>
    );
};

export default Register;

const Container = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;

    input {
        margin-bottom: 1rem;
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 0.75rem;
        background-color: #007bff;
        border: none;
        color: white;
        font-size: 1rem;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

const Info = styled.div`
    margin-top: 1rem;
    text-align: center;

    p {
        font-size: 0.875rem;
        color: #333;
    }

    a {
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;
