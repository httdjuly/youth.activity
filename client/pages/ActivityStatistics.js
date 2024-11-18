import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import '../bootstrap.min.css';
import '../style/style.css';
import '../style/systemPage.css';

import PrintConfirmationPopup from '../components/PrintConfirmationPopup';
import leftArrow from '../image/left-arrow.png';
import rightArrow from '../image/right-arrow.png';
import bell from '../image/Bell_fill.png';
import user from '../image/user.png';
import vector from '../image/vector.png';
import { PieChartAcitivity } from '../components/PieChartActivity';

function ActivityStatistics() {
    const [role, setRole] = useState('sinhvien');
   
    const [activityList, setActivityList] = useState([]);

    useEffect(() => {
        fetch('./studentList.json')
            .then((response) => response.json())
            .then((data) => {
                setActivityList(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    });

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleConfirmRegistration = () => {
        // Xử lý đăng ký hoạt động ở đây
        // Sau khi đăng ký, có thể cập nhật trạng thái hoặc thực hiện các hành động cần thiết
        setShowConfirmation(false);
        // Add your registration logic here
    };

    return (
        <div class="statistics-body activity-statistics">
            <div class ="row">
                <div class ="col">
                    <Link to="/trend-statistics">
                        <button class="btn btn-primary arrow-button-container">
                            <img class="arrow-icon" src={leftArrow} />
                        </button>
                    </Link>
                    <button  class="btn btn-primary arrow-button-container">
                        <img class="arrow-icon" src={rightArrow} />
                    </button>
                </div>

                {/* <div class="col-3 notification-container"> */}
                <button class="btn btn-secondary arrow-button-container account-icon-container">
                    <img class="bell-icon" src={bell} alt="bell-icon"/>
                </button>

                <div class="user-account account-icon-container">
                    <img class="user-icon" src={user} />

                    <div class="user-infor">
                        <div class="user-name">Thùy Dương</div>
                        <div class="user-role">Sinh viên</div>
                    </div>

                    <button class="btn btn-secondary vector-container">
                        <img  class="vector-icon" src={vector}/>
                    </button>
                </div>
            </div>

            <div class="row statistics-bar statistics-bar-inside">
                <div class="col-md-6">
                    <PieChartAcitivity />
                </div>

                <div class="col-md-4 statistics-infor">
                    <div class="statistics-title">
                        <Link class="statistics-title-link" to ="/activity-statistics">Hoạt động tháng 10</Link>
                    </div>

                    <div class="statistics-result">
                        <p>10 hoạt động đã được tổ chức.</p>
                        <p>  </p>
                        <p>Thu hút 15 sinh viên tham gia.</p>
                    </div>

                    <div class="button-group">
                        <button class="btn btn-primary print-button" onClick={() => setShowConfirmation(true)}>In thống kê</button>
                        {showConfirmation && <PrintConfirmationPopup onConfirm={handleConfirmRegistration} />}
                        <button class="btn btn-outline-primary back-button">Trở lại</button>
                    </div>
                </div>
            </div>

            <div class="row table-container">
                <div class="search-container"> 
                    <input class="search-bar" type="search" placeholder="Search"/>
                </div>

                <div class="table-responsive activity-roll">
                    <table class="table ">
                        {/* <thread> */}
                        <col class="column-1" />
                        <col class="column-6" />
                        <col class="column-5" />
                        <col class="column-4" />
                        <col class="column-3" />
                        <col class="column-2"/>
                            <tr>
                                <th scope="col" class="id">Mã số</th>
                                <th scope="col">Tên hoạt động</th>
                                <th scope="col">Thời gian</th>
                                <th scope="col">Số lượng </th>
                                <th scope="col">Ban tổ chức</th>
                                <th scope="col" class="state">Trạng thái</th>
                            </tr>
                        {/* </thread> */}

                        {/* <tbody> */}
                            {activityList.map((activity, index) => (
                            <tr>
                                <td>{activity.activityNumber}</td>
                                <td>{activity.activityName}</td>
                                <td>{activity.activityTime}</td>
                                <td>{activity.studentAmount}</td>
                                <td>{activity.holder}</td>
                                <td>{activity.state}</td>
                            </tr>
                            ))}
                            
                        {/* </tbody> */}
                    </table>

                </div>
            </div>
        </div>
    )
}

export default ActivityStatistics;