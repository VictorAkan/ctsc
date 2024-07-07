import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function GalleryPage() {
    const [uploads, setUploads] = useState([]);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const savedUploads = localStorage.getItem('uploads');
        if (savedUploads) {
            const parsedUploads = JSON.parse(savedUploads);
            setUploads(parsedUploads);
            setImages(parsedUploads.filter(upload => upload.type === 'image'));
            setVideos(parsedUploads.filter(upload => upload.type === 'video'));
        }
    }, []);

    const renderVideo = (upload, index) => (
        <div key={index} className="media relative group mb-7 sm:mb-24">
            <video src={upload.url} controls className="w-[40rem] h-full rounded-lg" />
            <div className="media-description absolute bottom-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/50 to-transparent p-4 rounded-lg shadow-md">
                <p className="text-white text-lg font-medium">{upload.description}</p>
            </div>
        </div>
    );

    const renderImage = (upload, index) => (
        <div key={index} className="media relative group mb-7 sm:mb-24">
            <img src={upload.url} alt={upload.name} className="object-cover w-[40rem] md:w-full md:h-full h-[30rem] rounded-lg" />
            <div className="media-description absolute bottom-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/50 to-transparent p-4 rounded-lg shadow-md">
                <p className="text-white text-lg font-medium">{upload.description}</p>
            </div>
        </div>
    );

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-100 p-6 px-[7rem] sm:px-5">
                <header className="bg-[#253451] text-white mt-24 sm:mt-32 flex items-center justify-center gap-5 p-4 rounded">
                    <img src="images/ctsf-logo.png" alt="ctsf logo" className='w-10' />
                    <h1 className="text-3xl font-bold">Outreach Gallery</h1>
                </header>
                <main className="mt-6">
                    <section className="mb-6">
                        <p className="text-lg text-gray-700">
                            At CTSF, our mission is rooted in a commitment to the service and empowerment of individuals and communities. These photos and videos tell the stories of all our outreaches.
                        </p>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Images</h2>
                        {images.length === 0 ? (
                            <p className="text-gray-500">No outreach images yet.</p>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
                                {images.map(renderImage)}
                            </div>
                        )}
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Videos</h2>
                        {videos.length === 0 ? (
                            <p className="text-gray-500">No outreach videos yet.</p>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
                                {videos.map(renderVideo)}
                            </div>
                        )}
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default GalleryPage;


// import React, { useEffect, useState } from 'react';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// function GalleryPage() {
//     const [uploads, setUploads] = useState([]);
//     const [images, setImages] = useState([]);
//     const [videos, setVideos] = useState([]);

//     useEffect(() => {
//         const savedUploads = localStorage.getItem('uploads');
//         if (savedUploads) {
//             const parsedUploads = JSON.parse(savedUploads);
//             setUploads(parsedUploads);
//             setImages(parsedUploads.filter(upload => upload.type === 'image'));
//             setVideos(parsedUploads.filter(upload => upload.type === 'video'));
//         }
//     }, []);

//     const renderVideo = (upload, index) => {
//         return (
//             <div key={index} className="relative group mb-7 sm:mb-24">
//                 <video src={upload.url} controls className="w-[40rem] h-full rounded-lg">
//                     {/* <source src={upload.url} type={upload.type} /> */}
//                     Your browser does not support the video tag.
//                 </video>
//                 <p className="mt-2 text-gray-700">{upload.description}</p>
//             </div>
//         );
//     };

//     return (
//         <>
//             <Header />
//             <div className="min-h-screen bg-gray-100 p-6 px-[7rem] sm:px-5">
//                 <header className="bg-[#253451] text-white mt-24 sm:mt-32 flex items-center justify-center gap-5 p-4 rounded">
//                     <img src="images/ctsf-logo.png" alt="ctsf logo" className='w-10' />
//                     <h1 className="text-3xl font-bold">Outreach Gallery</h1>
//                 </header>
//                 <main className="mt-6">
//                     <section className="mb-6">
//                         <p className="text-lg text-gray-700">
//                             At CTSF, our mission is rooted in a commitment to the service and empowerment of individuals and communities. These photos and videos tell the stories of all our outreaches.
//                         </p>
//                     </section>
//                     <section className="mb-6">
//                         <h2 className="text-2xl font-semibold mb-4">Images</h2>
//                         {images.length === 0 ? (
//                             <p className="text-gray-500">No outreach images yet.</p>
//                         ) : (
//                             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
//                                 {images.map((upload, index) => (
//                                     <div key={index} className="relative group mb-7 sm:mb-24">
//                                         <img src={upload.url} alt={upload.name} className="object-cover w-[40rem] md:w-full md:h-full h-[30rem] rounded-lg" />
//                                         <p className="mt-2 text-gray-700">{upload.description}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </section>
//                     <section>
//                         <h2 className="text-2xl font-semibold mb-4">Videos</h2>
//                         {videos.length === 0 ? (
//                             <p className="text-gray-500">No outreach videos yet.</p>
//                         ) : (
//                             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
//                                 {videos.map(renderVideo)}
//                             </div>
//                         )}
//                     </section>
//                 </main>
//             </div>
//         </>
//     );
// }

// export default GalleryPage;
