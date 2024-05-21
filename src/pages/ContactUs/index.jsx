import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Input, Button } from "../../components";

const ContactForm = () => {
    useScrollToTop();

    return (
        <>
        <Header />
        <section className="bg-[beige]">
            <div className="container mx-auto px-10 sm:px-4 py-10">
                <div className="flex mt-24 gap-4 md:flex-col">
                    <div className="w-full mt-5">
                        <h1 className="text-4xl sm:text-center font-bold">
                            Get In Touch
                        </h1>
                        <p className="mt-4 text-lg sm:text-center">
                            Let's chat, share your story, and spread some positive vibes. Don’t hesitate to
                            reach out for a chat and a cup of tea. We love hearing from you!
                        </p>
                    </div>

                    <div className="mt-5 w-full md:w-full lg:w-6/12 mb-4">
                        <form className="space-y-4">
                            <h2 className="text-2xl font-semibold">Email Us</h2>

                            <div className="flex -mx-2">
                                <div className="w-full md:w-full px-2 mb-4">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                        First Name <em>(required)</em>
                                    </label>
                                    <Input
                                        type="text"
                                        id="firstName"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="First Name"
                                    />
                                </div>

                                <div className="w-full md:w-full px-2 mb-4">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                        Last Name <em>(required)</em>
                                    </label>
                                    <Input
                                        type="text"
                                        id="lastName"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address <em>(required)</em>
                                </label>
                                <Input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message <em>(required)</em>
                                </label>
                                <textarea
                                    id="message"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-[#d9d9d9] p-4 sm:text-sm"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </div>

                            <Button  type="submit" color="blue_gray_900"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white mt-3">
                                Send
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
};

export default ContactForm;
