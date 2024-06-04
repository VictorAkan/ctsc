import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useScrollToTop from "../../hooks/useScrollToTop";

const PersonalGrowth = () => {
    useScrollToTop();
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/story/personal-growth/');
                console.log(response.data);
                setPosts(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);
    console.log(posts);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <section>
                <Header />
                <div className="container-fluid section-container">
                    <div className="flex flex-wrap justify-center gap-y-5">
                        <div className="w-11/12 mt-24 md:mt-40 md:w-full">
                            <div className="quote">
                                <span className="mb-4 block">Jim Rohn</span>
                                <p className="leading-relaxed">"Your life does not get better by <br /> chance, it gets better by change."</p>
                            </div>
                        </div>
                        <div className="w-11/12 md:p-4 md:w-full mt-24 growth">
                            <div>
                                <h1 className="mb-3 text-4xl text-left leading-[0.5em] md:text-[4em] font-bold">PERSONAL</h1>
                                <span className="text-2xl">GROWTH AND DEVELOPMENT</span>
                                <img src="./img/news-and-stories-img/personal-growth/personal-growth-img-1.jpg" className="img-fluid translate" alt="Personal Growth" />
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />
                </div>
            </section>
            <section>
                <div className="container-fluid" id="personalGrowthWrapper">
                    <div className="flex flex-wrap justify-around gap-y-5">
                        {posts?.map((post, index) => (
                            <div key={index} className="w-11/12 md:w-full flex md:p-4 flex-col gap-3 lg:w-1/3">
                                <div className="blog-img mb-4">
                                    <a href="#">
                                        <img src={post?.image} className="img-fluid" alt={post?.title} />
                                    </a>
                                </div>
                                <div className="blog-detail">
                                    <span className="text-gray-500">{post?.created_at} <span className="dot">·</span> {post?.author?.email}</span>
                                    <a href="#">
                                        <h3 className="mt-4 mb-5 text-2xl sm:text-sm leading-10 sm:leading-[3rem] font-bold">{post?.title}</h3>
                                    </a>
                                    <a href="#" className="read-more text-blue-500">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer className="mt-24" />
            </section>
        </>
    );
};

export default PersonalGrowth;









// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
// import { Link } from "react-router-dom";
// import { Button } from "../../components";

// // import scrolltotop hook
// import useScrollToTop from "../../hooks/useScrollToTop";

// const PersonalGrowth = () => {
//     useScrollToTop();
    
//     return (
//         <>
//             <section>
//                 <Header />
//                 <div className="container-fluid section-container">

//                     <div className="flex flex-wrap justify-center gap-y-5">
//                         <div className="w-11/12 mt-24 md:mt-40 md:w-full">
//                             <div className="quote">
//                                 <span className="mb-4 block">Jim Rohn</span>
//                                 <p className="leading-relaxed">"Your life does not get better by <br /> chance, it gets better by change."</p>
//                             </div>
//                         </div>

//                         <div className="w-11/12 md:p-4 md:w-full mt-24 growth">
//                             <div>
//                                 <h1 className="mb-3 text-4xl text-left leading-[0.5em] md:text-[4em] font-bold">PERSONAL</h1>
//                                 <span className="text-2xl">GROWTH AND DEVELOPMENT</span>
//                                 <img src="./img/news-and-stories-img/personal-growth/personal-growth-img-1.jpg" className="img-fluid translate" alt="Personal Growth" />
//                             </div>
//                         </div>
//                     </div>
//                     <hr className="my-5" />
//                 </div>
//             </section>

//             <section>
//                 <div className="container-fluid" id="personalGrowthWrapper">
//                     <div className="flex flex-wrap justify-around gap-y-5">

//                         {[
//                             {
//                                 date: '4/10/2024',
//                                 author: 'Udeme E',
//                                 title: 'Digital Detox: How to Reduce Screen Time & Improve Your Well-Being',
//                                 imgSrc: './img/news-and-stories-img/news-and-stories-img-3.jpg',
//                                 excerpt: 'Dear readers, As you know, one of our major life codes at CTSC is personal growth. We are passionate about our collective growth as a society. However, to achieve this level of growth, we must want the growth for ourselves first.'
//                             },
//                             {
//                                 date: '3/13/24',
//                                 author: 'Amazing Oty',
//                                 title: 'How to Properly Deal with Negative Reviews as a Business and Brand',
//                                 imgSrc: './img/news-and-stories-img/news-and-stories-img-7.jpg',
//                                 excerpt: 'Akwa-Ibom business owners have mastered professionalism when dealing with unsatisfied customers. Avoid becoming defensive or engaging in arguments. Respond calmly and professionally, focusing on finding a resolution rather than finding fault and escalating the situation.'
//                             },
//                             {
//                                 date: '3/6/24',
//                                 author: 'Saviour U',
//                                 title: 'Sink or Swim - Strategies for Navigating the 2024 Harsh Economic Realities',
//                                 imgSrc: './img/news-and-stories-img/news-and-stories-img-11.jpg',
//                                 excerpt: 'As unbelievable as this may sound to you, there is ALWAYS a group of people who do not feel the same hardship as you probably do. READ THAT AGAIN. No matter how bad the economy gets, they never Sink - they Swim.'
//                             },
//                             {
//                                 date: '2/28/24',
//                                 author: 'Saviour U',
//                                 title: 'Financial Freedom: Books to Read and Take Action',
//                                 imgSrc: './img/news-and-stories-img/personal-growth/personal-growth-img-2.jpg',
//                                 excerpt: 'We are afraid because we feel ill-prepared financially. If you feel like money doesn’t seem to stay when you have access to it, then you are a financial illiterate. Financial illiteracy has nothing to do with being a graduate or not. It does not care if you completed secondary school or dropped out of primary school.'
//                             },
//                             {
//                                 date: '2/23/24',
//                                 author: 'Delight P',
//                                 title: 'How to do Minimalist Living in Akwa Ibom',
//                                 imgSrc: './img/news-and-stories-img/personal-growth/personal-growth-img-3.jpg',
//                                 excerpt: 'As a minimalist and daughter of the soil, if my answer is "No" to any of these questions, then I Let It Go and let GOD. I always ask myself these three (3) questions to guide my decision-making as a minimalist.'
//                             },
//                             {
//                                 date: '2/21/24',
//                                 author: 'Delight P',
//                                 title: 'Easy Self-Care Routines in Akwa Ibom',
//                                 imgSrc: './img/news-and-stories-img/personal-growth/personal-growth-img-4.jpg',
//                                 excerpt: 'In today’s article, allow us to open your eyes to the sweet sweet benefits and explore the self-care routines practiced by our Akwa Ibom brothers and sisters that continue to define better standards of living.'
//                             },
//                             {
//                                 date: '2/18/24',
//                                 author: 'Star-X',
//                                 title: '3 Tips To Survive The Heatwave in Akwa Ibom',
//                                 imgSrc: './img/news-and-stories-img/personal-growth/personal-growth-img-5.jpg',
//                                 excerpt: 'Ndito Eka, mbok you should exercise caution in this harmattan-induced heatwave due to the heightened risk of dehydration, heat-related illnesses, and discomfort. Practice staying well-hydrated, seeking shade…'
//                             },
//                             {
//                                 date: '2/16/24',
//                                 author: 'Amazing Oty',
//                                 title: 'Relationship Drama: 10 Ways to Heal (Ado-OK) From Heartbreak',
//                                 imgSrc: './img/news-and-stories-img/personal-growth/personal-growth-img-6.jpg',
//                                 excerpt: 'Are you feeling loved and pampered this week? Or are you sad from a recent heartbreak that affected the Valentine’s Day plans in your head? Break ups are tough but what is tougher is your choice of healing or…'
//                             },
//                             {
//                                 date: '2/7/24',
//                                 author: 'Amazing Oty',
//                                 title: 'Personal Growth: What it Means for us Akwa Ibom People',
//                                 imgSrc: './img/news-and-stories-img/personal-growth/personal-growth-img-7.jpg',
//                                 excerpt: 'In today’s article, we are sharing practical steps you can take today to become the person you envision in your future. It is the most common goal-setting model for its simplicity and ease of application.'
//                             }
//                         ].map((post, index) => (
//                             <div key={index} className="w-11/12 md:w-full flex md:p-4 flex-col gap-3 lg:w-1/3">
//                                 <div className="blog-img mb-4">
//                                     <a href="#">
//                                         <img src={post.imgSrc} className="img-fluid" alt={post.title} />
//                                     </a>
//                                 </div>
//                                 <div className="blog-detail">
//                                     <span className="text-gray-500">{post.date} <span className="dot">·</span> {post.author}</span>
//                                     <a href="#">
//                                         <h3 className="mt-4 mb-5 text-2xl sm:text-sm leading-10 sm:leading-[3rem] font-bold">{post.title}</h3>
//                                     </a>
//                                     <p className="mb-4">{post.excerpt}</p>
//                                     <a href="#" className="read-more text-blue-500">Read More</a>
//                                 </div>
//                             </div>
//                         ))}

//                     </div>
//                 </div>
//                 <Footer className="mt-24" />
//             </section>
//         </>
//     );
// };

// export default PersonalGrowth;