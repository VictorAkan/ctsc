import { useRoutes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import React, { Suspense } from "react";

// Wrap components in lazy imports
const HomePageLazy = React.lazy(() => import("./pages/HomePage"));
const MkpoNnyinLazy = React.lazy(() => import("./pages/MkpoNnyin"));
const IbomEventsLazy = React.lazy(() => import("./pages/IbomEvents"));
const IbomServicesLazy = React.lazy(() => import("./pages/IbomServices"));
const IbomServicesOneLazy = React.lazy(() => import("./pages/IbomServicesOne"));
const IbomServicesTwoLazy = React.lazy(() => import("./pages/IbomServicesTwo"));
const JobspageLazy = React.lazy(() => import("./pages/Jobspage"));
const JobspageOneLazy = React.lazy(() => import("./pages/JobspageOne"));
const JobspageTwoLazy = React.lazy(() => import("./pages/JobspageTwo"));
const IbomPartnersLazy = React.lazy(() => import("./pages/IbomPartners"));
const IbomPartnersOneLazy = React.lazy(() => import("./pages/IbomPartnersOne"));
const SignupLazy = React.lazy(() => import("./pages/Signup"));

const ProjectRoutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <HomePageLazy />
                </Suspense>
            ),
        }, // Home with Suspense
        { path: "*", element: <NotFound /> },
        {
            path: "/mkponnyin",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <MkpoNnyinLazy />
                </Suspense>
            ),
        },
        {
            path: "/ibomevents",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <IbomEventsLazy />
                </Suspense>
            ),
        },
        {
            path: "/ibomservices",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <IbomServicesLazy />
                </Suspense>
            ),
        },
        {
            path: "/ibomservicesone",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <IbomServicesOneLazy />
                </Suspense>
            ),
        },
        {
            path: "/ibomservicestwo",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <IbomServicesTwoLazy />
                </Suspense>
            ),
        },
        {
            path: "/jobspage",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <JobspageLazy />
                </Suspense>
            ),
        },
        {
            path: "/jobspageone",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <JobspageOneLazy />
                </Suspense>
            ),
        },
        {
            path: "/jobspagetwo",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <JobspageTwoLazy />
                </Suspense>
            ),
        },
        {
            path: "/ibompartners",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <IbomPartnersLazy />
                </Suspense>
            ),
        },
        {
            path: "/ibompartnersone",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <IbomPartnersOneLazy />
                </Suspense>
            ),
        },
        {
            path: "/signup",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <SignupLazy />
                </Suspense>
            ),
        },
    ]);

    return element;
};

export default ProjectRoutes;
