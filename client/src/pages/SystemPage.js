// import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap.min.css';
import '../style/style.css';
import '../style/systemPage.css';

import leftArrow from '../image/left-arrow.png';
import rightArrow from '../image/right-arrow.png';
import bell from '../image/Bell_fill.png';
import user from '../image/user.png';
import vector from '../image/vector.png';
import { PieChartAcitivity } from '../components/PieChartActivity';
import { LineChartActivity } from '../components/LineChartActivity';


function SystemPage() {
    // const [showConfirmation, setShowConfirmation] = useState(false); // Thêm trạng thái để kiểm soát việc hiển thị cửa sổ xác nhận

    // const handleDelete = () => {
    //     setShowConfirmation(true); // Hiển thị cửa sổ xác nhận khi nhấn nút "Delete"
    // };

    return (
        <div class="statistics-body">
            <div class ="row">
                <div class ="col">
                    <button class="btn btn-primary arrow-button-container">
                        <img class="arrow-icon" src={leftArrow} />
                    </button>
                    <Link to="/account-decentralise">
                        <button  class="btn btn-primary arrow-button-container">
                            <img class="arrow-icon" src={rightArrow} />
                        </button>
                    </Link>
                    
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

            <div class="row statistics-bar">
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
                </div>
            </div>

            <div class="row statistics-bar">
                <div class="col-md-6">
                    <LineChartActivity />
                </div>

                <div class="col-md-4 statistics-infor">
                    <div class="statistics-title">
                        <Link class="statistics-title-link" to href="/">Xu hướng của năm   2024</Link>
                    </div>
                    <div class="statistics-result">
                        <p>10 hoạt động đã được tổ chức.</p>
                        <p>  </p>
                        <p>Thu hút 15 sinh viên tham gia.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SystemPage;