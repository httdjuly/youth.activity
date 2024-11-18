import React from 'react';
import '../style/systemPage.css';
import '../style/UserHistory.css';

function UserHistoryTab({ results }) {
    // Giả sử bạn có một mảng chứa thông tin đăng ký hoạt động
    const activities = [
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Tham gia trồng cây...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' }
        // ...Thêm thông tin sinh viên khác tại đây
    ];
    
    const filteredActivities = results.length > 0 ? activities.filter((activity) => {
        // Lặp qua từng giá trị trong results để kiểm tra
        return activity.name.toLowerCase().includes(results);
    }) : activities;
    return (
        <div class="row outer-box">
            <div class="content-table"> 
                <table class="table history-list">
                    <thead>
                        <tr class="titlerow">
                            <th scope="col-1" className="sticky-header">Mã số</th>
                            <th scope="col-3" className="sticky-header">Tên hoạt động</th>
                            <th scope="col-2" className="sticky-header">Thời gian đăng ký</th>
                            <th scope="col-3" className="sticky-header">Trạng thái</th>
                            <th scope="col-3" className="sticky-header">Kết quả dự kiến</th>
                            <th scope="col-2" className="sticky-header">Kết quả</th>
                        </tr>
                    </thead>  

                    <tbody>
                        {filteredActivities.map((activity, index) => (
                        <tr>
                            <td>{activity.id}</td>
                            <td>{activity.name}</td>
                            <td>{activity.time}</td>
                            <td>{activity.status}</td>
                            <td>{activity.exresult}</td>
                            <td>{activity.result}</td>
                        </tr>
                        ))}
                    </tbody> 
                
                </table>  
            </div>     
        </div>
    );
}

export default UserHistoryTab;
