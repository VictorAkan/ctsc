import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import React, { Suspense } from "react";


// Welcome to the Admin's World
const AdminDashboard = React.lazy(() => import("./components/Layout"));
// const AdHomeLazy = React.lazy(() => import("./pages/WorldOfAdmin/AdHome"));
// const AdUsersLazy = React.lazy(() => import("./pages/WorldOfAdmin/AdUsers"));

// Wrap components in lazy imports
const HomePageLazy = React.lazy(() => import("./pages/HomePage"));
const MkpoNnyinLazy = React.lazy(() => import("./pages/MkpoNnyin"));
const IbomEventsLazy = React.lazy(() => import("./pages/IbomEvents"));
const IbomServicesLazy = React.lazy(() => import("./pages/IbomServices"));
const IbomServicesOneLazy = React.lazy(() => import("./pages/IbomServicesOne"));
const IbomServicesTwoLazy = React.lazy(() => import("./pages/IbomServicesTwo"));
const JobspageOneLazy = React.lazy(() => import("./pages/JobspageOne"));
const JobspageTwoLazy = React.lazy(() => import("./pages/JobspageTwo"));
const JobspageDesignCreativeLazy = React.lazy(() => import("./pages/JobspageDesignCreative"));
const JobspageSalesMarketingLazy = React.lazy(() => import("./pages/JobspageSalesMarketing"));
const JobspagePhotographyLazy = React.lazy(() => import("./pages/JobspagePhotography"));
const JobspageDevelopmentITLazy = React.lazy(() => import("./pages/JobspageDevelopmentIT"));
const JobspageFinanceAccountingLazy = React.lazy(() => import("./pages/JobspageFinanceAccounting"));
const JobspageWritingTranslationLazy = React.lazy(() => import("./pages/JobspageWritingTranslation"));
const JobspageLegalLazy = React.lazy(() => import("./pages/JobspageLegal"));
const JobspageRepairsEngineeringLazy = React.lazy(() => import("./pages/JobspageRepairsEngineering"));
const JobspageHRPersonnelLazy = React.lazy(() => import("./pages/JobspageHRPersonnel"));
const IbomPartnersLazy = React.lazy(() => import("./pages/IbomPartners"));
const IbomPartnersOneLazy = React.lazy(() => import("./pages/IbomPartnersOne"));
const SignupLazy = React.lazy(() => import("./pages/Signup"));
const NewsSectionLazy = React.lazy(() => import("./pages/NewsAndStories"));
const AutismLazy = React.lazy(() => import("./pages/FeatureStory"));
const LoginLazy = React.lazy(() => import("./pages/Login"));
const PersonalGrowthLazy = React.lazy(() => import("./pages/PersonalGrowth"));
const ReadersCornerLazy = React.lazy(() => import("./pages/ReadersCorner"));
const InterviewsLazy = React.lazy(() => import("./pages/CtscInterviews"));
const OurCultureLazy = React.lazy(() => import("./pages/OurCulture"));
const CtscTeamLazy = React.lazy(() => import("./pages/CtscTeams"));
const ContactUsLazy = React.lazy(() => import("./pages/ContactUs"));
const EventsDetailLazy = React.lazy(() => import("./pages/EventDetailsPage"));
const FullStoryLazy = React.lazy(() => import("./pages/FullStory"));
const ServiceDetailLazy = React.lazy(() => import("./pages/ServiceDetailPage"));
const PartnerDetailLazy = React.lazy(() => import("./pages/PartnerDetailPage"));
const ClientProfileLazy = React.lazy(() => import("./pages/ClientProfilePage"));
const ClientJobPostLazy = React.lazy(() => import("./pages/ClientJobPosting"));
const TalentProfileLazy = React.lazy(() => import("./pages/TalentProfile"));
const JobsLazy = React.lazy(() => import("./pages/Jobs"));
// import general loader
import { Loader } from "./Loader";

