import React, { useState, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import auth from "./auth";
import Login from "./Login";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { LoginSignup, WelcomeTitle, MainContent } from "./Styles.js";

const Signup = ({ errors, touched, status }) => {
    const [signup, setSignup] = useState([]);
    const history = useHistory();

    useEffect(() => {
      console.log("status has changed", status);
      status && setSignup(signup => [...signup, status]);
    }, [status]);
    return (
        <div>
            <Link to="/login">
                <LoginSignup>Login</LoginSignup>
            </Link>
            <Route path="/login">
                <Login />
            </Route>
            <br></br>
            <MainContent>
            <WelcomeTitle>Become A Member!</WelcomeTitle>
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
                    {touched.password && errors.password &&<p 
                    className="errors">{errors.password}</p>}

                    <button type="submit" onClick={() => {
                        auth.login(() => {
                            history.push("/dashboard");
                        });
                    }} >Enter
                    </button>
                </Form>
            </MainContent>
        </div>
    );
}

const FormikSignup = withFormik({
    mapPropsToValues({ email, password }){
        return {
            email: email || "",
            password: ""
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Invalid email address').required(),
        password: Yup.string().min(5, 'Must be at leat 5 characters long').required()
    }),
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    handleSubmit(values, {setStatus}){
        console.log("submitting", values);
        axios.post('https://reqres.in/api/users', values)
        .then(res => {
            console.log('success', res)
            setStatus(res.data)
        })
        .catch(err => console.log(err.response));
    }
})(Signup);
export default FormikSignup;