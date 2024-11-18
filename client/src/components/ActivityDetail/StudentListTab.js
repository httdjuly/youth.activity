import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../style/systemPage.css';
import '../../style/studentlisttab.css';

function StudentListTab(props) {
    let { id } = useParams();
    const [studentsData, setStudentsData] = useState(props.dataFromParent);

    
    return (
        <div className="row actcontent">
            <div className="containtable"> 
                <table className="table studentlist">
                    <thead>
                        <tr className="titlerow">
                            <th scope="col-1" className="sticky-header">STT</th>
                            <th scope="col-3" className="sticky-header">Họ và tên</th>
                            <th scope="col-2" className="sticky-header">MSSV</th>
                            <th scope="col-3" className="sticky-header">Vai trò</th>
                            <th scope="col-3" className="sticky-header">Hoạt động</th>
                        </tr>
                    </thead>  
                    <tbody>
                        {studentsData.map((student, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{student.name}</td>
                                <td>{student.student_id}</td>
                                <td>Sinh viên</td>
                                <td>Đang hoạt động</td>
                            </tr>
                        ))}
                    </tbody> 
                </table>  
            </div>     
        </div>
    );
}

export default StudentListTab;
