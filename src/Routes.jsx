import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import MkpoNnyin from "./pages/MkpoNnyin";
import IbomEvents from "./pages/IbomEvents";
import IbomServices from "./pages/IbomServices";
import IbomServicesOne from "./pages/IbomServicesOne";
import IbomServicesTwo from "./pages/IbomServicesTwo";
import Jobspage from "./pages/Jobspage";
import JobspageOne from "./pages/JobspageOne";
import JobspageTwo from "./pages/JobspageTwo";
import IbomPartners from "./pages/IbomPartners";
import IbomPartnersOne from "./pages/IbomPartnersOne";
import Signup from "./pages/Signup";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <HomePage /> },
        { path: "*", element: <NotFound /> },
        // {
        //     path: "desktopone",
        //     element: <HomePage />,
        // },
        {
            path: "/mkponnyin",
            element: <MkpoNnyin />,
        },
        {
            path: "/ibomevents",
            element: <IbomEvents />,
        },
        {
            path: "/ibomservices",
            element: <IbomServices />,
        },
        {
            path: "/ibomservicesone",
            element: <IbomServicesOne />,
        },
        {
            path: "/ibomservicestwo",
            element: <IbomServicesTwo />,
        },
        {
            path: "/jobspage",
            element: <Jobspage />,
        },
        {
            path: "/jobspageone",
            element: <JobspageOne />,
        },
        {
            path: "/jobspagetwo",
            element: <JobspageTwo />,
        },
        {
            path: "/ibompartners",
            element: <IbomPartners />,
        },
        {
            path: "/ibompartnersone",
            element: <IbomPartnersOne />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
    ]);

    return element;
};


export default ProjectRoutes;