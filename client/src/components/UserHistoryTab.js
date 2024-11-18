import React, { useEffect, useState } from 'react';
import '../style/systemPage.css';
import '../style/UserHistory.css';

function UserHistoryTab() {
    const [activities, setActivities] = useState([]);  // Dữ liệu hoạt động
    const [user, setUser] = useState(null);  // Thông tin người dùng
    const [results, setResults] = useState('');  // Tìm kiếm hoạt động

    // Lấy thông tin người dùng và hoạt động
    useEffect(() => {
        // Lấy thông tin người dùng
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/auth/current-user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setUser(data);  // Cập nhật thông tin người dùng
                    // Giả sử dữ liệu hoạt động đến từ API, thay vì cứng
                    setActivities(data.user.activities);  // Giả sử thông tin hoạt động có trong dữ liệu người dùng
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchUserData();
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() trả về từ 0-11
        const year = date.getFullYear();

        return `${day}-${month}-${year}`; // Trả về ngày theo định dạng dd-mm-yyyy
    };
    const getActivityStatus = (activityDate) => {
        const today = new Date();
        const activityDay = new Date(activityDate);

        // Đặt giờ, phút, giây, mili giây của ngày hôm nay về 00:00 để so sánh chỉ ngày
        today.setHours(0, 0, 0, 0);

        if (activityDay > today) {
            return "Sắp diễn ra";
        } else if (activityDay.toDateString() === today.toDateString()) {
            return "Đang diễn ra";
        } else {
            return "Đã kết thúc";
        }
    };

    return (
        <div className="row outer-box">
            <div className="content-table">
                <table className="table history-list">
                    <thead>
                        <tr className="titlerow">
                            <th scope="col-1" className="sticky-header">Mã số</th>
                            <th scope="col-3" className="sticky-header">Tên hoạt động</th>
                            <th scope="col-2" className="sticky-header">Thời gian diễn ra</th>
                            <th scope="col-3" className="sticky-header">Trạng thái</th>
                            <th scope="col-3" className="sticky-header">Điểm</th>
                            <th scope="col-2" className="sticky-header">Kết quả</th>
                        </tr>
                    </thead>

                    <tbody>
                        {activities.length > 0 ? (
                            activities.map((activity) => (
                                <tr key={activity.id}>
                                    <td>{activity.id}</td>
                                    <td>{activity.name}</td>
                                    <td>{formatDate(activity.day)}</td>
                                    <td>{getActivityStatus(formatDate(activity.day))}</td>
                                    <td>{activity.score}</td>
                                    <td>Chưa có</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">Không có hoạt động nào</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserHistoryTab;