export const ProjectRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
        <Routes>
    {/* Home route */}
    <Route path="/" element={<HomePageLazy />} />

    {/* Not Found route */}
    <Route path="*" element={<NotFound />} />

    {/* MkpoNnyin route with potential nested routes */}
    <Route path="/mkponnyin" element={<MkpoNnyinLazy />}>
      {/* Add child routes here if needed */}
    </Route>

    {/* Admin routes */}
    <Route
        path="/admin"
        element={<AdminDashboard />}
    />

    {/* Other routes */}
    <Route path="/ibomevents" element={<IbomEventsLazy />} />
    <Route path="/event/:eventId" element={<EventsDetailLazy />} />
    <Route path="/ibomservices" element={<IbomServicesLazy />} />
    <Route path="/ibomservices/:serviceId" element={<ServiceDetailLazy />} />
    <Route path="/ibomservicesone" element={<IbomServicesOneLazy />} />
    <Route path="/ibomservicestwo" element={<IbomServicesTwoLazy />} />
    <Route path="/jobs" element={<JobsLazy />} />
    <Route path="/jobspageone" element={<JobspageOneLazy />} />
    <Route path="/jobspagetwo" element={<JobspageTwoLazy />} />
    <Route path="/jobs/design-creative" element={<JobspageDesignCreativeLazy />} />
    <Route path="/jobs/sales-marketing" element={<JobspageSalesMarketingLazy />} />
    <Route path="/jobs/photography" element={<JobspagePhotographyLazy />} />
    <Route path="/jobs/development-it" element={<JobspageDevelopmentITLazy />} />
    <Route path="/jobs/finance-accounting" element={<JobspageFinanceAccountingLazy />} />
    <Route path="/jobs/writing-translation" element={<JobspageWritingTranslationLazy />} />
    <Route path="/jobs/legal" element={<JobspageLegalLazy />} />
    <Route path="/jobs/repairs-engineering" element={<JobspageRepairsEngineeringLazy />} />
    <Route path="/jobs/hr-personnel" element={<JobspageHRPersonnelLazy />} />
    <Route path="/ibompartners" element={<IbomPartnersLazy />} />
    <Route path="/partner/:id" element={<PartnerDetailLazy />} />
    <Route path="/ibompartnersone" element={<IbomPartnersOneLazy />} />
    <Route path="/signup" element={<SignupLazy />} />
    <Route path="/talentprofile" element={<TalentProfileLazy />} />
    <Route path="/newssection" element={<NewsSectionLazy />} />
    <Route path="/story/:storyId" element={<FullStoryLazy />} />
    <Route path="/featurestory" element={<AutismLazy />} />
    <Route path="/login" element={<LoginLazy />} />
    <Route path="/personalgrowth" element={<PersonalGrowthLazy />} />
    <Route path="/readerscorner" element={<ReadersCornerLazy />} />
    <Route path="/ctscinterviews" element={<InterviewsLazy />} />
    <Route path="/ourculture" element={<OurCultureLazy />} />
    <Route path="/ctscteam" element={<CtscTeamLazy />} />
    <Route path="/client_profile" element={<ClientProfileLazy />} />
    <Route path="/post_job" element={<ClientJobPostLazy />} />
    <Route path="/contactus" element={<ContactUsLazy />} />
  </Routes>
</Suspense>
    )
}

// const ProjectRoutes = () => {

//     let element = useRoutes([
//         {
//             path: "/",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <HomePageLazy />
//                 </Suspense>
//             ),
//         }, // Home with Suspense
//         { path: "*", element: <NotFound /> },
//         {
//             path: "/mkponnyin",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <MkpoNnyinLazy />
//                 </Suspense>
//             ),
//         },



//         // Admin's World
//         {
//             path: "/admin",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <AdminDashboard>
//                         <Suspense fallback={<Loader />}>
//                             <AdHomeLazy path="/home" />
//                         </Suspense>
//                         <Suspense fallback={<Loader />}>
//                             <AdUsersLazy path="/users" /> {/* New path for AdUsersLazy */}
//                         </Suspense>
//                     </AdminDashboard>
//                 </Suspense>
//             )
//         },





//         {
//             path: "/ibomevents",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <IbomEventsLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/event/:eventId",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <EventsDetailLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/ibomservices",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <IbomServicesLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/ibomservices/:serviceId",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <ServiceDetailLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/ibomservicesone",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <IbomServicesOneLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/ibomservicestwo",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <IbomServicesTwoLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/jobs",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <JobsLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/jobspageone",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <JobspageOneLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/jobspagetwo",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <JobspageTwoLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/jobspage/design-creative",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <JobspageDesignCreativeLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/jobspage/sales-marketing",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <JobspageSalesMarketingLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/jobspage/photography",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <JobspagePhotographyLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/jobspage/development-it",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <JobspageDevelopmentITLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/jobspage/finance-accounting",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <JobspageFinanceAccountingLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/jobspage/writing-translation",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <JobspageWritingTranslationLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/jobspage/legal",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <JobspageLegalLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/jobspage/repairs-engineering",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <JobspageRepairsEngineeringLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/jobspage/hr-personnel",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <JobspageHRPersonnelLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/ibompartners",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <IbomPartnersLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/partner/:id",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <PartnerDetailLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/ibompartnersone",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <IbomPartnersOneLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/signup",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <SignupLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/talentprofile",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <TalentProfileLazy />
//                 </Suspense>
//             ),
//         },
//         {
//             path: "/newssection",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <NewsSectionLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/story/:storyId",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <FullStoryLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/featurestory",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <AutismLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/login",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <LoginLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/personalgrowth",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <PersonalGrowthLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/readerscorner",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <ReadersCornerLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/ctscinterviews",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <InterviewsLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/ourculture",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <OurCultureLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/ctscteam",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <CtscTeamLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/client_profile",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <ClientProfileLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/post_job",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <ClientJobPostLazy />
//                 </Suspense>
//             )
//         },
//         {
//             path: "/contactus",
//             element: (
//                 <Suspense fallback={<Loader />}>
//                     <ContactUsLazy />
//                 </Suspense>
//             )
//         },
//     ]);

//     return element;
// };

// export default ProjectRoutes;
