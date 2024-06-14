import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import { Loader } from "../../Loader";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Input, Button } from "../../components";
import axios from "axios";
import { useState } from "react";

// import input validation libraries
import * as yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";

const ContactFormSchema = yup.object({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email_address: yup.string().email("Invalid email format").required("Email is required"),
    message: yup.string().required("Message is required"),
});

const ContactForm = () => {
    useScrollToTop();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/contact-us/', values);
            console.log('Data posted successfully:', response.data);
            // Handle successful post (e.g., clear form, show success message)
            resetForm() // reset the form
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
            setSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <section className="">
                <div className="container mx-auto px-10 sm:px-4 py-10">
                    <div className="flex mt-24 gap-4 md:flex-col">
                        <div className="w-full mt-5">
                            <h1 className="text-4xl sm:text-center font-bold">
                                Get In Touch
                            </h1>
                            <p className="mt-4 text-lg sm:text-center">
                                Let's chat, share your story, and spread some positive vibes.<br/> Don’t hesitate to
                                reach out for a chat and a cup of tea.<br /> We love hearing from you!
                            </p>
                        </div>

                        <div className="mt-5 w-full md:w-full lg:w-6/12 mb-4">
                            <Formik
                                initialValues={{
                                    first_name: "",
                                    last_name: "",
                                    email_address: "",
                                    message: "",
                                }}
                                validationSchema={ContactFormSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form className="space-y-4">
                                        <h2 className="text-2xl font-semibold">Email Us</h2>

                                        <div className="flex -mx-2">
                                            <div className="w-full md:w-full px-2 mb-4">
                                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                                    First Name <em>(required)</em>
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="firstName"
                                                    name="first_name"
                                                    className="mt-1 block w-full !rounded-md border-gray-300 shadow-sm !bg-gray-100 !p-4 sm:text-sm"
                                                    placeholder="First Name"
                                                    required
                                                />
                                                <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm" />
                                            </div>

                                            <div className="w-full md:w-full px-2 mb-4">
                                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                                    Last Name <em>(required)</em>
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="lastName"
                                                    name="last_name"
                                                    className="mt-1 block w-full !rounded-md border-gray-300 shadow-sm !bg-gray-100 !p-4 sm:text-sm"
                                                    placeholder="Last Name"
                                                    required
                                                />
                                                <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm" />
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email address <em>(required)</em>
                                            </label>
                                            <Field
                                                type="email"
                                                id="email"
                                                name="email_address"
                                                className="mt-1 block w-full !rounded-md border-gray-300 shadow-sm !bg-gray-100 !p-4 sm:text-sm"
                                                placeholder="Email address"
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                                Message <em>(required)</em>
                                            </label>
                                            <Field
                                                as="textarea"
                                                id="message"
                                                name="message"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 p-4 sm:text-sm"
                                                placeholder="Leave a comment here"
                                                style={{ height: '100px' }}
                                                required
                                            />
                                        </div>

                                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

                                        <Button type="submit" disabled={isSubmitting || isLoading} color="blue_gray_900"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white mt-3">
                                            {isSubmitting || isLoading ? "Sending data..." : "Send"}
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
        )}

export default ContactForm;
