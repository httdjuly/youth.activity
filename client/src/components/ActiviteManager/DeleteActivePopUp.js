import React from 'react';

function DeleteActivePopup({ onDelete, setShowDeleteActive }) {
    return (
        <div className="overplay">
            <div className="popup">
                <div className="popup-title">
                    <h2>Xóa Hoạt Động</h2>
                </div>
                <div className="popup-body">
                    <p>Bạn có chắc chắn muốn xóa hoạt động này không?</p>
                </div>
                <div className="popbutton">
                    <button onClick={() => onDelete()} className="buttonpopup btn btn-danger">
                        Xóa
                    </button>
                    {/* You can manage closing the popup in the parent component */}
                    <button onClick={() => setShowDeleteActive(false)} className="buttonpopup btn btn-primary">
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteActivePopup;
