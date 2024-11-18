import React from 'react';
import '../style/systemPage.css';
import '../style/UserHistory.css';

function OrganizeListTab({ results }) {
    // Giả sử bạn có một mảng chứa thông tin sinh viên
    const organizers = [
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', oname: 'TrucThanhnef', quantity: '5/250', status: 'Sắp diễn ra' },
        { id: 1, name: 'Tham gia trồng cây...', time: '10:28:00 - 7 Th11 2023', oname: 'DoTiennef', quantity: '8/10', status: 'Đang diễn ra' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', oname: 'ThuyTiennef', quantity: '10/10', status: 'Đã kết thúc' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', oname: 'MinhThuannef', quantity: '10/10', status: 'Đã kết thúc' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', oname: 'BaoNgocnef', quantity: '10/10', status: 'Đã kết thúc' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', oname: 'NhatHanef', quantity: '10/10', status: 'Đã hủy' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', oname: 'TrucThanhnef', quantity: '10/10', status: 'Đã hủy' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', oname: 'DoTiennef', quantity: '10/10', status: 'Đã hủy' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', oname: 'ThuyTiennef', quantity: '10/10', status: 'Đã hủy' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', oname: 'MinhThuannef', quantity: '10/10', status: 'Đã hủy' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', oname: 'BaoNgocnef', quantity: '10/10', status: 'Đã hủy' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', oname: 'NhatHanef', quantity: '10/10', status: 'Đã hủy' }
    ];
    const filteredActivities = results.length > 0 ? organizers.filter((organizer) => {
        // Lặp qua từng giá trị trong results để kiểm tra
        return organizer.name.toLowerCase().includes(results);
    }) : organizers;
    return (
        <div class="row outer-box-dark">
            <div class="content-table"> 
                <table class="table history-list">
                    <thead>
                        <tr class="titlerow">
                            <th scope="col-1" className="sticky-header">Mã số</th>
                            <th scope="col-3" className="sticky-header">Tên hoạt động</th>
                            <th scope="col-2" className="sticky-header">Thời gian tạo</th>
                            <th scope="col-3" className="sticky-header">Đơn vị tạo</th>
                            <th scope="col-2" className="sticky-header">Số lượng</th>
                            <th scope="col-3" className="sticky-header">Tình trạng</th>
                        </tr>
                    </thead>  

                    <tbody>
                        {filteredActivities.map((organizer, index) => (
                        <tr>
                            <td>{organizer.id}</td>
                            <td>{organizer.name}</td>
                            <td>{organizer.time}</td>
                            <td>{organizer.oname}</td>
                            <td>{organizer.quantity}</td>
                            <td>{organizer.status}</td>
                        </tr>
                        ))}
                    </tbody> 
                
                </table>  
            </div>     
        </div>
    );
}

export default OrganizeListTab;
