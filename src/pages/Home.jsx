import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
            <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
            <p style={{ fontSize: "18px", marginBottom: "30px" }}>
                
                · Quickly use below links to navigate through all pages.
            </p>
            <ul style={{ liststyle: "none", padding: "0" }}>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/desktopone" style={{ color: "#87CEFA", textDecoration: "none" }}> DesktopOne
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/mkponnyin" style={{ color: "#87CEFA", textDecoration: "none" }}> MkpoNnyin
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/ibomevents" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        IbomEvents
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/ibomservices" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        IbomServices
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/ibomservicesone" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        IbomServicesOne
                    </Link>
                </li>

                <li style={{ marginBottom: "10px" }}>
                    <Link to="/ibomservicestwo" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        IbomServicesTwo
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/jobspage" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        Jobspage
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/jobspageone" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        JobspageOne
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/jobspagetwo" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        JobspageTwo
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/ibompartners" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        IbomPartners
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/ibompartnersone" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        IbomPartnersOne
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/signup" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        Signup
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;