import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";
import Aos from "aos";
import "aos/dist/aos.css";

const teamMembers = [
    {
        name: 'Ima Sefanang',
        description: `A key strength of mine is maintaining consistency in writing
                    style and tone, ensuring a cohesive and professional feel
                    throughout the magazine. This contributes to a strong and
                    unified brand image.`,
        imgSrc: 'images/rect_361_1.png',
    },
    {
        name: 'Vicky Jonah',
        description: `Being proficient in multiple languages, I can contribute to
                    expanding the magazine's reach by creating content that
                    resonates with a broader and more diverse audience.`,
        imgSrc: 'images/rect_361_2.png',
    },
    {
        name: 'Andiyangha Udosen',
        description: `I bring a strong passion for creating compelling and diverse
                    content, including articles, interviews, and reviews. My goal is
                    to contribute to the magazine's success by producing engaging
                    and informative pieces.`,
        imgSrc: 'images/rect_361_3.png',
    },
];

const CtscTeam = () => {
    useScrollToTop();

    Aos.init({
        duration: 1800,
        offset: 0,
    })

    return (
        <>
        <Header />
        <section className="bg-[aliceblue]">
            <div data-aos="fade-up" className="container mx-auto text-center py-10">
                <h1 className="text-3xl mt-24 md:mt-32 font-bold">Meet Our Team</h1>
                <br />
                <h2 className="text-2xl">(CTSC ENGINES)</h2>
            </div>

            <div className="container mx-auto px-24 sm:px-7 grid grid-cols-3 md:grid-cols-1 gap-4">
                {teamMembers.map((member, index) => (
                    <div data-aos="zoom-in-up" key={index} className="card h-full flex flex-col items-center bg-white border-none shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={member.imgSrc}
                            alt={`${member.name}`}
                            className="w-80 h-80 rounded-full object-cover mt-4"
                        />
                        <div className="card-body p-4 text-center bg-aliceblue">
                            <h5 className="text-xl font-bold mb-2">{member.name}</h5>
                            <p className="text-sm">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="container mx-auto my-16">
                <figure data-aos="fade-up" className="mx-auto text-center max-w-xl">
                    <blockquote className="text-lg font-medium">
                        “Two are better than one because they have a good return for their
                        labor: If either of them falls down, one can help the other up. But
                        pity anyone who falls and has no one to help them up.”
                    </blockquote>
                    <figcaption className="mt-4 text-xl font-semibold">
                        BIBLE <cite title="source-title"></cite>
                    </figcaption>
                </figure>
            </div>
            <Footer />
        </section>
        </>
    );
};

export default CtscTeam;
