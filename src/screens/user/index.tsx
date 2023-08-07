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


    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((user, index) => (
                        <tr key={index} className="border">
                            <td className="border p-2">{user.name}</td>
                            <td className="border p-2">{user.email}</td>
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
