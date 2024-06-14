import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";
import axios from "axios";
import { format } from "date-fns";
// import hooks
import { useState, useEffect } from "react";

const ReadersCorner = () => {
    useScrollToTop();

    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await axios.get("https://crackingthestylecode.pythonanywhere.com/api/v1/anonymous-story/");
                console.log(response);
                setStories(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStories();
    }, []);

    return (
        <>
            <Header />
            <div className="min-h-[70vh] bg-cover bg-center flex items-center justify-center self-stretch bg-[url(/public/images/group_186.png)] bg-cover bg-no-repeat text-white">
                <div className="text-center mt-10 md:mt-24">
                    <h2 className="pb-2 text-5xl">Reader's Corner</h2>
                </div>
            </div>
            <div className="border-y border-black text-center my-4 py-4">
                All stories are anonymous, share yours today
                <a href="#" className="text-blue-500 ml-2">Share something</a>
            </div>

            <section className="py-20 px-32 sm:px-6 bg-[#d9d9d9]">
                <div className="container mx-auto">
                    {loading ? (
                        <div className="text-center">Loading...</div>
                    ) : error ? (
                        <div className="text-center text-red-500">Error: {error}</div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-1 justify-center gap-4" id="stories-wrapper">
                            {stories.map((story, index) => (
                                <div key={index} className="flex flex-col bg-[#f8f5f5] p-4 rounded-xl md:w-full lg:w-1/3">
                                    <div className="img-container flex-shrink-0 mb-4 md:mb-0">
                                        <img src={story.image} alt="" className="w-full h-auto rounded-xl" />
                                    </div>
                                    <div className="text-container flex-grow">
                                        <h3 className="text-xl font-bold mb-2">{story.topic}</h3>
                                        <p className="mb-2">{story.short_description}</p>
                                        <div className="card-meta-data text-gray-600">
                                            <span className="date mr-8">{format(new Date(story.created_at), 'PPP')}</span>
                                            <span className="italic">{story.author.first_name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ReadersCorner;



















// const ReadersCorner = () => {
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
//             imgSrc: './img/news-and-stories-img/news-and-stories-img-5.jpg',
//             content: `Join us and get to know the CEO of Amazing Pot Kitchen as she agrees to give the CTSC crew an exclusive interview into her life as a public figure with a private life on this very International Women’s Day 2024. Her ability to balance business and personal life makes Ms. Francis an outstanding person in society.`
//         },
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
//             imgSrc: './img/news-and-stories-img/news-and-stories-img-5.jpg',
//             content: `Join us and get to know the CEO of Amazing Pot Kitchen as she agrees to give the CTSC crew an exclusive interview into her life as a public figure with a private life on this very International Women’s Day 2024. Her ability to balance business and personal life makes Ms. Francis an outstanding person in society.`
//         },
//     ];

//     return (
//         <>
//         <Header />
//             <div className="min-h-[70vh] bg-cover bg-center flex items-center justify-center self-stretch bg-[url(/public/images/group_186.png)] bg-cover bg-no-repeat text-white">
//                 <div className="text-center mt-10 md:mt-24">
//                     <h2 className="pb-2 text-5xl">Reader's Corner</h2>
//                 </div>
//             </div>
//             <div className="border-y border-black text-center my-4 py-4">
//                 All stories are anonymous, share yours today
//                 <a href="#" className="text-blue-500 ml-2">Share something</a>
//             </div>

//             <section className="py-20 px-32 sm:px-6 bg-[#d9d9d9]">
//                 <div className="container mx-auto">
//                     <div className="grid grid-cols-2 md:grid-cols-1 justify-center gap-4" id="stories-wrapper">
//                         {stories.map((story, index) => (
//                             <div key={index} className="flex flex-col md:flex-row bg-[#f8f5f5] p-4 rounded-xl md:w-full lg:w-1/3">
//                                 <div className="img-container flex-shrink-0 mb-4 md:mb-0">
//                                     <img src={story.imgSrc} alt="" className="w-full h-auto rounded-xl" />
//                                 </div>
//                                 <div className="text-container flex-grow">
//                                     <h3 className="text-xl font-bold mb-2">{story.title}</h3>
//                                     <p className="mb-2">{story.content}</p>
//                                     <div className="card-meta-data text-gray-600">
//                                         <span className="date mr-8">{story.date}</span>
//                                         <span className="italic">{story.author}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </>
//     );
// };

// export default ReadersCorner;
