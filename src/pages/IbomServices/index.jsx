import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { Text } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

export default function IbomServicesPage() {
    useScrollToTop();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/service/');
                console.log(response.data.results);
                setData(response.data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <>
            <Helmet>
                <title>CTSC</title>
                <meta name="description" content="web site created by Victor Ikurekong" />
            </Helmet>
            <div className="w-full bg-[#ffffff]">
                <div className="flex flex-col gap-[7.06rem] md:gap-[5.25rem] sm:gap-[3.50rem]">
                    <div className="flex flex-col items-center">
                        <div className="self-stretch">
                            <div className="flex flex-col items-center">
                                <Header className="self-stretch" />
                            </div>
                            <div className="mt-[-0.56rem] flex flex-col items-center justify-center bg-[#d8d7ff] pb-[13.88rem] pt-[8.00rem] md:py-[1.25rem]">
                                <div className="container-xs flex flex-col mt-24 md:p-[1.25rem] md:px-[1.25rem]">
                                    <Text
                                        size="27xl"
                                        as="p"
                                        className="sm:text-[2.00rem] text-center !font-medium !text-[#000000] md:mr-0 md:flex items-center md:justify-center"
                                    >
                                        IBOM SERVICES
                                    </Text>
                                    <Text className="text-center text-black">
                                        Find Services Near You
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className="container-xs relative mt-[-9.63rem] md:flex md:justify-center md:p-[1.25rem] md:pl-[1.25rem] sm:px-[1.25rem]">
                            <div className="grid grid-cols-3 justify-center gap-[3.25rem] rounded-[69px] bg-gray-100 pb-[47.00rem] px-32 pt-[7.94rem] md:mt-[200px] md:grid-cols-2 sm:grid-cols-1 md:items-center md:p-[1.25rem] sm:gap-5">
                                {data.map((d, index) => (
                                    <Link to={`/ibomservices/${d.id}`} key={"ibomservices" + index}>
                                        <div
                                            className="flex w-full justify-center rounded-[37px] bg-[#f8e1e1] pb-[5.75rem] pl-[2.88rem] pr-[3.50rem] pt-[5.69rem] md:p-[1.25rem]"
                                        >
                                            <Text size="19xl" as="p" className="text-[2.31rem] !text-[#000000]">
                                                {d.service_name}
                                            </Text>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}





// import { Helmet } from "react-helmet";
// import { Text } from "../../components";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import { Link } from "react-router-dom";

// // import scrolltotop hook
// import useScrollToTop from "../../hooks/useScrollToTop";

// const data = [
//     { plumber: "Plumber" },
//     { plumber: "Electrician" },
//     { plumber: "Barber" },
//     { plumber: "Laundry" },
//     { plumber: "Fumigation" },
//     { plumber: "Plumber" },
// ];

// export default function IbomServicesPage() {
//     useScrollToTop();
    
//     return (
//         <>
//             <Helmet>
//                 <title>CTSC</title>
//                 <meta name="description" content="web site created by Victor Ikurekong" />
//             </Helmet>
//             <div className="w-full bg-[#ffffff]">
//                 <div className="flex flex-col gap-[7.06rem] md:gap-[5.25rem] sm:gap-[3.50rem]">
//                     <div className="flex flex-col items-center">
//                         <div className="self-stretch">
//                             <div className="flex flex-col items-center">
//                                 <Header className="self-stretch" />
//                                 {/* <div className="container-xs relative mt-[-1.13rem] flex flex-col items-center pl-[50.69rem] pr-[22.81rem] md:mb-[-50px] md:p-[1.25rem] md:px-[1.25rem]">
//                                     <a href="#" className="text-[#0000007c] 5px 5px text-shadow-[4px] flex">
//                                         <Text size="9xl" as="p" className="!font-['Inter']">
//                                             Ibom Events
//                                         </Text>
//                                     </a>
//                                 </div> */}
//                             </div>
//                             <div className="mt-[-0.56rem] flex flex-col items-center justify-center bg-[#d8d7ff] pb-[13.88rem] pt-[8.00rem] md:py-[1.25rem]">
//                                 <div className="container-xs flex flex-col mt-24 md:p-[1.25rem] md:px-[1.25rem]">
//                                     <Text
//                                         size="27xl"
//                                         as="p"
//                                         className="sm:text-[2.00rem] text-center !font-medium !text-[#000000] md:mr-0 md:flex items-center md:justify-center"
//                                     >
//                                         IBOM SERVICES
//                                     </Text>
//                                     <Text className="text-center text-black">
//                                         Find Services Near You
//                                     </Text>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="container-xs relative mt-[-9.63rem] md:flex md:justify-center md:p-[1.25rem] md:pl-[1.25rem] sm:px-[1.25rem]">
//                             <div className="grid grid-cols-3 justify-center gap-[3.25rem] rounded-[69px] bg-[#d2d2d2] pb-[47.00rem] px-32 pt-[7.94rem] md:mt-[200px] md:grid-cols-2 sm:grid-cols-1 md:items-center md:p-[1.25rem] sm:gap-5">
//                                 {data.map((d, index) => (
//                                     <a href="https://www.youtube.com/embed/bv8Fxkesz71" target="_blank">
//                                         <div
//                                             key={"ibomservices" + index}
//                                             className="flex w-full justify-center rounded-[37px] bg-[#fcf5f5] pb-[5.75rem] pl-[2.88rem] pr-[3.50rem] pt-[5.69rem] md:p-[1.25rem]"
//                                         >
//                                             <Link to="/ibomservicesone">
//                                             <Text size="19xl" as="p" className="text-[2.31rem] !text-[#000000]">
//                                                 {d.plumber}
//                                             </Text>
//                                             </Link>
//                                         </div>
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     <Footer />
//                 </div>
//             </div>
//         </>
//     );
// }