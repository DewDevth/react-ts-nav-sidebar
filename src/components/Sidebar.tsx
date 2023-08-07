import { Link, useMatch } from 'react-router-dom';

const Sidebar = () => {
    const dashboardMatch = useMatch('/');
    const usersMatch = useMatch('/users');

    return (
        <div className="w-full lg:w-1/4 bg-gray-800 text-white min-h-screen p-4">
            <div className="p-4 bg-indigo-500">
                <h2 className="text-2xl font-semibold">Sidebar</h2>
            </div>
            <nav className="mt-4">
                <Link to="/" className={`block px-4 py-2 hover:bg-gray-700 ${dashboardMatch ? 'bg-gray-700' : ''}`}>
                    Dashboard
                </Link>
                <Link to="/users" className={`block px-4 py-2 hover:bg-gray-700 ${usersMatch ? 'bg-gray-700' : ''}`}>
                    Users
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;