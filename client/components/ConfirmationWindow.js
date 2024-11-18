import React, { useState } from 'react';

function ConfirmationWindow({ onConfirm, onDeny, activityId }) {
    // Hàm gửi yêu cầu DELETE tới API
    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/activities/${activityId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (response.ok) {
                alert('Hoạt động đã được xóa thành công');
                onConfirm(); // Gọi hàm onConfirm để cập nhật UI sau khi xóa thành công
            } else {
                const error = await response.json();
                alert(`Lỗi: ${error.message}`);
            }
        } catch (error) {
            console.error('Lỗi khi xóa hoạt động:', error);
            alert('Có lỗi xảy ra khi xóa hoạt động');
        }
    };

    return (
        <div>
            <p>Bạn có chắc chắn muốn xóa hoạt động này?</p>
            <button onClick={handleDelete}>Đồng ý</button>
            <button onClick={onDeny}>Từ chối</button>
        </div>
    );
}

export default ConfirmationWindow;
