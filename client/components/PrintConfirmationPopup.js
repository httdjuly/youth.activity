import React from 'react'
import '../style/popup.css'
function PrintConfirmationPopup({ onConfirm }) {
    return (
        <>
        <div class="overplay">
            <div class="popup">
                <p class="popup_title">Bạn chắc chắn muốn in thống kê?</p>
                <div class="popbutton">
                <button class="btn btn-danger cancel-button-confirm " onClick={onConfirm}>Huỷ</button>
                <button class="btn btn-primary print-button-confirm " onClick={onConfirm}>In</button>
                </div>
            </div>

        </div>
        </>
        
    );
}

export default PrintConfirmationPopup;