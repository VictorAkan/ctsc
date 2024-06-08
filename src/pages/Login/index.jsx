import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from "react-helmet";
import { Img, Text, Button, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import Aos from "aos";
import "aos/dist/aos.css";
import useScrollToTop from "../../hooks/useScrollToTop";
import { UserContext } from '../../context/UserContext';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function LoginPage() {
    useScrollToTop();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { setUser, setToken } = useContext(UserContext);
    const [loginError, setLoginError] = useState(null);

    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 0,
        });
    }, []);

    const handleSubmit = async (values, { setSubmitting, setStatus }) => {
        setIsSubmitting(true);
        setStatus({ message: null, type: null });

        try {
            console.log('Submitting login form with values:', values);

            const response = await axios.post(
                'https://crackingthestylecode.pythonanywhere.com/api/v1/sign-in/',
                values,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('Login response:', response);

            const { access, refresh } = response.data;

            // if (userType === 'admin') {
            //     window.sessionStorage.setItem("adminToken", access)
            // } else {
                
            // }

            setToken(access)

            window.sessionStorage.setItem("token", access);
            window.sessionStorage.setItem("refreshToken", refresh)

            const profileResponse = await axios.get(
                'https://crackingthestylecode.pythonanywhere.com/api/v1/user-profile/',
                {
                    headers: {
                        'Authorization': `Bearer ${access}`
                    }
                }
            );

            console.log('Profile response:', profileResponse);

            const user = {
                isTalent: profileResponse.data.is_talent,
            };

            console.log('User data:', user);

            if (values.email === 'admin@example.com' && values.password === 'supersecret') {
                navigate('/admin');
            } else if (user.isTalent) {
                navigate('/talentprofile');
            } else {
                navigate('/client_profile');
            }
        } catch (error) {
            console.error('Login error:', error);
            setLoginError('Invalid email or password. Please try again.');
            setStatus({ message: 'An error occurred. Please try again.', type: 'error' });
        } finally {
            setIsSubmitting(false);
            setSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h3 className="mb-4 text-center text-2xl font-bold text-[#253451]">Login</h3>
                <p className="text-center justify-center flex gap-2 text-gray-600">
                    Don't have an account yet? <Link to="/signup" className="text-[#253451]">Sign up</Link>
                </p>
                {loginError && (
                    <div className="mb-4 text-center text-red-500 text-xs">{loginError}</div>
                )}
                <div className="mt-4">
                    <Formik initialValues={{ email: '', password: '' }}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}>
                        {({ isSubmitting, errors, touched, values }) => (
                            <Form>
                                <div className="flex flex-col gap-[1.63rem] w-full">
                                    <div className="flex flex-col w-full items-start gap-[0.50rem]">
                                        <Text size="2xl" as="p" className="!text-[0.94rem] !font-medium !text-[#9794aa]"> Email Address </Text>
                                        <Field type="email" name="email" placeholder="Enter your email address"
                                            className="font-medium sm:pr-[1.25rem] !rounded-md border-gray-300 shadow-sm !bg-[#d9d9d9] !p-4" />
                                        {errors.email && touched.email && (
                                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                                        )}
                                    </div>
                                    <div className="flex flex-col items-start gap-[0.50rem]">
                                        <Text size="2xl" as="p" className="!text-[0.94rem] !font-medium !text-[#9794aa]"> Password </ Text>
                                        <Field type="password" name="password" placeholder="Enter password"
                                            className="gap-[2.19rem] self-stretch !rounded-md border-gray-300 shadow-sm !bg-[#d9d9d9] !p-4 font-medium" />
                                        {errors.password && touched.password && (
                                            <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                                        )}
                                    </div>
                                    <div className="flex flex-col items-center gap-[1.81rem] self-stretch">
                                        <Button color="blue_gray_900" size="4xl" disabled={isSubmitting}
                                            className="w-full rounded-[30px] font-medium sm:px-[1.25rem]">
                                            {isSubmitting ? 'Logging in...' : 'Login'}
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

