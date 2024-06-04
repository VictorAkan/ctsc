import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";

// import Loader
import {Loader} from "../../Loader";

const CultureCard = ({ imgSrc, date, author, title, description }) => {
    return (
        <div className="flex flex-col gap-4 bg-gray-100 p-2 rounded-lg flex-basis-1/3">
            <div className="w-80 h-full sm:w-full max-w-full bg-gray-300 flex items-center justify-center">
                <img src={imgSrc} alt={title} className="block mx-auto aspect-square rounded-lg object-cover" />
            </div>
            <div className="text-container">
                <div className="mb-4">
                    <span className="mr-12">{date}</span>
                    <span className="italic">{author}</span>
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="my-2">{description}</p>
                <a href="#" className="relative btn p-0 inline-block">
                    Read more
                    <span className="absolute inset-x-0 bottom-[-5px] mx-auto border-b border-black"></span>
                </a>
            </div>
        </div>
    );
};

const OurCulture = () => {
    useScrollToTop();
    const [cultureData, setCultureData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCultureData = async () => {
            try {
                const response = await axios.get("https://crackingthestylecode.pythonanywhere.com/api/v1/story/culture/");
                setCultureData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchCultureData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error loading data: {error.message}</p>;
    }

    return (
        <>
            <Header />
            <section className="py-20 h-full mb-32 px-32 sm:px-6 bg-gray-300">
                <div className="container mt-24 mx-auto flex flex-wrap gap-4 justify-center items-center" id="interviewCards">
                    {cultureData.map((item) => (
                        <CultureCard
                            key={item.id}
                            imgSrc={item.imgSrc}
                            date={item.date}
                            author={item.author}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default OurCulture;






// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import useScrollToTop from "../../hooks/useScrollToTop";

// const CultureCard = ({ imgSrc, date, author, title, description }) => {
//     return (
//         <div className="flex flex-col gap-4 bg-gray-100 p-2 rounded-lg flex-basis-1/3">
//             <div className="w-80 h-full sm:w-full max-w-full bg-gray-300 flex items-center justify-center">
//                 <img src={imgSrc} alt={title} className="block mx-auto aspect-square rounded-lg object-cover" />
//             </div>
//             <div className="text-container">
//                 <div className="mb-4">
//                     <span className="mr-12">{date}</span>
//                     <span className="italic">{author}</span>
//                 </div>
//                 <h3 className="text-lg font-bold">{title}</h3>
//                 <p className="my-2">{description}</p>
//                 <a href="#" className="relative btn p-0 inline-block">
//                     Read more
//                     <span className="absolute inset-x-0 bottom-[-5px] mx-auto border-b border-black"></span>
//                 </a>
//             </div>
//         </div>
//     );
// };

// const OurCulture = () => {
//     useScrollToTop();
    
//     return (
//         <>
//         <Header />
//         <section className="py-20 h-full px-32 sm:px-6 bg-gray-300">
//             <div className="container mt-24 mx-auto flex flex-wrap gap-4 justify-center items-center" id="interviewCards">
//                 <CultureCard 
//                     imgSrc="./img/news-and-stories-img/news-and-stories-img-5.jpg"
//                     date="3/8/24"
//                     author="Glory J"
//                     title="International Women's Day Exclusive Interview: Akwa-Ibom Women Inspiring Inclusion"
//                     description="Join us and get to know the CEO of Amazing Pot Kitchen as she agrees to give the CTSC crew an exclusive interview into her life as a public figure with a private life on this very International Women’s Day 2024. Her ability to balance business and personal life makes Ms. Francis an outstanding person in society."
//                 />
//             </div>
//         </section>
//         <Footer />
//         </>
//     );
// };

// export default OurCulture;