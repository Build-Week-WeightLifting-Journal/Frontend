import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import auth from "./auth";
import axios from "axios";
import { LoginSignup, WelcomeTitle, MainContent, WholeDiv } from "./Styles.js";
import axiosWithAuth  from './auth';

function Login(props)  {
    console.log(props)
    const [creds, setCreds] = useState({ username: '', password: '', isLoggedIn: false });
    // const [loginStatus, setLoginStatus] = useState('');

   
    const handleChange = e => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

    function login(e) {
        e.preventDefault();
        axios
        // change axios with auth to axios | removed cors proxy https://cors-anywhere.herokuapp.com/
            .post(`https://cors-anywhere.herokuapp.com/https://weightlifting-journal15.herokuapp.com/api/auth/login`, creds)
            .then(res => {
                console.log(`login response`, res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('id', res.data.id);
                // localStorage.setItem('userid', res.data.user.id) //may be called something different ***
                // setLoginStatus('Success');
                setCreds({
                    username: '',
                    password: '', 
                    isLoggedIn: true
                })
                props.history.push('/dashboard')
            })
            .catch(err => {
                console.log(err);
                // setLoginStatus(`${err}`);
                setCreds({
                    username: '',
                    password: '',
                    isLoggedIn: false
                })
            });
    }

    return (
        <WholeDiv>
            <Link style={{ textDecoration: "none" }} to="/sign-up">
                <LoginSignup>Sign Up</LoginSignup>
            </Link>
            <Route path="/sign-up">
                <Login />
            </Route>
            <br></br>
            <MainContent>
                <WelcomeTitle>{`Welcome back`}</WelcomeTitle>
                <form onSubmit={login}>
                    <label htmlFor="username">username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="username"
                        name="username"
                        onChange={handleChange}
                        value= {creds.username}
                    />
                    {/* {touched.username && errors.username && <p 
                    className="errors">{errors.username}</p>} */}
                    <label htmlFor="password">password</label>
                    <input
                        id="password"
                        type="text"
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                        value= {creds.password}

                    />
                    {/* {touched.password && errors.password && <p 
                    className="errors">{errors.password}</p>} */}
                    
                    <button className="button" type="submit" onSubmit={login}>Enter</button>

                </form>
            </MainContent>
        </WholeDiv>
    );
}

// const FormikLogin = withFormik({
//     mapPropsToValues({ username, password }){
//         return {
//             username: username || " ",
//             password: " "
//         };
//     },
    // validationSchema: Yup.object().shape({
    //     username: Yup.string().username('Invalid username address').required(),
    //     password: Yup.string().required()
    // }),
    // handleSubmit(values, {setStatus}){
    //     console.log("submitting", values);
    //     axios.post('https://reqres.in/api/users', values)
    //     .then(res => {
    //         console.log('success', res)
    //         setStatus(res.data)
    //     })
    //     .catch(err => console.log(err.response));
    // }

export default Login