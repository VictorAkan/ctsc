// NewsSection.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useScrollToTop from "../../hooks/useScrollToTop";
import axios from "axios";
import { Loader } from '../../Loader';
import { Button } from '../../components';

const API_URL = 'https://crackingthestylecode.pythonanywhere.com/api/v1/story/';
// const API_URL_A = 'https://crackingthestylecode.pythonanywhere.com/api/v1/story/';

const getStories = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching stories:", error);
        throw error;
    }
};

const postComment = async (storyId, comment) => {
    try {
        const response = await axios.post(`${API_URL}${storyId}/comment/`, { comment });
        return response.data;
    } catch (error) {
        console.error("Error posting comment:", error);
        throw error;
    }
};

const NewsSection = () => {
    useScrollToTop();
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comment, setComment] = useState("");

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const data = await getStories();
                setStories(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStories();
    }, []);

    const handleCommentSubmit = async (storyId) => {
        try {
            await postComment(storyId, comment);
            // Refresh the stories after posting a comment
            const data = await getStories();
            setStories(data);
            setComment(""); // Clear the comment input field
        } catch (error) {
            setError(error.message);
        }
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <Header />
            <div className="container mx-auto px-4">
                {stories?.map((story) => (
                    <div key={story.id} className="flex justify-center" id="feature-story">
                        <div className="w-full mt-24 md:mt-32 mb-5 news-blog bg-white p-4 shadow-md">
                            <Link to={`/story/${story.id}`}>
                                <img
                                    src={story.image}
                                    alt=""
                                    className="w-full h-auto"
                                />
                            </Link>
                            <div className="mt-3 flex items-center font-bold mb-3">
                                {new Date(story.created_at).toLocaleDateString()} <span className="mx-2 dot">•</span> 
                                <div className="flex">
                                    {story.author.first_name} {story.author.last_name}
                                </div>
                            </div>
                            <Link to={`/story/${story.id}`}>
                                <h4 className="text-lg font-semibold">
                                    {story.topic}
                                </h4>
                            </Link>
                            <p className="mb-3">
                                {story.short_description}
                            </p>
                            <Link to={`/story/${story.id}`} className="read-more text-blue-500 hover:underline">
                                Read More
                            </Link>
                            <div>
                                <input
                                    type="text"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Type your comment here..."
                                />
                                <Button onClick={() => handleCommentSubmit(story.id)}>Post Comment</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer className="mt-24" />
        </div>
    );
};

export default NewsSection;











// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
// import useScrollToTop from "../../hooks/useScrollToTop";

// const NewsSection = () => {
//     useScrollToTop();
//     return (
//         <>
//         <Header />
//         <div className="container mx-auto px-4">
//             <Header />
//             <div className="flex justify-center" id="feature-story">
//                 <div className="w-full md:w-5/6 mt-24 md:mt-32 mb-5 news-blog bg-white p-4 shadow-md">
//                     <a href="#">
//                         <img
//                             src="./img/news-and-stories-img/news-and-stories-img-1.jpg"
//                             alt=""
//                             className="w-full h-auto"
//                         />
//                     </a>
//                     <div className="mt-3 flex items-center font-bold mb-3">
//                         3/18/24 <span className="mx-2 dot">•</span> Precious H
//                     </div>
//                     <a href="#">
//                         <h4 className="text-lg font-semibold">
//                             Welcome to Ibom Kitchen: Learn how to Cook Ekpang-nkukwo.
//                         </h4>
//                     </a>
//                     <p className="mb-3">
//                         In today’s feature story, we have decided to bring you a highly requested segment for our Foodie-readers. For our first recipe, we headed to a daughter of the soil who is an expert in this recipe.
//                     </p>
//                     <a href="#" className="read-more text-blue-500 hover:underline">
//                         Read More
//                     </a>
//                 </div>
//             </div>

//             <div className="text-center my-8">
//                 <h1 className="text-3xl big-header font-bold">News & Stories of the Great People of Akwa Ibom, Nigeria</h1>
//                 <div className="h-1 line bg-gray-300 mt-2 mb-5"></div>
//                 <div className="mb-5 donate">
//                     <p>
//                         CTSC is here to crack the style code to a successful life and serve the ordinary men & women of Akwa Abasi
//                         Ibom state in Nigeria. We cannot do this alone. You may donate to support the work we do here and help pay our
//                         journalists and writers.
//                     </p>
//                     <a href="#" className="btn btn-primary bg-[#253451] text-white py-2 px-4 rounded-md mt-3 inline-block">
//                         Donate
//                     </a>
//                 </div>
//             </div>

//             <section>
//                 <div className="container mx-auto px-4">
//                     <div className="grid grid-cols-2 sm:grid-cols-1 justify-center gap-4">
//                         <div className="w-full news-card mb-4 bg-white p-4 shadow-md">
//                             <a href="#">
//                                 <h3 className="text-center mb-3 text-xl font-semibold">Feature Stories</h3>
//                             </a>
//                             <a href="#">
//                                 <img
//                                     src="./img/news-and-stories-img/news-and-stories-img-2.jpg"
//                                     alt=""
//                                     className="w-full h-auto"
//                                 />
//                             </a>
//                             <a href="#">
//                                 <p className="mt-3 mb-2">
//                                     What Akwa-Ibom Designers Think of Eco-friendly Fashion <br /><br />
//                                     The CTSC crew caught up with a Sustainable Fashion Enthusiast in Akwa-Ibom about her thoughts on the
//                                     topic. Meet Emediong Ekam, who happily shared her brand’s eco-friendly practices and the valuable ways
//                                     they contribute to waste reduction.
//                                     <br />
//                                     She says: <br />
//                                     <span className="flex mt-2 mb-3">Apr 8, 2024 -- Gloria J</span>
//                                 </p>
//                             </a>
//                             <a href="#" className="text-blue-500 read-more hover:underline">
//                                 Read More
//                             </a>
//                         </div>

//                         <div className="w-full mb-4 bg-white news-card p-4 shadow-md">
//                             <a href="#">
//                                 <img
//                                     src="./img/news-and-stories-img/news-and-stories-img-6.jpg"
//                                     alt=""
//                                     className="w-full h-auto"
//                                 />
//                             </a>
//                             <a href="#">
//                                 <p className="mt-3 mb-2">
//                                     Autism Awareness Month: Sampling Readers' Opinion on Autism <br />
//                                     Dear readers, <br />
//                                     Welcome to Friday! The only night for a deliberate long night of sleep. Apologies, if you must work on
//                                     Saturday. <br />
//                                     Today, we want to discuss a topic with you that is dear to our hearts at CTSC - Autism Awareness. At CTSC,
//                                     we are keen on sharing information with our Akwa-Ibom brothers and sisters to open your eyes.
//                                     <br />
//                                     <span className="flex mt-2 mb-3">Apr 5, 2024 -- Precious H</span>
//                                 </p>
//                             </a>
//                             <a href="#" className="text-blue-500 read-more hover:underline">
//                                 Read More
//                             </a>
//                         </div>

//                         <div className="w-full mb-4 news-card bg-white p-4 shadow-md">
//                             <a href="#">
//                                 <img
//                                     src="./img/news-and-stories-img/news-and-stories-img-10.jpg"
//                                     alt=""
//                                     className="w-full h-auto"
//                                 />
//                             </a>
//                             <a href="#">
//                                 <p className="mt-3 mb-2">
//                                     First-ever CTSC Community Relief Outreach in Akwa-Ibom <br />
//                                     Today, we are excited to share such wonderful news with our readers around the world. As you may already
//                                     know, we have been planning our first-ever CTSC community event and outreach since we started publishing
//                                     on the 5th of February, 2024. <br /><br />
//                                     The event happened on March 30th this year, two days ago. It was a wildly successful outreach, and to the
//                                     Glory of God - see photos attached.
//                                     <br />
//                                     <span className="flex mt-2 mb-3">Apr 1, 2024 -- Udeme E</span>
//                                 </p>
//                             </a>
//                             <a href="#" className="text-blue-500 read-more hover:underline">
//                                 Read More
//                             </a>
//                         </div>

//                         <div className="w-full mb-4 bg-white news-card p-4 shadow-md">
//                             <a href="#">
//                                 <h3 className="text-center mb-3 text-xl font-semibold">Personal Growth</h3>
//                             </a>
//                             <a href="#">
//                                 <img
//                                     src="./img/news-and-stories-img/news-and-stories-img-3.jpg"
//                                     alt=""
//                                     className="w-full h-auto"
//                                 />
//                             </a>
//                             <a href="#">
//                                 <p className="mt-3 mb-2">
//                                     Digital Detox: How to Reduce Screen Time & Improve Your Well-Being
//                                     Dear readers, <br /><br />
//                                     As you know, one of our major life codes at CTSC is personal growth. We are passionate about our
//                                     collective growth as a society. <br />
//                                     However, to achieve this level of growth, we must want the growth for ourselves first.
//                                     <br />
//                                     <span className="flex mt-2 mb-2">Apr 10, 2024 -- Udeme E</span>
//                                 </p>
//                             </a>
//                             <a href="#" className="text-blue-500 read-more hover:underline">
//                                 Read More
//                             </a>
//                         </div>

//                         <div className="w-full mb-4 bg-white news-card p-4 shadow-md">
//                             <a href="#">
//                                 <img
//                                     src="./img/news-and-stories-img/news-and-stories-img-7.jpg"
//                                     alt=""
//                                     className="w-full h-auto"
//                                 />
//                             </a>
//                             <a href="#">
//                                 <p className="mt-3 mb-2">
//                                     How to Properly Deal with Negative Reviews as a Business and Brand
//                                     How to Properly Deal with Negative Reviews as a Business and Brand <br /><br />
//                                     Akwa-Ibom business owners have mastered professionalism when dealing with unsatisfied customers. Avoid
//                                     becoming defensive or engaging in arguments. Respond calmly and professionally, focusing on finding a
//                                     resolution rather than finding fault and escalating the situation.
//                                     <br />
//                                     <span className="flex mt-2 mb-2">Mar 13, 2024 -- Amazing Oty</span>
//                                 </p>
//                             </a>
//                             <a href="#" className="text-blue-500 read-more hover:underline">
//                                 Read More
//                             </a>
//                         </div>

//                         <div className="w-full mb-4 news-card bg-white p-4 shadow-md">
//                             <a href="#">
//                                 <img
//                                     src="./img/news-and-stories-img/news-and-stories-img-11.jpg"
//                                     alt=""
//                                     className="w-full h-auto"
//                                 />
//                             </a>
//                             <a href="#">
//                                 <p className="mt-3 mb-2">
//                                     Sink or Swim - Strategies for Navigating the 2024 Harsh Economic Realities<br /><br />
//                                     As unbelievable as this may sound to you, there is ALWAYS a group of people who do not feel the same
//                                     hardship as you probably do. READ THAT AGAIN. No matter how bad the economy gets, they never Sink - they
//                                     Swim.
//                                     <br />
//                                     <span className="flex mt-2">Mar 6, 2024 -- Saviour U</span>
//                                 </p>
//                             </a>
//                         </div>

//                         <div className="w-full mb-4 bg-white p-4 shadow-md">
//                             <a href="#">
//                                 <h3 className="text-center mb-3 text-xl font-semibold">Readers’ Corner</h3>
//                             </a>
//                             <a href="#">
//                                 <img
//                                     src="./img/news-and-stories-img/news-and-stories-img-4.jpg"
//                                     alt=""
//                                     className="w-full h-auto"
//                                 />
//                             </a>
//                             <a href="#">
//                                 <p className="mt-3 mb-2">
//                                     Vox Pop: Tell Your Local Government Chairman One Brutal Truth
//                                     Welcome to the 1st Edition of “TYGC1BT” <br /><br />
//                                     We invite you to grow with us. Witness us grow, make mistakes, and learn. <br /><br />
//                                     Witness another first of many by CTSC media in today's publication. We aim to bridge the gap between
//                                     governments and the masses aka villagers aka community members aka citizens.
//                                     <br />
//                                     <span className="flex mt-2 mb-2">Mar 22, 2024 -- Udeme E</span>
//                                 </p>
//                             </a>
//                             <a href="#" className="text-blue-500 hover:underline">
//                                 Read More
//                             </a>
//                         </div>

//                         <div className="w-full mb-4 bg-white p-4 shadow-md">
//                             <a href="#">
//                                 <img
//                                     src="./img/news-and-stories-img/news-and-stories-img-8.jpg"
//                                     alt=""
//                                     className="w-full h-auto"
//                                 />
//                             </a>
//                             <a href="#">
//                                 <p className="mt-3 mb-2">
//                                     Our Roast: Exploring Readers’ Opinions about CTSC
//                                     Dear readers, <br /><br />
//                                     Grab your reading glasses because CTSC did something that new and old brands can learn from: we asked our
//                                     readers for reviews. The CTSC crew took to the streets of Akwa-Ibom to find out how we are doing so far.
//                                     We are not ashamed of our days of humble beginnings. You should not be too!
//                                     <br />
//                                     <span className="flex mt-2 mb-2">Mar 15, 2024 -- Saviour U</span>
//                                 </p>
//                             </a>
//                             <a href="#" className="text-blue-500 hover:underline">
//                                 Read More
//                             </a>
//                         </div>

//                         <div className="w-full mb-4 bg-white p-4 shadow-md">
//                             <a href="#">
//                                 <img
//                                     src="./img/news-and-stories-img/news-and-stories-img-12.jpg"
//                                     alt=""
//                                     className="w-full h-auto"
//                                 />
//                             </a>
//                             <a href="#">
//                                 <p className="mt-3 mb-2">
//                                     3 Ways to Curb Political Sycophancy in Akwa Ibom <br /><br />
//                                     If you live in Akwa Ibom, then you know that political sycophancy has infected our policy and political
//                                     system for decades and still counting. We hope to initiate this discussion among your circle of friends
//                                     and families. Sycophancy has contributed to the lack of public trust in civil governance…
//                                     <br />
//                                     <span className="flex mt-2">Mar 1, 2024 -- Udeme E</span>
//                                 </p>
//                             </a>
//                         </div>

//                         <div className="w-full mb-4 bg-white p-4 shadow-md">
//                             <a href="#">
//                                 <h3 className="text-center mb-3 text-xl font-semibold">CTSC Interviews</h3>
//                             </a>
//                             <a href="#">
//                                 <img
//                                     src="./img/news-and-stories-img/news-and-stories-img-5.jpg"
//                                     alt=""
//                                     className="w-full h-auto"
//                                 />
//                             </a>
//                             <a href="#">
//                                 <p className="mt-3 mb-2">
//                                     International Women's Day Exclusive Interview: Akwa-Ibom Women Inspiring Inclusion
//                                     <br /><br />
//                                     Join us and get to know the CEO of Amazing Pot Kitchen as she agrees to give the CTSC crew an exclusive
//                                     interview into her life as a public figure with a private life on this very International Women’s Day
//                                     2024. <br /><br />
//                                     Her ability to balance business and personal life makes Ms. Francis an outstanding person in society.
//                                     <br />
//                                     <span className="flex mt-2 mb-2">Mar 8, 2024 -- Gloria J</span>
//                                 </p>
//                             </a>
//                             <a href="#" className="text-blue-500 hover:underline">
//                                 Read More
//                             </a>
//                         </div>

//                         <div className="w-full mb-4 bg-white p-4 shadow-md">
//                             <a href="#">
//                                 <img
//                                     src="./img/news-and-stories-img/news-and-stories-img-9.jpg"
//                                     alt=""
//                                     className="w-full h-auto"
//                                 />
//                             </a>
//                             <a href="#">
//                                 <p className="mt-3 mb-2">
//                                     Valentine's Day Special: Old & New School Love Journeys of Two Christian Couples in
//                                     Akwa-Ibom <br />
//                                     <br />
//                                     <span className="flex mt-2 mb-2">Feb 15, 2024 -- Amazing Oty</span>
//                                 </p>
//                             </a>
//                             <a href="#" className="text-blue-500 hover:underline">
//                                 Read More
//                             </a>
//                         </div>

//                         <div className="w-full mb-4 bg-white p-4 shadow-md">
//                             <a href="#">
//                                 <img
//                                     src="./img/news-and-stories-img/news-and-stories-img-13.jpg"
//                                     alt=""
//                                     className="w-full h-auto"
//                                 />
//                             </a>
//                             <a href="#">
//                                 <p className="mt-3 mb-2">
//                                     Interview: Akwa Ibom Social Media Influencer - Oga Yenne <br />
//                                     Oga Yenne: Moving into a city like Uyo from the village, I had to deal with low self-esteem and an
//                                     inferiority complex. I initially believed that I wasn't good enough, that people would not love me, and
//                                     that I would be a failure. But I did everything to put myself out there, and as people started…
//                                     <br />
//                                     <span className="flex mt-2">Feb 12, 2024 -- Saviour U</span>
//                                 </p>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//         <Footer className="mt-24" />
//         </>
//     );
// };

// export default NewsSection;

