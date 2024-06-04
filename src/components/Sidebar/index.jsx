import { Link } from 'react-router-dom';
import { 
    HomeIcon, UsersIcon, BriefcaseIcon,
    PhoneIcon, UserCircleIcon, UserGroupIcon,
    CalendarIcon, NewspaperIcon, ChatIcon, ThumbUpIcon, TableIcon,
    QuestionMarkCircleIcon, ClipboardCheckIcon
} from '@heroicons/react/outline';

const Sidebar = () => (
    <div className="h-full bg-[#253451] text-white w-64">
        <div className="p-4">
            <h1 className="text-xl font-bold">Hello Admin</h1>
        </div>
        <nav>
            <ul>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/admin/home">
                        <HomeIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Home</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/admin/users">
                        <UsersIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Users</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <BriefcaseIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Job Applications</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <BriefcaseIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Job Opportunities</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <UserCircleIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Client Profiles</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <PhoneIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Contact Us</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <UserGroupIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Custom Users</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <CalendarIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Events</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <NewspaperIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">News Letters</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <UserGroupIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Partners</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <BriefcaseIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Services</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <UsersIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Talent Profiles</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <UserGroupIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Team Members</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <ChatIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Comments</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <ThumbUpIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Likes</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <TableIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Stories</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <QuestionMarkCircleIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Token Blacklist</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <QuestionMarkCircleIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Outstanding Tokens</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-[#364b76]">
                    <Link to="/users">
                        <ClipboardCheckIcon className="h-5 w-5 inline-block" />
                        <span className="ml-2">Recent Actions</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default Sidebar;
