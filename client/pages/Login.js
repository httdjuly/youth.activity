import React, { useEffect, useState } from 'react';
import '../bootstrap.min.css'
import '../style/login.css';
import ForgotPassword from '../components/ForgotPassword';
import { useNavigate } from 'react-router-dom';

import gmail from '../image/gmail-logo.jpg';

function Login() {
    const navigate = useNavigate();

    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        fetch('api/auth/check', {
            method: 'GET',
        })
        .then(response => {
            if (response.ok) {
                // Nếu authtoken hợp lệ, chuyển hướng đến trang /
                navigate('/homepage');
            }
        })
        .catch(error => {
            console.error('Lỗi khi kiểm tra authtoken:', error);
        });
    }, []);

    const handleLogin = () => {
        fetch('api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then(response => {
            if (response.ok) {
              // Nếu response có trạng thái 200 OK, chuyển hướng đến trang /
               navigate('/homepage'); // Thay đổi đường dẫn nếu cần
            } else {
              console.error('Kiểm tra lại tên đăng nhập hoặc mật khẩu');
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error('Lỗi khi thực hiện đăng nhập:', error);
          });
    };
    const handleForgotPassword = () => {
        setShowForgotPassword(true);
    };

    return (
        <div class="login-container">
            <div class="body-container">
            <div class="welcome-quote">
                Chào mừng đến với HUHU!
            </div>

            <div class="login-title">
                ĐĂNG NHẬP
            </div>

            <div>
                 <input class="form-control-lg" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  required />
                <input class="form-control-lg" type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)}  required />
                <button type="button" class="btn btn-dark" onClick={handleLogin}>Đăng nhập</button>
            </div>

            <div class="forgot-password">
                <a href="#" onClick={handleForgotPassword}>
                    Quên mật khẩu?
                </a>
            </div>

            <div className="google">
                <div>Hoặc đăng nhập với</div>
                <button class="gmail">
                    <img class="gmail-image" src={gmail}/>
                </button>
            </div>
            {showForgotPassword && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowForgotPassword(false)}>
                            &times;
                        </span>
                        <ForgotPassword />
                    </div>
                </div>
            )}
            </div>
        </div>
        
    );
}

export default Login;