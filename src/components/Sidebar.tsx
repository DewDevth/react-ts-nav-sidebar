import { Link, useMatch } from 'react-router-dom';

const Sidebar = () => {
    const dashboardMatch = useMatch('/');
    const usersMatch = useMatch('/users');
    const documentsMatch = useMatch('/documents');
    const documentSubmittedMatch = useMatch('/documents-submitted');
    const documentPendingMatch = useMatch('/documents-pending');
    const documentSearchMatch = useMatch('/documents-search');
    const documentBinMatch = useMatch('/documents-bin');
    const documentFileCabinetCompleteMatch = useMatch('/documents-file-cabinet-complete');
    const documentFileCabinetPendingMatch = useMatch('/documents-file-cabinet-pending');




    return (




        <div className="w-full lg:w-1/4 bg-gray-800 text-white min-h-screen p-4">

            <div className="p-4 bg-indigo-500">
                <h2 className="text-2xl font-semibold">Sidebar</h2>
            </div>
            <nav className="mt-4 ">
                <div className="divider">เมนู</div>

                <Link
                    to="/"
                    className={`flex items-center px-4 py-2 my-1 hover:bg-gray-700 hover:rounded-box ${dashboardMatch ? 'bg-gray-700 rounded-box' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    Dashboard


                </Link>

                <Link
                    to="/users"
                    className={`flex items-center px-4 py-2 my-1 hover:bg-gray-700 hover:rounded-box ${usersMatch ? 'bg-gray-700 rounded-box' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                    Users
                </Link>



                <div className="divider">โต๊ะทำงาน</div>
                <Link
                    to="/documents"
                    className={`flex items-center px-4 py-2 my-1 hover:bg-gray-700 hover:rounded-box ${documentsMatch ? 'bg-gray-700 rounded-box' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                    งานที่ต้องทำ
                </Link>

                <Link
                    to="/documents-submitted"
                    className={`flex items-center px-4 py-2 my-1 hover:bg-gray-700 hover:rounded-box ${documentSubmittedMatch ? 'bg-gray-700 rounded-box' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                    งานที่ต้องส่ง
                </Link>

                <Link
                    to="/documents-pending"
                    className={`flex items-center px-4 py-2 my-1 hover:bg-gray-700 hover:rounded-box ${documentPendingMatch ? 'bg-gray-700 rounded-box' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                    งานรอพิจารณา
                </Link>
                <Link
                    to="/documents-search"
                    className={`flex items-center px-4 py-2 my-1 hover:bg-gray-700 hover:rounded-box ${documentSearchMatch ? 'bg-gray-700 rounded-box' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                    ค้นหาเอกสาร
                </Link>

                <Link
                    to="/documents-bin"
                    className={`flex items-center px-4 py-2 my-1 hover:bg-gray-700 hover:rounded-box ${documentBinMatch ? 'bg-gray-700 rounded-box' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                    ถังขยะ
                </Link>

                <div className="divider">ตู้เอกสาร</div>

                <Link
                    to="/documents-file-cabinet-complete"
                    className={`flex items-center px-4 py-2 my-1 hover:bg-gray-700 hover:rounded-box ${documentFileCabinetCompleteMatch ? 'bg-gray-700 rounded-box' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                    ตู้เอกสารที่ทำเสร็จแล้ว
                </Link>
                <Link
                    to="/documents-file-cabinet-pending"
                    className={`flex items-center px-4 py-2 my-1 hover:bg-gray-700 hover:rounded-box ${documentFileCabinetPendingMatch ? 'bg-gray-700 rounded-box' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                    เอกสารที่ยังไม่เสร็จ
                </Link>
            </nav>



        </div>


    );
};

export default Sidebar;