import React from 'react'
import { Document } from '../models/Document';
import { formatDateToThailand } from '../functions/dateth';
interface DocumentProps {
    document: Document;
}



const DetailPopup: React.FC<DocumentProps> = ({ document }) => {

    const formateDate = (date: string) => {
        const receivedDate = new Date(date);
        const formattedReceivedDate = formatDateToThailand(receivedDate);
        // console.log(formattedReceivedDate);

        return formattedReceivedDate
    }

    return (
        <div className="">

            <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl px-24 ">
                    <div className="flex items-center mb-4 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                        </svg>
                        <h3 className="font-bold text-2xl py-2">เอกสาร</h3>
                    </div>
                    <div className="grid grid-cols-3 grid-flow-col gap-2 items-center ">
                        <div>
                            <p className="font-bold  text-lg py-2 text-start">เลขที่เอกสาร</p>
                            <p className=" text-lg py-2"> {document.documentNo}</p>
                        </div>

                        <div>
                            <p className="font-bold text-lg py-2">ขั้นตอน</p>
                            <div className="badge badge-accent">{document.step}</div>
                        </div>
                        <div>
                            <p className="font-bold text-lg py-2">	ผู้สร้าง</p>
                            <p className="text-lg py-2"> {document.CreatedUser}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 grid-flow-col gap-2">
                        <div>
                            <p className="font-bold text-lg py-2">	ประเภทเอกสาร</p>
                            <p className="text-lg py-2"> {document.DocumentType}</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg py-2">	วัน</p>
                            <p className="text-lg py-2"> {document.day}</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg py-2">วันที่ได้รับ</p>
                            <div className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg>
                                {formateDate(document.receivedDate.toString())}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 grid-flow-col gap-2">
                        <div>
                            <p className="font-bold  text-lg py-2">รายละเอียด</p>
                            <p className=" text-lg py-2">{document.detail}</p>
                        </div>
                    </div>



                </form>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog >
        </div >
    )
}

export default DetailPopup