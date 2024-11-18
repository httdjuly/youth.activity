import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../style/act_detail.css';
import '../style/style.css';
import '../bootstrap.min.css';
import ApproveActivePopUp from '../components/ActiviteManager/ApproveActive';
import DeleteActivePopup from '../components/ActiviteManager/DeleteActivePopUp';
import UpdateInforPopUp from '../components/ActiviteManager/UpdateInforPopUp';
import RegisterActivityConfirmationPopup from '../components/ActivityDetail/RegisterConfirmation';
import ActivityContentTab from '../components/ActivityDetail/ActivityContentTab';
import StudentListTab from '../components/ActivityDetail/StudentListTab';
import ActivityForumTab from '../components/ActivityDetail/ActivityForumTab';
import AttendanceTab from '../components/ActivityDetail/AttendanceTab';
import leftArrow from '../image/left-arrow.png';
import rightArrow from '../image/right-arrow.png';
import user from '../image/user.png';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function ActivityDetailPage() {
    let { id } = useParams();

    const [activityData, setActivityData] = useState({
        id: '',
        name: '',
        day: '',
        time: '',
        location: '',
        description: '',
        criteria: '',
        numberMembers: 0,
        currentNumber: 0,
        score: 0,
        host: {
            username: '',
            role: '',
        },
    });
    const [studentsData, setStudentsData] = useState([]);
    const [role, setRole] = useState('');

    useEffect(() => {
        fetch('/api/auth/role', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setRole(data.role);
            })
            .catch((error) => console.error('Error fetching role:', error));

        fetch(`/api/activities/${id}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setActivityData(data);
                setStudentsData(data.attendance);
            })
            .catch((error) => console.error('Error fetching activity data:', error));

        fetch(`/api/attendance/${id}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
            })
            .catch((error) => console.error('Error fetching attendance data:', error));
    }, [id]);

    const [showApproveActive, setShowApproveActive] = useState(false);
    const [showDeleteActive, setShowDeleteActive] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showUpdateActive, setShowUpdateActive] = useState(false);

    const handleConfirmRegistration = () => {
        fetch(`/api/activities/${id}/attend`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ activity_id: id }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then((data) => {
                console.log('Registration Successful', data);
            })
            .catch((error) => {
                console.error('Registration failed', error);
            });

        setShowConfirmation(false);
    };

    const getUserRoleName = (role) => {
        switch (role) {
            case 'admin':
                return 'Admin';
            case 'student':
                return 'Sinh viên';
            case 'manager':
                return 'Tổ văn phòng';
            default:
                return 'Khách';
        }
    };

    const renderButton = () => {
        return (
            <>
                <div className="toprow row">
                    <div className="col">
                        <button className="btn btn-primary arrow-button-container">
                            <img className="arrow-icon" src={leftArrow} alt="Left Arrow" />
                        </button>
                        <button className="btn btn-primary arrow-button-container">
                            <img className="arrow-icon" src={rightArrow} alt="Right Arrow" />
                        </button>
                    </div>

                    <Dropdown as={ButtonGroup}>
                        <Button variant="user-account account-icon-container">
                            <div className="user-account account-icon-container">
                                <img className="user-icon" src={user} alt="User Icon" />

                                <div className="user-infor">
                                    <div className="user-name">{activityData.host.name}</div>
                                    <div className="user-role">{getUserRoleName(role)}</div>
                                </div>
                            </div>
                        </Button>

                        <Dropdown.Toggle split variant="user-account account-icon-container" id="drop-split-basic" />

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Cài đặt tài khoản</Dropdown.Item>
                            <Dropdown.Item href="#">Chỉnh sửa thông tin</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="row acttitle">
                    <div className="r2c1 col-sm col-12">
                        <h1 className="font-size-sm">{activityData.name}</h1>
                    </div>
                    <div className="r2c2">
                        <div className="actnumber">
                            {activityData.currentNumber}/{activityData.numberOfPeople}
                        </div>
                        <SelectButton />
                    </div>
                </div>
                <TabComponent />
            </>
        );
    };

    const TabComponent = () => {
        const [currentTab, setCurrentTab] = useState('activityContent');

        const renderTabContent = (tab) => {
            switch (tab) {
                case 'activityContent':
                    return <ActivityContentTab activityData={activityData} />;
                case 'studentList':
                    return <StudentListTab dataFromParent={studentsData} />;
                case 'activityForum':
                    return <ActivityForumTab />;
                case 'attendance':
                    return <AttendanceTab />;
                default:
                    return null;
            }
        };

        return (
            <div className="actlayout">
                <div className="row actbutton">
                    <button
                        type="button"
                        className={`detailbutton btn font-size-sm ${currentTab === 'activityContent' ? 'active' : 'btn-outline-primary'}`}
                        onClick={() => setCurrentTab('activityContent')}
                    >
                        Thông tin
                    </button>
                    <button
                        type="button"
                        className={`detailbutton btn font-size-sm ${currentTab === 'studentList' ? 'active' : 'btn-outline-primary'}`}
                        onClick={() => setCurrentTab('studentList')}
                    >
                        Danh sách
                    </button>
                    <button
                        type="button"
                        className={`detailbutton btn font-size-sm ${currentTab === 'activityForum' ? 'active' : 'btn-outline-primary'}`}
                        onClick={() => setCurrentTab('activityForum')}
                    >
                        Thông báo
                    </button>
                    {role === 'manager' && (
                        <button
                            type="button"
                            className={`detailbutton btn ${currentTab === 'attendance' ? 'active' : 'btn-outline-primary'}`}
                            onClick={() => setCurrentTab('attendance')}
                        >
                            Điểm danh
                        </button>
                    )}
                </div>
                {renderTabContent(currentTab)}
            </div>
        );
    };

    const SelectButton = () => {
        if (role === 'student') {
            return (
                <>
                    <button type="button" className="actresig-sinhvien btn" onClick={() => setShowConfirmation(true)}>
                        Tham gia
                    </button>
                    {showConfirmation && <RegisterActivityConfirmationPopup onConfirm={handleConfirmRegistration} />}
                </>
            );
        } else if (role === 'admin') {
            return (
                <>
                    <button type="button" className="actresig-admin btn" onClick={() => setShowUpdateActive(true)}>
                        Cập nhật
                    </button>
                    {showUpdateActive && <UpdateInforPopUp />}
                </>
            );
        } else {
            return (
                <>
                    <button type="button" className="actresig-admin btn" onClick={() => setShowApproveActive(true)}>
                        Duyệt
                    </button>
                    {showApproveActive && <ApproveActivePopUp />}
                    <button type="button" className="actresig-tvp btn" onClick={() => setShowDeleteActive(true)}>
                        Xóa
                    </button>
                    {showDeleteActive && <DeleteActivePopup />}
                </>
            );
        }
    };

    return <>{renderButton()}</>;
}

export default ActivityDetailPage;
