import React from 'react'
import '../../style/popup.css'
function DeleteActivePopup({ onConfirm }) {
    return (
        <>
        <div class="overplay">
            <div class="popup">
                <p class="popup_title">Bạn chắc chắn xóa hoạt động?</p>
                <div class="popbutton">
                <button class="buttonpopup btn btn-danger" onClick={onConfirm}>Từ chối</button>
                <button class="buttonpopup btn btn-primary"onClick={onConfirm}>Đồng ý</button>
                </div>
            </div>

        </div>
        </>
        
    );
}

export default DeleteActivePopup;