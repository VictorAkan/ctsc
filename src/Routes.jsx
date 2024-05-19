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
const NewsSectionLazy = React.lazy(() => import("./pages/NewsAndStories"));

// import general loader
import { Loader } from "./Loader";

const ProjectRoutes = () => {

    let element = useRoutes([
        {
            path: "/",
            element: (
                <Suspense fallback={<Loader />}>
                    <HomePageLazy />
                </Suspense>
            ),
        }, // Home with Suspense
        { path: "*", element: <NotFound /> },
        {
            path: "/mkponnyin",
            element: (
                <Suspense fallback={<Loader />}>
                    <MkpoNnyinLazy />
                </Suspense>
            ),
        },
        {
            path: "/ibomevents",
            element: (
                <Suspense fallback={<Loader />}>
                    <IbomEventsLazy />
                </Suspense>
            ),
        },
        {
            path: "/ibomservices",
            element: (
                <Suspense fallback={<Loader />}>
                    <IbomServicesLazy />
                </Suspense>
            ),
        },
        {
            path: "/ibomservicesone",
            element: (
                <Suspense fallback={<Loader />}>
                    <IbomServicesOneLazy />
                </Suspense>
            ),
        },
        {
            path: "/ibomservicestwo",
            element: (
                <Suspense fallback={<Loader />}>
                    <IbomServicesTwoLazy />
                </Suspense>
            ),
        },
        {
            path: "/jobspage",
            element: (
                <Suspense fallback={<Loader />}>
                    <JobspageLazy />
                </Suspense>
            ),
        },
        {
            path: "/jobspageone",
            element: (
                <Suspense fallback={<Loader />}>
                    <JobspageOneLazy />
                </Suspense>
            ),
        },
        {
            path: "/jobspagetwo",
            element: (
                <Suspense fallback={<Loader />}>
                    <JobspageTwoLazy />
                </Suspense>
            ),
        },
        {
            path: "/ibompartners",
            element: (
                <Suspense fallback={<Loader />}>
                    <IbomPartnersLazy />
                </Suspense>
            ),
        },
        {
            path: "/ibompartnersone",
            element: (
                <Suspense fallback={<Loader />}>
                    <IbomPartnersOneLazy />
                </Suspense>
            ),
        },
        {
            path: "/signup",
            element: (
                <Suspense fallback={<Loader />}>
                    <SignupLazy />
                </Suspense>
            ),
        },
        {
            path: "/newssection",
            element: (
                <Suspense fallback={<Loader />}>
                    <NewsSectionLazy />
                </Suspense>
            )
        },
    ]);

    return element;
};

export default ProjectRoutes;
