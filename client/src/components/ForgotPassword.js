import React, { useState } from 'react';

function ForgotPassword() {
    const [isSent, setIsSent] = useState(false);

    const handleForgotPassword = () => {
        // Các bước xử lý lấy lại mật khẩu ở đây

        // Sau khi xử lý thành công, chuyển sang trạng thái đã gửi
        setIsSent(true);
    };

    return (
        <div>
            {isSent ? (
                <div>
                    <h2>Yêu cầu lấy lại mật khẩu đã gửi qua mail...</h2>
                </div>
            ) : (
                <div>
                    <h2>Quên mật khẩu</h2>
                    <label>Tên tài khoản:</label>
                    <input type='text' placeholder='Username' required />
                    <button onClick={handleForgotPassword}>Lấy lại mật khẩu</button>
                </div>
            )}
        </div>
    );
}

export default ForgotPassword;
