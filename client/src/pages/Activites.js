import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap.min.css';
import '../style/style.css';
import logo from '../image/logoBK.png';
import star from '../image/magic-star.png';
import location from '../image/location.png';
import time from '../image/clock.png';
import profile from '../image/profile-2user.png';
import leftArrow from '../image/left-arrow.png';
import rightArrow from '../image/right-arrow.png';
import user from '../image/user.png';
import NewActivity from '../pages/NewActivity';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function ActivityListPage() {
    const [activities, setActivities] = useState({
        Ongoing: [], // Khởi tạo mảng rỗng cho Ongoing
        Upcoming: []  // Khởi tạo mảng rỗng cho Upcoming
    });
    const [curItems, setCurItems] = useState(3);
    const [curExpand, setCurExpand] = useState(false);
    const [upItems, setUpItems] = useState(3);
    const [upExpand, setUpExpand] = useState(false);
    const [role, setRole] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        // Lấy dữ liệu từ server
        fetch('/api/activities', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            // Chia dữ liệu thành Ongoing và Upcoming
            const today = new Date();
            const ongoing = [];
            const upcoming = [];

            data.forEach(activity => {
                const startDate = new Date(activity.day);

                // Kiểm tra hoạt động đang diễn ra
                if (startDate <= today) {
                    ongoing.push(activity);
                } else if (startDate > today) {
                    upcoming.push(activity);
                }
            });

            // Cập nhật trạng thái với dữ liệu phân loại
            setActivities({
                Ongoing: ongoing,
                Upcoming: upcoming
            });
        })
        .catch(error => console.error('Error fetching activities:', error));

        // Lấy role người dùng
        fetch('/api/auth/role', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => setRole(data.role))
        .catch(error => console.error('Error fetching role:', error));
    }, []);

    const handleDelete = () => {
        setShowConfirmation(false);
    };

    const showMoreCurrent = () => {
        setCurItems((prevValue) => prevValue + activities.Ongoing.length);
        setCurExpand(!curExpand);
    };

    const showLessCurrent = () => {
        setCurItems(3);
        setCurExpand(!curExpand);
    };

    const showMoreUpcoming = () => {
        setUpItems((prevValue) => prevValue + activities.Upcoming.length);
        setUpExpand(!upExpand);
    };

    const showLessUpcoming = () => {
        setUpItems(3);
        setUpExpand(!upExpand);
    };

    return (
        <div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary arrow-button-container">
                        <img className="arrow-icon" src={leftArrow} />
                    </button>
                    <button className="btn btn-primary arrow-button-container">
                        <img className="arrow-icon" src={rightArrow} />
                    </button>
                </div>
            </div>

            <div className="row justify-content-end rowbutdk">
                <div className="justify-content-end">
                    {role === 'manager' && (
                        <button className="btn btn-dark btn-sm create-activity-button" onClick={() => setShowConfirmation(true)}>
                            Tạo hoạt động
                        </button>
                    )}
                    {showConfirmation && <NewActivity onConfirm={handleDelete} />}
                </div>
            </div>

            {/* Section for Ongoing Activities */}
            <div className="row activity-state-title">
                <div>Đang diễn ra</div>
                {curExpand ? (
                    <button className="btn btn-sm btn-outline-dark ml-auto" onClick={showLessCurrent}>
                        Thu gọn
                    </button>
                ) : (
                    <button className="btn btn-sm btn-outline-dark ml-auto" onClick={showMoreCurrent}>
                        Xem tất cả
                    </button>
                )}
            </div>

            <div className="row activity-row">
                {activities.Ongoing.length > 0 ? (
                    activities.Ongoing.slice(0, curItems).map(activity => (
                        <div className="col-xxl-3 shadow-sm activity-cell" key={activity.id}>
                            <div className="activity-cell-title">
                                <div className="activity-name">{activity.name}</div>
                                <div className="current-quantity">{activity.currentMember}/{activity.numberMembers}</div>
                            </div>
                            <div>
                                <img className="activity-detail-icon" src={star} alt="Star icon" />
                                <p>{activity.score}</p>
                            </div>
                            <div>
                                <img className="activity-detail-icon" src={location} alt="Location icon" />
                                <p>{activity.location}</p>
                            </div>
                            <div>
                                <img className="activity-detail-icon" src={time} alt="Clock icon" />
                                <p>{activity.time} - {activity.day}</p>
                            </div>
                            <div>
                                <img className="activity-detail-icon" src={profile} alt="Profile icon" />
                                <p>{activity.numberMembers} Sinh viên</p>
                            </div>
                            <Link to={`/activity/${activity.id}`} className="btn btn-primary btn-sm detail-button">
                                Tham gia
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Không có hoạt động đang diễn ra</p>
                )}
            </div>

            {/* Section for Upcoming Activities */}
            <div className="row activity-state-title">
                <div>Sắp diễn ra</div>
                {upExpand ? (
                    <button className="btn btn-sm btn-outline-dark ml-auto" onClick={showLessUpcoming}>
                        Thu gọn
                    </button>
                ) : (
                    <button className="btn btn-sm btn-outline-dark ml-auto" onClick={showMoreUpcoming}>
                        Xem tất cả
                    </button>
                )}
            </div>

            <div className="row activity-row">
                {activities.Upcoming.length > 0 ? (
                    activities.Upcoming.slice(0, upItems).map(activity => (
                        <div className="col-xxl-3 shadow-sm activity-cell" key={activity.id}>
                            <div className="activity-cell-title">
                                <div className="activity-name">{activity.name}</div>
                                <div className="current-quantity">{activity.currentMember}/{activity.numberMembers}</div>
                            </div>
                            <div>
                                <img className="activity-detail-icon" src={star} alt="Star icon" />
                                <p>{activity.score}</p>
                            </div>
                            <div>
                                <img className="activity-detail-icon" src={location} alt="Location icon" />
                                <p>{activity.location}</p>
                            </div>
                            <div>
                                <img className="activity-detail-icon" src={time} alt="Clock icon" />
                                <p>{activity.time} - {activity.day}</p>
                            </div>
                            <div>
                                <img className="activity-detail-icon" src={profile} alt="Profile icon" />
                                <p>{activity.numberMembers} Sinh viên</p>
                            </div>
                            <button className="btn btn-primary btn-sm detail-button">Chi tiết</button>
                        </div>
                    ))
                ) : (
                    <p>Không có hoạt động sắp diễn ra</p>
                )}
            </div>
        </div>
    );
}

export default ActivityListPage;
