import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const loginRedirection = async () => {
        const loginSuccess = await actions.onLoginClick(email, password);

        if (loginSuccess) {
            setMessage("Successful login, navigating to profile...");
            console.log('Funciona')
            navigate('/profile'); // Navigate to the 'profile' page on successful login
        } else {
            setMessage("Incorrect login information, try again.");
            console.log('no funciona')
        }
    };

	return (
        <div className="" id="background-color">
        <div className='mx-5 px-5'>
            <h4 className="m-1 p-2 border-bottom">Login</h4>
            {/* Email Input */}
            <div className="form-group form-row">
                <label className="col-lg-4">Email:</label>
                <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            {/* Password Input */}
            <div className="form-group form-row">
                <label className="col-lg-4">Password:</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <a href="#">Forgot Password?</a>
            <div className="row">
                <div className='col p-3'>
                    <button className="btn btn-danger" onClick={() => navigate('/signup')}>
                        SIGN UP
                    </button>
                </div>

                <div className="col text-end p-3">
                    <div>{message}</div> 
                    <button className="btn btn-primary" onClick={loginRedirection}>
                        Login
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};