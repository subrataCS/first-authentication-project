import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LoginForm = ({ onToggleRegister }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/login', formData);
            alert(response.data.message);
            // Store the token in localStorage or context if needed
        } catch (err) {
            console.error(err.response.data.message);
            alert('Error: ' + err.response.data.message);
        }
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        onToggleRegister();
    };

    return (
        <FormContainer>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
                <p>Don't have an account?<br /></p>
                <a href="#" onClick={handleRegisterClick}>Register</a>
            </form>
        </FormContainer>
    );
};

export default LoginForm;

const FormContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h2 {
        margin-bottom: 1rem;
    }

    form {
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
    }

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
