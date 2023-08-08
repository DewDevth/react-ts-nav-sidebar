import React, { ChangeEvent, useEffect, useState } from 'react';
import { Document } from '../../models/Document';
import { getDocuments, updateDocumentIsRead } from '../../services/documentService';
import { formatDateToThailand } from '../../functions/dateth';
import DetailPopup from '../../components/DetailPopup';


const PendingPage: React.FC = () => {
    const [documents, setDocuments] = useState<Document[]>([]);
    // ช่องค้นหา
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [originalDocuments, setOriginalDocuments] = useState<Document[]>([]); // เพิ่มสถานะของ originalDocuments

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filteredDocuments = documents.filter(doc => {
            const searchText = `${doc.id} ${doc.documentNo} ${doc.detail} ${doc.step} ${doc.CreatedUser} ${doc.day} ${doc.DocumentType}`.toLowerCase();
            return searchText.includes(query.toLowerCase());
        });


        if (query === '') {
            setDocuments(originalDocuments); // เมื่อ query เป็นว่างเปล่าให้ใช้ originalDocuments
        } else {
            setDocuments(filteredDocuments);
        }
        setCurrentPage(1);
    };


    // sort ตาราง
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
    const requestSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = [...documents].sort((a, b) => {
        if (!sortConfig) return 0;
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };


    useEffect(() => {

        fetchData();
    }, []);

    async function fetchData() {
        try {
            const documentData = await getDocuments();
            setDocuments(documentData);
            setOriginalDocuments(documentData); // กำหนดค่าตั้งต้นให้ originalDocuments
            setCurrentPage(1);
        } catch (error) {
            console.error(error);
        }
    }

    const formateDate = (date: string) => {
        const receivedDate = new Date(date);
        const formattedReceivedDate = formatDateToThailand(receivedDate);
        // console.log(formattedReceivedDate);

        return formattedReceivedDate
    }



    // popup
    const initialDocumentData: Document = {
        CreatedUser: "",
        DocumentType: "",
        IsRead: false,
        day: 0,
        detail: "",
        documentNo: "",
        id: "",
        receivedDate: new Date(),
        step: "",
    };

    const [documentData, setDocumentData] = useState<Document>(initialDocumentData);
    const OpenMail = (document: Document): void => {
        // console.log(document);
        setDocumentData(document)
        window.my_modal_2.showModal();
        updateDocumentIsRead(document.id, true)
            .then(() => {
                console.log('IsRead updated successfully');
                fetchData();
            })
            .catch((error) => {
                console.error('Error:', error.message);
            });
    }

    return (
        <>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>หน้าหลัก</a></li>
                    <li><a>งานที่รอพิจารณา</a></li>
                </ul>
            </div>
            <div className='shadow-xl p-2'>
                <h2 className="text-xl font-semibold mb-4">รายการเอกสาร</h2>
                {/* filter search */}
                <div className="bg-base-100  py-4 w-full  flex items-center my-2">

                    <div className="ml-4 form-control max-w-xs ">
                        <label className="label">
                            <span className="label-text">ค้นหาข้อมูล</span>
                        </label>
                        <input type="text" placeholder="ค้นหา" className="input input-bordered w-full max-w-xs		" value={searchQuery}
                            onChange={handleSearchChange} />

                    </div>


                    <div className="ml-4 form-control max-w-xs">
                        <label className="label">
                            <span className="label-text">ประเภทเอกสาร</span>
                        </label>
                        <select className="select select-bordered">
                            <option disabled selected>ทั้งหมด</option>
                            <option>ใบสั่งซื้อ</option>
                            <option>ใบขอตัดจำหน่ายสินค้า</option>

                        </select>

                    </div>

                    <div className="ml-4 form-control max-w-md">
                        <label className="label">
                            <span className="label-text">วันเริ่มต้น</span>
                        </label>
                        <input
                            type="date"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="ml-4 form-control max-w-md">
                        <label className="label">
                            <span className="label-text">วันสิ้นสุด</span>
                        </label>
                        <input
                            type="date"
                            className="input input-bordered w-full"
                        />
                    </div>

                </div>


                {/* table */}
                <div className="  bg-base-100  p-4 w-full ">
                    <table className="w-full  table rounded-md">
                        <thead>
                            <tr className="bg-base-200 ">

                                <th className="border-b p-2 text-base text-white w-[20px]" onClick={() => requestSort('id')}> ลำดับ</th>
                                <th className="border-b p-2 text-base text-white w-[50px]" onClick={() => requestSort('documentNo')}>เลขที่เอกสาร</th>
                                <th className="border-b p-2 text-base text-white w-[200px]" onClick={() => requestSort('detail')}>รายละเอียด</th>
                                <th className="border-b p-2 text-base text-white w-[100px]" onClick={() => requestSort('step')}>ขั้นตอน</th>
                                <th className="border-b p-2 text-base text-white w-[100px]" onClick={() => requestSort('CreatedUser')}>ผู้สร้าง</th>
                                <th className="border-b p-2 text-base text-white w-[100px]" onClick={() => requestSort('day')}>วัน</th>
                                <th className="border-b p-2 text-base text-white w-[100px]" onClick={() => requestSort('DocumentType')}>ประเภทเอกสาร</th>
                                <th className="border-b p-2 text-base text-white w-[100px]" onClick={() => requestSort('receivedDate')}>วันที่ได้รับ</th>
                                {/* <th className="border-b p-2 text-base text-white w-[100px]">จัดการ</th> */}
                            </tr>

                        </thead>
                        <tbody className='overflow-y-auto max-w-[300px] min-w-[300px]'>
                            {currentItems.map((docs, index) => (
                                <tr key={index} className={`hover ${docs.IsRead ? 'text-white' : 'text-blue-700'}`}
                                    onClick={() => OpenMail(docs)}>
                                    <td className=" p-2 ">{docs.id}</td>
                                    <td className=" p-2">{docs.documentNo}</td>
                                    <td className=" p-2  max-w-[100px] truncate">{docs.detail}</td>
                                    <td className=" p-2">{docs.step}</td>
                                    <td className=" p-2">{docs.CreatedUser}</td>
                                    <td className=" p-2">{docs.day}</td>
                                    <td className=" p-2">{docs.DocumentType}</td>
                                    <td className=" p-2">{formateDate(docs.receivedDate.toString())}</td>

                                    {/* 
                                    <td>

                                        <button className="btn" onClick={() => window.my_modal_2.showModal()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                        </svg></button>

                                    </td> */}

                                    {/* <td className=" p-2 flex space-x-2  items-center justify-center">
                                        <div className="dropdown">
                                            <label tabIndex={0} className="btn m-1 bg-success text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                            </svg></label>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><button onClick={() => handleEdit(docs.id)}>แก้ไข</button></li>
                                                <li><button onClick={() => handleDelete(docs.id)}>ลบ</button></li>
                                            </ul>
                                        </div>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-center mt-4">
                        <div className="join grid grid-cols-2">
                            <button className={`join-item btn btn-outline ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 '}`} onClick={prevPage} >Previous page</button>
                            <button className={`join-item btn btn-outline ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 '}`} onClick={nextPage} >Next</button>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-600">
                        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, documents.length)} of {documents.length} entries
                    </p>
                </div>

            </div >



            {/* Open the modal using ID.showModal() method */}
            <DetailPopup document={documentData} />
        </>

    )

}
export default PendingPage;
