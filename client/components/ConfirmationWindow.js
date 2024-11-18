import React, { useState } from 'react';

function ConfirmationWindow({ onConfirm, onDeny }) {
    return (
        <div>
            <p>Bạn có chắc chắn muốn xóa hoạt động không?</p>
            <button onClick={onConfirm}>Đồng ý</button>
            <button onClick={onDeny}>Từ chối</button>
        </div>
    );
}

export default ConfirmationWindow;
