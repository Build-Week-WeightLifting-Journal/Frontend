import React, { useState, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Signup from "./Signup";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = ({ errors, touched, status }) => {
    const [login, setLogin] = useState([]);
    const history = useHistory();

    useEffect(() => {
      console.log("status has changed", status);
      status && setLogin(login => [...login, status]);
    }, [status]);

    const routeToDashboard = (email, password) => {
        console.log('email', email, 'password', password);
        if(!email || !password){
            console.log("error");
        } else{
        history.push("/dashboard");
        }
    };
    return (
        <div>
            <Link to="/sign-up">Sign Up</Link>
            <Route path="/sign-up">
                <Login />
            </Route>
            <h2>Welcome Back!</h2>
            <Form>
                <label htmlFor="email">email</label>
                <Field
                    id="email"
                    type="text"
                    placeholder="email"
                    name="email"
                />
                {touched.email && errors.email && <p 
                className="errors">{errors.email}</p>}
                <label htmlFor="password">password</label>
                <Field
                    id="password"
                    type="text"
                    placeholder="password"
                    name="password"
                />
                {touched.password && errors.password && <p 
                className="errors">{errors.password}</p>}

                
                <button type="submit" onClick={routeToDashboard} >Enter
                </button>

            </Form>

            {/* {login.map(loginInfo => (
                <ul key={loginInfo.id}>
                    <li>email: {loginInfo.email}</li>
                    <li>password: {loginInfo.password}</li>
                </ul>
            ))} */}
        </div>
    );
}

const FormikLogin = withFormik({
    mapPropsToValues({ email, password }){
        return {
            email: email || "",
            password: ""
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Invalid email address').required(),
        password: Yup.string().required()
    }),
    handleSubmit(values, {setStatus}){
        console.log("submitting", values);
        axios.post('https://reqres.in/api/users', values)
        .then(res => {
            console.log('success', res)
            setStatus(res.data)
           // history.push('/dashboard');
        })
        .catch(err => console.log(err.response));
    }
})(Login);
export default FormikLogin;