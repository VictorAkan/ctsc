import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";
import Aos from "aos";
import "aos/dist/aos.css";

const CtscTeam = () => {
    useScrollToTop();

    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 0,
        });

        const fetchTeamMembers = async () => {
            try {
                const response = await axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/team-members/');
                setTeamMembers(response.data);
            } catch (error) {
                console.error("Error fetching the team members:", error);
            }
        };

        fetchTeamMembers();
    }, []);

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
                {teamMembers.map((member) => (
                    <div data-aos="zoom-in-up" key={member.id} className="card h-full flex flex-col items-center bg-white border-none shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={member.profile_image}
                            alt={`${member.first_name} ${member.last_name}`}
                            className="w-80 h-80 rounded-full object-cover mt-4"
                        />
                        <div className="card-body p-4 text-center bg-aliceblue">
                            <h5 className="text-xl font-bold mb-2">{member.first_name} {member.last_name}</h5>
                            <p className="text-sm">{member.about}</p>
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

