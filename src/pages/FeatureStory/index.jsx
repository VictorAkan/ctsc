import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Img } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";

const Story = () => {
    useScrollToTop();

    const [story, setStory] = useState(null);
    const [previousStories, setPreviousStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const featureResponse = await axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/story/feature-story/');
                setStory(featureResponse.data[0]);

                const previousResponse = await axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/story/previously-featured-stories/');
                setPreviousStories(previousResponse.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchStories();
    }, []);

    return (
        <>
            <Header />
            <div className="container mx-auto px-10">
                {/* Feature Story */}
                <div className="pt-20">
                    <h1 className="text-center mt-24 text-4xl sm:text-2xl font-bold text-gray-800">
                        Featured Story
                    </h1>
                    <ul className="list-inline text-center mt-4">
                        <li className="inline-block text-gray-800">Feature Story</li>
                        <li className="inline-block text-gray-800 ml-4">
                            {story && new Date(story.created_at).toLocaleDateString()}
                        </li>
                    </ul>

                    {loading && <p className="mt-5 text-gray-800">Loading...</p>}
                    {error && <p className="mt-5 text-red-500">Error: {error.message}</p>}
                    {story && (
                        <div className="justify-center items-center">
                            <Img src={story.image} alt={story.topic} className="mt-5 justify-center ml-[20rem] md:ml-0" />
                            <p className="mt-5 text-gray-800">{story.short_description}</p>
                            <p className="mt-5 text-gray-800">
                                {/* By {story.author.first_name} {story.author.last_name} */}
                            </p>
                        </div>
                    )}
                </div>

                {/* Previously Featured Stories */}
                <div className="pt-20">
                    <h2 className="text-2xl font-semibold text-gray-800">Previously Featured Stories</h2>
                    {loading && <p className="mt-5 text-gray-800">Loading...</p>}
                    {error && <p className="mt-5 text-red-500">Error: {error.message}</p>}
                    {previousStories.length > 0 ? (
                        <ul className="mt-5 text-gray-800">
                            {previousStories.map((prevStory) => (
                                <li key={prevStory.story_id} className="mt-4">
                                    <h3 className="text-xl font-bold">{prevStory.topic}</h3>
                                    <img src={prevStory.image} alt={prevStory.topic} className="mt-2" />
                                    <p>{prevStory.short_description}</p>
                                    <p>{prevStory.body}</p>
                                    {prevStory.author.first_name && (
                                        <p>
                                            By {prevStory?.author?.first_name} {prevStory?.author?.last_name}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-5 text-gray-800">No previously featured stories available.</p>
                    )}
                </div>

                {/* Comment Section */}
                <div className="pt-20">
                    <h3 className="text-2xl font-semibold text-gray-800">Comments (0)</h3>

                    <form action="" className="relative mt-5">
                        <div className="relative">
                            <textarea
                                className="w-full p-4 border bg-[#d9d9d9] border-gray-300 rounded-lg h-52"
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                            ></textarea>
                            <label
                                htmlFor="floatingTextarea2"
                                className="absolute top-0 left-0 ml-4 mt-4 text-gray-500"
                            >
                                {/* Comments */}
                            </label>
                        </div>
                        <div className="mt-5 flex justify-end space-x-4">
                            <a href="#" className="text-gray-800">
                                Preview...
                            </a>
                            <Button
                                type="submit"
                                className="px-6 py-2 bg-[#253451] text-white rounded-lg"
                            >
                                Post Comment...
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Navigation */}
                {/* <div className="pt-20">
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                        <div className="flex justify-center">
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                        <div className="flex justify-center">
                            <a href="./feature-story.html" className="text-gray-800 text-center">
                                <h4>
                                    Featured Story
                                </h4>
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="./previous-stories.html" className="text-gray-800 text-center">
                                <h4>Previously Featured Stories</h4>
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer className="mt-32" />
        </>
    );
};

export default Story;



// import { Button } from "../../components";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import useScrollToTop from "../../hooks/useScrollToTop";

// const AutismAwareness = () => {
//     useScrollToTop();

//     return (
//         <>
//         <Header />
//         <div className="container mx-auto px-10">
//             {/* Autism Awareness Designs */}
//             <div className="pt-20">
//                 <h1 className="text-center mt-24 text-4xl sm:text-2xl font-bold text-gray-800">
//                     Autism Awareness Month: Sampling Readers' Opinion on Autism
//                 </h1>
//                 <ul className="list-inline text-center mt-4">
//                     <li className="inline-block text-gray-800">Feature Story</li>
//                     <li className="inline-block text-gray-800 ml-4">April 8</li>
//                 </ul>

//                 <p className="mt-5 text-gray-800">Dear wonderful readers,</p>
//                 <p className="mt-5 text-gray-800">
//                     Welcome to Friday! The only night for a deliberate long night of
//                     sleep. Apologies, if you must work on Saturday.
//                 </p>
//                 <p className="text-gray-800">
//                     Today, we want to discuss a topic with you that is dear to our hearts
//                     at CTSC - Autism Awareness. At CTSC, we are keen on sharing
//                     information with our Akwa-Ibom brothers and sisters to open your eyes.
//                 </p>
//                 <p className="mt-4 text-gray-800">
//                     The <b>eyes</b> of your <b>understanding</b> being enlightened;
//                     …Ephesians1:18
//                 </p>
//                 <p className="text-gray-800">
//                     Although April is called autism awareness month, April 2nd is
//                     dedicated to celebrating the awareness of autism.
//                 </p>

//                 {/* Autism Day */}
//                 <h2 className="mt-12 text-2xl font-semibold text-gray-800">
//                     April 2nd - Autism Awareness Day
//                 </h2>

//                 <p className="mt-5 text-gray-800">
//                     This day is intentionally set aside to recognize autistic individuals
//                     in our societies. Internationally, April 2nd encourages people to take
//                     measures and consciously raise awareness about autistic individuals.
//                 </p>

//                 <p className="mt-5 text-gray-800">
//                     Designated by the United Nations; however adopted in 2007 and
//                     celebrated in 2008.
//                 </p>
//                 <p className="mt-5 text-gray-800">
//                     The theme for this year's autism awareness day centered around
//                     'Empowering Autistic Voice', aimed at providing greater support and
//                     empowerment for individuals with autism to lead meaningful lives and
//                     pursue successful careers. The symbol associated with World Autism Day
//                     is a Multi-Colored Puzzle Piece Ribbon, created collaboratively by 15
//                     individuals, including some with autism and others advocating for the
//                     disorder.
//                 </p>
//             </div>

//             {/* What is Autism */}
//             <div className="pt-20">
//                 <h2 className="text-2xl font-semibold text-gray-800">What is Autism?</h2>

//                 <p className="mt-5 text-gray-800">
//                     Autism, or autism spectrum disorder (ASD), is a serious developmental
//                     condition affecting communication and social interaction abilities.
//                     ASD is characterized by differences in brain development, leading to
//                     unique behaviors such as overreacting to stimuli, difficulty
//                     understanding others' emotions, sensitivity to sounds, and repetitive
//                     behaviors.
//                 </p>
//                 <p className="mt-5 italic text-gray-800">
//                     Lack of awareness about autism can lead misunderstanding and
//                     mistreatment, as individuals may mistakenly attribute behaviors to
//                     intentional misbehavior rather than recognizing them as symptoms of
//                     autism.
//                 </p>
//             </div>

//             {/* When Does Autism Occur? */}
//             <div className="pt-20">
//                 <h2 className="text-2xl font-semibold text-gray-800">When Does Autism Occur?</h2>

//                 <p className="mt-5 text-gray-800">
//                     Autism spectrum disorder typically begins before the age of three (3)
//                     and may persist throughout life, with symptoms often appearing within
//                     the first 12 to 24 months. Adolescents and young adults with autism
//                     may struggle with social interactions, communication, and
//                     understanding appropriate behavior, often requiring support from
//                     healthcare providers due to co-occurring conditions like anxiety or
//                     depression.
//                 </p>
//                 <p className="mt-5 text-gray-800">
//                     This is one of the major reasons why every individual in the world
//                     needs to have an idea of autism. Due to ignorance, some parents,
//                     teachers, and adults have severely punished autistic children
//                     struggling with tasks like math or reading. Lacking the understanding
//                     of autism and the appropriate treatment is not cute or an excuse in
//                     2024 anymore.
//                 </p>
//             </div>

//             {/* Autism in Akwa-Ibom */}
//             <div className="pt-20">
//                 <h2 className="text-2xl font-semibold text-gray-800">Autism in Akwa-Ibom</h2>

//                 <p className="mt-5 text-gray-800">
//                     Today, at Cracking the Style Code, we asked members of our society
//                     what they know about autism. This survey explores the progress made in
//                     raising awareness about autism since its inception. Autism awareness
//                     isn't for medical professionals alone, understanding autism is
//                     essential for everyone in our society.
//                 </p>
//                 <p className="mt-5 text-gray-800">
//                     Unfortunately, many people had zero knowledge about autism. Some
//                     mentioned never having heard of autism before, while others were
//                     unsure of its meaning. Only two individuals provided detailed
//                     explanations of what they believe autism means.
//                 </p>
//                 <p className="mt-5 text-gray-800">
//                     Survey Question: What does autism mean to you?
//                 </p>
//                 <hr className="mt-10 border-gray-300" />
//             </div>

//             <div className="pt-20">
//                 <p className="mt-5 text-gray-800 font-semibold">Utit Daramfon</p>
//                 <p className="mt-2 text-gray-800">
//                     I think that autism is a disease that makes people not understand
//                     themselves or their surroundings. They behave strangely to the people
//                     around them and this behavior is not usually intentional.
//                 </p>
//                 <p className="mt-2 text-gray-800">
//                     Autistic people tut or make ticking sounds sometimes to keep
//                     themselves busy. I saw a video of an autistic girl and she scratches
//                     and beats herself often. She is unable to control these actions even
//                     if they hurt her. She also uses vulgar words when she speaks with
//                     people around her. In that video, the people around the girl did not
//                     act negatively to her behavior because they know she is autistic.
//                 </p>
//                 <p className="mt-5 text-gray-800 font-semibold">Amarachukwu Favour</p>
//                 <p className="mt-2 text-gray-800">
//                     I think that autism is a disease that makes people behave as if they
//                     have a mental disorder. It is a defect in the brain that affects a
//                     person’s behavior. They are not mentally impaired, but they sometimes
//                     exhibit the behavior of a mentally unstable person because they
//                     usually seem to create and live in their world. I used to have a
//                     classmate who behaved this way. He always did things differently to
//                     others - making a sound that was not rhythmical with his pen—other
//                     times, hallucinating and conversing with someone that isn’t present.
//                     Initially, I never knew what such behavior was called. It was after I
//                     described my classmate to a friend that my friend told me about
//                     autism. Apart from this, they usually suffer from depression and
//                     loneliness, and they think low of themselves.
//                 </p>
//             </div>

//             <div className="pt-20">
//                 <h2 className="text-2xl font-semibold text-gray-800">What Can You Do?</h2>

//                 <p className="mt-5 text-gray-800">
//                     From the street conversations we had with Akwa-Ibom people, it simply means that more awareness campaigns need
//                     to be carried out to get people to know about autism, and how autistic people should be better treated.
//                 </p>

//                 <p className="text-gray-800">
//                     Share this article on your social media, it will help someone out there.
//                 </p>

//                 <ul className="list-inline text-start mt-4">
//                     <li className="inline-block text-gray-800">Feature Story |</li>
//                     <li className="inline-block text-gray-800 ml-4">Autism</li>
//                 </ul>
//             </div>

//             {/* Comment Section */}
//             <div className="pt-20">
//                 <h3 className="text-2xl font-semibold text-gray-800">Comments (0)</h3>

//                 <form action="" className="relative mt-5">
//                     <div className="relative">
//                         <textarea
//                             className="w-full p-4 border bg-[#d9d9d9] border-gray-300 rounded-lg h-52"
//                             placeholder="Leave a comment here"
//                             id="floatingTextarea2"
//                         ></textarea>
//                         <label
//                             htmlFor="floatingTextarea2"
//                             className="absolute top-0 left-0 ml-4 mt-4 text-gray-500"
//                         >
//                             {/* Comments */}
//                         </label>
//                     </div>
//                     <div className="mt-5 flex justify-end space-x-4">
//                         <a href="#" className="text-gray-800">
//                             Preview...
//                         </a>
//                         <Button
//                             type="submit"
//                             className="px-6 py-2 bg-[#253451] text-white rounded-lg"
//                         >
//                             Post Comment...
//                         </Button>
//                     </div>
//                 </form>
//             </div>

//             <div className="pt-20">
//                 <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
//                     <div className="flex justify-center">
//                         <i className="fa-solid fa-chevron-left"></i>
//                     </div>
//                     <div className="flex justify-center">
//                         <a href="./Autism.html" className="text-gray-800 text-center">
//                             <h4>
//                                 Autism Awareness Month: <br />
//                                 Sampling Readers' Opinion on Autism
//                             </h4>
//                         </a>
//                     </div>
//                     <div className="flex justify-center">
//                         <a href="./first-ever-research.html" className="text-gray-800 text-center">
//                             <h4>First-ever CTSC Community Relief Outreach in Akwa-Ibom</h4>
//                         </a>
//                     </div>
//                     <div className="flex justify-center">
//                         <i className="fa-solid fa-chevron-right"></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <Footer />
//         </>
//     );
// };

// export default AutismAwareness;
