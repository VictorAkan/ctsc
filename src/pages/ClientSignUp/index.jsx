import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
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
import { useContext } from 'react';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    fullName: Yup.string().required('Full name is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    userType: Yup.string().oneOf(['client', 'talent'], 'Please select a user type')
});

export default function SignupPage() {
    useScrollToTop();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const { setUser } = useContext(UserContext); // Use UserContext

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
            if (values.email === 'admin@example.com' && values.password === 'supersecret') {
                navigate('/admin');
                return;
            }

            const response = await axios.post(
                'https://crackingthestylecode.pythonanywhere.com/api/v1/sign-up/',
                {
                    email: values.email,
                    full_name: values.fullName,
                    password: values.password,
                    is_talent: false,
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log(response.data);
            window.sessionStorage.setItem("name", values.fullName)

            if (response.status === 201) {
                localStorage.setItem('userType', 'client');
                // Navigate to the login page
                navigate('/login');
                const user = {
                    email: values.email,
                    fullName: values.fullName,
                    userType: 'client',
                };
                setUser(user.fullName);
            } else {
                setStatus({ message: 'Signup failed. Please try again.', type: 'error' });
            }
        } catch (error) {
            console.error('Signup error:', error);
            setErrMessage(error.response.data.email)
            setStatus({ message: 'An error occurred. Please try again.', type: 'error' });
        } finally {
            setIsSubmitting(false);
            setSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>CTSC</title>
                <meta name="description" content="web site created by Victor Ikurekong" />
            </Helmet>
            <div className="w-full bg-[#ffffff]">
                <Header />
                <div className="relative h-[125.00rem] md:h-auto">
                    <div className="flex w-full flex-col gap-[27.94rem] md:gap-[20.94rem] sm:gap-[13.94rem]">
                        <div className="flex justify-center bg-[#253451] pb-[18.00rem] pt-[8.94rem] md:py-[1.25rem]">
                            <div data-aos="fade-up" className="container-xs mt-10 md:mt-24 flex justify-center pl-[19.06rem] pr-[19.44rem] md:p-[1.25rem] md:px-[1.25rem]">
                                <Text size="26xl" as="p" className="tracking-[0.00rem] sm:text-center">
                                    Let's Get You On board
                                </Text>
                            </div>
                        </div>
                        <Img
                            src="images/img_rectangle_373.png"
                            alt="image"
                            className="h-[64.44rem] rounded-tl-[106px] rounded-tr-[106px] object-cover"
                        />
                    </div>
                    <div className="absolute left-0 right-0 top-[21%] m-auto h-[62.75rem] w-[95%] rounded-[18px] bg-[#fcfcfc] pb-[1.06rem] pr-[21.19rem] md:pr-[1.25rem]">
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[61.63rem] w-full">
                            <Img
                                src="images/img_image.png"
                                className="absolute bottom-0 sm:hidden left-[0.00rem] top-0 my-auto h-[60.50rem] w-[50%] object-cover"
                                alt="image"
                            />
                            <div data-aos="fade-up" className="absolute right-[23.00rem] md:right-[0.00rem] top-[0.00rem] m-auto flex w-[50%] md:w-full flex-col items-center gap-[1.81rem] rounded-bl-[56px] sm:rounded-bl-[0px] sm:rounded-tl-[0px] rounded-tl-[56px] bg-[#ffffff] px-[1.00rem] pb-[4.19rem] pt-[1.00rem] shadow-[-24px_32px_40px_0px_#00000028] md:pb-[1.25rem]">
                                <div className="flex w-[77%] flex-col items-center gap-[1.25rem] md:w-full">
                                    <div className="h-[0.63rem] w-[0.63rem] rotate-[-90deg] rounded-[5px] bg-[#faf9ff]" />
                                    <Img
                                        src="ctsflogo.png"
                                        alt="logono"
                                        className="w-24 h-24"
                                    />
                                    {errMessage ? <div className='font-bold text-2xl text-red-500'>{errMessage}</div> : null}

                                    <a href="#">
                                        <Heading size="lg" as="h1" className="text-[1.88rem] !text-[#100f14]">
                                            Create A Client Account
                                        </Heading>
                                    </a>
                                    <Formik initialValues={{ email: '', fullName: '', password: '', userType: '' }}
                                        validationSchema={SignupSchema}
                                        onSubmit={handleSubmit}>
                                        {({ isSubmitting, errors, touched, values }) => (
                                            <Form>
                                                <div className="flex flex-col gap-[1.63rem] w-full">
                                                    <div className="flex flex-col w-full items-start gap-[0.50rem]">
                                                        <Text size="2xl" as="p" className="!text-[0.94rem] !font-medium !text-[#9794aa]"> Email Address </Text>
                                                        <Field type="email" name="email" placeholder="Enter your email address"
                                                            className="font-medium sm:pr-[1.25rem] w-[30rem] sm:w-[15rem] !rounded-md border-gray-300 shadow-sm !bg-gray-100 !p-4" />
                                                        {errors.email && touched.email && (
                                                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col gap-[0.50rem]">
                                                        <div className="flex self-start">
                                                            <Text size="3xl" as="p" className="!text-[#9794aa]"> Full Name </Text>
                                                        </div>
                                                        <Field type="text" name="fullName" placeholder="Enter your full name"
                                                            className="!rounded-md border-gray-300 shadow-sm !bg-gray-100 !p-4 font-medium sm:pr-[1.25rem]" />
                                                        {errors.fullName && touched.fullName && (
                                                            <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs" />
                                                        )}
                                                    </div>
                                                    {/* {values.email !== 'admin@example.com' || values.password !== 'supersecret' ? (
                                                        <div className="flex flex-col gap-[0.50rem]">
                                                            <Text size="2xl" as="p" className="!text-[0.94rem] !font-medium !text-[#9794aa]"> User Type </Text>
                                                            <div className="flex items-center gap-[1.25rem]">
                                                                <label className="flex items-center gap-[0.50rem]">
                                                                    <Field type="radio" name="userType" value="client" className="!bg-gray-100" />
                                                                    <Text size="2xl" as="p" className="!text-[#9794aa]">Client</Text>
                                                                </label>
                                                                <label className="flex items-center gap-[0.50rem]">
                                                                    <Field type="radio" name="userType" value="talent" className="!bg-gray-100" />
                                                                    <Text size="2xl" as="p" className="!text-[#9794aa]">Talent</Text>
                                                                </label>
                                                            </div>
                                                            {errors.userType && touched.userType && (
                                                                <ErrorMessage name="userType" component="div" className="text-red-500 text-xs" />
                                                            )}
                                                        </div>
                                                    ) : null} */}
                                                    <div className="flex flex-col items-start gap-[0.50rem]">
                                                        <Text size="2xl" as="p" className="!text-[0.94rem] !font-medium !text-[#9794aa]"> Password </Text>
                                                        <Field type="password" name="password" placeholder="Create your password"
                                                            className="gap-[2.19rem] self-stretch !rounded-md border-gray-300 shadow-sm !bg-gray-100 !p-4 font-medium" />
                                                        {errors.password && touched.password && (
                                                            <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col items-center gap-[1.81rem] self-stretch">
                                                        <Button color="blue_gray_900" size="4xl" disabled={isSubmitting}
                                                            className="w-full rounded-[30px] font-medium sm:px-[1.25rem]">
                                                            {isSubmitting ? 'Creating account...' : 'Create an account'}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                                <Text size="2xl" as="p" className="!text-[1.06rem] !text-[#676576]">
                                    <Link to="/login">
                                        <Text size="2xl" as="p" className="flex !text-[0.94rem] tracking-[0.00rem] !text-[#494759]">
                                            <span className="text-[#494759]">Already have an account?&nbsp;</span>
                                            <a href="#" className="font-semibold text-[#6838ee] underline">
                                                Login
                                            </a>
                                        </Text>
                                    </Link>
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer className="bg-[#f8f8f9]" />
            </div>
        </>
    );
}