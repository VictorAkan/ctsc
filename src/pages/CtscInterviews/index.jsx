import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";

const InterviewCard = ({ image, title, date, author, shortDescription }) => (
    <div className="bg-[#d9d9d9] p-2 rounded-xl flex flex-col w-full md:w-full lg:w-1/3">
        <div className="bg-[#ccc] flex items-center justify-center rounded-t-xl">
            <img src={image} alt="" className="w-full rounded-t-xl" />
        </div>
        <div className="text-container p-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="mb-2">{shortDescription}</p>
            <div className="card-meta-data text-gray-600">
                <span className="date mr-8">{date}</span>
                <span className="italic">{author}</span>
            </div>
        </div>
    </div>
);

const CtscInterviews = () => {
    useScrollToTop();
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/story/interview/');
                setStories(response.data);
            } catch (error) {
                console.error('Error fetching stories:', error);
            }
        };

        fetchStories();
    }, []);

    return (
        <>
            <Header />
            <div className="min-h-[70vh] bg-center flex items-center justify-center text-white self-stretch bg-[url(/public/images/group_186.png)] bg-cover bg-no-repeat">
                <div className="text-center mt-7 md:mt-24">
                    <p className="text-center">ctsc interviews</p>
                    <h2 className="pb-2 text-4xl text-center">Tell us about you and your brand</h2>
                </div>
            </div>

            <section className="py-20 px-32 sm:px-6 bg-[#f8f5f5]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap grid grid-cols-3 md:grid-cols-1 justify-center gap-4" id="interviewsWrapper">
                        {stories.map((story, index) => (
                            <InterviewCard
                                key={story.story_id}
                                image={story.image}
                                title={story.topic}
                                date={new Date(story.created_at).toLocaleDateString()}
                                author={`${story.author.first_name} ${story.author.last_name}`}
                                shortDescription={story.short_description}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CtscInterviews;





// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import useScrollToTop from "../../hooks/useScrollToTop";

// const InterviewCard = ({ image, title, date, author, content }) => (
//     <div className="bg-[#d9d9d9] p-2 rounded-xl flex flex-col w-full md:w-full lg:w-1/3">
//         <div className="bg-[#ccc] flex items-center justify-center rounded-t-xl">
//             <img src={image} alt="" className="w-full rounded-t-xl" />
//         </div>
//         <div className="text-container p-4">
//             <h3 className="text-xl font-bold mb-2">{title}</h3>
//             <p className="mb-2">{content}</p>
//             <div className="card-meta-data text-gray-600">
//                 <span className="date mr-8">{date}</span>
//                 <span className="italic">{author}</span>
//             </div>
//         </div>
//     </div>
// );

// const CtscInterviews = () => {
//     useScrollToTop();

//     const stories = [
//         {
//             date: '3/8/24',
//             author: 'Glory J',
//             title: 'International Women\'s Day Exclusive Interview: Akwa-Ibom Women Inspiring Inclusion',
//             imgSrc: './img/news-and-stories-img/news-and-stories-img-5.jpg',
//             content: `Join us and get to know the CEO of Amazing Pot Kitchen as she agrees to give the CTSC crew an exclusive interview into her life as a public figure with a private life on this very International Women’s Day 2024. Her ability to balance business and personal life makes Ms. Francis an outstanding person in society.`
//         },
//         {
//             date: '3/8/24',
//             author: 'Glory J',
//             title: 'International Women\'s Day Exclusive Interview: Akwa-Ibom Women Inspiring Inclusion',
//             imgSrc: './img/news-and-stories-img/news-and-stories-img-9.jpg',
//             content: `Join us and get to know the CEO of Amazing Pot Kitchen as she agrees to give the CTSC crew an exclusive interview into her life as a public figure with a private life on this very International Women’s Day 2024. Her ability to balance business and personal life makes Ms. Francis an outstanding person in society.`
//         },
//         {
//             date: '3/8/24',
//             author: 'Glory J',
//             title: 'International Women\'s Day Exclusive Interview: Akwa-Ibom Women Inspiring Inclusion',
//             imgSrc: './img/news-and-stories-img/news-and-stories-img-13.jpg',
//             content: `Join us and get to know the CEO of Amazing Pot Kitchen as she agrees to give the CTSC crew an exclusive interview into her life as a public figure with a private life on this very International Women’s Day 2024. Her ability to balance business and personal life makes Ms. Francis an outstanding person in society.`
//         },
//     ];

//     return (
//         <>
//         <Header />
//             <div className="min-h-[70vh] bg-cover bg-center flex items-center justify-center text-white self-stretch bg-[url(/public/images/group_186.png)] bg-cover bg-no-repeat">
//                 <div className="text-center mt-7 md:mt-24">
//                     <p class="text-center">ctsc interviews</p>
//                     <h2 class="pb-2 text-4xl text-center">Tell us about you and your brand</h2>
//                 </div>
//             </div>

//             <section className="py-20 px-32 sm:px-6 bg-[#f8f5f5]">
//                 <div className="container mx-auto">
//                     <div className="flex flex-wrap grid grid-cols-3 md:grid-cols-1 justify-center gap-4" id="interviewsWrapper">
//                         {stories.map((story, index) => (
//                             <InterviewCard
//                                 key={index}
//                                 image={story.imgSrc}
//                                 title={story.title}
//                                 date={story.date}
//                                 author={story.author}
//                                 content={story.content}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </>
//     );
// };

// export default CtscInterviews;
