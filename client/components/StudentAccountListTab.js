import React, { useState, useEffect } from 'react';
import '../bootstrap.min.css';
import '../style/style.css';
import '../style/systemPage.css';
import '../style/act_detail.css';
import DecentPopUp from './AccountManager/DecentConfirm';

function StudentAccountListTab() {

    const [studentAccountList, setStudentAccountList] = useState([]);

    useEffect(() => {
        fetch('/api/account')
            .then((response) => response.json())
            .then((data) => {
                const student = data.filter(account => account.usersAccount.Role === 'student');
                setStudentAccountList(student);
            })
            .catch((error) => console.error('Error fetching data:', error));
    });

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleConfirm = () => {
        // Xử lý đăng ký hoạt động ở đây
        // Sau khi đăng ký, có thể cập nhật trạng thái hoặc thực hiện các hành động cần thiết
        setShowConfirmation(false);
        // Add your registration logic here
    };


    return (
        <div class="row table-container tab-table-container ">
                {showConfirmation && <DecentPopUp onConfirm={handleConfirm} />}
                <div class="table-responsive activity-roll tab">
                    <table class="table tab-table">
                        <col class="column-mssv" />
                        <col class="column-name" />
                        <col class="column-role" />
                        <col class="column-state" />
                        <col class="column-activity" />

                        <tr>
                            <th scope="col" class="id">MSSV</th>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Vai trò </th>
                            <th scope="col">Trạng thái </th>
                            <th scope="col">Hoạt động</th>
                            <th scope="col">Thay đổi</th>
                            
                        </tr>

                        {studentAccountList.map((account, index) => (
                            <tr>
                                <td >{account.StudentID}</td>
                                <td>{account.fullName}</td>
                                <td>{account.role}</td>
                                <td>{account.accountState}</td>
                                <td>{account.accountActive}</td>
                                <td>
                                    <button class="btn btn-success decent-buttons" onClick={() => setShowConfirmation(true)}>Phân quyền</button>
                                </td>
                            </tr>
                            )
                        )}
                        
                        
                    </table>

                </div>
        </div>
    )
}

export default StudentAccountListTab;