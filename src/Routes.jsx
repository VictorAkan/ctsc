import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import React, { Suspense } from "react";


// Welcome to the Admin's World
const AdminDashboard = React.lazy(() => import("./components/Layout"));
const AdHomeLazy = React.lazy(() => import("./pages/WorldOfAdmin/AdHome"));
const AdUsersLazy = React.lazy(() => import("./pages/WorldOfAdmin/AdUsers"));
const AdApplicationsLazy = React.lazy(() => import("./pages/WorldOfAdmin/AdJobApplications"));
const JobOpportunities = React.lazy(() => import("./pages/WorldOfAdmin/JobOpportunities"));
const ClientProfile = React.lazy(() => import("./pages/WorldOfAdmin/ClientProfile"));
const ContactUs = React.lazy(() => import("./pages/WorldOfAdmin/AdContactUs"));
const CustomUsers = React.lazy(() => import("./pages/WorldOfAdmin/CustomUsers"));
const Events = React.lazy(() => import("./pages/WorldOfAdmin/Events"));
const Newsletters = React.lazy(() => import("./pages/WorldOfAdmin/NewsLetters"));
const Partners = React.lazy(() => import("./pages/WorldOfAdmin/Partners"));
const Services = React.lazy(() => import("./pages/WorldOfAdmin/Services"));
const TalentProfiles = React.lazy(() => import("./pages/WorldOfAdmin/TalentProfiles"));
const TeamMembers = React.lazy(() => import("./pages/WorldOfAdmin/TeamMembers"));
const Comments = React.lazy(() => import("./pages/WorldOfAdmin/Comments"));
const Likes = React.lazy(() => import("./pages/WorldOfAdmin/Likes"));
const Stories = React.lazy(() => import("./pages/WorldOfAdmin/Stories"));
const Outreach = React.lazy(() => import("./pages/WorldOfAdmin/Outreaches"));

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
const JobApplicationLazy = React.lazy(() => import("./pages/JobApplicationForm"));
const ApplicationsLazy = React.lazy(() => import("./pages/JobApplications"));
const ApplicationsStatusLazy = React.lazy(() => import("./pages/JobApplicationStatus"));
const ClientSignLazy = React.lazy(() => import("./pages/ClientSignUp"));
const CtsfLazy = React.lazy(() => import("./pages/CTSF"));
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
    >
        <Route path="" element={<AdHomeLazy />} />
        <Route path="users" element={<AdUsersLazy />} />
        <Route path="job-applications" element={<AdApplicationsLazy />} />
        <Route path="job-opportunities" element={<JobOpportunities />} />
        <Route path="client-profiles" element={<ClientProfile />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="custom-users" element={<CustomUsers />} />
        <Route path="events" element={<Events />} />
        <Route path="newsletters" element={<Newsletters />} />
        <Route path="partners" element={<Partners />} />
        <Route path="services" element={<Services />} />
        <Route path="talent-profiles" element={<TalentProfiles />} />
        <Route path="team-members" element={<TeamMembers />} />
        <Route path="comments" element={<Comments />} />
        <Route path="likes" element={<Likes />} />
        <Route path="stories" element={<Stories />} />
        <Route path="outreach" element={<Outreach />} />
    </Route>

    {/* Other routes */}
    <Route path="/ibomevents" element={<IbomEventsLazy />} />
    <Route path="/event/:eventId" element={<EventsDetailLazy />} />
    <Route path="/ibomservices" element={<IbomServicesLazy />} />
    <Route path="/ibomservices/:serviceId" element={<ServiceDetailLazy />} />
    <Route path="/ibomservicesone" element={<IbomServicesOneLazy />} />
    <Route path="/ibomservicestwo" element={<IbomServicesTwoLazy />} />
    <Route path="/jobs" element={<JobsLazy />} />
    <Route path="/apply/:jobId" element={<JobApplicationLazy />} />
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
    <Route path="/clientsignup" element={<ClientSignLazy />} />
    <Route path="/talentprofile" element={<TalentProfileLazy />} >
    </Route>
    <Route path="/ctsf" element={<CtsfLazy />} />
    <Route path="/application_status" element={<ApplicationsStatusLazy />} />
    <Route path="/newssection" element={<NewsSectionLazy />} />
    <Route path="/story/:storyId" element={<FullStoryLazy />} />
    <Route path="/featurestory" element={<AutismLazy />} />
    <Route path="/login" element={<LoginLazy />} />
    <Route path="/personalgrowth" element={<PersonalGrowthLazy />} />
    <Route path="/readerscorner" element={<ReadersCornerLazy />} />
    <Route path="/ctscinterviews" element={<InterviewsLazy />} />
    <Route path="/ourculture" element={<OurCultureLazy />} />
    <Route path="/ctscteam" element={<CtscTeamLazy />} />
    <Route path="/client_profile" element={<ClientProfileLazy />} >
    </Route>
    <Route path="/applications" element={<ApplicationsLazy />} />
    <Route path="/post_job" element={<ClientJobPostLazy />} />
    <Route path="/contactus" element={<ContactUsLazy />} />
    </Routes>
</Suspense>
    )
}

