import React, { useEffect, useState } from 'react';
import { User } from '../../models/User';
import { getUsers } from '../../services/userService';

// interface UsersProps {
//     data: User[];
// }

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(users.length / itemsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };



    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await getUsers();
                setUsers(userData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const handleEdit = (id: string) => {
        console.log(id)
    }

    const handleDelete = (id: string) => {
        console.log(id)

    }

    return (
        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Users</a></li>
                </ul>
            </div>
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Id</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Role</th>
                        <th className="border p-2">IsActive</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((user, index) => (
                        <tr key={index} className="border">
                            <td className="border p-2">{user.id}</td>
                            <td className="border p-2">{user.name}</td>
                            <td className="border p-2">{user.email}</td>
                            <td className="border p-2">{user.role}</td>
                            <td className="border p-2">
                                <span className={`px-2 py-1 ${user.isActive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'} rounded-full`}>
                                    {user.isActive ? 'Active' : 'Inactive'}
                                </span>
                            </td>
                            <td className="border p-1 flex space-x-2  items-center justify-center">

                                <button className="btn bg-warning text-white" onClick={() => handleEdit(user.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M13.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-10 10a1 1 0 01-.39.242l-4 1a1 1 0 01-1.232-1.232l1-4a1 1 0 01.242-.39l10-10zM14 7l-7 7-2-2 7-7 2 2z" clipRule="evenodd" />
                                    </svg>
                                    แก้ไข
                                </button>

                                <button className="btn bg-error text-white" onClick={() => handleDelete(user.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    ลบ
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                <button
                    onClick={prevPage}
                    className={`border p-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <button
                    onClick={nextPage}
                    className={`border p-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
            <p className="mt-4 text-gray-600">
                Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, users.length)} of {users.length} entries
            </p>
        </div>
    );
};

export default Users;
