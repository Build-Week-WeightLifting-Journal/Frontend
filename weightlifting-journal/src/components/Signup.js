import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Calendar from "./dashboard/Calendar";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Signup = ({ errors, touched, status }) => {
    const [signup, setSignup] = useState([]);
    useEffect(() => {
      console.log("status has changed", status);
      status && setSignup(signup => [...signup, status]);
    }, [status]);
    return (
        <div>
            <h2>Become A Member!</h2>
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

                {/* <Link to="/calendar"> */}
                    <button type="submit">Enter</button>
                {/* </Link> */}
                <Route path="/calendar">
                    <Calendar />
                </Route>
            </Form>

            {/* {signup.map(signupInfo => (
                <ul key={signupInfo.id}>
                    <li>email: {signupInfo.email}</li>
                    <li>password: {signupInfo.password}</li>
                </ul>
            ))} */}
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